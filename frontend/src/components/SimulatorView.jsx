import React, { useState, useEffect } from 'react';

export default function SimulatorView() {
  const [simulatorLogs, setSimulatorLogs] = useState([]);

  useEffect(() => {
    setSimulatorLogs([]);
    let timeouts = [];
    
    timeouts.push(setTimeout(() => setSimulatorLogs(prev => [...prev, "> User added 'Floral Dress' to Wishlist"]), 1000));
    timeouts.push(setTimeout(() => setSimulatorLogs(prev => [...prev, "> Analyzing context..."]), 2500));
    timeouts.push(setTimeout(() => setSimulatorLogs(prev => [...prev, "> [WARNING] High probability of cart abandonment detected."]), 4000));
    timeouts.push(setTimeout(() => setSimulatorLogs(prev => [...prev, "> [AI INSIGHT] Flagged as 'Trust Deficit'."]), 5500));
    
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-fade-in h-full">
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">User Journey Simulator</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 h-full max-h-[700px]">
        {/* Left Side: Mobile Mockup */}
        <div className="flex-1 flex justify-center items-center p-4">
          <div className="w-[375px] h-[650px] bg-white rounded-[40px] shadow-2xl border-[8px] border-slate-900 overflow-hidden relative flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-xl z-10"></div>
            
            {/* App Header */}
            <div className="pt-10 pb-4 px-4 border-b flex justify-between items-center bg-white sticky top-0 z-0">
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="font-bold text-lg">Bag</span>
              <span className="material-symbols-outlined">favorite_border</span>
            </div>
            
            {/* App Content */}
            <div className="flex-1 overflow-y-auto bg-slate-50 p-4 flex flex-col gap-4">
              {/* Product Card */}
              <div className="bg-white p-3 rounded-lg shadow-sm flex gap-4">
                <div className="w-20 h-28 bg-slate-200 rounded-md"></div>
                <div className="flex flex-col gap-1 flex-1">
                  <h4 className="font-bold text-sm">Floral Print Dress</h4>
                  <p className="text-xs text-slate-500">Size: M</p>
                  <p className="font-bold mt-1">₹1,499</p>
                </div>
              </div>
              
              {/* Delivery Info - PULSING */}
              <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-red-500 pulse-border relative mt-4">
                <span className="absolute -top-3 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Friction Point</span>
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-slate-400">local_shipping</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Standard Delivery</h4>
                    <p className="text-sm text-red-600 font-bold mt-1">Estimated: 10-20 Days</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="p-4 bg-white border-t flex gap-4 items-center">
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-slate-500 font-medium">Total Amount</span>
                <span className="font-bold">₹1,499</span>
              </div>
              <button className="bg-rose-500 text-white font-bold py-3 px-6 rounded-md flex-1">
                PLACE ORDER
              </button>
            </div>
            
            {/* Overlay: Move to Wishlist action */}
            <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="bg-white p-4 rounded-xl shadow-xl flex gap-2 items-center text-sm font-bold text-slate-800 cursor-pointer">
                <span className="material-symbols-outlined text-rose-500">favorite</span>
                Moved to Wishlist
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: AI Console */}
        <div className="flex-1 lg:max-w-md bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col font-mono text-sm border border-slate-700 h-[650px] self-center">
          <div className="bg-slate-800 p-3 border-b border-slate-700 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-slate-400 text-xs font-sans tracking-wide">Live AI Console</span>
          </div>
          <div className="p-6 flex flex-col gap-3 flex-1 overflow-y-auto text-green-400">
            <div>System initialized...</div>
            <div>Listening for intent signals...</div>
            <br/>
            {simulatorLogs.map((log, i) => {
              const isWarning = log.includes('[WARNING]');
              const isInsight = log.includes('[AI INSIGHT]');
              let colorClass = "text-green-400";
              if (isWarning) colorClass = "text-yellow-400 font-bold";
              if (isInsight) colorClass = "text-cyan-400 font-bold";
              
              return (
                <div key={i} className={`typing-animation ${colorClass}`} style={{ animationDuration: '1s' }}>
                  {log}
                </div>
              );
            })}
            {simulatorLogs.length > 0 && (
              <div className="animate-pulse mt-2 block w-2 h-4 bg-green-400"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
