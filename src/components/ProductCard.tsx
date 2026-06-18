import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find((item) => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className="p-4 rounded-2xl shadow-raised bg-white flex flex-col gap-3 justify-between transition-spring hover:translate-y-[-2px] border border-slate-200">
      
      {/* Recessed Aspect-Square Image Bay */}
      <div 
        onClick={() => onSelect(product.id)}
        className="relative aspect-square w-full rounded-xl shadow-recessed bg-slate-50 p-4 flex items-center justify-center overflow-hidden cursor-pointer group border border-slate-100"
      >
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-[85%] max-w-[85%] object-contain blend-multiply-desaturate group-hover:scale-105 transition-spring"
          loading="lazy"
        />
        {/* Quick Inspect Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-2 rounded-full shadow-key-raised bg-white text-slate-700 border border-slate-200">
            <Info className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Meta Specs (Title & Rating) */}
      <div className="flex flex-col gap-1 mt-1">
        <h3 
          onClick={() => onSelect(product.id)}
          className="font-heading text-xs font-semibold tracking-wide text-slate-800 uppercase truncate cursor-pointer hover:text-slate-950"
          title={product.title}
        >
          {product.title}
        </h3>
        
        <div className="flex justify-between items-center mt-1">
          {/* Recessed Monospace Price Screen */}
          <div className="px-2.5 py-1 rounded-md shadow-recessed bg-slate-100 font-mono text-xs font-bold text-slate-800 border border-slate-200">
            ${product.price.toFixed(2)}
          </div>
          
          {/* Rating Display */}
          <div className="text-[10px] font-mono text-slate-500 font-semibold">
            ★ {product.rating.rate} <span className="opacity-50">({product.rating.count})</span>
          </div>
        </div>
      </div>

      {/* Tactile Control Unit */}
      <div className="mt-2 pt-2 border-t border-slate-100">
        {quantity === 0 ? (
          /* Add to Cart button - Solid, high-contrast dark accent */
          <button
            onClick={() => addToCart(product)}
            className="w-full py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md transition-spring cursor-pointer select-none active:scale-98"
          >
            ADD TO CART
          </button>
        ) : (
          /* Inline Quantity Console (Isolates re-renders locally to this card) */
          <div className="flex items-center justify-between gap-2 p-0.5 rounded-lg shadow-recessed bg-slate-100 border border-slate-200">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              aria-label="Decrease quantity"
              className="w-8 h-8 rounded-md flex items-center justify-center shadow-key-raised bg-white text-slate-600 hover:text-slate-800 border border-slate-200 transition-spring cursor-pointer active:scale-95"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            
            <span className="font-mono text-xs font-bold text-slate-800 px-2 select-none">
              {quantity}
            </span>
            
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 rounded-md flex items-center justify-center shadow-key-raised bg-white text-slate-600 hover:text-slate-800 border border-slate-200 transition-spring cursor-pointer active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

    </article>
  );
};
