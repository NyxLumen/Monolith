import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  rawPrice: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, price, rawPrice, imageUrl }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent clicking the card from firing
    addToCart({
      id,
      name,
      variant: 'Standard', // Default variant for dummyjson products
      price: rawPrice,
      imageUrl,
      quantity: 1
    });
  };

  return (
    <div className="relative bg-mono-bg rounded-2xl p-4 lg:p-5 shadow-neo-sm hover:shadow-neo transition-all duration-300 flex flex-col group cursor-pointer">
      <div className="relative w-full aspect-square rounded-xl mb-4 lg:mb-5 overflow-hidden flex items-center justify-center p-0">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-contain w-full h-full mix-blend-multiply opacity-90 scale-125 group-hover:scale-[1.40] transition-transform duration-500"
        />
      </div>
      
      <button 
        onClick={handleAddToCart}
        className="absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset flex items-center justify-center text-mono-text transition-all z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
      </button>
      
      <div className="mt-auto flex flex-col">
        <h3 className="text-sm lg:text-base font-bold text-mono-text truncate mb-1">{name}</h3>
        <p className="text-sm lg:text-base font-medium text-mono-muted">{price}</p>
      </div>
    </div>
  );
}
