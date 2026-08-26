import React, { useState } from 'react';
import { dashboardData as initialData, questionTitles } from '../data/discoveryData';
import ReportModal from './ReportModal';

// Category colour palette — consistent across bars, badges, and filter pills
const CATEGORY_COLORS = {
  'Trust Deficit':     { bg: 'bg-rose-500',    pill: 'bg-rose-100 text-rose-800 border-rose-200',    bar: '#f43f5e' },
  'Delivery Anxiety':  { bg: 'bg-amber-500',   pill: 'bg-amber-100 text-amber-800 border-amber-200',  bar: '#f59e0b' },
  'Price Sensitivity': { bg: 'bg-blue-500',    pill: 'bg-blue-100 text-blue-800 border-blue-200',     bar: '#3b82f6' },
  'Convenience':       { bg: 'bg-emerald-500', pill: 'bg-emerald-100 text-emerald-800 border-emerald-200', bar: '#10b981' },
  'Visual Appeal':     { bg: 'bg-violet-500',  pill: 'bg-violet-100 text-violet-800 border-violet-200', bar: '#8b5cf6' },
  // YouTube-only categories
  'Visual Reality Gap':   { bg: 'bg-cyan-500',    pill: 'bg-cyan-100 text-cyan-800 border-cyan-200',       bar: '#06b6d4' },
  'Styling Uncertainty':  { bg: 'bg-fuchsia-500', pill: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200', bar: '#d946ef' },
  'Quality Uncertainty':  { bg: 'bg-orange-500',  pill: 'bg-orange-100 text-orange-800 border-orange-200',  bar: '#f97316' },
};
const DEFAULT_COLOR = { bg: 'bg-slate-400', pill: 'bg-slate-100 text-slate-700 border-slate-200', bar: '#94a3b8' };

function getColor(category) {
  return CATEGORY_COLORS[category] || DEFAULT_COLOR;
}

export default function DashboardView() {
  const [dashboardData] = useState(initialData);
  const [selectedSource, setSelectedSource] = useState('combined');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isReportOpen, setIsReportOpen] = useState(false);

  const sources = [
    { id: 'playstore', label: 'Play Store', icon: 'shop' },
    { id: 'youtube',   label: 'YouTube',    icon: 'video_library' },
    { id: 'combined',  label: 'Combined',   icon: 'hub' },
  ];

  if (!dashboardData) return null;

  const currentData = dashboardData[selectedSource];
  const categories = ['All', ...Object.keys(currentData.categoryDist)];

  const displayKpis = (() => {
    if (selectedCategory === 'All') return currentData.kpis;
    const count = currentData.categoryCounts?.[selectedCategory] || 0;
    const pct   = currentData.categoryDist?.[selectedCategory];
    const pctLabel = pct !== undefined ? ` (${pct}%)` : '';
    return {
      reviewed: currentData.kpis.reviewed,
      filtered: `${count} High-Intent`,
      topDriver: `${selectedCategory}${pctLabel}`,
    };
  })();

  const visibleAnswers = questionTitles.filter((q) => {
    const answer = currentData.answers[q.key];
    return answer && (selectedCategory === 'All' || answer.category === selectedCategory);
  });

  return (
    <div className="flex flex-col gap-8 animate-fade-in pb-10">

      {/* ── Header ─────────────────────────────────────────── */}
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

        {/* Source switcher */}
        <div className="flex bg-white/60 backdrop-blur-md border border-white/80 p-1 rounded-full shadow-sm">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => { setSelectedSource(source.id); setSelectedCategory('All'); }}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedSource === source.id
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-white/80'
              }`}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={selectedSource === source.id ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {source.icon}
              </span>
              {source.label}
            </button>
          ))}
        </div>
      </header>

      {/* ── KPI cards ──────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col justify-center p-6 glass-card rounded-xl shadow-sm h-28">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">SOURCES SCRAPED</div>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1 truncate">{displayKpis.reviewed}</div>
        </div>
        <div className="flex flex-col justify-center p-6 glass-card rounded-xl shadow-sm h-28">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">HIGH-INTENT SIGNALS</div>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1 truncate">{displayKpis.filtered}</div>
        </div>
        <div className="flex flex-col justify-center p-6 glass-card rounded-xl shadow-sm h-28">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {selectedCategory === 'All' ? 'TOP DRIVER' : 'FILTERED DRIVER'}
          </div>
          <div className="text-xl font-extrabold text-indigo-600 mt-1 leading-tight">{displayKpis.topDriver}</div>
        </div>
      </section>

      {/* ── Validation Summary ────────────────────────────── */}
      <section className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-indigo-900 font-medium my-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
          <span><strong>Total Sources Scraped:</strong> 9,127</span>
          <span><strong>High-Intent Signals:</strong> 221</span>
          <span><strong>Successfully LLM-Tagged:</strong> 221</span>
          <span><strong>Records Used in Calculation:</strong> 221</span>
        </div>
        <div className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold uppercase tracking-wide">Data Validated</div>
      </section>

      {/* ── Distribution charts ────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Decision Drivers — clickable bars */}
        <div className="glass-card rounded-xl p-6 flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-800">Decision Drivers</h3>
          <p className="text-[11px] text-slate-400 -mt-2">
            {selectedSource === 'youtube' ? 'n=12 (manually curated YouTube signals)' : 'n=221 LLM-tagged Play Store records'}
          </p>
          <div className="flex flex-col gap-3">
            {Object.entries(currentData.categoryDist).map(([cat, val]) => {
              const col = getColor(cat);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(isActive ? 'All' : cat)}
                  className={`flex items-center gap-3 w-full text-left rounded-lg px-2 py-1 transition-all ${isActive ? 'ring-2 ring-indigo-400 bg-indigo-50/60' : 'hover:bg-slate-50'}`}
                >
                  <span className="w-28 text-xs font-semibold text-slate-600 truncate shrink-0" title={cat}>{cat}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className={`${col.bg} h-full rounded-full transition-all`} style={{ width: `${val}%` }} />
                  </div>
                  <span className="w-10 text-right text-xs font-bold text-slate-700">{val}%</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* User Segments */}
        <div className="glass-card rounded-xl p-6 flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-800">User Segments</h3>
          <div className="flex flex-col gap-3">
            {currentData.segmentDist
              ? Object.entries(currentData.segmentDist).map(([seg, val]) => (
                <div key={seg} className="flex items-center gap-3">
                  <span className="w-28 text-xs font-semibold text-slate-600 truncate shrink-0" title={seg}>{seg}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${val}%` }} />
                  </div>
                  <span className="w-10 text-right text-xs font-bold text-indigo-600">{val}%</span>
                </div>
              ))
              : <p className="text-sm text-slate-500 italic">No segment data.</p>
            }
          </div>
        </div>

        {/* Evidence Types */}
        <div className="glass-card rounded-xl p-6 flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-800">Evidence Types</h3>
          <div className="flex flex-col gap-3">
            {currentData.evidenceDist
              ? Object.entries(currentData.evidenceDist).map(([ev, val]) => (
                <div key={ev} className="flex items-center gap-3">
                  <span className="w-28 text-xs font-semibold text-slate-600 truncate shrink-0" title={ev}>{ev}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: `${val}%` }} />
                  </div>
                  <span className="w-10 text-right text-xs font-bold text-purple-600">{val}%</span>
                </div>
              ))
              : <p className="text-sm text-slate-500 italic">No evidence data.</p>
            }
          </div>
        </div>
      </section>

      {/* ── Category filter pills ──────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-slate-700 mr-1">Filter:</span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const col = cat === 'All' ? null : getColor(cat);
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                isActive
                  ? cat === 'All'
                    ? 'bg-slate-800 text-white border-slate-800'
                    : `${col.pill} border`
                  : 'bg-white/70 text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          );
        })}
        {selectedCategory !== 'All' && (
          <button
            onClick={() => setSelectedCategory('All')}
            className="ml-1 text-xs text-slate-400 hover:text-slate-600 flex items-center gap-0.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[14px]">close</span>
            Clear
          </button>
        )}
      </div>

      {/* ── Core Findings + Raw Quotes ─────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">

        {/* Core Findings */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex items-center gap-3">
            <h3 className="text-xl text-primary font-bold">Core Findings</h3>
            {selectedCategory !== 'All' && (
              <span className={`text-[10px] px-2 py-1 rounded-full font-bold border ${getColor(selectedCategory).pill}`}>
                {selectedCategory}
              </span>
            )}
          </div>

          {visibleAnswers.length === 0 ? (
            <div className="glass-card rounded-2xl p-8 text-center text-slate-500 flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
              <p className="font-semibold">No research questions tagged under <span className="font-bold text-slate-700">"{selectedCategory}"</span></p>
              <p className="text-sm text-slate-400">This driver appears in the raw signal data and quotes below, but no dedicated Q&amp;A was written for it.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-2 text-xs font-bold text-indigo-600 hover:underline"
              >
                Show all findings →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleAnswers.map((q) => {
                const answer = currentData.answers[q.key];
                const col = getColor(answer.category);
                return (
                  <div
                    key={q.key}
                    className="glass-card bg-white/60 border border-white/80 rounded-2xl p-5 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">{q.title}</h4>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border whitespace-nowrap shrink-0 ${col.pill}`}>
                        {answer.category}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-700">
                      <p><span className="font-semibold text-slate-800">Insight:</span> {answer.insight}</p>
                      <p><span className="font-semibold text-primary">Data Proof:</span> {answer.dataProof}</p>
                      <p className="italic bg-white/50 p-2 rounded-lg mt-1 border border-white text-slate-600">"{answer.voice}"</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Raw Quotes */}
        <div className="w-full lg:w-80 flex flex-col gap-3 sticky top-4">
          <h3 className="text-xl text-primary font-bold">Raw Quotes</h3>
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3 max-h-[600px] overflow-y-auto">
            {(() => {
              const filtered = currentData.rawQuotes?.filter(
                (r) => selectedCategory === 'All' || r.category === selectedCategory
              ) ?? [];

              if (filtered.length === 0) {
                return (
                  <p className="text-xs text-slate-400 italic text-center py-4">
                    No raw quotes for this category.
                  </p>
                );
              }

              return filtered.map((review, idx) => {
                const col = getColor(review.category);
                return (
                  <div key={idx} className="bg-white/80 border border-white rounded-xl p-3 shadow-sm text-sm">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        review.source === 'playstore'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border-rose-200'
                      }`}>
                        <span className="material-symbols-outlined text-[12px]">
                          {review.source === 'playstore' ? 'shop' : 'video_library'}
                        </span>
                        {review.source === 'playstore' ? 'Play Store' : 'YouTube'}
                      </span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border ${col.pill}`}>
                        {review.category}
                      </span>
                    </div>
                    <p className="italic text-slate-700 leading-relaxed">"{review.text}"</p>
                    {(review.segment || review.evidence) && (
                      <div className="flex gap-1.5 mt-2 flex-wrap">
                        {review.segment && (
                          <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
                            {review.segment}
                          </span>
                        )}
                        {review.evidence && (
                          <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100">
                            {review.evidence}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>

      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </div>
  );
}
