import React, { useState } from 'react';
import DateSelectorModal from './DateSelectorModal';

export default function ValidationHub() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scheduledDate, setScheduledDate] = useState<string | null>(null);

  return (
    <div className="w-full bg-white flex flex-col space-y-2 mt-3 px-4 pb-4">
      {/* 1. Return Transparency Badge */}
      <div className="flex items-center space-x-2 bg-gray-50 border border-gray-100 rounded-sm p-2">
        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        <span className="text-[11px] font-semibold text-gray-700">7 Days Hassle-Free Return Guaranteed</span>
      </div>

      {/* 2. The "Need it By?" / Commitment State */}
      {!scheduledDate ? (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-between w-full p-2 border border-dashed border-gray-300 rounded-sm hover:border-pink-500 hover:bg-pink-50 transition-colors group"
        >
          <div className="flex items-center space-x-2 text-gray-600 group-hover:text-pink-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span className="text-xs font-semibold">Need it for an event? Schedule Delivery</span>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      ) : (
        <div className="flex flex-col p-2 bg-green-50 border border-green-200 rounded-sm animate-fade-in">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-xs font-bold text-green-800">Delivery on {scheduledDate} locked.</span>
          </div>
          <span className="text-[10px] font-medium text-green-600 mt-0.5 ml-6">Move to Bag in 15:00 to secure slot.</span>
        </div>
      )}

      {/* Render the Modal */}
      <DateSelectorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelectDate={setScheduledDate}
      />
    </div>
  );
}
