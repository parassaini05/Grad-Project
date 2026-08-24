import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { Target, TrendingUp, Users, Activity } from 'lucide-react';
import insightsData from '../data/llm_insights.json';

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];

const StatCard = ({ icon: Icon, title, value, subtitle }) => (
  <div className="glass-card p-6 flex items-center space-x-4">
    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="text-2xl font-bold text-slate-100">{value}</h3>
      {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
    </div>
  </div>
);

export default function Dashboard() {
  const data = useMemo(() => {
    const valid = insightsData.filter(d => d.is_relevant);
    
    // Aggregations
    const barriers = {};
    const segments = {};
    const drivers = {};

    valid.forEach(item => {
      barriers[item.non_monetary_barrier] = (barriers[item.non_monetary_barrier] || 0) + 1;
      segments[item.user_segment] = (segments[item.user_segment] || 0) + 1;
      drivers[item.decision_driver] = (drivers[item.decision_driver] || 0) + 1;
    });

    const formatData = (obj) => Object.entries(obj)
      .map(([name, value]) => ({ name: name === 'Not Mentioned' ? 'Unknown' : name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    return {
      totalAnalyzed: insightsData.length,
      relevant: valid.length,
      barrierData: formatData(barriers),
      segmentData: formatData(segments),
      driverData: formatData(drivers)
    };
  }, []);

  return (
    <div className="space-y-6 animate-fade-in p-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={Activity} title="Total Processed" value={data.totalAnalyzed} subtitle="Raw reviews ingested" />
        <StatCard icon={Target} title="Relevant Intent" value={data.relevant} subtitle="Wishlist/Purchase related" />
        <StatCard icon={TrendingUp} title="Top Barrier" value={data.barrierData[0]?.name || '-'} subtitle={`${data.barrierData[0]?.value || 0} occurrences`} />
        <StatCard icon={Users} title="Key Segment" value={data.segmentData[0]?.name || '-'} subtitle={`${data.segmentData[0]?.value || 0} users`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-200">Non-Monetary Barriers</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.barrierData} layout="vertical" margin={{ left: 50, right: 20 }}>
                <XAxis type="number" stroke="#64748b" />
                <YAxis dataKey="name" type="category" stroke="#64748b" width={100} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px'}} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {data.barrierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-200">User Segments</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data.segmentData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                  {data.segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px'}} />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{fontSize: '12px', color: '#94a3b8'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
