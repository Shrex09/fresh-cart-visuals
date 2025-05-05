
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';
import { Product, products as initialProducts } from '@/data/products';

interface InventoryContextType {
  products: Product[];
  updateInventory: (productId: string, newStock: number) => void;
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
  filterProducts: (query: string) => Product[];
}

const InventoryContext = createContext<InventoryContextType>({
  products: [],
  updateInventory: () => {},
  getProductById: () => undefined,
  getProductsByCategory: () => [],
  filterProducts: () => [],
});

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Simulate real-time inventory updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update stock of a random product
      const randomProductIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomProductIndex];
      
      // 30% chance of stock change
      if (Math.random() > 0.7) {
        const stockChange = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const newStock = Math.max(0, Math.min(100, randomProduct.stock + stockChange));
        
        if (newStock !== randomProduct.stock) {
          setProducts(prev => 
            prev.map(product => 
              product.id === randomProduct.id 
                ? { ...product, stock: newStock }
                : product
            )
          );
          
          // Show low stock notification only when decreasing below threshold
          if (newStock < 5 && randomProduct.stock >= 5) {
            toast(`Low stock alert: ${randomProduct.name}`, {
              description: `Only ${newStock} left in stock!`
            });
          }
        }
      }
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [products]);

  const updateInventory = (productId: string, newStock: number) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === productId 
          ? { ...product, stock: newStock }
          : product
      )
    );
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  const filterProducts = (query: string) => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  };

  return (
    <InventoryContext.Provider value={{
      products,
      updateInventory,
      getProductById,
      getProductsByCategory,
      filterProducts,
    }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
