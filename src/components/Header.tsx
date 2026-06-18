import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

interface HeaderProps {
  currentPage: 'home' | 'cart' | 'about' | 'shop';
  setCurrentPage: (page: 'home' | 'cart' | 'about' | 'shop') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ currentPage, setCurrentPage, searchQuery, setSearchQuery }: HeaderProps) {
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
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('home')} 
          className="text-sm font-bold text-mono-text hover:text-mono-muted transition-colors relative"
        >
          Home
          {currentPage === 'home' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>}
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('shop')} 
          className="text-sm font-bold text-mono-text hover:text-mono-muted transition-colors relative"
        >
          Shop
          {currentPage === 'shop' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>}
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('about')} 
          className="text-sm font-bold text-mono-text hover:text-mono-muted transition-colors relative"
        >
          About
          {currentPage === 'about' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mono-text"></div>}
        </motion.button>
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
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('cart')} 
          className="relative w-10 h-10 rounded-full flex justify-center items-center bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mono-text"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          {cartItems.length > 0 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-mono-text text-mono-bg flex items-center justify-center text-[0.55rem] font-bold animate-badge-scale">
              {cartItems.length}
            </div>
          )}
        </motion.button>
      </div>
    </header>
  );
}
