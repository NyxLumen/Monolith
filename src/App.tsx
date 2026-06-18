import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import type { ViewType } from './types';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<ViewType>('showcase');
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [btnState, setBtnState] = useState<boolean>(false);

  // Synchronize Dark Mode Class on the document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center bg-mono-bg dark:bg-mono-bgdark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Skeuomorphic Header Section */}
      <Header 
        currentView={currentView} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Console Viewport */}
      <main className="w-full max-w-5xl flex-grow flex flex-col justify-center items-center">
        
        {/* Temporary layout contents to show view switching state */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl shadow-recessed dark:shadow-recessed-dark bg-slate-200/50 dark:bg-slate-900/30">
          
          <section className="p-6 rounded-xl shadow-raised dark:shadow-raised-dark bg-mono-bg dark:bg-mono-bgdark flex flex-col gap-4">
            <h2 className="text-xl text-slate-800 dark:text-slate-100">Elevated Console Module</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
              Active view state is tracked by the parent controller. Use the navigation dock (coming in Checkpoint 4) to toggle views.
            </p>
            
            <button
              onClick={() => setBtnState(!btnState)}
              className={`mt-4 py-3 px-6 rounded-lg text-sm font-semibold transition-spring ${
                btnState 
                  ? 'shadow-key-recessed dark:shadow-key-recessed-dark text-emerald-600 dark:text-emerald-400 font-mono' 
                  : 'shadow-key-raised dark:shadow-key-raised-dark text-slate-700 dark:text-slate-300 font-mono'
              }`}
            >
              {btnState ? 'STATE: DEPRESSED' : 'STATE: ELEVATED (CLICK ME)'}
            </button>
          </section>

          <section className="p-6 rounded-xl shadow-recessed dark:shadow-recessed-dark bg-mono-bg dark:bg-mono-bgdark flex flex-col gap-4">
            <h2 className="text-xl text-slate-800 dark:text-slate-100">Quick View Switch Demo</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
              Directly toggle the views below (Active Product ID: {activeProductId !== null ? activeProductId : 'NONE'}):
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
                      ? 'shadow-key-recessed dark:shadow-key-recessed-dark text-emerald-600 dark:text-emerald-400 font-bold'
                      : 'shadow-key-raised dark:shadow-key-raised-dark text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </section>

        </div>

      </main>

      <footer className="mt-8 font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-wider">
        PHYSICAL INTERFACE PHYSICS V1.0 // SOLID MILL SHEET DESIGN
      </footer>
    </div>
  );
}

export default App;
