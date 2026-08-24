import React, { useState, useEffect, useRef } from 'react';
import { Play, Database, RefreshCw, XCircle, CheckCircle } from 'lucide-react';

export default function ScraperView() {
  const [isScraping, setIsScraping] = useState(false);
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null);

  const rawStream = [
    { text: "The app crashed again.", intent: false },
    { text: "I put the dress in my wishlist but shipping is too slow.", intent: true },
    { text: "Great quality!", intent: false },
    { text: "I check my cart every day to see if my size is back.", intent: true },
    { text: "They never deliver on time here.", intent: true },
    { text: "Loved the pink top.", intent: false },
    { text: "Cancellation after waiting for 8 days is unbearable.", intent: true },
    { text: "Prices are too high.", intent: false },
    { text: "Myntra's return policy is complicated when you receive the wrong product.", intent: true },
    { text: "Good app.", intent: false }
  ];

  const highlightText = (text) => {
    const keywords = ['wishlist', 'cart', 'waiting', 'return', 'deliver', 'size'];
    const words = text.split(' ');
    
    return words.map((word, i) => {
      const isKeyword = keywords.some(k => word.toLowerCase().includes(k));
      return (
        <React.Fragment key={i}>
          {isKeyword ? (
            <span className="bg-yellow-400/20 text-yellow-300 font-bold px-1 rounded mx-0.5">{word}</span>
          ) : (
            <span>{word} </span>
          )}
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    if (isScraping) {
      let index = 0;
      setLogs([{ type: 'info', text: 'Initializing data ingestion pipeline...' }]);
      
      const interval = setInterval(() => {
        if (index < rawStream.length) {
          setLogs(prev => [...prev, { type: 'data', ...rawStream[index] }]);
          index++;
        } else {
          clearInterval(interval);
          setIsScraping(false);
          setLogs(prev => [...prev, { type: 'info', text: 'Pipeline finished. Exporting to LLM.' }]);
        }
      }, 600);
      
      return () => clearInterval(interval);
    }
  }, [isScraping]);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-8 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Live Scraper Engine</h2>
        <p className="text-slate-500 mt-1">Real-time simulation of the ingestion pipeline filtering noise.</p>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-6 rounded-t-2xl shadow-sm border border-slate-200 border-b-0 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Database className="text-slate-400" />
          <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Google Play Store (Last 5 Days)</option>
            <option>YouTube API (Last 5 Days)</option>
          </select>
        </div>
        
        <button
          onClick={() => {
            setLogs([]);
            setIsScraping(true);
          }}
          disabled={isScraping}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors ${
            isScraping 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
          }`}
        >
          {isScraping ? <RefreshCw className="animate-spin" size={16} /> : <Play size={16} />}
          {isScraping ? 'Scraping Data...' : 'Run Discovery Engine'}
        </button>
      </div>

      {/* Terminal */}
      <div className="flex-1 bg-slate-900 rounded-b-2xl p-6 overflow-y-auto font-mono text-sm shadow-xl border border-slate-800">
        {logs.length === 0 && !isScraping ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-4">
            <Terminal size={48} className="opacity-20" />
            <p>Click "Run Discovery Engine" to simulate live data ingestion.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {logs.map((log, i) => (
              <div key={i} className="animate-fade-in">
                {log.type === 'info' ? (
                  <span className="text-blue-400 font-bold">&gt; {log.text}</span>
                ) : (
                  <div className="flex gap-4 items-start">
                    <span className="text-slate-500 w-24 shrink-0">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span>
                    {log.intent ? (
                      <span className="flex items-center gap-2 text-green-400 font-bold shrink-0 w-28">
                        <CheckCircle size={14} /> [KEEP]
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-red-400/70 font-bold shrink-0 w-28">
                        <XCircle size={14} /> [DISCARD]
                      </span>
                    )}
                    <span className={log.intent ? "text-slate-300" : "text-slate-500 line-through decoration-slate-600"}>
                      {highlightText(log.text)}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>
        )}
      </div>
    </div>
  );
}
