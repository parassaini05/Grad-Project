import React, { useState } from 'react';
import { RAW_REVIEWS } from '../data/discoveryData';

export default function RawDataView() {
  const [selectedSource, setSelectedSource] = useState('combined');

  return (
    <div className="flex flex-col gap-6 animate-fade-in h-full">
      <header className="flex justify-between items-center">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">Raw Data Feed</h2>
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-slate-600">Select Source:</label>
          <select 
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="bg-white/60 backdrop-blur-md border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 shadow-sm"
          >
            <option value="combined">All</option>
            <option value="playstore">Play Store</option>
            <option value="youtube">YouTube</option>
          </select>
        </div>
      </header>

      <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-sm overflow-hidden flex-1 flex flex-col">
        <div className="overflow-y-auto flex-1 p-2">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-700 uppercase bg-white/50 sticky top-0 backdrop-blur-md z-10">
              <tr>
                <th scope="col" className="px-6 py-4 rounded-tl-lg">Source</th>
                <th scope="col" className="px-6 py-4">Category</th>
                <th scope="col" className="px-6 py-4">Quote</th>
                <th scope="col" className="px-6 py-4 rounded-tr-lg">Sentiment/Insight</th>
              </tr>
            </thead>
            <tbody>
              {RAW_REVIEWS.filter(r => selectedSource === 'combined' || r.source === selectedSource).map((row, i) => (
                <tr key={i} className="border-b border-white/50 last:border-0 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      row.source === 'playstore' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-rose-100 text-rose-800 border border-rose-200'
                    }`}>
                      <span className="material-symbols-outlined text-[14px]">
                        {row.source === 'playstore' ? 'shop' : 'video_library'}
                      </span>
                      {row.source === 'playstore' ? 'Play Store' : 'YouTube'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-800">
                    {row.category}
                  </td>
                  <td className="px-6 py-4 italic text-slate-700">
                    "{row.text}"
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">
                    {row.sentiment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
