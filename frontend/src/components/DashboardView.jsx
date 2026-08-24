import React, { useState } from 'react';
import { INSIGHTS_DATA, GRAPH_DATA, RAW_REVIEWS } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function DashboardView() {
  const [activeSource, setActiveSource] = useState('Combined Data');
  const [activeDriver, setActiveDriver] = useState('All');
  const [viewMode, setViewMode] = useState('Core Findings');

  // Derive metrics based on source
  const getMetrics = () => {
    if (activeSource === 'Combined Data') return { total: '9,127', intent: '221', top: 'Trust Deficit' };
    if (activeSource === 'Play Store') return { total: '9,115', intent: '209', top: 'Trust Deficit' };
    return { total: '12', intent: '12', top: 'Quality Uncertainty' };
  };
  const metrics = getMetrics();

  // Filter insights
  const filteredInsights = INSIGHTS_DATA.filter(item => {
    const matchSource = activeSource === 'Combined Data' ? true : (item.source === activeSource || item.source === 'Combined');
    const matchDriver = activeDriver === 'All' ? true : item.driver === activeDriver;
    return matchSource && matchDriver;
  });

  // Filter raw reviews
  const filteredReviews = RAW_REVIEWS.filter(item => {
    return activeSource === 'Combined Data' ? true : item.source === activeSource;
  });

  const getGraphData = () => {
    if (activeSource === 'Combined Data') return GRAPH_DATA.combined;
    if (activeSource === 'Play Store') return GRAPH_DATA.playstore;
    return GRAPH_DATA.youtube;
  };
  const chartData = getGraphData();

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-8 flex flex-col">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Behavioral Analysis Findings</h2>
          <p className="text-slate-500 mt-1">AI-extracted friction points and needs analysis.</p>
        </div>
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-200">
          {['Play Store', 'YouTube', 'Combined Data'].map((src) => (
            <button
              key={src}
              onClick={() => setActiveSource(src)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSource === src ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {src}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Analyzed Sources</span>
          <span className="text-4xl font-black text-indigo-600">{metrics.total}</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">High-Intent Signals</span>
          <span className="text-4xl font-black text-indigo-600">{metrics.intent}</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Barrier</span>
          <span className="text-4xl font-black text-red-500">{metrics.top}</span>
        </div>
      </div>

      {/* Graph Row */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 h-64">
        <h3 className="text-lg font-bold text-slate-700 mb-4">Top Thematic Clusters</h3>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 20 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="label" type="category" axisLine={false} tickLine={false} style={{ fill: '#475569', fontWeight: 600, fontSize: 13 }} />
              <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}/>
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#dc2626' : '#4f46e5'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-slate-400 italic">No quantified data available for this source due to sample limits.</div>
        )}
      </div>

      {/* Control Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex bg-slate-200 rounded-lg p-1">
          {['Core Findings', 'Raw Reviews'].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                viewMode === mode ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        
        {viewMode === 'Core Findings' && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Filter by Driver:</span>
            <select 
              className="bg-white border border-slate-300 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={activeDriver}
              onChange={(e) => setActiveDriver(e.target.value)}
            >
              <option value="All">All Drivers</option>
              <option value="Trust Deficit">Trust Deficit</option>
              <option value="Delivery Anxiety">Delivery Anxiety</option>
              <option value="Quality Uncertainty">Quality Uncertainty</option>
            </select>
          </div>
        )}
      </div>

      {/* Content Area */}
      {viewMode === 'Core Findings' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1 pb-10">
          {filteredInsights.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col hover:shadow-md transition-shadow">
              <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold uppercase px-2 py-1 rounded w-max mb-3">{item.driver}</span>
              <h4 className="text-base font-bold text-indigo-900 mb-3 leading-snug">{item.question}</h4>
              <p className="text-sm text-slate-600 mb-4 flex-1">{item.insight}</p>
              
              <div className="mt-auto">
                <div className="bg-indigo-50/50 rounded-lg p-3 mb-3 border border-indigo-100/50">
                  <span className="text-xs font-bold text-indigo-600 block mb-1">DATA PROOF:</span>
                  <span className="text-sm text-indigo-900 font-medium">{item.proof}</span>
                </div>
                
                <div className="border-l-2 border-red-400 pl-3">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">Customer Voice:</span>
                  <p className="text-sm text-slate-700 italic">"{item.voice}"</p>
                </div>
              </div>
            </div>
          ))}
          {filteredInsights.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-400">No findings match this filter.</div>
          )}
        </div>
      ) : (
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4">Raw Unstructured Data</h3>
          <div className="overflow-y-auto max-h-[600px] pr-2 space-y-3">
            {filteredReviews.map((rev, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-4 items-start">
                <span className={`text-[10px] font-bold px-2 py-1 rounded shrink-0 uppercase tracking-wider ${
                  rev.source === 'Play Store' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                }`}>
                  {rev.source}
                </span>
                <p className="text-sm text-slate-700 pt-0.5 font-medium">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
