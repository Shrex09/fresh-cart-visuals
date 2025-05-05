
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2, Save } from 'lucide-react';

interface ShoppingListItem {
  id: string;
  name: string;
  completed: boolean;
}

const ShoppingList = () => {
  const [lists, setLists] = useState<{ id: string; name: string; items: ShoppingListItem[] }[]>([
    {
      id: '1',
      name: 'Weekly Groceries',
      items: [
        { id: '1-1', name: 'Milk', completed: false },
        { id: '1-2', name: 'Eggs', completed: true },
        { id: '1-3', name: 'Bread', completed: false },
      ],
    },
  ]);
  
  const [selectedListId, setSelectedListId] = useState(lists[0]?.id || '');
  const [newItemName, setNewItemName] = useState('');
  const [newListName, setNewListName] = useState('');
  const [isAddingList, setIsAddingList] = useState(false);
  
  const selectedList = lists.find(list => list.id === selectedListId);
  
  const handleAddItem = () => {
    if (!newItemName.trim() || !selectedListId) return;
    
    setLists(prevLists => 
      prevLists.map(list => 
        list.id === selectedListId 
          ? {
              ...list,
              items: [
                ...list.items,
                { id: Date.now().toString(), name: newItemName, completed: false }
              ]
            }
          : list
      )
    );
    
    setNewItemName('');
  };
  
  const handleToggleItem = (itemId: string) => {
    setLists(prevLists => 
      prevLists.map(list => 
        list.id === selectedListId 
          ? {
              ...list,
              items: list.items.map(item => 
                item.id === itemId 
                  ? { ...item, completed: !item.completed }
                  : item
              )
            }
          : list
      )
    );
  };
  
  const handleDeleteItem = (itemId: string) => {
    setLists(prevLists => 
      prevLists.map(list => 
        list.id === selectedListId 
          ? {
              ...list,
              items: list.items.filter(item => item.id !== itemId)
            }
          : list
      )
    );
  };
  
  const handleAddList = () => {
    if (!newListName.trim()) return;
    
    const newList = {
      id: Date.now().toString(),
      name: newListName,
      items: [],
    };
    
    setLists([...lists, newList]);
    setSelectedListId(newList.id);
    setNewListName('');
    setIsAddingList(false);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Shopping Lists</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Lists Section */}
        <div className="w-full md:w-1/3 border-r pr-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">My Lists</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsAddingList(!isAddingList)}
              className="text-fresh-green"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {isAddingList && (
            <div className="flex mb-4">
              <Input 
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="List name"
                className="mr-2"
              />
              <Button onClick={handleAddList} size="sm">
                <Save className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          <div className="space-y-2">
            {lists.map(list => (
              <div 
                key={list.id} 
                className={`p-2 rounded cursor-pointer ${
                  selectedListId === list.id ? 'bg-green-100 border-l-4 border-fresh-green' : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedListId(list.id)}
              >
                <div className="font-medium">{list.name}</div>
                <div className="text-xs text-gray-500">
                  {list.items.length} items ({list.items.filter(i => i.completed).length} completed)
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Items Section */}
        <div className="w-full md:w-2/3">
          {selectedList ? (
            <>
              <h3 className="font-bold text-lg mb-4">{selectedList.name}</h3>
              
              <div className="flex mb-4">
                <Input
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Add new item..."
                  className="mr-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddItem();
                  }}
                />
                <Button onClick={handleAddItem}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              
              <div className="space-y-2 mt-4">
                {selectedList.items.map(item => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-3 border rounded hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Checkbox 
                        id={`item-${item.id}`}
                        checked={item.completed}
                        onCheckedChange={() => handleToggleItem(item.id)}
                        className="mr-3"
                      />
                      <label 
                        htmlFor={`item-${item.id}`}
                        className={`cursor-pointer ${item.completed ? 'line-through text-gray-400' : ''}`}
                      >
                        {item.name}
                      </label>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {selectedList.items.length === 0 && (
                  <div className="text-center py-6 text-gray-400">
                    No items in this list. Add some above!
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-6 text-gray-400">
              Select a list or create a new one
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
