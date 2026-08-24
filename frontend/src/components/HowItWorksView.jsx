import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    label: 'Data Ingestion',
    icon: 'cloud_download',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    accentColor: 'border-emerald-400',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: '1. Data Ingestion Layer',
    subtitle: 'Multi-source raw data collection',
    description:
      'Two parallel scrapers ingest unstructured qualitative data from real users — Play Store reviews and YouTube haul video comments — using keyword-targeted queries to maximise signal density.',
    details: [
      { icon: 'shop',          label: 'Play Store', value: '9,115 reviews scraped' },
      { icon: 'video_library', label: 'YouTube',    value: '12 haul videos scraped' },
    ],
    tech: ['google-play-scraper', 'yt-dlp', 'Python'],
    keywords: ['wishlist', 'cart', 'hesitate', 'save', 'price drop', 'waiting'],
  },
  {
    id: 2,
    label: 'Noise Filtering',
    icon: 'filter_alt',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    accentColor: 'border-blue-400',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    title: '2. Noise Filtering Layer',
    subtitle: 'Signal isolation from raw noise',
    description:
      'A multi-rule quality filter discards 90%+ of noise. Rules remove reviews under 8 words, emoji-only responses, Hindi-language text, and generic praise with no behavioral signal.',
    details: [
      { icon: 'delete_sweep', label: 'Removed',  value: '~8,906 low-quality records' },
      { icon: 'verified',     label: 'Retained', value: '221 high-intent signals' },
    ],
    tech: ['Pandas', 'Regex', 'LangDetect'],
    keywords: ['< 8 words → drop', 'Emoji-only → drop', 'Hindi → drop', 'Generic praise → drop'],
  },
  {
    id: 3,
    label: 'Groq LLM Engine',
    icon: 'psychology',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    accentColor: 'border-indigo-300',
    badgeColor: 'bg-white/20 text-indigo-100 border-white/30',
    title: '3. Groq LLM Engine',
    subtitle: 'Structured behavioral tagging via prompt engineering',
    description:
      'Each filtered signal is passed to Groq (Llama 3) with a Growth PM persona prompt. The LLM extracts 6 structured enum tags per record — going far beyond simple positive/negative sentiment.',
    details: [
      { icon: 'label',     label: 'Tags per record', value: '6 behavioral dimensions' },
      { icon: 'bolt',      label: 'Inference speed', value: '< 2s per record (Groq)' },
    ],
    tech: ['Groq API', 'Llama 3', 'FastAPI', 'Prompt Engineering'],
    keywords: ['decision_driver', 'user_segment', 'evidence_type', 'unmet_need', 'suggested_feature', 'non_monetary_barrier'],
    highlight: true,
  },
  {
    id: 4,
    label: 'Storage & Serving',
    icon: 'database',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    accentColor: 'border-amber-400',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    title: '4. Storage & Serving',
    subtitle: 'Structured persistence and API layer',
    description:
      'Tagged records are normalised and stored as structured JSON. A FastAPI backend exposes REST endpoints — enabling the frontend to fetch live scrapes, pre-processed insights, and cross-pattern data on demand.',
    details: [
      { icon: 'storage',      label: 'Format',   value: 'JSON (normalised_reviews.json)' },
      { icon: 'api',          label: 'Backend',  value: 'FastAPI on Railway' },
    ],
    tech: ['FastAPI', 'JSON', 'Railway', 'REST API'],
    keywords: ['/api/scrape', '/api/insights', '/api/patterns'],
  },
  {
    id: 5,
    label: 'Opportunity Synthesis',
    icon: 'bar_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    accentColor: 'border-purple-400',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    title: '5. Opportunity Synthesis',
    subtitle: 'Quantified insight presentation',
    description:
      'Cross-pattern analysis surfaces the dominant behavioral clusters. The interactive dashboard lets researchers filter by category, source, and segment to explore which non-monetary barriers most block the 30-day wishlist conversion metric.',
    details: [
      { icon: 'trending_up', label: 'Top cluster',  value: 'Trust Deficit × Trust-Gated Shopper (61.1%)' },
      { icon: 'target',      label: 'North Star',   value: '30-day wishlist conversion rate' },
    ],
    tech: ['React', 'Vite', 'Recharts', 'Vercel'],
    keywords: ['categoryDist', 'segmentDist', 'evidenceDist', 'crossPattern'],
  },
];

const FlowArrow = ({ highlight }) => (
  <>
    {/* Horizontal arrow (desktop) */}
    <div className="hidden lg:flex items-center justify-center w-10 shrink-0">
      <svg className={`flowing-arrow w-full h-6 ${highlight ? 'text-white/60' : 'text-primary/50'}`} viewBox="0 0 100 20" fill="none">
        <path className="dashed-line" d="M0,10 L88,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M82,4 L92,10 L82,16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    {/* Vertical arrow (mobile) */}
    <div className="flex lg:hidden items-center justify-center h-10 shrink-0">
      <svg className="flowing-arrow h-full w-6 text-primary/50" viewBox="0 0 20 100" fill="none">
        <path className="dashed-line" d="M10,0 L10,88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4,82 L10,92 L16,82" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </>
);

function StepCard({ step, isActive, onClick }) {
  const isHighlight = step.highlight;

  return (
    <div
      onClick={onClick}
      className={`
        relative flex flex-col items-center text-center gap-3 p-5 rounded-2xl cursor-pointer
        transition-all duration-300 select-none shrink-0
        ${isHighlight
          ? 'bg-gradient-to-br from-primary to-indigo-800 text-white shadow-2xl border border-white/20'
          : 'glass-card hover:shadow-lg'
        }
        ${isActive && !isHighlight ? 'ring-2 ring-primary/60 shadow-lg -translate-y-1' : ''}
        ${isActive && isHighlight ? 'ring-2 ring-white/60 shadow-2xl -translate-y-1' : ''}
        ${!isActive ? 'hover:-translate-y-1' : ''}
        w-full lg:w-44
      `}
    >
      {/* Step number */}
      <span className={`absolute top-2 right-3 text-[10px] font-black tracking-wider opacity-40 ${isHighlight ? 'text-white' : 'text-slate-400'}`}>
        0{step.id}
      </span>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-inner shrink-0 ${isHighlight ? 'bg-white/20 backdrop-blur-sm' : step.iconBg}`}>
        <span className={`material-symbols-outlined text-2xl ${isHighlight ? 'text-white' : step.iconColor}`}>
          {step.icon}
        </span>
      </div>

      {/* Label */}
      <div>
        <p className={`text-xs font-black uppercase tracking-wider mb-0.5 ${isHighlight ? 'text-indigo-200' : 'text-slate-400'}`}>
          Layer {step.id}
        </p>
        <h3 className={`text-sm font-extrabold leading-tight ${isHighlight ? 'text-white' : 'text-slate-800'}`}>
          {step.label}
        </h3>
      </div>

      {/* Active indicator dot */}
      {isActive && (
        <span className={`w-1.5 h-1.5 rounded-full ${isHighlight ? 'bg-white' : 'bg-primary'}`} />
      )}
    </div>
  );
}

export default function HowItWorksView() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-10">

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-extrabold text-primary">How It Works</h2>
        <p className="text-sm text-slate-500">
          A 5-layer AI pipeline converting raw user noise into quantified behavioral insights.
          Click any layer to explore.
        </p>
      </div>

      {/* Pipeline flow (top) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-2 lg:gap-0 w-full overflow-x-auto py-2">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <StepCard
              step={s}
              isActive={activeStep === i}
              onClick={() => setActiveStep(i)}
            />
            {i < steps.length - 1 && <FlowArrow highlight={activeStep === i && s.highlight} />}
          </React.Fragment>
        ))}
      </div>

      {/* Detail panel */}
      <div
        key={step.id}
        className={`animate-fade-in glass-card rounded-2xl overflow-hidden border-l-4 ${step.accentColor}`}
      >
        <div className={`flex flex-col md:flex-row gap-0 ${step.highlight ? 'bg-gradient-to-r from-indigo-50 to-white' : ''}`}>

          {/* Left — main info */}
          <div className="flex-1 p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${step.iconBg}`}>
                <span className={`material-symbols-outlined text-xl ${step.iconColor}`}>{step.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{step.title}</h3>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{step.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {step.details.map((d, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl p-3 border border-white">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${step.iconBg}`}>
                    <span className={`material-symbols-outlined text-base ${step.iconColor}`}>{d.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{d.label}</p>
                    <p className="text-sm font-bold text-slate-800 leading-tight">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tech + tags */}
          <div className="md:w-64 p-6 bg-slate-50/60 border-t md:border-t-0 md:border-l border-white/60 flex flex-col gap-4">

            {/* Tech stack */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {step.tech.map((t) => (
                  <span key={t} className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${step.badgeColor}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Keywords / enum tags */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                {step.id === 3 ? 'Enum Tags Extracted' : step.id === 2 ? 'Filter Rules' : step.id === 4 ? 'API Endpoints' : 'Keywords Used'}
              </p>
              <div className="flex flex-col gap-1">
                {step.keywords.map((k) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${step.iconBg.replace('bg-', 'bg-').replace('-100', '-400')}`} />
                    <code className="text-[11px] text-slate-600 font-mono">{k}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step nav dots */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`rounded-full transition-all duration-200 ${
              activeStep === i
                ? 'w-6 h-2 bg-primary'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            title={s.label}
          />
        ))}
      </div>

      {/* Pipeline stats bar */}
      <div className="glass-card rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Sources Scraped',     value: '9,127',  icon: 'download',      color: 'text-emerald-600' },
          { label: 'Noise Filtered Out',  value: '97.6%',  icon: 'delete_sweep',  color: 'text-red-500' },
          { label: 'LLM-Tagged Signals',  value: '221',    icon: 'psychology',    color: 'text-indigo-600' },
          { label: 'Enum Tags / Record',  value: '6',      icon: 'label',         color: 'text-purple-600' },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <span className={`material-symbols-outlined text-2xl ${stat.color}`}>{stat.icon}</span>
            <div>
              <p className="text-xl font-extrabold text-slate-800">{stat.value}</p>
              <p className="text-[11px] text-slate-500 font-semibold">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
