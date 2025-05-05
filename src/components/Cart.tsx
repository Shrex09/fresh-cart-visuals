
import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-xl flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2 text-fresh-green" />
            <h2 className="font-bold text-lg">Your Cart ({totalItems})</h2>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsCartOpen(false)}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex border rounded-lg p-3 relative">
                  <img 
                    src={`${item.product.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=70`} 
                    alt={item.product.name} 
                    className="w-20 h-20 rounded object-cover mr-3"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-2">
                      ${item.product.price.toFixed(2)} / {item.product.unit}
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center bg-gray-100 rounded-md">
                        <Button
                          variant="ghost" 
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                          className="h-8 w-8 rounded-full"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center">{item.quantity}</span>
                        
                        <Button
                          variant="ghost" 
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-full"
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-2 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-4">Add some items to your cart to get started</p>
              <Button 
                onClick={() => setIsCartOpen(false)}
                className="bg-fresh-green hover:bg-fresh-green/90 text-white"
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">{totalPrice >= 50 ? 'FREE' : '$4.99'}</span>
            </div>
            
            <div className="flex justify-between mb-6">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg">
                ${(totalPrice + (totalPrice >= 50 ? 0 : 4.99)).toFixed(2)}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="border-gray-300"
              >
                Clear Cart
              </Button>
              
              <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
