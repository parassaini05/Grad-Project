import React, { useState, useEffect, useRef } from 'react';

export default function ScraperView() {
  const [timeRange, setTimeRange] = useState('weeks');
  const [source, setSource] = useState('combined');
  const [isScraping, setIsScraping] = useState(false);
  const [logs, setLogs] = useState([]);
  
  const endOfLogsRef = useRef(null);

  useEffect(() => {
    endOfLogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleScrape = () => {
    if (isScraping) return;
    
    setIsScraping(true);
    setLogs([]);
    
    const steps = [
      `> Initializing scraper for source: ${source.toUpperCase()}`,
      `> Setting time range filter: Last 12 ${timeRange.toUpperCase()}`,
      `> Connecting to APIs...`,
      `> Fetching raw unstructured data...`,
      `> Downloaded 4,215 total records.`,
      `> Applying noise filters (removing short texts, emojis, non-English)...`,
      `> Noise reduction complete. Discarded 90% of data.`,
      `> Retained 420 high-intent wishlist/cart signals.`,
      `> Connecting to Groq LLM Engine...`,
      `> Processing records for behavioral analysis and enum tagging...`,
      `> [SUCCESS] Extraction complete. Insights ready for dashboard.`
    ];

    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsScraping(false);
      }
    }, 800); // add a new log every 800ms
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in h-full">
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">Live Scraper Engine</h2>
      
      <div className="glass-card p-6 rounded-2xl flex flex-col gap-6 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Time Range Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700">Time Range</label>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              disabled={isScraping}
              className="bg-white/80 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 shadow-sm disabled:opacity-50"
            >
              <option value="days">Last 7 Days</option>
              <option value="weeks">Last 12 Weeks</option>
              <option value="months">Last 6 Months</option>
              <option value="years">Last 1 Year</option>
            </select>
          </div>

          {/* Source Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700">Data Source</label>
            <select 
              value={source}
              onChange={(e) => setSource(e.target.value)}
              disabled={isScraping}
              className="bg-white/80 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 shadow-sm disabled:opacity-50"
            >
              <option value="playstore">Play Store Reviews</option>
              <option value="youtube">YouTube Comments</option>
              <option value="combined">Combined Data</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleScrape}
          disabled={isScraping}
          className="bg-primary text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isScraping ? (
            <span className="material-symbols-outlined animate-spin">refresh</span>
          ) : (
            <span className="material-symbols-outlined">play_arrow</span>
          )}
          {isScraping ? 'SCRAPING LIVE DATA...' : 'START LIVE SCRAPE'}
        </button>

        {/* Terminal Window */}
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-inner flex flex-col h-[400px] mt-4">
          <div className="bg-slate-800 p-3 border-b border-slate-700 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-slate-400 text-xs font-mono tracking-wide">scraper-console ~ /engine</span>
          </div>
          
          <div className="p-6 font-mono text-sm flex-1 overflow-y-auto">
            {logs.map((log, i) => (
              <div 
                key={i} 
                className={`mb-2 ${log.includes('[SUCCESS]') ? 'text-green-400 font-bold' : 'text-slate-300'}`}
              >
                <span className="typing-animation inline-block" style={{ animationDuration: '0.5s' }}>
                  {log}
                </span>
              </div>
            ))}
            
            {isScraping && (
              <div className="animate-pulse mt-2 inline-block w-2 h-4 bg-slate-300"></div>
            )}
            
            {!isScraping && logs.length === 0 && (
              <div className="text-slate-500 italic">System ready. Select parameters and start scrape.</div>
            )}
            <div ref={endOfLogsRef} />
          </div>
        </div>

      </div>
    </div>
  );
}
