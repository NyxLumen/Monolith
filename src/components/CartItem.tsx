import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  id: string;
  name: string;
  variant: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function CartItem({ id, name, variant, price, imageUrl, quantity }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-mono-bg rounded-3xl p-4 lg:p-6 shadow-neo-sm flex gap-4 lg:gap-6 mb-6">
      {/* Product Image */}
      <div className="w-28 h-28 lg:w-40 lg:h-40 flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center p-0">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-contain mix-blend-multiply opacity-90 scale-125"
        />
      </div>

      {/* Details & Controls */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="text-sm lg:text-base font-bold text-mono-text mb-1">{name}</h3>
            <p className="text-[0.65rem] lg:text-xs text-mono-muted font-medium mb-3">{variant}</p>
            <p className="text-sm lg:text-base font-bold text-mono-text hidden lg:block">₹{price.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
          </div>
          
          {/* Quantity Selector - Desktop top right, Mobile mid right */}
          <div className="flex items-center bg-mono-bg shadow-neo-inset-sm rounded-full px-1 py-1 lg:px-2 lg:py-1.5 h-8 lg:h-10">
            <button 
              onClick={() => updateQuantity(id, quantity - 1)}
              className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full text-mono-muted hover:text-mono-text transition-colors"
            >
              <span className="font-medium text-lg leading-none mb-0.5">-</span>
            </button>
            <span className="w-6 lg:w-8 text-center text-xs lg:text-sm font-bold text-mono-text">{quantity}</span>
            <button 
              onClick={() => updateQuantity(id, quantity + 1)}
              className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full text-mono-muted hover:text-mono-text transition-colors"
            >
              <span className="font-medium text-lg leading-none mb-0.5">+</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-end mt-2 lg:mt-0">
          <p className="text-sm lg:text-base font-bold text-mono-text lg:hidden">₹{price.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
          <div className="hidden lg:block"></div> {/* Spacer for desktop since unit price is above */}
          
          <div className="flex items-center gap-4 lg:gap-6">
            <p className="text-sm lg:text-base font-bold text-mono-text">₹{(price * quantity).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
            <button 
              onClick={() => removeFromCart(id)}
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all flex items-center justify-center text-mono-muted hover:text-mono-text"
            >
              <Trash2 size={14} className="lg:w-4 lg:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
