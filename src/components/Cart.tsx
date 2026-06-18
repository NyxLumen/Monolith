import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, CheckCircle, Plus, Minus } from 'lucide-react';

interface CartProps {
  onReturnToShop: () => void;
}

export const Cart: React.FC<CartProps> = ({ onReturnToShop }) => {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [sliderVal, setSliderVal] = useState<number>(0);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);
  const [orderRef, setOrderRef] = useState<number | null>(null);

  const shipping = cartTotal > 150 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const grandTotal = cartTotal + shipping + tax;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setSliderVal(val);
    if (val >= 98) {
      setSliderVal(100);
      setOrderRef(Math.floor(100000 + Math.random() * 900000));
      setCheckoutComplete(true);
      clearCart();
    }
  };

  const handleResetSlider = () => {
    setSliderVal(0);
  };

  if (checkoutComplete) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 rounded-3xl shadow-raised bg-white border border-slate-200 text-center flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center text-emerald-500 shadow-inner">
          <CheckCircle className="w-8 h-8" />
        </div>
        
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-xl font-bold text-slate-900 tracking-tight">TRANSACTION AUTHORIZED</h2>
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
            Order Ref: #MONO-{orderRef}
          </p>
          <p className="text-sm text-slate-600 max-w-sm mt-2 font-body leading-relaxed">
            Your payment signal has been processed. Sculptural products are being packed for physical delivery.
          </p>
        </div>

        <button
          onClick={() => {
            setCheckoutComplete(false);
            onReturnToShop();
          }}
          className="mt-4 py-3 px-6 rounded-xl text-xs font-mono font-bold tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-spring cursor-pointer select-none active:scale-95"
        >
          RETURN TO CATALOG
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="w-full max-w-md mx-auto p-12 rounded-3xl shadow-raised bg-white border border-slate-200 text-center flex flex-col items-center gap-6">
        <div className="p-4 rounded-full shadow-recessed bg-slate-100 border border-slate-200 text-slate-400">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-base font-bold text-slate-800">SHOPPING LEDGER IS EMPTY</h3>
          <p className="text-xs text-slate-500 font-body max-w-xs leading-relaxed">
            There are no product logs in active storage. Select files from the catalog to load.
          </p>
        </div>
        <button
          onClick={onReturnToShop}
          className="py-3 px-6 rounded-xl text-xs font-mono font-bold tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-spring cursor-pointer select-none active:scale-95"
        >
          BROWSE CATALOG
        </button>
      </div>
    );
  }

  return (
    <section className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column: Ledger Rows */}
      <div className="lg:col-span-2 flex flex-col gap-4 p-6 rounded-3xl shadow-raised bg-white border border-slate-200">
        <h2 className="font-heading text-sm font-bold tracking-wider text-slate-500 uppercase pb-3 border-b border-slate-100 select-none">
          Active Shopping Ledger
        </h2>

        <div className="flex flex-col gap-4 max-h-[30rem] overflow-y-auto console-scrollbar pr-2">
          {cart.map((item) => (
            <div 
              key={item.product.id}
              className="flex items-center justify-between gap-4 p-3 rounded-2xl shadow-recessed bg-slate-50 border border-slate-100"
            >
              {/* Product mini frame */}
              <div className="w-16 h-16 rounded-xl shadow-recessed bg-white p-2 flex items-center justify-center overflow-hidden border border-slate-200 shrink-0">
                <img 
                  src={item.product.image} 
                  alt={item.product.title} 
                  className="max-h-full max-w-full object-contain blend-multiply-desaturate" 
                />
              </div>

              {/* Title & Price specs */}
              <div className="flex-grow min-w-0 flex flex-col gap-1">
                <h4 className="font-heading text-xs font-semibold text-slate-800 truncate uppercase">
                  {item.product.title}
                </h4>
                <div className="font-mono text-[10px] text-slate-500">
                  Unit price: ${item.product.price.toFixed(2)}
                </div>
              </div>

              {/* Counter Console */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 p-0.5 rounded-lg shadow-key-recessed bg-white border border-slate-200">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-md flex items-center justify-center shadow-key-raised bg-white border border-slate-100 text-slate-500 hover:text-slate-700 transition-spring cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-mono text-xs font-bold text-slate-800 px-1.5 select-none">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-md flex items-center justify-center shadow-key-raised bg-white border border-slate-100 text-slate-500 hover:text-slate-700 transition-spring cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Trash Key */}
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  title="Remove item"
                  className="w-8 h-8 rounded-lg flex items-center justify-center shadow-key-raised hover:shadow-key-recessed hover:text-red-500 bg-white text-slate-400 border border-slate-200 transition-spring cursor-pointer active:scale-95"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Receipt summary & slider lock */}
      <div className="flex flex-col gap-6 p-6 rounded-3xl shadow-raised bg-white border border-slate-200 justify-between h-fit">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-sm font-bold tracking-wider text-slate-500 uppercase pb-3 border-b border-slate-100 select-none">
            Checkout Summary
          </h2>

          {/* Receipt ledger sheet */}
          <div className="flex flex-col gap-2.5 font-mono text-[10px] text-slate-600">
            <div className="flex justify-between">
              <span>ITEMS SUB-TOTAL</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>ESTIMATED DELIVERY</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>TAX ESTIMATE (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div className="h-[1px] w-full bg-slate-100 my-1"></div>
            
            <div className="flex justify-between text-xs font-bold text-slate-900 items-center">
              <span>GRAND TOTAL</span>
              {/* Recessed Total price Screen */}
              <span className="px-2 py-1 rounded shadow-recessed bg-slate-100 border border-slate-200 font-bold">
                ${grandTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Slide-to-Pay Tactile Switch */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
          <div className="flex justify-between items-center text-[8px] font-mono font-bold text-slate-400 uppercase select-none tracking-wider">
            <span>SLIDE TO AUTHORIZE PAYMENT</span>
            <span>{sliderVal}%</span>
          </div>

          {/* Custom skeuomorphic range slider track */}
          <div className="relative w-full h-12 rounded-full shadow-recessed bg-slate-150 border border-slate-250 flex items-center p-1 overflow-hidden select-none">
            {/* Slide Track Label Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[9px] font-mono text-slate-400 font-bold tracking-widest uppercase">
              {sliderVal > 70 ? 'RELEASE LOCK' : 'SLIDE LOCK RIGHT'}
            </div>

            {/* Custom Range Input overlapping the track */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={handleSliderChange}
              onMouseUp={() => { if (sliderVal < 98) handleResetSlider(); }}
              onTouchEnd={() => { if (sliderVal < 98) handleResetSlider(); }}
              className="w-full h-full opacity-0 cursor-ew-resize absolute inset-0 z-20"
            />

            {/* Visual Neumorphic Knob matching input value */}
            <div 
              style={{ left: `calc(${sliderVal}% * 0.76 + 4px)` }}
              className="absolute top-1 w-10 h-10 rounded-full shadow-key-raised bg-white border border-slate-250 flex items-center justify-center transition-all duration-75 pointer-events-none z-10"
            >
              <ArrowRight className="w-4 h-4 text-slate-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
