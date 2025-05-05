
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGZydWl0cyUyMHZlZ2V0YWJsZXMlMjBwYXR0ZXJufHwwfHx8fDE3MTU1NDcyOTJ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fresh Food, <br />
              <span className="text-fresh-green">Delivered to You</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Shop the freshest ingredients from local farms and artisans.
              Enjoy same-day delivery and real-time inventory updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white py-2 px-6 rounded-full text-lg">
                Shop Now
              </Button>
              <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green/10 py-2 px-6 rounded-full text-lg flex items-center">
                Browse Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative h-64 md:h-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-warm-orange rounded-full -mt-10 -mr-10 opacity-20" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-fresh-green rounded-full -mb-5 -ml-5 opacity-20" />
            
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE1NTQ3MzI3fA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Fresh produce" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="inline-block bg-warm-orange text-white text-xs uppercase font-bold tracking-wide px-3 py-1 rounded-full mb-2">
                  Today's Special
                </div>
                <h3 className="text-white text-lg font-semibold">30% Off Fresh Organic Produce</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
              <svg className="w-6 h-6 text-fresh-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium">Same-Day Delivery</h3>
          </div>
          
          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
              <svg className="w-6 h-6 text-fresh-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="font-medium">Locally Sourced</h3>
          </div>
          
          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
              <svg className="w-6 h-6 text-fresh-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-medium">Quality Guaranteed</h3>
          </div>
          
          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
              <svg className="w-6 h-6 text-fresh-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-medium">Personalized Lists</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
