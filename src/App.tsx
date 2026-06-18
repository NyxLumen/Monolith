import { useState } from 'react';
import { Header } from './components/Header';
import type { ViewType } from './types';
import { NavigationDock } from './components/NavigationDock';
import { CartProvider, useCart } from './context/CartContext';
import { Showcase } from './components/Showcase';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { SystemDashboard } from './components/SystemDashboard';

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

        {currentView === 'system' && (
          <SystemDashboard />
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
