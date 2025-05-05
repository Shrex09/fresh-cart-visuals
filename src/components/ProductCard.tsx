
import React from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showCategory = false }) => {
  const { addToCart, items, updateQuantity } = useCart();
  
  const cartItem = items.find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  
  const handleAddToCart = () => {
    addToCart(product, 1);
  };
  
  const incrementQuantity = () => {
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    } else {
      addToCart(product, 1);
    }
  };
  
  const decrementQuantity = () => {
    if (cartItem && cartItem.quantity > 0) {
      updateQuantity(product.id, cartItem.quantity - 1);
    }
  };
  
  const stockStatus = () => {
    if (product.stock === 0) return { text: "Out of Stock", class: "bg-red-500" };
    if (product.stock < 5) return { text: "Low Stock", class: "bg-amber-500" };
    return { text: "In Stock", class: "bg-green-500" };
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        {product.isPromoted && (
          <div className="absolute top-2 left-2 z-10">
            <Badge className="bg-warm-orange text-white">Special Offer</Badge>
          </div>
        )}
        
        <div className="absolute top-2 right-2 z-10">
          <Badge className={`text-white ${stockStatus().class}`}>{stockStatus().text}</Badge>
        </div>
        
        <img 
          src={`${product.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80`}
          alt={product.name}
          className="w-full h-full object-cover transition-all hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        {showCategory && (
          <span className="text-xs font-medium text-gray-500 mb-1 block">{product.category}</span>
        )}
        
        <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
        
        <div className="flex justify-between items-center mb-3">
          <div>
            <span className="font-bold text-lg text-fresh-green">${product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500 ml-1">/ {product.unit}</span>
          </div>
          
          <div className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
          </div>
        </div>
        
        <div className="mt-3">
          {quantity === 0 ? (
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-fresh-green hover:bg-fresh-green/90 text-white flex items-center justify-center"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-gray-100 rounded-md p-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={decrementQuantity}
                className="h-8 w-8 rounded-full"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <span className="font-medium text-gray-800">{quantity}</span>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={incrementQuantity}
                className="h-8 w-8 rounded-full"
                disabled={product.stock === 0}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
