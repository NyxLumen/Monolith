import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [btnState, setBtnState] = useState<boolean>(false)

  // Synchronize Dark Mode Class
  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      root.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-mono-bg dark:bg-mono-bgdark transition-colors duration-300">
      
      {/* Header System Bar */}
      <header className="w-full max-w-4xl mb-8 flex justify-between items-center p-4 rounded-xl shadow-raised dark:shadow-raised-dark bg-mono-bg dark:bg-mono-bgdark">
        <div className="flex items-center gap-3">
          {/* LED Indicator */}
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse-slow"></div>
          <span className="font-mono text-xs tracking-widest text-slate-500 dark:text-slate-400">
            MONOLITH // SYSTEM ACTIVE
          </span>
        </div>
        
        {/* Dark Mode Switcher */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider shadow-key-raised dark:shadow-key-raised-dark active:shadow-key-recessed dark:active:shadow-key-recessed-dark transition-spring bg-mono-bg dark:bg-mono-bgdark"
        >
          THEME: {darkMode ? 'DARK' : 'LIGHT'}
        </button>
      </header>

      {/* Main Console Canvas */}
      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl shadow-recessed dark:shadow-recessed-dark bg-slate-200/50 dark:bg-slate-900/30">
        
        {/* Raised Panel Card */}
        <section className="p-6 rounded-xl shadow-raised dark:shadow-raised-dark bg-mono-bg dark:bg-mono-bgdark flex flex-col gap-4">
          <h2 className="text-xl text-slate-800 dark:text-slate-100">Elevated Console Module</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            This module appears elevated above the main base plate. It uses custom external light highlights on the top-left and shadow drops on the bottom-right.
          </p>
          
          {/* Tactile Button */}
          <button
            onClick={() => setBtnState(!btnState)}
            className={`mt-4 py-3 px-6 rounded-lg text-sm font-semibold transition-spring ${
              btnState 
                ? 'shadow-key-recessed dark:shadow-key-recessed-dark text-emerald-600 dark:text-emerald-400' 
                : 'shadow-key-raised dark:shadow-key-raised-dark text-slate-700 dark:text-slate-300'
            }`}
          >
            {btnState ? 'STATE: DEPRESSED' : 'STATE: ELEVATED (CLICK ME)'}
          </button>
        </section>

        {/* Recessed Frame Bay */}
        <section className="p-6 rounded-xl shadow-recessed dark:shadow-recessed-dark bg-mono-bg dark:bg-mono-bgdark flex flex-col gap-4">
          <h2 className="text-xl text-slate-800 dark:text-slate-100">Carved Recess Frame</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            This frame uses matching inset shadows to simulate a carved pockets or bays in the physical console sheet. Perfect for inputs and media.
          </p>
          
          {/* Inner Recessed Box */}
          <div className="w-full h-32 rounded-lg shadow-recessed dark:shadow-recessed-dark bg-slate-100/50 dark:bg-slate-950/20 flex items-center justify-center border border-slate-300/10">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
              [ EMBEDDED BAY AREA ]
            </span>
          </div>
        </section>

      </main>

      <footer className="mt-8 font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-wider">
        PHYSICAL INTERFACE PHYSICS V1.0 // SOLID MILL SHEET DESIGN
      </footer>
    </div>
  )
}

export default App
