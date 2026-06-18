import React, { useState, useEffect } from 'react';
import type { ViewType } from '../types';
import { Cpu, Wifi } from 'lucide-react';

interface HeaderProps {
  currentView: ViewType;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, darkMode, setDarkMode }) => {
  const [latency, setLatency] = useState<number>(14);

  // Simulate subtle variance in latency to make the console feel "alive"
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return next > 6 && next < 30 ? next : prev;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full max-w-5xl mx-auto mb-8 p-4 md:p-5 rounded-2xl shadow-raised dark:shadow-raised-dark bg-mono-bg dark:bg-mono-bgdark flex flex-col sm:flex-row justify-between items-center gap-4 transition-spring">
      
      {/* Brand & Connection State */}
      <div className="flex items-center gap-4">
        {/* Physical Logo Plate */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-recessed dark:shadow-recessed-dark bg-slate-300/30 dark:bg-slate-950/20 font-mono font-bold text-sm tracking-wider text-slate-800 dark:text-slate-200">
          <Cpu className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          <span>MONOLITH // V1.0</span>
        </div>
        
        {/* Pulse LED Status Light */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden md:inline">
            CONNECTED
          </span>
        </div>
      </div>

      {/* Digital Control Display (Debossed Screen) */}
      <div className="flex items-center gap-6 px-4 py-2 rounded-xl shadow-recessed dark:shadow-recessed-dark bg-slate-950 text-emerald-400/90 dark:text-emerald-400 font-mono text-xs tracking-wider w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-2 border-r border-emerald-950 pr-4">
          <span className="text-emerald-700 select-none">VIEW:</span>
          <span className="uppercase font-bold">{currentView}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
          <span className="text-emerald-700 select-none font-bold">LAT:</span>
          <span>{latency}ms</span>
        </div>
      </div>

      {/* Tactile Toggle Switch (Theme Switcher) */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 tracking-wider">
          THEME UNIT
        </span>
        
        {/* The Toggle Track */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme Mode"
          className="relative w-14 h-7 rounded-full shadow-recessed dark:shadow-recessed-dark bg-slate-300 dark:bg-slate-950 p-1 flex items-center transition-all duration-300 cursor-pointer"
        >
          {/* Active indicator LED inside the switcher */}
          <div 
            className={`absolute top-[9px] left-[7px] w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              darkMode ? 'bg-orange-500 shadow-[0_0_8px_#f97316]' : 'bg-slate-400'
            }`}
          />
          
          {/* Toggle Knob / Slider */}
          <div 
            className={`w-5 h-5 rounded-full shadow-key-raised dark:shadow-key-raised-dark bg-slate-100 dark:bg-slate-700 transition-all duration-300 ease-spring transform ${
              darkMode ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

    </header>
  );
};
