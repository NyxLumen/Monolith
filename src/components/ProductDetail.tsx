import React from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  
  // Find product synchronously from local database
  const product = products.find((p) => p.id === productId) || null;
  const cartItem = product ? cart.find((item) => item.product.id === product.id) : null;
  const quantity = cartItem ? cartItem.quantity : 0;

  if (!product) {
    return (
      <div className="w-full max-w-md mx-auto p-12 rounded-3xl shadow-raised bg-white border border-white/60 text-center flex flex-col items-center gap-6">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-widest select-none">
          PRODUCT LOG NOT FOUND
        </span>
        <button
          onClick={onBack}
          className="py-3 px-6 rounded-xl text-xs font-mono font-bold tracking-wider bg-slate-950 text-white shadow-md cursor-pointer transition-spring active:scale-95"
        >
          RETURN TO SHOP
        </button>
      </div>
    );
  }

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-6 select-none">
      
      {/* Tactile Back Control */}
      <div className="flex justify-start">
        <button
          onClick={onBack}
          className="flex items-center gap-2 py-2 px-4 rounded-xl shadow-key-raised bg-white hover:bg-slate-50 border border-white/60 text-xs font-mono font-bold tracking-wider text-slate-500 hover:text-slate-800 transition-spring cursor-pointer select-none active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>RETURN TO CATALOG</span>
        </button>
      </div>

      {/* Main Split-Pane Layout card */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 rounded-[2rem] shadow-raised bg-white border border-white/70">
        
        {/* Left Column: Image showcase slot */}
        <div className="relative aspect-square w-full rounded-2xl shadow-recessed bg-[#F4F4F6]/50 p-8 flex items-center justify-center border border-slate-200/40 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[90%] max-w-[90%] object-contain blend-multiply-desaturate select-none"
            draggable={false}
          />
        </div>

        {/* Right Column: Spec ledger sheet */}
        <div className="flex flex-col justify-between gap-6 py-2">
          
          <div className="flex flex-col gap-4">
            {/* Category Breadcrumb */}
            <span className="font-mono text-[9px] font-extrabold tracking-[0.25em] text-slate-400 uppercase select-none">
              CATEGORY // {product.category}
            </span>
            
            {/* Heading Title */}
            <h2 className="font-heading text-xl md:text-3xl font-extrabold tracking-tight text-slate-950 leading-tight">
              {product.title}
            </h2>

            {/* Rating Stats */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="text-slate-950 font-semibold">★ {product.rating.rate}</span>
              <span className="opacity-30">/</span>
              <span>{product.rating.count} ratings</span>
            </div>

            {/* Divider milled line */}
            <div className="h-[1px] w-full bg-slate-200/50 my-1"></div>

            {/* Description Body */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[8px] font-extrabold tracking-wider text-slate-400 select-none">SPECIFICATION DETAILS</span>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-body font-medium">
                {product.description}
              </p>
            </div>
          </div>

          {/* Price & Checkout parameters */}
          <div className="flex flex-col gap-4 p-4 rounded-2xl shadow-recessed bg-[#F4F4F6]/60 border border-white/60">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] font-extrabold tracking-wider text-slate-400 select-none">UNIT PRICE</span>
              
              {/* Monospace Price Readout */}
              <div className="px-3.5 py-1.5 rounded-lg shadow-recessed bg-white font-mono text-sm font-bold text-slate-950 border border-white/80">
                ${product.price.toFixed(2)}
              </div>
            </div>

            {/* Cart trigger panel */}
            <div className="mt-2">
              {quantity === 0 ? (
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3.5 rounded-xl text-xs font-mono font-bold tracking-widest bg-slate-950 hover:bg-slate-900 text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-spring active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO SHOPPING LEDGER</span>
                </button>
              ) : (
                <div className="flex items-center justify-between gap-4 p-1 rounded-xl shadow-recessed bg-white border border-white/80">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center shadow-key-raised bg-[#F4F4F6]/50 hover:bg-white text-slate-600 hover:text-slate-900 border border-white/70 transition-spring cursor-pointer active:scale-95"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-[7px] font-mono text-slate-400 font-bold select-none uppercase">QUANTITY</span>
                    <span className="font-mono text-sm font-bold text-slate-950 select-none mt-0.5">
                      {quantity}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center shadow-key-raised bg-[#F4F4F6]/50 hover:bg-white text-slate-600 hover:text-slate-900 border border-white/70 transition-spring cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
