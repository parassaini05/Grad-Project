"use client";

import React from 'react';
import { useWishlist } from './WishlistContext';

export default function Navbar() {
  const { items } = useWishlist();

  return (
    <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-2xl tracking-tighter" style={{ color: '#FF3F6C' }}>Myntra</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-10">
            {['MEN', 'WOMEN', 'KIDS', 'HOME & LIVING', 'BEAUTY', 'STUDIO'].map((item) => (
              <a key={item} href="#" className="text-gray-800 font-semibold text-sm hover:text-pink-500 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search for products, brands and more</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input id="search" className="block w-full pl-10 pr-3 py-2 border border-gray-100 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-pink-500 sm:text-sm" placeholder="Search for products, brands and more" type="search" />
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center ml-6 space-x-6">
            <div className="flex flex-col items-center cursor-pointer hover:text-pink-500 group">
              <svg className="w-6 h-6 text-gray-700 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span className="text-[10px] font-semibold mt-1">Profile</span>
            </div>
            
            {/* Interactive Wishlist Icon */}
            <div className="flex flex-col items-center cursor-pointer hover:text-pink-500 group">
              <div className="relative">
                <svg className="w-6 h-6 text-gray-700 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {items.length}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold mt-1 text-pink-500">Wishlist</span>
            </div>
            
            <div className="flex flex-col items-center cursor-pointer hover:text-pink-500 group">
              <svg className="w-6 h-6 text-gray-700 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span className="text-[10px] font-semibold mt-1">Bag</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
