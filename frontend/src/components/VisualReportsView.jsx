import React from 'react';
import { decisionDriversData, userSegmentsData, evidenceTypesData, crossPatternData } from '../data/discoveryData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend, Cell as PieCell } from 'recharts';

const COLORS = ['#3525cd', '#831ada', '#0555dd', '#9e41f5', '#4f46e5'];

export default function VisualReportsView() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in h-full pb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">Visual Reports</h2>
        <a 
          href="/discovery-report.pdf" 
          download 
          className="flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full font-label-sm font-bold transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download Full Report
        </a>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 h-96">
          <h4 className="font-title-md font-bold text-slate-800 border-b border-slate-200 pb-2">Decision Drivers</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={decisionDriversData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 20 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} style={{ fill: '#475569', fontWeight: 600, fontSize: 12 }} />
              <Tooltip cursor={{fill: 'rgba(255,255,255,0.4)'}} contentStyle={{borderRadius: '12px', border: '1px solid rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.8)'}}/>
              <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
                {decisionDriversData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 h-96">
          <h4 className="font-title-md font-bold text-slate-800 border-b border-slate-200 pb-2">Evidence Types</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={evidenceTypesData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value" label={({name, value}) => `${value}%`}>
                {evidenceTypesData.map((entry, index) => (
                  <PieCell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{borderRadius: '12px', border: '1px solid rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.8)'}}/>
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 h-96">
          <h4 className="font-title-md font-bold text-slate-800 border-b border-slate-200 pb-2">User Segments</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={userSegmentsData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({name, value}) => `${name}: ${value}%`}>
                {userSegmentsData.map((entry, index) => (
                  <PieCell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{borderRadius: '12px', border: '1px solid rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.8)'}}/>
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 h-96">
          <h4 className="font-title-md font-bold text-slate-800 border-b border-slate-200 pb-2">Top Cross-Patterns</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={crossPatternData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10}} interval={0} angle={-15} textAnchor="end"/>
              <YAxis hide />
              <Tooltip cursor={{fill: 'rgba(255,255,255,0.4)'}} contentStyle={{borderRadius: '12px', border: '1px solid rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.8)'}}/>
              <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={40}>
                {crossPatternData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[(index + 1) % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
