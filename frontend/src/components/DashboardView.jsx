import React, { useState, useEffect } from 'react';
import { questionTitles } from '../data/discoveryData';
import ReportModal from './ReportModal';

export default function DashboardView() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedSource, setSelectedSource] = useState('playstore');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isReportOpen, setIsReportOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        const res = await fetch(`${apiUrl}/api/dashboard`);
        if (!res.ok) throw new Error("Failed to fetch live dashboard data.");
        const data = await res.json();
        setDashboardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sources = [
    { id: 'playstore', label: 'Play Store', icon: 'shop' },
    { id: 'youtube', label: 'YouTube', icon: 'video_library' },
    { id: 'combined', label: 'Combined Data', icon: 'hub' }
  ];

  if (loading) return <div className="p-10 text-center text-primary font-bold animate-pulse">Loading genuine data from LLM pipeline...</div>;
  if (error) return <div className="p-10 text-center text-red-500 font-bold">Error: {error}</div>;
  if (!dashboardData) return null;

  const currentData = dashboardData[selectedSource];
  const categories = ['All', ...Object.keys(currentData.categoryDist)];

  return (
    <div className="flex flex-col gap-8 animate-fade-in pb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-extrabold text-primary">Overview</h2>
          <button 
            onClick={() => setIsReportOpen(true)}
            className="flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            View Report
          </button>
        </div>
        
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col justify-center p-6 glass-card rounded-xl shadow-sm h-28">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">SOURCES SCRAPED</div>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1 truncate">{currentData.kpis.reviewed}</div>
        </div>
        <div className="flex flex-col justify-center p-6 glass-card rounded-xl shadow-sm h-28">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">HIGH-INTENT SIGNALS</div>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1 truncate">{currentData.kpis.filtered}</div>
        </div>
        <div className="flex flex-col justify-center p-6 glass-card rounded-xl shadow-sm h-28">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">TOP DRIVER</div>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1 truncate">{currentData.kpis.topDriver}</div>
        </div>
      </section>
      
      <section className="glass-card rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-slate-800">
          Category Distribution 
          <span className="text-sm font-normal text-slate-500 ml-2">(Share of signals)</span>
        </h3>
        <div className="flex flex-col gap-3">
          {Object.entries(currentData.categoryDist).map(([category, value]) => (
            <div key={category} className="flex items-center gap-4">
              <span className="w-48 text-sm font-medium text-slate-600 truncate" title={category}>{category}</span>
              <div className="flex-1 bg-slate-200 rounded-full h-4 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: `${value}%` }}></div>
              </div>
              <span className="w-12 text-right text-sm font-bold text-primary">{value}%</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-4 py-2">
        <label className="text-lg font-bold text-slate-800">Filter by Category:</label>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="glass-card bg-white/40 backdrop-blur-md border border-white text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 outline-none shadow-sm font-medium"
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 flex flex-col gap-4 w-full">
          <h3 className="text-xl text-primary font-bold">Core Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questionTitles.map((q) => {
              const answer = currentData.answers[q.key];
              if (!answer || (selectedCategory !== 'All' && answer.category !== selectedCategory)) return null;
              
              return (
                <div key={q.key} className="glass-card bg-white/60 border border-white/80 rounded-2xl p-5 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-base font-bold text-slate-800 leading-snug">{q.title}</h4>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-1 rounded-full font-bold whitespace-nowrap">{answer.category}</span>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-slate-700">
                    <p><span className="font-semibold text-slate-800">Insight:</span> {answer.insight}</p>
                    <p><span className="font-semibold text-primary">Data Proof:</span> {answer.dataProof}</p>
                    <p className="italic bg-white/50 p-2 rounded-lg mt-1 border border-white">"{answer.voice}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="w-full lg:w-80 flex flex-col gap-4 sticky top-4">
          <h3 className="text-xl text-primary font-bold">Raw Quotes</h3>
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 max-h-[600px] overflow-y-auto">
            {currentData.rawQuotes?.filter(r => 
              selectedCategory === 'All' || r.category === selectedCategory
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
      
      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </div>
  );
}
