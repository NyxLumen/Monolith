import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Cart from './components/Cart';
import { useCart } from './context/CartContext';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cart'>('home');
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-mono-bg text-mono-text font-body pb-24 lg:pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        <Header setCurrentPage={setCurrentPage} />
        
        <main className="flex-1 flex flex-col items-center">
          {currentPage === 'home' ? (
            <>
              <Hero />
              <FeaturedProducts />
            </>
          ) : (
            <Cart />
          )}
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
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all text-[0.65rem] font-bold ${currentPage === 'home' ? 'bg-mono-bg shadow-neo-inset text-mono-text' : 'hover:bg-mono-bg hover:shadow-neo-inset text-mono-muted font-medium'}`}
          >
            <span className="w-5 h-5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('cart')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all text-[0.65rem] font-bold relative ${currentPage === 'cart' ? 'bg-mono-bg shadow-neo-inset text-mono-text' : 'hover:bg-mono-bg hover:shadow-neo-inset text-mono-muted font-medium'}`}
          >
            <span className="w-5 h-5 flex items-center justify-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              {/* Cart Badge Mobile */}
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-[0.5rem] font-bold">
                  {cartItems.length}
                </span>
              )}
            </span>
            Cart
            {currentPage === 'cart' && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>}
          </button>
          <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-full hover:bg-mono-bg hover:shadow-neo-inset transition-all text-[0.65rem] font-medium text-mono-muted">
            <span className="w-5 h-5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            About
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;
