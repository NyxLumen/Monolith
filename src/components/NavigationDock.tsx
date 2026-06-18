import React from 'react';
import type { ViewType } from '../types';
import { LayoutGrid, ShoppingBag, Settings, FileText } from 'lucide-react';

interface NavigationDockProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  activeProductId: number | null;
  cartCount: number;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  currentView,
  setCurrentView,
  activeProductId,
  cartCount,
}) => {
  
  const navItems = [
    {
      id: 'showcase' as ViewType,
      label: 'SHOWCASE',
      icon: LayoutGrid,
      enabled: true,
      tooltip: 'Browse inventory catalog'
    },
    {
      id: 'detail' as ViewType,
      label: 'PRODUCT',
      icon: FileText,
      enabled: activeProductId !== null,
      tooltip: activeProductId !== null ? 'Inspect active product specs' : 'Select a product first'
    },
    {
      id: 'cart' as ViewType,
      label: 'CART',
      icon: ShoppingBag,
      enabled: true,
      tooltip: 'View shopping basket',
      badge: cartCount
    },
    {
      id: 'system' as ViewType,
      label: 'SYSTEM',
      icon: Settings,
      enabled: true,
      tooltip: 'Configure console system'
    }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 p-2.5 rounded-2xl shadow-raised dark:shadow-raised-dark bg-mono-bg dark:bg-mono-bgdark border border-slate-200/10 transition-spring max-w-[92vw] sm:max-w-xl">
      {/* Recessed track container */}
      <div className="flex items-center gap-2 sm:gap-4 p-1 rounded-xl shadow-recessed dark:shadow-recessed-dark bg-slate-200/70 dark:bg-slate-900/60">
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          const isDisabled = !item.enabled;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                if (!isDisabled) setCurrentView(item.id);
              }}
              disabled={isDisabled}
              title={item.tooltip}
              className={`relative py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg flex flex-col items-center gap-1 font-mono transition-spring cursor-pointer select-none ${
                isDisabled
                  ? 'opacity-40 cursor-not-allowed shadow-none'
                  : isActive
                  ? 'shadow-key-recessed dark:shadow-key-recessed-dark text-emerald-600 dark:text-emerald-400 font-bold bg-slate-300/20 dark:bg-slate-950/20'
                  : 'shadow-key-raised dark:shadow-key-raised-dark text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 bg-mono-bg dark:bg-mono-bgdark active:shadow-key-recessed dark:active:shadow-key-recessed-dark'
              }`}
            >
              {/* LED Active indicator light above/next to label */}
              <div 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 mb-1 ${
                  isDisabled
                    ? 'bg-slate-500/30'
                    : isActive
                    ? 'bg-emerald-500 shadow-[0_0_6px_#10b981]'
                    : 'bg-slate-400 dark:bg-slate-700'
                }`}
              />

              {/* Icon & Label */}
              <div className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-widest hidden sm:inline">{item.label}</span>
              </div>

              {/* Cart Count Badge */}
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white font-mono font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-[0_0_6px_#f97316] animate-badge-scale border border-orange-400">
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
