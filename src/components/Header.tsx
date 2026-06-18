import { Search, Home, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full pt-8 pb-4 px-6 lg:px-12 flex items-center justify-between z-10 relative">
      {/* Mobile Menu Button */}
      <div className="flex-1 lg:hidden">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all text-mono-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none">
        <h1 className="text-3xl font-heading font-medium tracking-widest text-mono-text">
          monolith
        </h1>
        <span className="text-[0.65rem] tracking-[0.2em] text-mono-muted uppercase font-body mt-1">
          Timeless Essentials
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <div className="flex items-center gap-2 bg-mono-bg px-2 py-2 rounded-full shadow-neo-sm border border-white/20">
          <a href="#" className="flex items-center gap-2 px-6 py-2 rounded-full bg-mono-bg shadow-neo-inset transition-all text-sm font-medium text-mono-text">
            <Home size={16} /> Home
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-2 rounded-full hover:bg-mono-bg hover:shadow-neo-inset transition-all text-sm font-medium text-mono-muted">
            <ShoppingCart size={16} /> Cart
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-2 rounded-full hover:bg-mono-bg hover:shadow-neo-inset transition-all text-sm font-medium text-mono-muted">
            <User size={16} /> About
          </a>
        </div>
      </nav>

      {/* Search Button */}
      <div className="flex-1 flex justify-end">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all text-mono-text">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}
