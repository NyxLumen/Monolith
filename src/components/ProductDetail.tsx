import React, { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ChevronLeft, Plus, Minus, ShoppingBag, Loader2 } from 'lucide-react';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const [prevProductId, setPrevProductId] = useState<number>(productId);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (productId !== prevProductId) {
    setPrevProductId(productId);
    setProduct(null);
    setLoading(true);
    setError(null);
  }

  const fetchProductDetails = useCallback(async (isRetry = false) => {
    if (isRetry) {
      setLoading(true);
      setError(null);
    }
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (!response.ok) {
        throw new Error('Could not pull product records');
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown communication error');
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    let active = true;
    const loadData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Could not pull product records');
        }
        const data = await response.json();
        if (active) {
          setProduct(data);
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : 'Unknown communication error');
          setLoading(false);
        }
      }
    };

    loadData();
    return () => {
      active = false;
    };
  }, [productId]);

  const cartItem = product ? cart.find((item) => item.product.id === product.id) : null;
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      
      {/* Tactile Back Control */}
      <div className="flex justify-start">
        <button
          onClick={onBack}
          className="flex items-center gap-2 py-2 px-4 rounded-xl shadow-key-raised bg-mono-bg border border-white/60 text-xs font-mono font-bold tracking-wider text-slate-600 hover:text-slate-800 transition-spring cursor-pointer select-none active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>RETURN TO CATALOG</span>
        </button>
      </div>

      {/* Detail Showcase Bay */}
      {loading ? (
        /* Skeuomorphic Loading Plate */
        <div className="w-full h-[32rem] rounded-2xl shadow-recessed bg-slate-200/50 flex flex-col items-center justify-center gap-4 border border-slate-300/10">
          <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
          <span className="font-mono text-xs text-slate-500 tracking-widest animate-pulse">
            LOADING ASSET RECORD...
          </span>
        </div>
      ) : error ? (
        /* Skeuomorphic Error Plate */
        <div className="w-full p-12 rounded-2xl shadow-raised bg-gradient-to-br from-slate-100 to-slate-200/90 flex flex-col items-center justify-center gap-6 text-center border border-white/40">
          <div className="p-4 rounded-full shadow-recessed bg-red-50 text-red-500">
            <Loader2 className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-medium text-slate-800">RECORD RETRIEVAL FAILURE</h3>
            <p className="font-mono text-xs text-slate-500 max-w-md">{error}</p>
          </div>
          <button
            onClick={() => fetchProductDetails(true)}
            className="py-3 px-6 rounded-lg text-xs font-mono font-bold tracking-wider text-slate-700 hover:text-slate-900 shadow-key-raised active:shadow-key-recessed bg-mono-bg border border-white/60 cursor-pointer transition-spring"
          >
            RETRY STREAM
          </button>
        </div>
      ) : product ? (
        /* Split view: Large Image Inspect on left, specifications on right */
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 rounded-3xl shadow-raised bg-gradient-to-br from-slate-100 to-slate-200/90 border border-white/40">
          
          {/* Left Column: Image showcase slot */}
          <div className="relative aspect-square w-full rounded-2xl shadow-recessed bg-gradient-to-br from-slate-200 to-slate-100/50 p-8 flex items-center justify-center border border-slate-300/10 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-[90%] max-w-[90%] object-contain blend-multiply-desaturate"
            />
          </div>

          {/* Right Column: Spec ledger sheet */}
          <div className="flex flex-col justify-between gap-6">
            
            <div className="flex flex-col gap-3">
              {/* Category Breadcrumb */}
              <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase select-none">
                CATEGORY // {product.category}
              </span>
              
              {/* Heading Title */}
              <h2 className="font-heading text-lg md:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                {product.title}
              </h2>

              {/* Rating Stats */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="text-amber-500">★</span>
                <span className="font-bold text-slate-700">{product.rating.rate}</span>
                <span className="opacity-40">/</span>
                <span>{product.rating.count} ratings</span>
              </div>

              {/* Divider milled line */}
              <div className="h-[1px] w-full bg-slate-200/60 my-2"></div>

              {/* Description Body */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[8px] font-bold tracking-wider text-slate-400 select-none">SPECIFICATION DETAILS</span>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-body">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Price & Checkout parameters */}
            <div className="flex flex-col gap-4 p-4 rounded-2xl shadow-recessed bg-slate-200/80 border border-slate-300/20">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] font-bold tracking-wider text-slate-500 select-none">UNIT PRICE</span>
                
                {/* Monospace Price Readout */}
                <div className="px-3.5 py-1.5 rounded-lg shadow-recessed bg-slate-100 font-mono text-sm font-bold text-slate-800 border border-white/40">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              {/* Cart trigger panel */}
              <div className="mt-2">
                {quantity === 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3.5 rounded-xl text-xs font-mono font-bold tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-spring active:scale-98"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO SHOPPING LEDGER</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-between gap-4 p-1 rounded-xl shadow-recessed bg-slate-100 border border-white/40">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-key-raised bg-mono-bg text-slate-600 hover:text-slate-800 border border-white/60 transition-spring cursor-pointer active:scale-95"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-[7px] font-mono text-slate-400 font-bold select-none uppercase">QUANTITY</span>
                      <span className="font-mono text-sm font-bold text-slate-800 select-none mt-0.5">
                        {quantity}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-key-raised bg-mono-bg text-slate-600 hover:text-slate-800 border border-white/60 transition-spring cursor-pointer active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      ) : (
        <div className="w-full h-96 rounded-2xl shadow-recessed bg-slate-200/50 border border-slate-300/10 flex items-center justify-center">
          <span className="font-mono text-xs text-slate-500">NO PRODUCT DATA FOUND</span>
        </div>
      )}

    </section>
  );
};
