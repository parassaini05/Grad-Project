import React, { useState } from 'react';
import { Heart, ChevronLeft, ShoppingBag, AlertTriangle } from 'lucide-react';

export default function SimulatorView() {
  const [step, setStep] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const handleWishlist = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="flex-1 bg-slate-100 min-h-screen p-8 flex items-center justify-center">
      <div className="w-[375px] h-[812px] bg-white rounded-[3rem] border-8 border-slate-900 shadow-2xl relative overflow-hidden flex flex-col">
        {/* Status Bar Mock */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 bg-white z-10">
          <span className="text-xs font-bold">9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Step 1: Product Page */}
        {step === 1 && (
          <div className="flex-1 overflow-y-auto animate-fade-in pb-20">
            <div className="w-full h-96 bg-pink-100 relative">
              {/* Mock Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-pink-300 font-bold text-2xl">
                Product Image
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800">Floral Summer Maxi Dress</h2>
              <p className="text-sm text-slate-500 mt-1">Brand Name</p>
              <div className="text-2xl font-black text-slate-900 mt-4">₹ 1,499</div>
              <div className="text-xs text-green-600 font-bold mt-1">Inclusive of all taxes</div>
              
              <div className="mt-8 flex gap-3">
                <button 
                  onClick={handleWishlist}
                  className="flex-1 py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-700 flex justify-center items-center gap-2 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                >
                  <Heart size={18} className={showToast ? 'fill-pink-500 text-pink-500' : ''} />
                  WISHLIST
                </button>
                <button className="flex-1 py-3 bg-pink-500 text-white rounded-xl font-bold">
                  BUY NOW
                </button>
              </div>
            </div>
            {/* Toast */}
            {showToast && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
                Added to Wishlist!
              </div>
            )}
          </div>
        )}

        {/* Step 2: Wishlist Page */}
        {step === 2 && (
          <div className="flex-1 flex flex-col animate-fade-in">
            <div className="p-4 border-b border-slate-100 flex items-center gap-4">
              <ChevronLeft className="text-slate-600 cursor-pointer" onClick={() => setStep(1)} />
              <h2 className="font-bold text-lg text-slate-800">My Wishlist</h2>
            </div>
            <div className="p-4 flex-1 bg-slate-50">
              <div className="bg-white p-4 rounded-2xl shadow-sm flex gap-4">
                <div className="w-24 h-32 bg-pink-100 rounded-lg shrink-0"></div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-sm text-slate-800 line-clamp-1">Floral Summer Maxi Dress</h3>
                  <p className="text-xs text-slate-500 mt-1">Size: M</p>
                  <p className="font-bold text-slate-900 mt-2">₹ 1,499</p>
                  <button 
                    onClick={() => setStep(3)}
                    className="mt-auto py-2 px-4 bg-pink-50 text-pink-600 font-bold text-xs rounded-lg border border-pink-100"
                  >
                    MOVE TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Cart / Friction Point */}
        {step === 3 && (
          <div className="flex-1 flex flex-col animate-fade-in relative">
            <div className="p-4 border-b border-slate-100 flex items-center gap-4">
              <ChevronLeft className="text-slate-600 cursor-pointer" onClick={() => setStep(2)} />
              <h2 className="font-bold text-lg text-slate-800">Bag</h2>
            </div>
            
            <div className="p-4 flex-1 bg-slate-50 overflow-y-auto pb-32">
              <div className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 mb-4">
                <div className="w-20 h-24 bg-pink-100 rounded-lg shrink-0"></div>
                <div>
                  <h3 className="font-bold text-sm text-slate-800 line-clamp-1">Floral Summer Dress</h3>
                  <p className="font-bold text-slate-900 mt-1">₹ 1,499</p>
                </div>
              </div>

              {/* Friction Point Section */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-red-200 relative">
                {/* AI Tooltip */}
                <div className="absolute -left-32 top-4 w-64 bg-indigo-600 text-white p-3 rounded-xl shadow-xl text-xs z-20">
                  <div className="font-bold mb-1 flex items-center gap-1"><AlertTriangle size={14}/> AI Insight: Trust Deficit</div>
                  61.1% of users abandon here. Ambiguous policies trigger post-purchase anxiety.
                  <div className="absolute right-[-6px] top-4 w-3 h-3 bg-indigo-600 rotate-45"></div>
                </div>

                <h4 className="font-bold text-slate-800 text-sm mb-3">Delivery & Returns</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2 bg-red-50 p-2 rounded relative overflow-hidden group">
                    <div className="absolute inset-0 bg-red-100/50 animate-pulse"></div>
                    <ShoppingBag size={16} className="text-slate-500 mt-0.5 relative z-10" />
                    <div className="relative z-10">
                      <p className="text-xs font-bold text-slate-700">Estimated Delivery</p>
                      <p className="text-xs text-slate-500">10-20 Business Days. Subject to courier availability.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-red-50 p-2 rounded relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-100/50 animate-pulse"></div>
                    <RefreshCw size={16} className="text-slate-500 mt-0.5 relative z-10" />
                    <div className="relative z-10">
                      <p className="text-xs font-bold text-slate-700">Return Policy</p>
                      <p className="text-xs text-slate-500">Subject to seller approval. Restocking fee may apply.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Checkout Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-slate-700">Total</span>
                <span className="font-black text-xl text-slate-900">₹ 1,499</span>
              </div>
              <button className="w-full py-4 bg-pink-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-pink-500/30">
                PLACE ORDER
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
