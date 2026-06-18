import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface ShowcaseProps {
  onSelectProduct: (productId: number) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onSelectProduct }) => {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12 select-none">
      
      {/* ================= HERO SLIDER / BANNER SECTION ================= */}
      <div className="w-full rounded-[2rem] bg-gradient-to-br from-[#E2E8F0]/30 to-[#CBD5E1]/20 p-6 md:p-12 relative flex flex-col sm:flex-row justify-between items-center overflow-hidden border border-white/60 shadow-raised min-h-[220px]">
        
        {/* Left Column: Title & Specs */}
        <div className="flex flex-col items-start text-left z-10 max-w-md">
          <span className="font-mono text-[8px] font-extrabold tracking-[0.25em] text-slate-400 select-none uppercase">
            New Collection
          </span>
          <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 max-w-xs">
            Built for life. Designed to last.
          </h1>
          <button className="mt-6 px-6 py-2.5 rounded-full shadow-key-raised bg-white border border-white flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest hover:bg-slate-50 transition-spring cursor-pointer active:scale-95 text-slate-800 select-none">
            <span>SHOP NOW</span>
            <ArrowRight className="w-3 h-3 text-slate-700" />
          </button>
        </div>

        {/* Right Column: Hero Pedestal Sphere (loaded from public folder) */}
        <div className="mt-6 sm:mt-0 relative w-44 h-44 sm:w-60 sm:h-60 flex items-center justify-center shrink-0">
          {/* Subtle pedestal shadow overlay */}
          <img 
            src="/hero.png" 
            alt="Timeless Essentials Sphere" 
            className="max-h-full max-w-full object-contain select-none" 
            draggable={false}
          />
        </div>
      </div>

      {/* Hero Page Dot Indicators */}
      <div className="flex justify-center items-center gap-2 -mt-4">
        <span className="w-2 h-2 rounded-full bg-slate-900"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
      </div>

      {/* ================= FEATURED PRODUCTS HEADER ================= */}
      <div className="flex justify-between items-center mt-2 px-1">
        <h2 className="font-heading text-sm md:text-base font-extrabold tracking-wide text-slate-900">
          Featured Products
        </h2>
        <button className="flex items-center gap-1.5 py-1.5 px-4 rounded-full shadow-key-raised bg-white text-[9px] font-mono font-extrabold tracking-widest text-slate-500 hover:text-slate-800 border border-white/60 transition-spring cursor-pointer active:scale-95">
          <span>VIEW ALL</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ================= FEATURED PRODUCTS GRID ================= */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 px-0.5">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onSelect={onSelectProduct} 
          />
        ))}
      </div>

    </section>
  );
};
