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
      className="p-4 rounded-[1.8rem] shadow-raised bg-white flex flex-col gap-4 justify-between transition-spring hover:translate-y-[-2px] border border-white/70 relative cursor-pointer group"
    >
      
      {/* Add-to-Cart Circular Button in Top-Right Corner */}
      <button
        onClick={handleAddToCart}
        className="w-8 h-8 rounded-full shadow-key-raised bg-[#F4F4F6]/80 hover:bg-white text-slate-800 hover:text-slate-950 flex items-center justify-center cursor-pointer border border-white/60 active:scale-90 transition-spring absolute top-3 right-3 z-10"
        title="Add to Cart"
      >
        <Plus className="w-3.5 h-3.5 stroke-[3px]" />
        
        {/* Quantity Badge on Button */}
        {quantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-slate-950 text-white font-mono font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white animate-badge-scale">
            {quantity}
          </span>
        )}
      </button>

      {/* Image Bay */}
      <div className="aspect-square w-full p-2 flex items-center justify-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-[90%] max-w-[90%] object-contain group-hover:scale-105 transition-spring select-none"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Title & Price specs */}
      <div className="flex flex-col items-start px-1 pb-1">
        <h3 
          className="font-heading text-[11px] font-semibold tracking-wide text-slate-600 uppercase truncate w-full"
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
