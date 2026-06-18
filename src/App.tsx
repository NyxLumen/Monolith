import { useState } from 'react';
import { Header } from './components/Header';
import type { ViewType } from './types';
import { NavigationDock } from './components/NavigationDock';
import { CartProvider, useCart } from './context/CartContext';
import { Showcase } from './components/Showcase';

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('showcase');
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const { cartCount } = useCart();

  const handleSelectProduct = (productId: number) => {
    setActiveProductId(productId);
    setCurrentView('detail');
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center bg-mono-bg text-slate-800 transition-colors duration-300">
      
      {/* Skeuomorphic Header Section */}
      <Header />

      {/* Main Console Viewport */}
      <main className="w-full max-w-5xl flex-grow flex flex-col justify-start items-center my-6">
        
        {currentView === 'showcase' && (
          <Showcase onSelectProduct={handleSelectProduct} />
        )}

        {currentView === 'detail' && (
          <div className="w-full p-8 rounded-2xl shadow-recessed bg-slate-200/50 flex flex-col items-center justify-center min-h-[30rem] gap-4">
            <h2 className="text-xl font-light tracking-wide text-slate-800">PRODUCT INSPECT BAY</h2>
            <p className="text-sm font-mono text-slate-500">
              Active Inspect ID: #{activeProductId}
            </p>
            <p className="text-xs text-slate-500 max-w-md text-center leading-relaxed font-body">
              Product details console is coming in Checkpoint 6. Select the Shop key in the dock to return to the catalog.
            </p>
          </div>
        )}

        {currentView === 'cart' && (
          <div className="w-full p-8 rounded-2xl shadow-recessed bg-slate-200/50 flex flex-col items-center justify-center min-h-[30rem] gap-4">
            <h2 className="text-xl font-light tracking-wide text-slate-800">SHOPPING CART LEDGER</h2>
            <p className="text-sm font-mono text-slate-500">
              Total items in ledger: {cartCount}
            </p>
            <p className="text-xs text-slate-500 max-w-md text-center leading-relaxed font-body">
              Tactile shopping ledger and checkout sliders are coming in Checkpoint 7.
            </p>
          </div>
        )}

        {currentView === 'system' && (
          <div className="w-full p-8 rounded-2xl shadow-recessed bg-slate-200/50 flex flex-col items-center justify-center min-h-[30rem] gap-4">
            <h2 className="text-xl font-light tracking-wide text-slate-800">SYSTEM ADJUSTMENT BOARD</h2>
            <p className="text-xs text-slate-500 max-w-md text-center leading-relaxed font-body">
              Physical shadow controls, latency adjustment dials, and system stats are coming in Checkpoint 8.
            </p>
          </div>
        )}

      </main>

      {/* Floating Skeuomorphic Navigation Dock */}
      <NavigationDock 
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartCount}
      />

      <footer className="mt-8 mb-24 font-mono text-[9px] text-slate-400 tracking-[0.2em] uppercase">
        MONOLITH // PREMIUM TACTILE HARDWARE
      </footer>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
