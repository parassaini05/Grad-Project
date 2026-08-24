import React, { useState, useEffect, useRef } from 'react';
import { RAW_REVIEWS } from '../data/discoveryData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

const COLORS = ['#3525cd', '#831ada', '#0555dd', '#9e41f5', '#4f46e5'];

// Helper function to count frequencies
function getFrequencies(array, key) {
  const counts = {};
  array.forEach(item => {
    if (item[key]) {
      counts[item[key]] = (counts[item[key]] || 0) + 1;
    }
  });
  
  const total = array.length || 1; // avoid div by 0
  
  return Object.keys(counts).map(name => ({
    name,
    count: counts[name],
    value: parseFloat(((counts[name] / total) * 100).toFixed(1))
  })).sort((a, b) => b.value - a.value);
}

// Helper to compute cross patterns (Category x Segment)
function getCrossPatterns(array) {
  const counts = {};
  array.forEach(item => {
    if (item.category && item.segment) {
      const key = `${item.category.split(' ')[0]} × ${item.segment.split('-')[0]}`;
      counts[key] = (counts[key] || 0) + 1;
    }
  });
  const total = array.length || 1;
  return Object.keys(counts).map(name => ({
    name,
    value: parseFloat(((counts[name] / total) * 100).toFixed(1))
  })).sort((a, b) => b.value - a.value).slice(0, 4); // Top 4 patterns
}

export default function ScraperView() {
  const [timeRange, setTimeRange] = useState('weeks');
  const [source, setSource] = useState('combined');
  const [isScraping, setIsScraping] = useState(false);
  const [scrapeComplete, setScrapeComplete] = useState(false);
  const [logs, setLogs] = useState([]);
  
  // States to hold the dynamically computed chart data
  const [dynamicDrivers, setDynamicDrivers] = useState([]);
  const [dynamicSegments, setDynamicSegments] = useState([]);
  const [dynamicEvidence, setDynamicEvidence] = useState([]);
  const [dynamicCross, setDynamicCross] = useState([]);
  
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
    
    // Dynamically filter data based on source
    const filteredReviews = source === 'combined' 
      ? RAW_REVIEWS 
      : RAW_REVIEWS.filter(r => r.source === source);

    // Build dynamic simulation steps
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

    filteredReviews.forEach((review) => {
      const shortQuote = review.text.length > 50 ? review.text.substring(0, 50) + '...' : review.text;
      steps.push(`> [FETCH] "${shortQuote}"`);
      steps.push(`> [AI INSIGHT] Tagged as '${review.category}' / '${review.segment}'`);
    });

    steps.push(`> [SUCCESS] Extraction complete. Generating dynamic visualization matrices...`);

    let currentStep = 0;
    
    intervalRef.current = setInterval(() => {
      if (currentStep < steps.length) {
        setLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(intervalRef.current);
        setIsScraping(false);
        
        // Compute actual dynamic charts from the filtered data
        setDynamicDrivers(getFrequencies(filteredReviews, 'category'));
        setDynamicSegments(getFrequencies(filteredReviews, 'segment'));
        setDynamicEvidence(getFrequencies(filteredReviews, 'evidence'));
        setDynamicCross(getCrossPatterns(filteredReviews));
        
        setScrapeComplete(true);
      }
    }, 400); // 400ms per step
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in h-full pb-10">
      <h2 className="text-2xl text-primary font-extrabold">Live Scraper Engine</h2>
      
      <div className="glass-card p-6 rounded-2xl flex flex-col gap-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700">Time Range</label>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              disabled={isScraping}
              className="glass-card bg-white/40 backdrop-blur-md border border-white text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 shadow-sm disabled:opacity-50 font-medium outline-none"
            >
              <option value="days">Last 7 Days</option>
              <option value="weeks">Last 12 Weeks</option>
              <option value="months">Last 6 Months</option>
              <option value="years">Last 1 Year</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700">Data Source</label>
            <select 
              value={source}
              onChange={(e) => setSource(e.target.value)}
              disabled={isScraping}
              className="glass-card bg-white/40 backdrop-blur-md border border-white text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 shadow-sm disabled:opacity-50 font-medium outline-none"
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
                  <span className="typing-animation inline-block" style={{ animationDuration: '0.2s' }}>
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

        {scrapeComplete && (
          <div className="animate-fade-in mt-6 border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl text-slate-800 font-extrabold flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-3xl">auto_graph</span>
                Dynamically Generated Insights ({source.toUpperCase()})
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 rounded-xl p-6 border border-white flex flex-col gap-2 h-80 shadow-sm">
                <h4 className="font-title-sm font-bold text-slate-700">Decision Drivers</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dynamicDrivers} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} style={{ fill: '#475569', fontSize: 11, fontWeight: 'bold' }} width={120}/>
                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.4)'}} contentStyle={{borderRadius: '8px', fontSize: '12px'}} formatter={(value) => `${value}%`}/>
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                      {dynamicDrivers.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white/60 rounded-xl p-6 border border-white flex flex-col gap-2 h-80 shadow-sm">
                <h4 className="font-title-sm font-bold text-slate-700">User Segments</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={dynamicSegments} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value" label={({name, value}) => `${value}%`}>
                      {dynamicSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '8px', fontSize: '12px'}} formatter={(value) => `${value}%`}/>
                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{fontSize: '12px'}}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white/60 rounded-xl p-6 border border-white flex flex-col gap-2 h-80 shadow-sm">
                <h4 className="font-title-sm font-bold text-slate-700">Evidence Types</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={dynamicEvidence} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value" label={({name, value}) => `${value}%`}>
                      {dynamicEvidence.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[(index + 1) % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '8px', fontSize: '12px'}} formatter={(value) => `${value}%`}/>
                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{fontSize: '12px'}}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white/60 rounded-xl p-6 border border-white flex flex-col gap-2 h-80 shadow-sm">
                <h4 className="font-title-sm font-bold text-slate-700">Top Cross-Patterns</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dynamicCross} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 11, fontWeight: 'bold'}} interval={0} angle={-15} textAnchor="end" height={60}/>
                    <YAxis hide />
                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.4)'}} contentStyle={{borderRadius: '8px', fontSize: '12px'}} formatter={(value) => `${value}%`}/>
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={40}>
                      {dynamicCross.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[(index + 3) % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
