import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import VisualReportsView from './components/VisualReportsView';
import RawDataView from './components/RawDataView';
import ScraperView from './components/ScraperView';
import HowItWorksView from './components/HowItWorksView';

export default function App() {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <div className="p-lg md:p-xl flex-1 max-w-container-max mx-auto w-full">
          {activeView === 'overview' && <DashboardView />}
          {activeView === 'visuals' && <VisualReportsView />}
          {activeView === 'raw' && <RawDataView />}
          {activeView === 'scraper' && <ScraperView />}
          {activeView === 'how' && <HowItWorksView />}
        </div>
      </div>
    </div>
  );
}
