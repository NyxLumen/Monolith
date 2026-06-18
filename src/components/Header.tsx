import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-5xl mx-auto mb-8 p-6 rounded-2xl shadow-raised bg-gradient-to-br from-slate-100 to-slate-200/90 border border-white/50 flex flex-col sm:flex-row justify-between items-center gap-4 transition-spring">
      
      {/* Brand & Precise Specs */}
      <div className="flex flex-col">
        <span className="font-heading text-lg font-extrabold tracking-[0.35em] text-slate-900 select-none">
          MONOLITH
        </span>
        <span className="font-mono text-[7px] text-slate-400 tracking-[0.25em] mt-1 select-none uppercase">
          Tactile E-Commerce Console
        </span>
      </div>

      {/* Hardware Printed Details */}
      <div className="flex items-center gap-6 font-mono text-[8px] text-slate-400 tracking-[0.15em] font-semibold">
        <div className="flex flex-col items-end">
          <span className="text-slate-300">DEVICE REF</span>
          <span className="text-slate-700">MNLH-01</span>
        </div>
        
        {/* Skeuomorphic Rotary Dial (Rotates on hover) */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="text-slate-300">VOLUME</span>
            <span className="text-slate-700">7.2</span>
          </div>
          <div className="w-6 h-6 rounded-full shadow-key-raised bg-mono-bg border border-white/60 flex items-center justify-center cursor-pointer hover:rotate-45 transition-transform duration-300">
            {/* Dial indicator mark */}
            <div className="w-[1.5px] h-2 bg-slate-400 -translate-y-1.5 rounded-full"></div>
          </div>
        </div>
      </div>

    </header>
  );
};
