import React, { useState } from 'react';
import { dashboardData, RAW_REVIEWS, questionTitles } from '../data/discoveryData';

export default function DashboardView() {
  const [selectedSource, setSelectedSource] = useState('playstore');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sources = [
    { id: 'playstore', label: 'Play Store', icon: 'shop' },
    { id: 'youtube', label: 'YouTube', icon: 'video_library' },
    { id: 'combined', label: 'Combined Data', icon: 'hub' }
  ];

  const currentData = dashboardData[selectedSource];
  const categories = ['All', ...Object.keys(currentData.categoryDist)];

  return (
    <div className="flex flex-col gap-lg md:gap-xl animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">Overview</h2>
        
        <div className="flex bg-white/60 backdrop-blur-md border border-white/80 p-1 rounded-full shadow-sm">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => { setSelectedSource(source.id); setSelectedCategory('All'); }}
              className={`flex items-center gap-sm px-6 py-2 rounded-full font-label-sm transition-all duration-200 ${
                selectedSource === source.id
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-white/80'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]" style={selectedSource === source.id ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {source.icon}
              </span>
              {source.label}
            </button>
          ))}
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="flex flex-col justify-center p-lg glass-card rounded-xl h-32">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">SOURCES SCRAPED</div>
          <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mt-2 truncate">{currentData.kpis.reviewed}</div>
        </div>
        <div className="flex flex-col justify-center p-lg glass-card rounded-xl h-32">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">HIGH-INTENT SIGNALS</div>
          <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mt-2 truncate">{currentData.kpis.filtered}</div>
        </div>
        <div className="flex flex-col justify-center p-lg glass-card rounded-xl h-32">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">TOP DRIVER</div>
          <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mt-2 truncate">{currentData.kpis.topDriver}</div>
        </div>
      </section>
      
      <section className="glass-card rounded-xl p-lg flex flex-col gap-4">
        <h3 className="font-title-md font-bold text-on-surface">Category Distribution</h3>
        <div className="flex flex-col gap-3">
          {Object.entries(currentData.categoryDist).map(([category, value]) => (
            <div key={category} className="flex items-center gap-4">
              <span className="w-32 text-sm font-medium text-slate-600 truncate" title={category}>{category}</span>
              <div className="flex-1 bg-slate-200 rounded-full h-4 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: `${value}%` }}></div>
              </div>
              <span className="w-12 text-right text-sm font-bold text-primary">{value}%</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-4 py-2">
        <label className="font-title-md font-bold text-on-surface">Filter by Category:</label>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-white/80 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 outline-none shadow-sm backdrop-blur-sm"
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Side: Core Findings */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          <h3 className="font-title-md text-primary font-bold">Core Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questionTitles.map((q) => {
              const answer = currentData.answers[q.key];
              if (selectedCategory !== 'All' && answer.category !== selectedCategory) return null;
              
              return (
                <div key={q.key} className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-5 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-title-md text-sm font-bold text-on-surface leading-snug">{q.title}</h4>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-1 rounded-full font-bold whitespace-nowrap">{answer.category}</span>
                  </div>
                  <div className="flex flex-col gap-2 font-body-md text-sm">
                    <p><span className="font-semibold text-slate-800">Insight:</span> {answer.insight}</p>
                    <p><span className="font-semibold text-primary">Data Proof:</span> {answer.dataProof}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Right Side: Raw Data Snippets */}
        <div className="w-full lg:w-80 flex flex-col gap-4 sticky top-4">
          <h3 className="font-title-md text-primary font-bold">Raw Quotes</h3>
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 max-h-[600px] overflow-y-auto">
            {RAW_REVIEWS.filter(r => 
              (selectedSource === 'combined' || r.source === selectedSource) &&
              (selectedCategory === 'All' || r.category === selectedCategory || (selectedSource === 'youtube' && selectedCategory === 'All'))
            ).map((review, idx) => (
              <div key={idx} className="bg-white/80 border border-white rounded-xl p-3 shadow-sm text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${review.source === 'playstore' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-xs font-bold text-slate-500 uppercase">{review.source}</span>
                </div>
                <p className="italic text-slate-700">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Data Reports Section */}
      <div className="mt-8">
        <h3 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold mb-6">Visual Data Reports</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 items-center">
            <h4 className="font-title-md font-bold text-slate-800">Decision Drivers</h4>
            <img src="/reports/decision_drivers.png" alt="Decision Drivers" className="rounded-lg border border-slate-200 max-w-full h-auto" />
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 items-center">
            <h4 className="font-title-md font-bold text-slate-800">Evidence Types</h4>
            <img src="/reports/evidence_types.png" alt="Evidence Types" className="rounded-lg border border-slate-200 max-w-full h-auto" />
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 items-center lg:col-span-2">
            <h4 className="font-title-md font-bold text-slate-800">Cross-Pattern Heatmap</h4>
            <img src="/reports/cross_pattern_heatmap.png" alt="Cross Pattern Heatmap" className="rounded-lg border border-slate-200 max-w-full h-auto" />
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 items-center">
            <h4 className="font-title-md font-bold text-slate-800">Barrier Frequencies</h4>
            <img src="/reports/barrier_frequencies.png" alt="Barrier Frequencies" className="rounded-lg border border-slate-200 max-w-full h-auto" />
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 items-center">
            <h4 className="font-title-md font-bold text-slate-800">User Segments</h4>
            <img src="/reports/user_segments.png" alt="User Segments" className="rounded-lg border border-slate-200 max-w-full h-auto" />
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 items-center lg:col-span-2">
            <h4 className="font-title-md font-bold text-slate-800">Suggested Features</h4>
            <img src="/reports/suggested_features.png" alt="Suggested Features" className="rounded-lg border border-slate-200 max-w-full h-auto" />
          </div>

        </div>
      </div>
    </div>
  );
}
