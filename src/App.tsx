import { useState } from 'react';
import { Header } from './components/Header';
import type { ViewType } from './types';
import { NavigationDock } from './components/NavigationDock';
import { CartProvider, useCart } from './context/CartContext';
import { Showcase } from './components/Showcase';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { SystemDashboard } from './components/SystemDashboard';
import { About } from './components/About';

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('showcase');
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const { cartCount } = useCart();

  const handleSelectProduct = (productId: number) => {
    setActiveProductId(productId);
    setCurrentView('detail');
  };

  return (
    <div className="min-h-screen p-4 md:p-6 flex flex-col items-center text-slate-800 bg-[#F4F4F6] relative w-full">
      
      {/* Header Section */}
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Viewport */}
      <main className="w-full max-w-5xl flex-grow flex flex-col justify-start items-center my-6">
        
        {currentView === 'showcase' && (
          <Showcase onSelectProduct={handleSelectProduct} />
        )}

        {currentView === 'detail' && activeProductId !== null && (
          <ProductDetail 
            productId={activeProductId} 
            onBack={() => {
              setActiveProductId(null);
              setCurrentView('showcase');
            }} 
          />
        )}

        {currentView === 'cart' && (
          <Cart onReturnToShop={() => setCurrentView('showcase')} />
        )}

        {currentView === 'about' && (
          <About onReturnToShop={() => setCurrentView('showcase')} />
        )}

        {currentView === 'system' && (
          <SystemDashboard />
        )}

      </main>

      {/* Floating Navigation Dock (Mobile Footer Capsule) */}
      <NavigationDock 
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartCount}
      />

      <footer className="mt-8 mb-24 font-mono text-[9px] text-slate-400 tracking-[0.2em] uppercase flex items-center gap-2 select-none">
        <span>MONOLITH // TIMELESS ESSENTIALS</span>
        <button 
          onClick={() => setCurrentView('system')} 
          className="text-slate-300 hover:text-slate-500 cursor-pointer ml-1 transition-colors"
          title="Hardware Telemetry Configuration"
        >
          ⚙️
        </button>
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
