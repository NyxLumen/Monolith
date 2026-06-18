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
      tooltip: 'Catalog Grid'
    },
    {
      id: 'cart' as ViewType,
      label: 'CART',
      icon: ShoppingBag,
      tooltip: 'Checkout Ledger',
      badge: cartCount
    },
    {
      id: 'system' as ViewType,
      label: 'SYSTEM',
      icon: Settings,
      tooltip: 'Hardware Parameters'
    }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 p-2 rounded-full shadow-raised bg-white/90 backdrop-blur-md border border-slate-200 transition-spring">
      {/* Recessed track container */}
      <div className="flex items-center gap-3 p-1 rounded-full bg-slate-100">
        
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
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/25 font-bold'
                  : 'bg-white border border-slate-200 shadow-sm text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[6px] tracking-widest font-extrabold mt-0.5">{item.label}</span>

              {/* Cart Count Badge */}
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white font-mono font-bold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-[0_0_6px_#ea580c] animate-badge-scale border border-orange-400">
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
