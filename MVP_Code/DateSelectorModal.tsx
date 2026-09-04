import React, { useState } from 'react';

interface DateSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDate: (date: string) => void;
}

export default function DateSelectorModal({ isOpen, onClose, onSelectDate }: DateSelectorModalProps) {
  const [selected, setSelected] = useState<number | null>(null);

  if (!isOpen) return null;

  // Generate next 7 days for the mockup
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      dateObj: d,
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
      fullString: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  });

  const handleConfirm = () => {
    if (selected !== null) {
      onSelectDate(dates[selected].fullString);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Schedule Delivery</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">Select a guaranteed delivery date to lock in your slot before moving to bag.</p>
          
          <div className="grid grid-cols-4 gap-2">
            {dates.map((d, idx) => (
              <div 
                key={idx}
                onClick={() => setSelected(idx)}
                className={`cursor-pointer flex flex-col items-center justify-center p-2 rounded-md border-2 transition-all ${selected === idx ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'}`}
              >
                <span className={`text-xs font-semibold ${selected === idx ? 'text-pink-600' : 'text-gray-500'}`}>{d.dayName}</span>
                <span className={`text-lg font-bold ${selected === idx ? 'text-pink-600' : 'text-gray-900'}`}>{d.dayNum}</span>
                <span className={`text-[10px] ${selected === idx ? 'text-pink-500' : 'text-gray-400'}`}>{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 text-sm font-bold text-gray-600 border border-gray-300 rounded-sm hover:bg-gray-50">CANCEL</button>
          <button 
            onClick={handleConfirm} 
            disabled={selected === null}
            className={`flex-1 py-3 text-sm font-bold text-white rounded-sm ${selected === null ? 'bg-gray-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 shadow-md'}`}
          >
            CONFIRM SLOT
          </button>
        </div>
      </div>
    </div>
  );
}
