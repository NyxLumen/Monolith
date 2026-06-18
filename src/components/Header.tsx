import React from 'react';
import type { ViewType } from '../types';
import { Menu, Search } from 'lucide-react';

interface HeaderProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'showcase' as ViewType, label: 'Home' },
    { id: 'cart' as ViewType, label: 'Cart' },
    { id: 'about' as ViewType, label: 'About' },
  ];

  return (
    <header className="w-full max-w-5xl mx-auto mb-6 p-4 flex justify-between items-center relative select-none">
      
      {/* ================= MOBILE HEADER LAYOUT (Hidden on MD+) ================= */}
      <div className="flex sm:hidden w-full justify-between items-center">
        {/* Menu Circular Button */}
        <button className="w-10 h-10 rounded-full bg-[#F4F4F6] shadow-key-raised border border-white/60 flex items-center justify-center cursor-pointer active:scale-95 transition-spring">
          <Menu className="w-4 h-4 text-slate-700" />
        </button>

        {/* Brand Logo & Subtitle */}
        <div className="flex flex-col items-center">
          <span 
            onClick={() => setCurrentView('showcase')}
            className="font-heading text-2xl font-bold tracking-[0.1em] text-slate-950 cursor-pointer lowercase select-none"
          >
            monolith
          </span>
          <span className="font-mono text-[6px] text-slate-400 tracking-[0.35em] mt-0.5 select-none uppercase font-semibold">
            Timeless Essentials
          </span>
        </div>

        {/* Search Circular Button */}
        <button className="w-10 h-10 rounded-full bg-[#F4F4F6] shadow-key-raised border border-white/60 flex items-center justify-center cursor-pointer active:scale-95 transition-spring">
          <Search className="w-4 h-4 text-slate-700" />
        </button>
      </div>

      {/* ================= DESKTOP HEADER LAYOUT (Hidden on Mobile) ================= */}
      <div className="hidden sm:flex w-full justify-between items-center">
        
        {/* Left: Brand Logo & Subtitle */}
        <div 
          onClick={() => setCurrentView('showcase')}
          className="flex flex-col items-start cursor-pointer"
        >
          <span className="font-heading text-2xl font-bold tracking-[0.1em] text-slate-950 lowercase select-none">
            monolith
          </span>
          <span className="font-mono text-[6px] text-slate-400 tracking-[0.35em] mt-0.5 select-none uppercase font-semibold">
            Timeless Essentials
          </span>
        </div>

        {/* Center: Recessed Navigation Capsule */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-[#E5E5E7] shadow-recessed border border-white/30">
          {navItems.map((item) => {
            // Map sub-views to determine active states
            const isActive = 
              currentView === item.id || 
              (item.id === 'showcase' && currentView === 'detail');
            
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`py-1.5 px-6 rounded-full font-mono text-[10px] tracking-wider transition-spring cursor-pointer select-none font-bold ${
                  isActive
                    ? 'shadow-key-raised bg-white text-slate-900 border border-white/80'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-white/20'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right: Search Circular Button */}
        <button className="w-10 h-10 rounded-full bg-[#F4F4F6] shadow-key-raised border border-white/60 flex items-center justify-center cursor-pointer active:scale-95 transition-spring">
          <Search className="w-4 h-4 text-slate-700" />
        </button>

      </div>

    </header>
  );
};
