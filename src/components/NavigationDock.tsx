import React from 'react';
import type { ViewType } from '../types';
import { Home, ShoppingBag, User } from 'lucide-react';

interface NavigationDockProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  cartCount: number;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  currentView,
  setCurrentView,
  cartCount,
}) => {
  const navItems = [
    {
      id: 'showcase' as ViewType,
      label: 'Home',
      icon: Home,
      tooltip: 'Catalog Home'
    },
    {
      id: 'cart' as ViewType,
      label: 'Cart',
      icon: ShoppingBag,
      tooltip: 'Shopping Ledger',
      badge: cartCount
    },
    {
      id: 'about' as ViewType,
      label: 'About',
      icon: User,
      tooltip: 'Brand Story'
    }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 p-2 rounded-full shadow-raised bg-white/90 backdrop-blur-md border border-white/80 w-80 max-w-[95%] transition-spring">
      <div className="flex items-center justify-around p-0.5 rounded-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          // Determine if active (handle showcase/detail mapping)
          const isActive = 
            currentView === item.id || 
            (item.id === 'showcase' && currentView === 'detail');
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              title={item.tooltip}
              className={`relative flex flex-col items-center justify-center py-1 px-4 rounded-2xl transition-spring cursor-pointer select-none ${
                isActive
                  ? 'text-slate-900 font-bold scale-105'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              {/* Highlight background circle for active item */}
              {isActive && (
                <span className="absolute inset-0 bg-[#F4F4F6] shadow-key-raised rounded-2xl border border-white/70 -z-10 animate-fade-in"></span>
              )}

              <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110 text-slate-900' : 'text-slate-400'}`} />
              <span className="text-[8px] tracking-wider mt-1 select-none uppercase font-semibold">
                {item.label}
              </span>

              {/* Badge Counter */}
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-950 text-white font-mono font-bold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm border border-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
