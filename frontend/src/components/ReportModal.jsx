import React, { useMemo } from 'react';
import insightsData from '../data/llm_insights.json';

const getCounts = (data, key) => {
  const counts = {};
  data.forEach(item => {
    const val = item[key];
    if (val) counts[val] = (counts[val] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
};

export default function ReportModal({ isOpen, onClose }) {
  const { decisionDrivers, userSegments, evidenceTypes, totalTagged, crossPatternTop, crossPatternSecondary1, crossPatternSecondary2 } = useMemo(() => {
    // Only use relevant data if you have is_relevant flag. Since they all should be relevant, we just use insightsData.
    const data = insightsData;
    const totalTagged = data.length;

    const drivers = getCounts(data, 'decision_driver');
    const segments = getCounts(data, 'user_segment');
    const evidences = getCounts(data, 'evidence_type');
    
    // Calculate cross patterns
    let crossPatternTop = 0;
    let crossPatternSecondary1 = 0;
    let crossPatternSecondary2 = 0;
    
    data.forEach(d => {
       if (d.decision_driver === 'Trust Deficit' && d.user_segment === 'Trust-Gated Shopper') crossPatternTop++;
       if (d.decision_driver === 'Delivery Anxiety' && d.user_segment === 'Trust-Gated Shopper') crossPatternSecondary1++;
       if (d.decision_driver === 'Price Sensitivity' && d.user_segment === 'Deal Seeker') crossPatternSecondary2++;
    });

    return { 
      decisionDrivers: drivers, 
      userSegments: segments, 
      evidenceTypes: evidences, 
      totalTagged,
      crossPatternTop,
      crossPatternSecondary1,
      crossPatternSecondary2
    };
  }, []);

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
          </div>

          {/* Validation Summary */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-indigo-900 mb-2">Validation Summary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 text-center">
                <p className="text-slate-500 font-medium">Total Sources Scraped</p>
                <p className="text-xl font-bold text-indigo-700">9,127</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 text-center">
                <p className="text-slate-500 font-medium">High-Intent Signals</p>
                <p className="text-xl font-bold text-indigo-700">221</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 text-center">
                <p className="text-slate-500 font-medium">Successfully LLM-Tagged</p>
                <p className="text-xl font-bold text-indigo-700">{totalTagged}</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 text-center">
                <p className="text-slate-500 font-medium">Records Used For Aggregation</p>
                <p className="text-xl font-bold text-indigo-700">{totalTagged}</p>
              </div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">1. Introduction & Methodology</h2>
            <p className="text-base leading-relaxed">
              To understand the behavioral psychology behind wishlist-to-purchase conversion without relying on monetary incentives, we built an AI-powered Discovery Engine. This engine is structured around a 5-layer architecture (Data Ingestion, Data Processing & Storage, LLM Processing, Insights & Presentation, and Interactive Prototype Layer). It ingested qualitative feedback from the Google Play Store and YouTube, filtered it for high-intent wishlist/cart signals, and utilized a Large Language Model (Groq) to programmatically extract non-monetary barriers, unmet needs, and structured behavioral tags.
            </p>
            <p className="font-bold">Data Pipeline:</p>
            <ul className="list-disc pl-5 space-y-1 text-base">
              <li><strong>Total Sources Scraped:</strong> 9,127 (9,115 Play Store reviews + 12 YouTube haul videos)</li>
              <li><strong>High-Intent Signals Isolated:</strong> 221 signals (after keyword filtering + quality filters)</li>
              <li><strong>LLM-Processed with Enum Tags:</strong> {totalTagged} signals dynamically tagged by Groq</li>
              <li><strong>Quality Filters Applied:</strong> Excluded reviews &lt; 8 words, reviews with emojis, Hindi language reviews</li>
            </ul>
            <p className="font-bold">Scraping Keywords Used:</p>
            <ul className="list-disc pl-5 space-y-1 text-base">
              <li>Play Store: <code>wishlist, cart, save, price drop, waiting, hesitate, size, fit, review, buy, purchase, decide</code></li>
              <li>YouTube: <code>Myntra wishlist haul, Myntra wishlist, Myntra shopping cart, Why I don't buy from Myntra</code></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">2. Enum Tag Taxonomy (Structured Tagging)</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Each review was tagged across 4 behavioral dimensions:
            </p>
            
            <h3 className="font-bold text-lg mt-4">Decision Drivers</h3>
            <p className="text-sm text-slate-500 italic">Source: llm_insights.json — 221 LLM-tagged Play Store records (full dataset of 221 high-intent signals)</p>
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-slate-100"><th className="border p-2">Driver</th><th className="border p-2">Count (n={totalTagged})</th><th className="border p-2">Share</th></tr></thead>
              <tbody>
                {decisionDrivers.map(([driver, count], idx) => (
                  <tr key={driver} className={idx === 0 ? "font-semibold" : ""}>
                    <td className="border p-2">{driver}</td>
                    <td className="border p-2">{count}</td>
                    <td className="border p-2">{((count / totalTagged) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500 italic mt-1">
              ⓘ Visual Reality Gap (41.7%), Styling Uncertainty (33.3%), and Quality Uncertainty (25%) are YouTube-only signals tracked separately in 12 manually curated haul videos — not present in the LLM-tagged Play Store JSON.
            </p>

            <h3 className="font-bold text-lg mt-4">User Segments</h3>
            <p className="text-sm text-slate-500 italic">Source: llm_insights.json — 221 LLM-tagged Play Store records (full dataset of 221 high-intent signals)</p>
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-slate-100"><th className="border p-2">Segment</th><th className="border p-2">Count (n={totalTagged})</th><th className="border p-2">Share</th></tr></thead>
              <tbody>
                {userSegments.map(([segment, count], idx) => (
                  <tr key={segment} className={idx === 0 ? "font-semibold" : ""}>
                    <td className="border p-2">{segment}</td>
                    <td className="border p-2">{count}</td>
                    <td className="border p-2">{((count / totalTagged) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="font-bold text-lg mt-4">Evidence Types</h3>
            <p className="text-sm text-slate-500 italic">Source: llm_insights.json — 221 LLM-tagged Play Store records (full dataset of 221 high-intent signals)</p>
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-slate-100"><th className="border p-2">Evidence</th><th className="border p-2">Count (n={totalTagged})</th><th className="border p-2">Share</th></tr></thead>
              <tbody>
                {evidenceTypes.map(([evidence, count], idx) => (
                  <tr key={evidence} className={idx === 0 ? "font-semibold" : ""}>
                    <td className="border p-2">{evidence}</td>
                    <td className="border p-2">{count}</td>
                    <td className="border p-2">{((count / totalTagged) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">3. Answers to Core Research Questions</h2>
            <p className="italic text-slate-500 mb-4">Each answer follows the 3-layer format: Insight → Data Proof → Customer Voice</p>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q1. Why do users add fashion products to their wishlist?</h3>
              <p className="mb-2"><strong>Insight:</strong> Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a "holding area" while they evaluate whether Myntra can be trusted to deliver, process returns, and issue refunds reliably.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> 59.7% of analyzed reviews cited Trust Deficit as the primary decision driver. 68.8% of users were classified as "Trust-Gated Shoppers" — users who like the product but pause due to operational anxiety.</p>
              <p className="text-slate-600 italic">Customer Voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account."</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q2. What prevents wishlisted products from eventually being purchased?</h3>
              <p className="mb-2"><strong>Insight:</strong> The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns) and that support will be unresponsive.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> 54.3% of evidence types were Delivery Complaints, followed by 6.3% Return Anxiety. Only 3.2% were traditional Cart Abandonment, suggesting the friction is not at checkout but in the trust layer before checkout.</p>
              <p className="text-slate-600 italic">Customer Voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders."</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q3. What uncertainties remain after users have identified a product they like?</h3>
              <p className="mb-2"><strong>Insight:</strong> Even after deciding they want a product, users remain uncertain about three things: (1) Will it be delivered on time? (2) If it doesn't fit, will the return process be smooth? (3) Will I actually get my refund?</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> 13.6% of reviews specifically cited Delivery Anxiety as the decision driver. Return Anxiety accounted for 6.3% of all evidence types.</p>
              <p className="text-slate-600 italic">Customer Voice: "Myntra's return policy is complicated when you receive the wrong product."</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q4. What causes users to postpone a purchase?</h3>
              <p className="mb-2"><strong>Insight:</strong> Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines, order status updates, or refund progress — so they choose to wait rather than risk a bad experience.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> Delivery Complaint was the single largest evidence type at 54.3%. When combined with Return Anxiety (6.3%), post-purchase operational friction accounts for 60.6% of all behavioral evidence.</p>
              <p className="text-slate-600 italic">Customer Voice: "After waiting for 10-20 days, they cancelled the order."</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q5. How do users compare multiple shortlisted products?</h3>
              <p className="mb-2"><strong>Insight:</strong> Users compare products not on design or price, but on perceived operational risk. They look at which items have better return guarantees, more reviews confirming accuracy, and faster delivery promises.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> Trust Deficit (59.7%) dominates over Price Sensitivity (4.5%) as a decision driver by a ratio of roughly 13:1, indicating that risk perception outweighs price comparison.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q6. What information do users seek outside the app before purchasing?</h3>
              <p className="mb-2"><strong>Insight:</strong> Play Store users largely stay within the app ecosystem. YouTube users seek out influencer "try-on hauls" and "Myntra vs Reality" comparison videos to visually validate fabric quality and fit before purchasing.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> Our YouTube scraper found 12 haul videos with high-intent comments. The dominant YouTube-specific barrier was the visual/fabric reality gap between catalog photos and actual product appearance.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q7. What role do fit, size, styling, reviews, occasion and social validation play?</h3>
              <p className="mb-2"><strong>Insight:</strong> While fit and sizing uncertainty exists, it is secondary to the trust and delivery crisis identified in this dataset. Social validation (reading other buyers' experiences) is used primarily to assess operational reliability rather than product aesthetics.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> Trust-Gated Shoppers (68.8%) vastly outnumber Fit-Anxious Shoppers in our tagged data, suggesting that for this user base, operational trust is a larger barrier than sizing uncertainty.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q8. When do users use the wishlist as genuine purchase intent versus bookmarking?</h3>
              <p className="mb-2"><strong>Insight:</strong> Genuine purchase intent is observed when users actively monitor wishlisted items for restocks or delivery availability improvements. Passive bookmarking occurs when users save an item but have already mentally disqualified the platform due to a past negative experience.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> 1.8% of evidence was Repeat Purchase (indicating genuine re-engagement), while the majority was complaint-driven, suggesting many wishlists are "dormant" due to eroded trust.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q9. How do these behaviors differ across user segments?</h3>
              <p className="mb-2"><strong>Insight:</strong> The overwhelming majority (68.8%) of analyzed users fall into the "Trust-Gated Shopper" segment. These are users who have the intent and the budget to buy, but are held back by platform reliability concerns. Deal Seekers (6.3%) exist but are a much smaller segment in this dataset.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> Cross-pattern analysis shows Trust Deficit × Trust-Gated Shopper as the single most dominant co-occurrence in our heatmap, confirming this is the primary behavioral cluster to target.</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Q10. What unmet needs emerge consistently across user conversations?</h3>
              <p className="mb-2"><strong>Insight:</strong> Three unmet needs emerge consistently: (1) Transparent, real-time order and refund status tracking, (2) A simplified, guaranteed return process, and (3) Reliable delivery with proactive communication about delays.</p>
              <p className="text-indigo-600 mb-2"><strong>Data Proof:</strong> These three needs map directly to the top evidence types: Delivery Complaint (54.3%), Return Anxiety (6.3%), and the dominant Trust Deficit driver (59.7%).</p>
              <p className="text-slate-600 italic">Customer Voice: "Cancellation after waiting for 8 days is unbearable."</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">4. Cross-Pattern Analysis</h2>
            <p>The cross-pattern heatmap (Decision Driver × User Segment) reveals that the single most dominant behavioral cluster is:</p>
            <div className="p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg font-bold text-indigo-900">
              Trust Deficit × Trust-Gated Shopper
            </div>
            <p>This co-occurrence appears in approximately <strong>56.1%</strong> of the {totalTagged} LLM-analyzed Play Store signals ({crossPatternTop} of {totalTagged}), making it the clearest, most actionable opportunity area for the Growth team.</p>
            <p className="font-bold mt-2">Secondary patterns include:</p>
            <ul className="list-disc pl-5">
              <li>Delivery Anxiety × Trust-Gated Shopper (11.8%)</li>
              <li>Deal Seeker combinations (Price Sensitivity/Convenience)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">5. High-Potential Opportunity Areas</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-lg">Opportunity Area 1: Rebuilding Operational Trust</h3>
                <p>The largest cluster of users are willing buyers held back by platform reliability fears. Addressing trust directly on the product page and wishlist could unlock significant conversion.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Opportunity Area 2: Eliminating Delivery Anxiety</h3>
                <p>Delivery complaints dominate the evidence base. Users need proactive, transparent communication about delivery timelines.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Opportunity Area 3: Simplifying the Return Experience</h3>
                <p>Return Anxiety is the second-largest evidence type. Users hesitate to convert wishlisted items because they fear being stuck with a product that doesn't fit.</p>
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
