import React from 'react';

export default function Sidebar({ activeView, setActiveView }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'visuals', label: 'Visual Reports', icon: 'bar_chart' },
    { id: 'raw', label: 'Raw Data Feed', icon: 'list_alt' },
    { id: 'scraper', label: 'Live Scraper Engine', icon: 'terminal' },
    { id: 'how', label: 'How it Works', icon: 'account_tree' }
  ];

  return (
    <div className="w-64 bg-white/60 backdrop-blur-xl border-r border-white/60 flex flex-col p-4 shadow-lg shrink-0">
      <div className="mb-8 p-2">
        <h1 className="font-headline-lg-mobile text-primary font-bold leading-tight">
          Discovery Engine
        </h1>
        <p className="text-xs text-on-surface-variant font-medium mt-1">
          Wishlist Insight Dashboard
        </p>
      </div>
      
      <nav className="flex flex-col gap-2 flex-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-label-sm transition-all duration-200 text-left ${
              activeView === tab.id
                ? 'bg-primary text-on-primary shadow-md'
                : 'text-on-surface hover:bg-white/50 hover:text-primary'
            }`}
          >
            <span 
              className="material-symbols-outlined text-xl" 
              style={activeView === tab.id ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
