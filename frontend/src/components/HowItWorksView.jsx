import React, { useState } from 'react';

// Exact 5-layer architecture from docs/architecture.md
const layers = [
  {
    id: 1,
    label: 'Data Ingestion',
    icon: 'cloud_download',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    accentBorder: 'border-l-emerald-400',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotClass: 'bg-emerald-400',
    title: 'Data Ingestion Layer',
    nodes: ['Google Play Store', 'YouTube', 'Data Aggregator'],
    description:
      'Raw feedback is gathered from two platforms, both filtered at source by wishlist and cart-related keywords before aggregation.',
    bullets: [
      {
        icon: 'shop',
        title: 'Play Store Scraper',
        body: 'Uses google-play-scraper to fetch large volumes of Myntra reviews, filtering locally for keywords like wishlist, cart, hesitate, price drop, and size.',
      },
      {
        icon: 'video_library',
        title: 'YouTube API Module',
        body: 'Uses google-api-python-client to search "Myntra wishlist haul" and "Myntra wishlist vs reality", extracting video titles and comment threads.',
      },
    ],
    tech: ['google-play-scraper', 'google-api-python-client', 'Python'],
  },
  {
    id: 2,
    label: 'Data Processing',
    icon: 'filter_alt',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    accentBorder: 'border-l-blue-400',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    dotClass: 'bg-blue-400',
    title: 'Data Processing & Storage Layer',
    nodes: ['Data Cleaner & Filter', 'Raw Data Storage'],
    description:
      'The aggregated data passes through a strict multi-rule cleaner before being stored. Only texts containing genuine save, wishlist, hesitate, or compare signals reach the LLM.',
    bullets: [
      {
        icon: 'cleaning_services',
        title: 'Data Cleaner & Filter',
        body: 'Standard text cleaning followed by strict keyword filtering. Removes noise: reviews under 8 words, emoji-only posts, non-English text, and generic praise with no behavioral signal.',
      },
      {
        icon: 'database',
        title: 'Raw Data Storage',
        body: 'Filtered records are persisted locally as structured JSON (normalized_reviews.json) ready for batched LLM processing.',
      },
    ],
    tech: ['Pandas', 'Regex', 'LangDetect', 'JSON'],
  },
  {
    id: 3,
    label: 'LLM Processing',
    icon: 'psychology',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    accentBorder: 'border-l-indigo-400',
    badgeClass: 'bg-white/20 text-indigo-100 border-white/30',
    dotClass: 'bg-indigo-300',
    title: 'LLM Processing Layer',
    nodes: ['Prompt Builder', 'Groq LLM API', 'Response Parser'],
    highlight: true,
    description:
      'The core intelligence engine. Each filtered record is passed through a behavioral PM prompt to Groq (Llama 3), which extracts structured JSON tags instead of simple sentiment scores.',
    bullets: [
      {
        icon: 'edit_note',
        title: 'Prompt Builder: Behavioral Focus',
        body: 'Constructs prompts instructing Groq to act as a behavioral product manager — identifying the specific friction point, the user\'s underlying need, and categorising the non-monetary barrier.',
      },
      {
        icon: 'bolt',
        title: 'Groq LLM API',
        body: 'Handles batched inference endpoints. Groq\'s low-latency inference (< 2s per record) makes large-volume tagging feasible without rate-limit bottlenecks.',
      },
      {
        icon: 'data_object',
        title: 'Response Parser',
        body: 'Validates and extracts the JSON output — pulling out decision_driver, user_segment, evidence_type, unmet_need, suggested_feature, and non_monetary_barrier per record.',
      },
    ],
    tech: ['Groq API', 'Llama 3', 'FastAPI', 'JSON Parsing'],
  },
  {
    id: 4,
    label: 'Insights & Presentation',
    icon: 'bar_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    accentBorder: 'border-l-purple-400',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    dotClass: 'bg-purple-400',
    title: 'Insights & Presentation Layer',
    nodes: ['Quantified Insights Database', 'Visualization / Dashboarding', 'Final Discovery Report'],
    description:
      'LLM-tagged records are aggregated into a quantified insights database. Cross-pattern analysis surfaces dominant behavioral clusters, visualised across Decision Drivers, User Segments, and Evidence Types.',
    bullets: [
      {
        icon: 'storage',
        title: 'Quantified Insights Database',
        body: 'Stores final LLM-evaluated records. Distributions are computed across decision drivers, user segments, and evidence types — giving numerical backing to each behavioral claim.',
      },
      {
        icon: 'monitoring',
        title: 'Visualization / Dashboarding',
        body: 'Charts showing the most common non-monetary barriers preventing 30-day wishlist conversion. Filterable by source (Play Store / YouTube) and by category.',
      },
      {
        icon: 'description',
        title: 'Final Discovery Report',
        body: 'A structured breakdown of findings highlighting non-monetary opportunity areas — Trust Deficit (61.1%), Delivery Anxiety (16.7%), and Price Sensitivity (11.1%) — for the Growth team.',
      },
    ],
    tech: ['Python', 'JSON', 'Cross-pattern Analysis'],
  },
  {
    id: 5,
    label: 'Interactive UI',
    icon: 'devices',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    accentBorder: 'border-l-rose-400',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    dotClass: 'bg-rose-400',
    title: 'Interactive UI Layer (Live Prototype)',
    nodes: ['React Dashboard', 'Live Scraper Simulation'],
    description:
      'The final layer is this dashboard — a live, clickable prototype built on top of the discovery findings. It serves as the artefact for stakeholder review.',
    bullets: [
      {
        icon: 'dashboard',
        title: 'React Dashboard',
        body: 'A live, clickable interface to explore discovery findings dynamically — viewing Trust Deficit percentages by source, filtering Core Findings by category, and reading verbatim user quotes.',
      },
      {
        icon: 'terminal',
        title: 'Live Scraper Simulation',
        body: 'A visual terminal demonstrating the ingestion pipeline actively filtering noise and categorising high-intent wishlist behaviours, with real-time dynamic graphing based on data source.',
      },
    ],
    tech: ['React', 'Vite', 'Recharts', 'FastAPI', 'Vercel', 'Railway'],
  },
];

const FlowArrow = () => (
  <>
    <div className="hidden lg:flex items-center justify-center w-8 shrink-0">
      <svg className="flowing-arrow w-full h-5 text-primary/40" viewBox="0 0 80 20" fill="none">
        <path className="dashed-line" d="M0,10 L68,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M63,5 L71,10 L63,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex lg:hidden items-center justify-center h-8 shrink-0">
      <svg className="flowing-arrow h-full w-5 text-primary/40" viewBox="0 0 20 80" fill="none">
        <path className="dashed-line" d="M10,0 L10,68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5,63 L10,71 L15,63" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </>
);

export default function HowItWorksView() {
  const [active, setActive] = useState(0);
  const layer = layers[active];

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-10">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-primary">How It Works</h2>
        <p className="text-sm text-slate-500 mt-1">
          A 5-layer AI pipeline — from raw Play Store &amp; YouTube data to quantified behavioral insights.
          Click any layer to explore.
        </p>
      </div>

      {/* Pipeline flow strip */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-0 w-full overflow-x-auto py-1">
        {layers.map((l, i) => {
          const isActive = active === i;
          const isHighlight = l.highlight;
          return (
            <React.Fragment key={l.id}>
              <button
                onClick={() => setActive(i)}
                className={`
                  relative flex flex-col items-center gap-2 px-4 py-3 rounded-2xl text-center
                  transition-all duration-250 cursor-pointer select-none shrink-0 w-full lg:w-36
                  ${isHighlight
                    ? 'bg-gradient-to-br from-primary to-indigo-800 text-white shadow-xl border border-white/20'
                    : 'glass-card hover:shadow-md'}
                  ${isActive && !isHighlight ? 'ring-2 ring-primary/60 -translate-y-1 shadow-lg' : ''}
                  ${isActive && isHighlight ? 'ring-2 ring-white/50 -translate-y-1' : ''}
                  ${!isActive ? 'hover:-translate-y-0.5' : ''}
                `}
              >
                <span className={`text-[10px] font-black tracking-widest uppercase opacity-40 ${isHighlight ? 'text-white' : 'text-slate-400'}`}>
                  Layer {l.id}
                </span>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isHighlight ? 'bg-white/20' : l.iconBg}`}>
                  <span className={`material-symbols-outlined text-[18px] ${isHighlight ? 'text-white' : l.iconColor}`}>{l.icon}</span>
                </div>
                <span className={`text-xs font-bold leading-tight ${isHighlight ? 'text-white' : 'text-slate-700'}`}>{l.label}</span>
                {isActive && (
                  <span className={`w-1.5 h-1.5 rounded-full ${isHighlight ? 'bg-white' : 'bg-primary'}`} />
                )}
              </button>
              {i < layers.length - 1 && <FlowArrow />}
            </React.Fragment>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        key={layer.id}
        className={`animate-fade-in glass-card rounded-2xl overflow-hidden border-l-4 ${layer.accentBorder}`}
      >
        <div className="flex flex-col md:flex-row">

          {/* Left — description + bullets */}
          <div className="flex-1 p-6 flex flex-col gap-5">

            {/* Title row */}
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${layer.highlight ? 'bg-indigo-100' : layer.iconBg}`}>
                <span className={`material-symbols-outlined text-xl ${layer.highlight ? 'text-indigo-600' : layer.iconColor}`}>{layer.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{layer.title}</h3>
                {/* Architecture nodes */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {layer.nodes.map((n) => (
                    <span key={n} className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${layer.badgeClass}`}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{layer.description}</p>

            {/* Component bullets */}
            <div className="flex flex-col gap-3">
              {layer.bullets.map((b) => (
                <div key={b.title} className="flex gap-3 bg-white/60 rounded-xl p-3 border border-white">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${layer.highlight ? 'bg-indigo-100' : layer.iconBg}`}>
                    <span className={`material-symbols-outlined text-base ${layer.highlight ? 'text-indigo-600' : layer.iconColor}`}>{b.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-800">{b.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tech stack */}
          <div className="md:w-52 p-6 bg-slate-50/60 border-t md:border-t-0 md:border-l border-white/60 flex flex-col gap-4 shrink-0">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {layer.tech.map((t) => (
                  <span key={t} className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${layer.badgeClass}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Mermaid node reference */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Architecture Nodes</p>
              <div className="flex flex-col gap-1.5">
                {layer.nodes.map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${layer.dotClass}`} />
                    <code className="text-[11px] text-slate-600 font-mono leading-tight">{n}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav dots */}
      <div className="flex items-center justify-center gap-2">
        {layers.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-200 ${
              active === i ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Bottom pipeline summary */}
      <div className="glass-card rounded-2xl p-5 grid grid-cols-2 md:grid-cols-5 gap-4">
        {layers.map((l) => (
          <button
            key={l.id}
            onClick={() => setActive(l.id - 1)}
            className={`flex flex-col items-center gap-1.5 rounded-xl p-2 transition-all ${
              active === l.id - 1 ? 'bg-white/80 shadow-sm ring-1 ring-primary/30' : 'hover:bg-white/40'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${l.iconBg}`}>
              <span className={`material-symbols-outlined text-[16px] ${l.iconColor}`}>{l.icon}</span>
            </div>
            <span className="text-[10px] font-bold text-slate-600 text-center leading-tight">{l.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
