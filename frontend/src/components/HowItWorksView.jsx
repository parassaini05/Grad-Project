import React from 'react';

const FlowArrow = ({ isHorizontal = true }) => (
  isHorizontal ? (
    <div className="hidden lg:flex items-center justify-center w-16 shrink-0">
      <svg className="flowing-arrow w-full h-8 text-primary/60" viewBox="0 0 100 20" fill="none">
        <path className="dashed-line" d="M0,10 L90,10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M85,3 L95,10 L85,17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  ) : (
    <div className="flex lg:hidden items-center justify-center h-12 shrink-0">
       <svg className="flowing-arrow h-full w-8 text-primary/60" viewBox="0 0 20 100" fill="none">
        <path className="dashed-line" d="M10,0 L10,90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M3,85 L10,95 L17,85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
);

export default function HowItWorksView() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in h-full pb-10">
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">Architecture Flow</h2>
      
      <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-4 lg:gap-0 max-w-6xl mx-auto w-full py-8">
        
        {/* Block 1 */}
        <div className="glass-card hover-fuchsia w-full lg:w-1/4 p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer">
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-2xl">shop</span>
            </div>
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-2xl">video_library</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">1. Data Ingestion Layer</h3>
            <p className="text-sm text-slate-600 mt-3 font-medium leading-relaxed">Ingesting thousands of raw, unstructured user reviews and video comments.</p>
          </div>
        </div>

        <FlowArrow isHorizontal={true} />
        <FlowArrow isHorizontal={false} />

        {/* Block 2 */}
        <div className="glass-card hover-fuchsia w-full lg:w-1/4 p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-3xl">filter_alt</span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">2. Noise Filtering Layer</h3>
            <p className="text-sm text-slate-600 mt-3 font-medium leading-relaxed">Discarding 90% of noise. Isolating only high-intent purchase hesitation signals (e.g., 'wishlist', 'cart', 'hesitate').</p>
          </div>
        </div>

        <FlowArrow isHorizontal={true} />
        <FlowArrow isHorizontal={false} />

        {/* Block 3 */}
        <div className="bg-gradient-to-br from-primary to-indigo-800 text-white hover-fuchsia w-full lg:w-1/4 p-6 rounded-2xl flex flex-col items-center text-center gap-4 shadow-xl transition-all duration-300 cursor-pointer border border-transparent">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shadow-inner backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="material-symbols-outlined text-3xl text-white">psychology</span>
          </div>
          <div>
            <h3 className="font-bold text-lg">3. Groq LLM Engine</h3>
            <p className="text-sm text-indigo-100 mt-3 font-medium leading-relaxed">Prompting LLM to act as a Growth PM. Extracting Enum Tags, Decision Drivers, and User Segments without relying on simple sentiment.</p>
          </div>
        </div>

        <FlowArrow isHorizontal={true} />
        <FlowArrow isHorizontal={false} />

        {/* Block 4 */}
        <div className="glass-card hover-fuchsia w-full lg:w-1/4 p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-3xl">bar_chart</span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">4. Opportunity Synthesis</h3>
            <p className="text-sm text-slate-600 mt-3 font-medium leading-relaxed">Quantifying non-monetary opportunity areas (e.g., Trust Deficit) to influence the 30-day wishlist conversion metric.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
