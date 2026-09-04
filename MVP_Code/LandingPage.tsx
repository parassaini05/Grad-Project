"use client";

import React from 'react';
import Navbar from './Navbar';
import { useWishlist, Product } from './WishlistContext';

export default function LandingPage() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Mock Products Data
  const products: Product[] = [
    {
      id: 'prod_1',
      brand: 'EUME',
      name: 'Commute Nylon Messenger Laptop Bag',
      price: '₹3,999',
      originalPrice: '₹5,999',
      discount: '(33% OFF)',
      image: '/api/placeholder/400/500'
    },
    {
      id: 'prod_2',
      brand: 'H&M',
      name: 'Oversized Cotton T-shirt',
      price: '₹799',
      originalPrice: '₹1,499',
      discount: '(46% OFF)',
      image: '/api/placeholder/400/501'
    },
    {
      id: 'prod_3',
      brand: 'Levis',
      name: 'Men Slim Fit Jeans',
      price: '₹1,899',
      originalPrice: '₹3,299',
      discount: '(42% OFF)',
      image: '/api/placeholder/400/502'
    },
    {
      id: 'prod_4',
      brand: 'PUMA',
      name: 'Unisex Running Shoes',
      price: '₹2,499',
      originalPrice: '₹4,999',
      discount: '(50% OFF)',
      image: '/api/placeholder/400/503'
    }
  ];

  const handleWishlistClick = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="w-full bg-pink-100 h-64 md:h-96 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="text-center z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-2 tracking-tight">END OF REASON SALE</h1>
          <p className="text-xl md:text-2xl font-bold text-gray-800">50-80% OFF on Top Brands</p>
          <button className="mt-6 px-8 py-3 bg-pink-500 text-white font-bold rounded-sm shadow-lg hover:bg-pink-600 transition">SHOP NOW</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-widest text-center">Trending Right Now</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => {
            const isSaved = isInWishlist(product.id);
            return (
              <div key={product.id} className="group border border-gray-200 rounded-sm hover:shadow-xl transition-shadow relative">
                {/* Interactive Heart Icon */}
                <div 
                  onClick={() => handleWishlistClick(product)}
                  className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md cursor-pointer hover:bg-pink-50 z-10"
                >
                  <svg 
                    className={`w-5 h-5 transition-colors ${isSaved ? 'text-pink-500 fill-pink-500' : 'text-gray-400 hover:text-pink-500'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                
                {/* Product Image */}
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                {/* Product Details */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{product.brand}</h3>
                  <p className="text-gray-500 text-sm truncate">{product.name}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="text-sm text-orange-400 font-semibold">{product.discount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
