import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  setCurrentPage: (page: 'home' | 'cart') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ setCurrentPage, searchQuery, setSearchQuery }: HeaderProps) {
  const { cartItems } = useCart();

  return (
    <header className="w-full pt-8 pb-4 px-6 lg:px-12 flex items-center justify-between z-10 relative">
      {/* Mobile Menu Button */}
      <div className="flex-1 lg:hidden">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all text-mono-text">
          <Menu size={20} />
        </button>
      </div>

      {/* Logo */}
      <div className="flex-1 flex justify-center lg:justify-start">
        <div 
          className="flex flex-col cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <h1 className="text-3xl font-heading font-medium tracking-widest text-mono-text">
            monolith
          </h1>
          <span className="text-[0.6rem] font-bold tracking-[0.3em] text-mono-muted uppercase mt-1">
            Timeless Essentials
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-1 justify-center items-center gap-12">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="text-sm font-bold text-mono-text hover:text-mono-muted transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('cart')} 
          className="text-sm font-bold text-mono-text hover:text-mono-muted transition-colors relative"
        >
          Shop
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>
        </button>
        <a href="#" className="text-sm font-bold text-mono-text hover:text-mono-muted transition-colors">About</a>
      </nav>

      {/* Actions */}
      <div className="flex-1 flex justify-end items-center gap-4">
        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center bg-mono-bg shadow-neo-inset-sm rounded-full px-5 py-3 w-64 border border-transparent focus-within:border-white/20 transition-colors">
          <Search size={16} className="text-mono-muted mr-3" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="bg-transparent border-none outline-none text-xs font-medium w-full text-mono-text placeholder:text-mono-muted"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Mobile Search Icon */}
        <button className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all text-mono-text">
          <Search size={20} />
        </button>

        {/* Cart Button */}
        <button 
          onClick={() => setCurrentPage('cart')}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all text-mono-text relative"
        >
          <ShoppingCart size={20} />
          {/* Cart Badge */}
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-[0.6rem] font-bold">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
