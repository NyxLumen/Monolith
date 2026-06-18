import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-5xl mx-auto mb-8 p-6 rounded-2xl shadow-raised bg-mono-bg flex justify-between items-center transition-spring">
      
      {/* Premium Elegant Brand Name */}
      <div className="flex items-center gap-3">
        <span className="font-heading text-lg font-light tracking-[0.25em] text-slate-900 select-none">
          MONOLITH
        </span>
        {/* Sleek connection dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
      </div>

    </header>
  );
};
