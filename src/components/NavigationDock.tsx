import React from 'react';
import type { ViewType } from '../types';
import { LayoutGrid, ShoppingBag, Settings } from 'lucide-react';

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
      label: 'SHOP',
      icon: LayoutGrid,
      tooltip: 'Browse catalog'
    },
    {
      id: 'cart' as ViewType,
      label: 'CART',
      icon: ShoppingBag,
      tooltip: 'View cart',
      badge: cartCount
    },
    {
      id: 'system' as ViewType,
      label: 'SYSTEM',
      icon: Settings,
      tooltip: 'System dashboard'
    }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 p-2 rounded-full shadow-raised bg-mono-bg border border-slate-200/10 transition-spring">
      {/* Recessed track container */}
      <div className="flex items-center gap-3 p-1.5 rounded-full shadow-recessed bg-slate-200/50">
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              title={item.tooltip}
              className={`relative w-12 h-12 rounded-full flex flex-col items-center justify-center font-mono transition-spring cursor-pointer select-none ${
                isActive
                  ? 'shadow-key-recessed text-slate-900 font-bold bg-slate-300/35'
                  : 'shadow-key-raised text-slate-500 hover:text-slate-700 bg-mono-bg active:shadow-key-recessed'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[7px] tracking-widest font-bold mt-0.5">{item.label}</span>

              {/* Cart Count Badge */}
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white font-mono font-bold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-[0_0_6px_#f97316] animate-badge-scale border border-orange-400">
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
