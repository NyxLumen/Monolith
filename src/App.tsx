import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="min-h-screen bg-mono-bg text-mono-text font-body pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <FeaturedProducts />
        </main>
      </div>

      {/* Bottom pill navigation as shown in the layout (duplicate of header nav for mobile/bottom floating) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <nav className="flex items-center gap-2 bg-mono-bg px-2 py-2 rounded-full shadow-neo border border-white/30">
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 rounded-full bg-mono-bg shadow-neo-inset transition-all text-[0.65rem] font-bold text-mono-text">
            <span className="w-5 h-5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
            Home
          </a>
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 rounded-full hover:bg-mono-bg hover:shadow-neo-inset transition-all text-[0.65rem] font-medium text-mono-muted">
            <span className="w-5 h-5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></span>
            Cart
          </a>
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 rounded-full hover:bg-mono-bg hover:shadow-neo-inset transition-all text-[0.65rem] font-medium text-mono-muted">
            <span className="w-5 h-5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            About
          </a>
        </nav>
      </div>
    </div>
  );
}

export default App;
