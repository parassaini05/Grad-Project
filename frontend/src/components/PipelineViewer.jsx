import React, { useState, useEffect } from 'react';
import rawData from '../data/normalized_reviews.json';
import processedData from '../data/llm_insights.json';
import { Database, BrainCircuit, FileJson, ArrowRight, Activity } from 'lucide-react';

export default function PipelineViewer() {
  const [streamIndex, setStreamIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    if (!isProcessing) return;
    const interval = setInterval(() => {
      setStreamIndex(prev => {
        if (prev >= processedData.length - 1) {
          setIsProcessing(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2500); // simulate 2.5s per LLM call
    return () => clearInterval(interval);
  }, [isProcessing]);

  const currentItem = processedData[streamIndex];
  
  if (!currentItem) return <div className="text-slate-400">Loading pipeline data...</div>;

  return (
    <div className="space-y-6 animate-fade-in p-2">
      
      {/* Header Info */}
      <div className="flex-between mb-8">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <div className={`status-indicator ${isProcessing ? 'processing' : ''}`} />
            Live Pipeline Feed
          </h2>
          <p className="text-slate-400 text-sm mt-1">Simulating real-time data ingestion & LLM extraction</p>
        </div>
        <div className="glass-card px-4 py-2 flex items-center gap-3">
          <Activity size={16} className={isProcessing ? "text-amber-400 animate-pulse" : "text-emerald-400"} />
          <span className="text-sm text-slate-300">
            Processed: <strong className="text-white">{streamIndex + 1}</strong> / {processedData.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Stage 1: Ingestion */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-slate-300 mb-2">
            <Database size={18} className="text-blue-400" />
            <h3 className="font-medium">1. Cleaned User Feedback</h3>
          </div>
          
          <div className="glass-panel p-5 relative overflow-hidden h-[400px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30">
              {isProcessing && <div className="h-full bg-blue-500 w-1/3 animate-[slide-in-right_1s_ease-in-out_infinite]" />}
            </div>
            
            <div className="space-y-4 h-full overflow-y-auto pr-2">
              <div key={streamIndex} className="animate-stream">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    Source: {currentItem.source || 'Unknown'}
                  </span>
                  <span className="text-xs text-slate-500">ID: {currentItem.id || 'N/A'}</span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed border-l-2 border-blue-500 pl-3">
                  "{currentItem.text}"
                </p>
                <div className="mt-4 border-t border-slate-700/50 pt-3">
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <ArrowRight size={12} className="text-blue-400" /> Applying Intent Filter: <span className="text-emerald-400">PASSED</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow connector */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
          <div className="text-slate-600 animate-pulse">
            <ArrowRight size={32} />
          </div>
        </div>

        {/* Stage 2: LLM Output */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-300 mb-2">
            <BrainCircuit size={18} className="text-purple-400" />
            <h3 className="font-medium">2. AI Extracted Insights (JSON)</h3>
          </div>
          
          <div className="glass-panel p-5 h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-3 border-b border-slate-700/50 pb-2">
              <span className="text-xs text-purple-300 flex items-center gap-1">
                <FileJson size={14} /> Schema: BehavioralInsights
              </span>
              <span className="text-xs text-slate-500 font-mono">234ms</span>
            </div>
            
            <div className="code-block flex-1 overflow-y-auto" key={`out-${streamIndex}`}>
              <pre className="animate-fade-in m-0">
{`{
  `}
  <span className="code-key">"is_relevant"</span>: <span className="code-boolean">{String(currentItem.is_relevant)}</span>,
  <span className="code-key">"reason_for_wishlisting"</span>: <span className="code-string">"{currentItem.reason_for_wishlisting}"</span>,
  <span className="code-key">"non_monetary_barrier"</span>: <span className="code-string">"{currentItem.non_monetary_barrier}"</span>,
  <span className="code-key">"unmet_need"</span>: <span className="code-string">"{currentItem.unmet_need}"</span>,
  <span className="code-key">"suggested_product_feature"</span>: <span className="code-string">"{currentItem.suggested_product_feature}"</span>,
  <span className="code-key">"decision_driver"</span>: <span className="code-string">"{currentItem.decision_driver}"</span>,
  <span className="code-key">"user_segment"</span>: <span className="code-string">"{currentItem.user_segment}"</span>,
  <span className="code-key">"verbatim_quote"</span>: <span className="code-string">"{currentItem.verbatim_quote}"</span>
{`}`}
              </pre>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
