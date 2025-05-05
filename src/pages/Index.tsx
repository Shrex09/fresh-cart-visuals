
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import ShoppingList from '@/components/ShoppingList';
import Cart from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';
import { InventoryProvider } from '@/context/InventoryContext';
import { categories } from '@/data/products';

const Index = () => {
  return (
    <InventoryProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Cart />
          
          <main>
            <Hero />
            
            <section className="py-10">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {categories.map(category => (
                    <a 
                      key={category.id} 
                      href={`#${category.name}`} 
                      className="relative overflow-hidden rounded-lg shadow-md group"
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                      <img 
                        src={`${category.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=70`} 
                        alt={category.name} 
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <h3 className="text-white font-semibold text-lg drop-shadow-md">{category.name}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Featured Products Section */}
            <section className="py-10 bg-gradient-to-r from-green-50 to-green-100">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Featured Products</h2>
                  <div className="text-fresh-green font-medium cursor-pointer">View All</div>
                </div>
                
                {/* We will show all promoted products here */}
                <CategorySection categoryName="Fruits" />
              </div>
            </section>
            
            {/* Category Sections */}
            {categories.map(category => (
              <CategorySection key={category.id} categoryName={category.name} />
            ))}
            
            {/* Shopping List Section */}
            <section className="py-10 bg-gradient-to-r from-green-50 to-green-100">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Personalized Shopping Lists</h2>
                </div>
                
                <ShoppingList />
              </div>
            </section>
            
            {/* Newsletter Section */}
            <section className="py-12 bg-fresh-green text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Updated with Fresh Deals</h2>
                <p className="mb-6 max-w-md mx-auto">Subscribe to our newsletter for weekly updates on new products, seasonal deals, and exclusive offers.</p>
                
                <div className="flex max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 py-2 px-4 rounded-l-md text-gray-800"
                  />
                  <button className="bg-warm-orange hover:bg-warm-orange/90 text-white py-2 px-6 rounded-r-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>
          </main>
          
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">FreshCart</h3>
                  <p className="text-gray-300 text-sm">
                    We deliver the freshest groceries right to your doorstep. Shop local, eat fresh.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#" className="hover:text-white">Shop</a></li>
                    <li><a href="#" className="hover:text-white">My Lists</a></li>
                    <li><a href="#" className="hover:text-white">Account</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Categories</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {categories.map(category => (
                      <li key={category.id}>
                        <a href={`#${category.name}`} className="hover:text-white">{category.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Contact Us</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>123 Grocery Lane</li>
                    <li>Fresh City, FC 12345</li>
                    <li>+1 (555) 123-4567</li>
                    <li>hello@freshcart.com</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
                © {new Date().getFullYear()} FreshCart. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </InventoryProvider>
  );
};

export default Index;
