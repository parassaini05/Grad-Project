import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import ScraperView from './components/ScraperView';
import SimulatorView from './components/SimulatorView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      {activeView === 'dashboard' && <DashboardView />}
      {activeView === 'scraper' && <ScraperView />}
      {activeView === 'simulator' && <SimulatorView />}
    </div>
  );
}
