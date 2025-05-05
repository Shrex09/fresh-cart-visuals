
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-fresh-green font-bold text-2xl">Fresh</span>
            <span className="text-warm-orange font-bold text-2xl">Cart</span>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 mx-8">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="bg-transparent border-none outline-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-fresh-green transition-colors">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {categories.map(category => (
                    <a 
                      key={category.id} 
                      href={`#${category.name}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/lists" className="text-gray-700 hover:text-fresh-green transition-colors">
              My Lists
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-fresh-green transition-colors">
              Account
            </Link>
            <button 
              className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fresh-green text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-cart-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleCartClick}
              className="relative p-2 mr-2"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fresh-green text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="bg-transparent border-none outline-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-3">
            <div className="py-2 border-b border-gray-200">
              <span className="font-semibold mb-2 block">Categories</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <a 
                    key={category.id} 
                    href={`#${category.name}`} 
                    className="text-sm text-gray-600 hover:text-fresh-green transition-colors block py-1"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
            <Link 
              to="/lists" 
              className="py-2 text-gray-700 hover:text-fresh-green transition-colors border-b border-gray-200"
              onClick={toggleMenu}
            >
              My Lists
            </Link>
            <Link 
              to="/account" 
              className="py-2 text-gray-700 hover:text-fresh-green transition-colors"
              onClick={toggleMenu}
            >
              Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
