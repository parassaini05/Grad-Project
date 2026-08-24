import React, { useState, useEffect, useRef } from 'react';
import { RAW_REVIEWS, decisionDriversData, userSegmentsData } from '../data/discoveryData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend, Cell as PieCell } from 'recharts';

const COLORS = ['#3525cd', '#831ada', '#0555dd', '#9e41f5', '#4f46e5'];

export default function ScraperView() {
  const [timeRange, setTimeRange] = useState('weeks');
  const [source, setSource] = useState('combined');
  const [isScraping, setIsScraping] = useState(false);
  const [scrapeComplete, setScrapeComplete] = useState(false);
  const [logs, setLogs] = useState([]);
  
  const endOfLogsRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    endOfLogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleScrape = () => {
    if (isScraping) return;
    
    setIsScraping(true);
    setScrapeComplete(false);
    setLogs([]);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Filter data based on source
    const filteredReviews = source === 'combined' 
      ? RAW_REVIEWS 
      : RAW_REVIEWS.filter(r => r.source === source);

    // Build dynamic steps
    const steps = [
      `> Initializing scraper for source: ${source.toUpperCase()}`,
      `> Setting time range filter: Last 12 ${timeRange.toUpperCase()}`,
      `> Connecting to APIs...`,
      `> Fetching raw unstructured data...`,
      `> Downloaded ${filteredReviews.length * 150} total records.`,
      `> Applying noise filters (removing short texts, emojis, non-English)...`,
      `> Noise reduction complete. Discarded 90% of data.`,
      `> Retained ${filteredReviews.length} high-intent wishlist/cart signals.`,
      `> Connecting to Groq LLM Engine...`,
      `> Processing records for behavioral analysis and enum tagging...`
    ];

    // Add review processing steps
    filteredReviews.forEach((review) => {
      // Create a shortened version of the quote
      const shortQuote = review.text.length > 50 ? review.text.substring(0, 50) + '...' : review.text;
      steps.push(`> [FETCH] "${shortQuote}"`);
      
      // Basic heuristic to fake tag assignment based on content (since it's a simulation)
      let tag = "Trust-Gated Shopper";
      if (review.text.toLowerCase().includes('delivery') || review.text.toLowerCase().includes('days')) tag = "Delivery Anxiety";
      if (review.text.toLowerCase().includes('price') || review.text.toLowerCase().includes('expensive')) tag = "Price Sensitivity";
      if (review.text.toLowerCase().includes('quality') || review.text.toLowerCase().includes('cloth')) tag = "Quality Uncertainty";
      
      steps.push(`> [AI INSIGHT] Tagged as '${tag}'`);
    });

    steps.push(`> [SUCCESS] Extraction complete. Insights ready for dashboard.`);

    let currentStep = 0;
    
    intervalRef.current = setInterval(() => {
      if (currentStep < steps.length) {
        setLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(intervalRef.current);
        setIsScraping(false);
        setScrapeComplete(true);
      }
    }, 600); // 600ms per step
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in h-full pb-10">
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">Live Scraper Engine</h2>
      
      <div className="glass-card p-6 rounded-2xl flex flex-col gap-6 max-w-5xl mx-auto w-full">
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
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-inner flex flex-col h-[300px] mt-2">
          <div className="bg-slate-800 p-3 border-b border-slate-700 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-slate-400 text-xs font-mono tracking-wide">scraper-console ~ /engine</span>
          </div>
          
          <div className="p-4 font-mono text-xs md:text-sm flex-1 overflow-y-auto">
            {logs.map((log, i) => {
              let logColor = 'text-slate-300';
              if (log.includes('[SUCCESS]')) logColor = 'text-green-400 font-bold';
              else if (log.includes('[FETCH]')) logColor = 'text-blue-300';
              else if (log.includes('[AI INSIGHT]')) logColor = 'text-purple-300 font-bold';

              return (
                <div key={i} className={`mb-2 ${logColor}`}>
                  <span className="typing-animation inline-block" style={{ animationDuration: '0.3s' }}>
                    {log}
                  </span>
                </div>
              );
            })}
            
            {isScraping && (
              <div className="animate-pulse mt-2 inline-block w-2 h-4 bg-slate-300"></div>
            )}
            
            {!isScraping && logs.length === 0 && (
              <div className="text-slate-500 italic">System ready. Select parameters and start scrape.</div>
            )}
            <div ref={endOfLogsRef} />
          </div>
        </div>

        {/* Post-Scrape Visualizations */}
        {scrapeComplete && (
          <div className="animate-fade-in mt-6 border-t border-slate-200 pt-6">
            <h3 className="font-headline-sm text-slate-800 font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500">check_circle</span>
              Generated Insights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 rounded-xl p-4 border border-white flex flex-col gap-2 h-72">
                <h4 className="font-title-sm font-bold text-slate-700">Decision Drivers (Identified)</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={decisionDriversData} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} style={{ fill: '#475569', fontSize: 11 }} />
                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.4)'}} contentStyle={{borderRadius: '8px', fontSize: '12px'}}/>
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16}>
                      {decisionDriversData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white/60 rounded-xl p-4 border border-white flex flex-col gap-2 h-72">
                <h4 className="font-title-sm font-bold text-slate-700">User Segments (Identified)</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={userSegmentsData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">
                      {userSegmentsData.map((entry, index) => (
                        <PieCell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '8px', fontSize: '12px'}}/>
                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{fontSize: '11px'}}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
