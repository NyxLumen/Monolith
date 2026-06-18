import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'motion/react';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface FeaturedProductsProps {
  searchQuery?: string;
  setCurrentPage: (page: 'home' | 'cart' | 'about' | 'shop') => void;
}

export default function FeaturedProducts({ searchQuery = '', setCurrentPage }: FeaturedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (searchQuery.trim().length > 0) {
      // Dynamic Search
      fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to search products", error);
          setLoading(false);
        });
    } else {
      // Default curated list
      Promise.all([
        fetch('https://dummyjson.com/products/category/mens-watches?limit=4').then(res => res.json()),
        fetch('https://dummyjson.com/products/category/mens-shoes?limit=4').then(res => res.json()),
        fetch('https://dummyjson.com/products/category/sunglasses?limit=4').then(res => res.json())
      ])
        .then(([watches, shoes, glasses]) => {
          const combined = [...watches.products, ...shoes.products, ...glasses.products];
          setProducts(combined);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch products", error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  return (
    <section className="px-6 lg:px-12 py-8 lg:py-12">
      <div className="flex justify-between items-center mb-6 lg:mb-8">
        <h2 className="text-lg lg:text-xl font-heading font-medium text-mono-text">Featured Products</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('shop')}
          className="flex items-center gap-2 px-5 lg:px-6 py-2 rounded-full bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-shadow text-[0.65rem] lg:text-xs font-bold tracking-widest text-mono-text lg:text-mono-muted uppercase"
        >
          View All <span className="lg:hidden ml-1">→</span>
        </motion.button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="w-8 h-8 rounded-full border-4 border-mono-muted border-t-mono-text animate-spin"></div>
        </div>
      ) : (
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id.toString()}
              name={product.title}
              price={`₹${(product.price * 83).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`}
              rawPrice={product.price * 83}
              imageUrl={product.thumbnail}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
