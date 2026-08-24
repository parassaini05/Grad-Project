import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import RawDataView from './components/RawDataView';
import ScraperView from './components/ScraperView';
import SimulatorView from './components/SimulatorView';

export default function App() {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <div className="p-lg md:p-xl flex-1 max-w-container-max mx-auto w-full">
          {activeView === 'overview' && <DashboardView />}
          {activeView === 'raw' && <RawDataView />}
          {activeView === 'scraper' && <ScraperView />}
          {activeView === 'simulator' && <SimulatorView />}
        </div>
      </div>
    </div>
  );
}
