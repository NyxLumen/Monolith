import { Plus } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-mono-bg rounded-2xl p-3 lg:p-4 shadow-neo-sm hover:shadow-neo transition-all duration-300 flex flex-col group cursor-pointer">
      <div className="relative w-full aspect-square rounded-xl bg-mono-bg shadow-neo-inset-sm mb-3 lg:mb-4 overflow-hidden flex items-center justify-center p-4 lg:p-6">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-contain w-full h-full mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        
        <button className="absolute top-2 right-2 lg:top-3 lg:right-3 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset flex items-center justify-center text-mono-text transition-all">
          <Plus size={14} className="lg:w-4 lg:h-4" />
        </button>
      </div>
      
      <div className="px-1 lg:px-2">
        <h3 className="text-xs lg:text-sm font-semibold text-mono-text mb-1">{name}</h3>
        <p className="text-[0.65rem] lg:text-xs text-mono-muted font-medium">{price}</p>
      </div>
    </div>
  );
}
