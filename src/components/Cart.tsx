import { ArrowRight, ShieldCheck, Clock, CheckCircle, Lock, Package } from 'lucide-react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export default function Cart() {
  const { cartItems, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const total = subtotal; // Free shipping

  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12 max-w-7xl mx-auto w-full">
      <div className="mb-8 lg:mb-12">
        <h1 className="text-3xl lg:text-4xl font-heading font-medium text-mono-text mb-2">Your Cart</h1>
        <p className="text-sm lg:text-base text-mono-muted font-medium">{cartItems.length} items in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-mono-bg rounded-3xl shadow-neo-inset-sm">
          <p className="text-lg font-medium text-mono-muted mb-4">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Cart Items List */}
          <div className="flex-1">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="bg-mono-bg rounded-3xl p-6 lg:p-8 shadow-neo-sm sticky top-8">
            <h2 className="text-lg lg:text-xl font-bold text-mono-text mb-6">Order Summary</h2>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-mono-muted">Subtotal</span>
              <span className="text-sm font-bold text-mono-text">₹{subtotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
            
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-mono-text/10">
              <span className="text-sm font-medium text-mono-muted">Shipping</span>
              <span className="text-sm font-bold text-mono-text uppercase">Free</span>
            </div>
            
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-lg lg:text-xl font-bold text-mono-text">Total</p>
                <p className="text-[0.65rem] text-mono-muted mt-1">Taxes included</p>
              </div>
              <span className="text-2xl lg:text-3xl font-heading font-medium text-mono-text">₹{total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>

            {/* Free Shipping Badge */}
            <div className="bg-mono-bg shadow-neo-inset-sm rounded-xl p-4 flex items-center gap-4 mb-8">
              <Package size={20} className="text-mono-text" />
              <div>
                <p className="text-xs font-bold text-mono-text">Free shipping</p>
                <p className="text-[0.65rem] text-mono-muted">On all orders</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#0a0a0a] hover:bg-black text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 transition-colors shadow-neo-sm mb-8 lg:mb-6"
            >
              <span className="text-sm font-bold">Checkout</span>
              <ArrowRight size={16} />
            </motion.button>

            {/* Mobile simplified trust badge */}
            <div className="lg:hidden flex items-center justify-center gap-2 text-mono-muted">
              <Lock size={14} />
              <span className="text-[0.65rem] font-medium">Secure checkout. Your data is safe.</span>
            </div>

            {/* Desktop full trust badges */}
            <div className="hidden lg:flex flex-col gap-3">
              <div className="flex items-center gap-3 text-mono-muted">
                <ShieldCheck size={16} />
                <span className="text-xs font-medium">Secure checkout</span>
              </div>
              <div className="flex items-center gap-3 text-mono-muted">
                <Clock size={16} />
                <span className="text-xs font-medium">30-day returns</span>
              </div>
              <div className="flex items-center gap-3 text-mono-muted">
                <CheckCircle size={16} />
                <span className="text-xs font-medium">Trusted by thousands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
