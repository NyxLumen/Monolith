import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { addToCart, cart } = useCart();
  
  const cartItem = cart.find((item) => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening product detail when clicking add button
    addToCart(product);
  };

  return (
    <article 
      onClick={() => onSelect(product.id)}
      className="p-3.5 rounded-[2rem] shadow-raised bg-white flex flex-col gap-3 justify-between transition-spring hover:translate-y-[-2px] border border-white/80 relative cursor-pointer group select-none w-full"
    >
      
      {/* Add-to-Cart Circular Button in Top-Right Corner */}
      <button
        onClick={handleAddToCart}
        className="w-8 h-8 rounded-full shadow-key-raised bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 flex items-center justify-center cursor-pointer border border-white/80 active:scale-90 transition-spring absolute top-3 right-3 z-10"
        title="Add to Cart"
      >
        <Plus className="w-3.5 h-3.5 stroke-[3.5px] text-slate-600" />
        
        {/* Quantity Badge on Button */}
        {quantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#FD4912] text-white font-mono font-bold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white animate-badge-scale shadow-sm">
            {quantity}
          </span>
        )}
      </button>

      {/* Recessed Image Bay with multiply blend mode to blend product images seamlessly */}
      <div className="aspect-square w-full rounded-2xl bg-[#F4F4F6]/55 shadow-recessed p-3 flex items-center justify-center overflow-hidden border border-slate-200/10">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-[85%] max-w-[85%] object-contain blend-multiply-desaturate group-hover:scale-105 transition-spring select-none"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Title & Price specs */}
      <div className="flex flex-col items-start px-1.5 pb-1">
        <h3 
          className="font-heading text-[11px] font-semibold text-slate-700 truncate w-full"
          title={product.title}
        >
          {product.title}
        </h3>
        <span className="font-mono text-xs font-bold text-slate-950 mt-1 select-none">
          ${product.price.toFixed(2)}
        </span>
      </div>

    </article>
  );
};
