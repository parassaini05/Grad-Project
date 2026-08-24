import React from 'react';

export default function ReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-fade-in">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative glass-card bg-white/90 border border-white rounded-2xl shadow-2xl flex flex-col w-full max-w-4xl max-h-full overflow-hidden animate-slide-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white/50">
          <h2 className="text-2xl font-extrabold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined">description</span>
            Discovery Report
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 text-slate-800 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900">Discovery Engine Findings: Myntra Wishlist Conversion</h1>
            <p className="text-sm text-slate-500">AI-generated behavioral analysis report</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">1. Introduction & Methodology</h2>
            <p className="text-base leading-relaxed">
              To understand the behavioral psychology behind wishlist-to-purchase conversion without relying on monetary incentives, we built an AI-powered Discovery Engine. This engine ingested qualitative feedback from the Google Play Store and YouTube, filtered it for high-intent wishlist/cart signals, and utilized a Large Language Model (Groq) to programmatically extract non-monetary barriers, unmet needs, and structured behavioral tags.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-base">
              <li><strong>Total Sources Scraped:</strong> 9,115 Play Store reviews + 12 YouTube haul videos</li>
              <li><strong>High-Intent Signals Isolated:</strong> 221 reviews</li>
              <li><strong>LLM-Processed with Enum Tags:</strong> 18 reviews with structured JSON extraction</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">2. Enum Tag Taxonomy (Structured Tagging)</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Each review was tagged across 4 behavioral dimensions: Decision Drivers, User Segments, Evidence Types, and Cross-Patterns. <strong>Trust Deficit</strong> (61.1%) and <strong>Delivery Anxiety</strong> (16.7%) were the leading decision barriers for <strong>Trust-Gated Shoppers</strong> (72.2%).
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">3. Answers to Core Research Questions</h2>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q1. Why do users add fashion products to their wishlist?</h3>
              <p className="mb-2"><strong>Insight:</strong> Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a "holding area" while they evaluate reliability.</p>
              <p className="text-indigo-600"><strong>Data Proof:</strong> 61.1% cited Trust Deficit. 72.2% are Trust-Gated Shoppers.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q2. What prevents wishlisted products from eventually being purchased?</h3>
              <p className="mb-2"><strong>Insight:</strong> The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns).</p>
              <p className="text-indigo-600"><strong>Data Proof:</strong> 55.6% of evidence types were Delivery Complaints, followed by 22.2% Return Anxiety.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q4. What causes users to postpone a purchase?</h3>
              <p className="mb-2"><strong>Insight:</strong> Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines, order status updates, or refund progress — so they choose to wait rather than risk a bad experience.</p>
              <p className="text-indigo-600"><strong>Data Proof:</strong> Post-purchase operational friction accounts for 77.8% of all behavioral evidence.</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q10. What unmet needs emerge consistently across user conversations?</h3>
              <p className="mb-2"><strong>Insight:</strong> Three unmet needs emerge consistently: (1) Transparent, real-time order and refund status tracking, (2) A simplified, guaranteed return process, and (3) Reliable delivery with proactive communication.</p>
              <p className="text-slate-500 italic mt-2">Customer Voice: "Cancellation after waiting for 8 days is unbearable."</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">4. High-Potential Opportunity Areas</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold">Opportunity Area 1: Rebuilding Operational Trust (61.1%)</h3>
                <p>The largest cluster of users are willing buyers held back by platform reliability fears. Addressing trust directly on the product page and wishlist could unlock significant conversion.</p>
              </div>
              <div>
                <h3 className="font-bold">Opportunity Area 2: Eliminating Delivery Anxiety (55.6%)</h3>
                <p>Delivery complaints dominate the evidence base. Users need proactive, transparent communication about delivery timelines.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
}
