import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { RefreshCw, Tag, AlertCircle } from 'lucide-react';

interface ShowcaseProps {
  onSelectProduct: (productId: number) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL PRODUCTS' },
    { id: "electronics", label: 'ELECTRONICS' },
    { id: "jewelery", label: 'JEWELRY' },
    { id: "men's clothing", label: 'MEN CLOTHING' },
    { id: "women's clothing", label: 'WOMEN CLOTHING' },
  ];

  const fetchProducts = async (isRetry = false) => {
    if (isRetry) {
      setLoading(true);
      setError(null);
    }
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Signal response was not successful');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown communication error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Signal response was not successful');
        }
        const data = await response.json();
        if (active) {
          setProducts(data);
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : 'Unknown communication error');
          setLoading(false);
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      
      {/* Skeuomorphic Category Segmented Tabs */}
      <div className="w-full overflow-x-auto pb-3 console-scrollbar">
        <div className="flex items-center gap-3 p-1.5 rounded-xl shadow-recessed bg-slate-100 border border-slate-200 min-w-max">
          <div className="flex items-center gap-1.5 px-3 py-1 font-mono text-[9px] tracking-widest text-slate-500 font-bold border-r border-slate-200 mr-1 select-none">
            <Tag className="w-3.5 h-3.5" />
            <span>CATEGORIES:</span>
          </div>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-3.5 rounded-lg font-mono text-[10px] tracking-wider transition-spring cursor-pointer select-none ${
                  isActive
                    ? 'shadow-key-recessed text-slate-900 font-bold bg-white border border-slate-200'
                    : 'shadow-key-raised text-slate-500 hover:text-slate-700 bg-white hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Showcase Grid Bay */}
      {loading ? (
        /* Skeuomorphic Loading Bay */
        <div className="w-full h-96 rounded-2xl shadow-recessed bg-slate-200/40 flex flex-col items-center justify-center gap-4">
          <RefreshCw className="w-8 h-8 text-slate-400 animate-spin" />
          <span className="font-mono text-xs text-slate-500 tracking-[0.15em] uppercase animate-pulse">
            LOADING DATA STREAM...
          </span>
        </div>
      ) : error ? (
        /* Skeuomorphic Error Panel */
        <div className="w-full p-12 rounded-2xl shadow-raised bg-mono-bg flex flex-col items-center justify-center gap-6 text-center border border-white/20">
          <div className="p-4 rounded-full shadow-recessed bg-red-100 text-red-500">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-medium text-slate-800">INTERFACE CONNECTION FAILURE</h3>
            <p className="font-mono text-xs text-slate-500 max-w-md">
              {error}. Verify connection endpoints or firewall settings.
            </p>
          </div>
          <button
            onClick={() => fetchProducts(true)}
            className="py-3 px-6 rounded-lg text-xs font-mono font-bold tracking-wider text-slate-700 hover:text-slate-900 shadow-key-raised active:shadow-key-recessed bg-mono-bg cursor-pointer transition-spring"
          >
            RETRY STREAM CONNECTION
          </button>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="w-full h-64 rounded-2xl shadow-recessed bg-slate-200/40 flex items-center justify-center">
          <span className="font-mono text-xs text-slate-500 tracking-wider">
            NO OBJECTS FOUND IN RECORD INDEX
          </span>
        </div>
      ) : (
        /* Standard Showcase Grid viewport */
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onSelectProduct} 
            />
          ))}
        </div>
      )}

    </section>
  );
};
