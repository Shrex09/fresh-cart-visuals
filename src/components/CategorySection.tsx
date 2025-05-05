
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useInventory } from '@/context/InventoryContext';
import { categories } from '@/data/products';

interface CategorySectionProps {
  categoryName: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categoryName }) => {
  const { getProductsByCategory } = useInventory();
  const products = getProductsByCategory(categoryName);
  
  // Find the category object to get color
  const category = categories.find(cat => cat.name === categoryName);
  const categoryColor = category?.color || 'bg-gray-200';
  
  return (
    <section id={categoryName} className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className={`w-2 h-8 ${categoryColor} rounded-full mr-3`}></div>
            <h2 className="text-2xl font-bold text-gray-800">{categoryName}</h2>
          </div>
          
          <Button variant="ghost" className="text-fresh-green hover:text-fresh-green/80 flex items-center">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="product-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
