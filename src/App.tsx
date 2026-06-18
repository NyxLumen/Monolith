import { useState } from 'react';
import { Header } from './components/Header';
import type { ViewType } from './types';
import { NavigationDock } from './components/NavigationDock';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('showcase');
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [btnState, setBtnState] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(3);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center bg-mono-bg text-slate-800 transition-colors duration-300">
      
      {/* Skeuomorphic Header Section */}
      <Header />

      {/* Main Console Viewport */}
      <main className="w-full max-w-5xl flex-grow flex flex-col justify-center items-center">
        
        {/* Temporary layout contents to show view switching state */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl shadow-recessed bg-slate-200/50">
          
          <section className="p-6 rounded-xl shadow-raised bg-mono-bg flex flex-col gap-4">
            <h2 className="text-xl text-slate-800 font-light tracking-wide">Tactile Module</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-body">
              This panel demonstrates skeuomorphic elevation physics. Click the button to toggle shadow states and increment the cart indicator.
            </p>
            
            <button
              onClick={() => {
                setBtnState(!btnState);
                setCartCount((c) => c + 1);
              }}
              className={`mt-4 py-3 px-6 rounded-lg text-xs font-mono tracking-widest transition-spring ${
                btnState 
                  ? 'shadow-key-recessed text-slate-900' 
                  : 'shadow-key-raised text-slate-600'
              }`}
            >
              {btnState ? 'DEPRESSED' : 'ELEVATED'}
            </button>
          </section>

          <section className="p-6 rounded-xl shadow-recessed bg-mono-bg flex flex-col gap-4">
            <h2 className="text-xl text-slate-800 font-light tracking-wide">Viewport Controls</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-body">
              Select an interface section from the controller below, or manually trigger views here (Selected Detail: {activeProductId !== null ? `#${activeProductId}` : 'NONE'}):
            </p>
            
            <div className="grid grid-cols-2 gap-3 mt-2">
              {(['showcase', 'detail', 'cart', 'system'] as ViewType[]).map((v) => (
                <button
                  key={v}
                  onClick={() => {
                    setCurrentView(v);
                    if (v !== 'detail') {
                      setActiveProductId(null);
                    } else {
                      setActiveProductId(101); // Mock product detail trigger
                    }
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-spring uppercase tracking-wider ${
                    currentView === v
                      ? 'shadow-key-recessed text-slate-950 font-bold'
                      : 'shadow-key-raised text-slate-500'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </section>

        </div>

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

export default App;
