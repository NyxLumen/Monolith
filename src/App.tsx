import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Cart from './components/Cart';
import About from './components/About';
import Shop from './components/Shop';
import { useCart } from './context/CartContext';
import { AnimatePresence, motion } from 'motion/react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cart' | 'about' | 'shop'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-mono-bg text-mono-text font-body pb-24 lg:pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        <Header 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <main className="flex-1 w-full">
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div key="home" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                <Hero setCurrentPage={setCurrentPage} />
                <FeaturedProducts searchQuery={searchQuery} setCurrentPage={setCurrentPage} />
              </motion.div>
            )}
            {currentPage === 'shop' && (
              <motion.div key="shop" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                <Shop searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              </motion.div>
            )}
            {currentPage === 'cart' && (
              <motion.div key="cart" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                <Cart />
              </motion.div>
            )}
            {currentPage === 'about' && (
              <motion.div key="about" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                <About />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="w-full py-8 lg:py-12 flex justify-center items-center">
          <p className="text-[0.65rem] lg:text-xs text-mono-muted font-bold tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} nyxlumen
          </p>
        </footer>
      </div>

      {/* Bottom pill navigation as shown in the layout (duplicate of header nav for mobile/bottom floating) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <nav className="flex items-center gap-2 bg-mono-bg px-2 py-2 rounded-full shadow-neo border border-white/30">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all text-[0.65rem] font-bold relative ${currentPage === 'home' ? 'bg-mono-bg shadow-neo-inset text-mono-text' : 'hover:bg-mono-bg hover:shadow-neo-inset text-mono-muted font-medium'}`}
          >
            <span className="w-5 h-5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
            Home
            {currentPage === 'home' && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>}
          </button>
          <button 
            onClick={() => setCurrentPage('shop')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all text-[0.65rem] font-bold relative ${currentPage === 'shop' ? 'bg-mono-bg shadow-neo-inset text-mono-text' : 'hover:bg-mono-bg hover:shadow-neo-inset text-mono-muted font-medium'}`}
          >
            <span className="w-5 h-5 flex items-center justify-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M15 21V9"/></svg>
            </span>
            Shop
            {currentPage === 'shop' && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>}
          </button>
          <button 
            onClick={() => setCurrentPage('about')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all text-[0.65rem] font-bold relative ${currentPage === 'about' ? 'bg-mono-bg shadow-neo-inset text-mono-text' : 'hover:bg-mono-bg hover:shadow-neo-inset text-mono-muted font-medium'}`}
          >
            <span className="w-5 h-5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            About
            {currentPage === 'about' && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;
