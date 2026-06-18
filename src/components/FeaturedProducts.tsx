import ProductCard from './ProductCard';

const products = [
  { name: 'Aero Backpack', price: '$129.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Backpack' },
  { name: 'Nova Headphones', price: '$149.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Headphones' },
  { name: 'Chrono Watch', price: '$199.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Watch' },
  { name: 'Trail Sneakers', price: '$99.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Sneakers' },
  { name: 'Vibe Sunglasses', price: '$59.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Sunglasses' },
  { name: 'Orbit Camera', price: '$249.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Camera' },
  { name: 'Horizon Jacket', price: '$129.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Jacket' },
  { name: 'Tech Pouch', price: '$39.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Pouch' },
  { name: 'Classic Cap', price: '$29.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Cap' },
  { name: 'Leather Wallet', price: '$49.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Wallet' },
  { name: 'Insulated Bottle', price: '$35.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Bottle' },
  { name: 'Canvas Tote', price: '$45.00', imageUrl: 'https://placehold.co/400x400/F4F4F6/8A8A8E?text=Tote' },
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 lg:px-12 py-8 lg:py-12">
      <div className="flex justify-between items-center mb-6 lg:mb-8">
        <h2 className="text-lg lg:text-xl font-heading font-medium text-mono-text">Featured Products</h2>
        <button className="flex items-center gap-2 px-5 lg:px-6 py-2 rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all text-[0.65rem] lg:text-xs font-bold tracking-widest text-mono-text lg:text-mono-muted uppercase">
          View All <span className="lg:hidden ml-1">→</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
