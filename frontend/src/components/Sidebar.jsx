import React from 'react';
import { BarChart2, Terminal, Smartphone } from 'lucide-react';

export default function Sidebar({ activeView, setActiveView }) {
  const navItems = [
    { id: 'dashboard', label: 'Insights Dashboard', icon: BarChart2 },
    { id: 'scraper', label: 'Live Scraper Engine', icon: Terminal },
    { id: 'simulator', label: 'User Journey Simulator', icon: Smartphone },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white mb-1">Discovery Engine</h1>
        <p className="text-xs text-slate-500 uppercase tracking-wider">Wishlist Insights</p>
      </div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'hover:bg-slate-800 hover:text-slate-100'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-indigo-200' : 'text-slate-400'} />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-6 text-xs text-slate-600">
        &copy; 2026 Growth Team
      </div>
    </div>
  );
}
