import React from 'react';
import ValidationHub from './ValidationHub';
import { Product, useWishlist } from './WishlistContext';

interface WishlistCardProps {
  product: Product;
}

export default function WishlistCard({ product }: WishlistCardProps) {
  const { removeFromWishlist } = useWishlist();

  return (
    <div className="relative flex flex-col border border-gray-200 rounded-sm overflow-hidden bg-white hover:shadow-lg transition-shadow">
      
      {/* Delete button (X) */}
      <div 
        onClick={() => removeFromWishlist(product.id)}
        className="absolute top-2 right-2 bg-white bg-opacity-80 p-1.5 rounded-full shadow-sm cursor-pointer hover:bg-gray-100 z-10"
      >
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </div>

      {/* Product Image */}
      <div className="h-64 bg-gray-100 relative group overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {/* Mock Similar Products Button on Hover */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
           <button className="bg-white/90 rounded-full p-2 shadow-md">
             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
           </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-gray-900 text-sm">{product.brand}</h3>
        <p className="text-gray-500 text-xs mt-1 truncate">{product.name}</p>
        
        <div className="mt-2 flex items-center space-x-2">
          <span className="font-bold text-gray-900 text-sm">{product.price}</span>
          <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
          <span className="text-[10px] text-orange-400 font-bold border border-orange-200 px-1 py-0.5 rounded-sm bg-orange-50">{product.discount}</span>
        </div>
      </div>

      {/* THE MVP INTERVENTION: Validation Hub */}
      <ValidationHub />

      {/* Primary Action Button */}
      <button className="w-full py-3.5 bg-white border-t border-gray-200 text-pink-500 font-bold text-sm hover:bg-pink-500 hover:text-white transition-colors uppercase tracking-wide">
        MOVE TO BAG
      </button>

    </div>
  );
}
