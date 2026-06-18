import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ShieldCheck, Truck, RefreshCw, Lock, ChevronDown, ChevronUp } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ShopProps {
  searchQuery?: string;
  setSearchQuery: (query: string) => void;
}

// We will use a curated list of 6 categories to keep the UI sleek
const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'fragrances', label: 'Fragrances' },
  { id: 'furniture', label: 'Furniture' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'mens-watches', label: 'Men\'s Watches' },
  { id: 'sunglasses', label: 'Sunglasses' },
];

export default function Shop({ searchQuery = '', setSearchQuery }: ShopProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const limit = 20;

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      if (skip === 0) setLoading(true);
      else setLoadingMore(true);

      try {
        let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        
        if (searchQuery.trim()) {
          url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
        } else if (activeCategory !== 'all') {
          url = `https://dummyjson.com/products/category/${activeCategory}?limit=${limit}&skip=${skip}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        
        if (skip === 0) {
          setProducts(data.products);
        } else {
          setProducts(prev => [...prev, ...data.products]);
        }
        setTotal(data.total);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchProducts();
  }, [searchQuery, activeCategory, skip]);

  // Reset skip when search or category changes
  useEffect(() => {
    setSkip(0);
  }, [searchQuery, activeCategory]);

  const handleCategoryClick = (categoryId: string) => {
    setSearchQuery(''); // Clear search when switching category
    setActiveCategory(categoryId);
  };

  const handleLoadMore = () => {
    if (!loading && !loadingMore && products.length < total) {
      setSkip(prev => prev + limit);
    }
  };

  return (
    <div className="px-6 lg:px-12 py-8 w-full max-w-7xl mx-auto flex flex-col gap-8 lg:gap-12">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full">
        <div className="max-w-md">
          <h1 className="text-4xl lg:text-5xl font-heading font-medium text-mono-text mb-4">Shop All</h1>
          <p className="text-sm font-medium text-mono-muted leading-relaxed">
            Thoughtfully designed essentials for everyday life.
          </p>
        </div>
        
        {/* Sort Dropdown */}
        <div className="bg-mono-bg shadow-neo-sm rounded-full px-5 py-3 flex items-center justify-between min-w-[200px] cursor-pointer hover:shadow-neo-inset transition-shadow">
          <span className="text-xs font-bold text-mono-muted mr-4">Sort by: <span className="text-mono-text">Featured</span></span>
          <ChevronDown size={14} className="text-mono-text" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">
        
        {/* Sidebar */}
        <div className="w-full lg:w-64 lg:min-w-64 lg:max-w-64 flex-shrink-0 flex flex-col gap-6">
          
          {/* Categories */}
          <div className="bg-mono-bg rounded-[2rem] shadow-neo-sm p-6 flex flex-col">
            <h3 className="text-sm font-bold text-mono-text mb-6">Categories</h3>
            <ul className="flex flex-col gap-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button 
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-4
                      ${(activeCategory === cat.id && !searchQuery) ? 'bg-mono-bg shadow-neo-inset-sm text-mono-text' : 'text-mono-muted hover:text-mono-text'}
                    `}
                  >
                    <div className="w-6 h-6 rounded-md flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-current opacity-70"></div>
                    </div>
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter */}
          <div className="bg-mono-bg rounded-[2rem] shadow-neo-sm p-6 flex flex-col gap-6">
            <h3 className="text-sm font-bold text-mono-text">Filter</h3>
            
            {/* Price Filter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-xs font-bold text-mono-text">Price</span>
                <ChevronUp size={14} className="text-mono-text" />
              </div>
              <div className="h-1.5 w-full bg-mono-bg shadow-neo-inset-sm rounded-full relative mt-2">
                <div className="absolute left-[10%] right-[20%] top-0 bottom-0 bg-black rounded-full"></div>
                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white shadow-neo-sm"></div>
                <div className="absolute right-[20%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white shadow-neo-sm"></div>
              </div>
              <div className="flex justify-between items-center text-[0.65rem] font-bold text-mono-muted mt-1">
                <span>$10</span>
                <span>$150</span>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Color Filter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-xs font-bold text-mono-text">Color</span>
                <ChevronUp size={14} className="text-mono-text" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1a1a1a] shadow-neo-sm border-2 border-transparent hover:border-white/30 cursor-pointer transition-colors"></div>
                <div className="w-6 h-6 rounded-full bg-[#8c8c8c] shadow-neo-sm border-2 border-transparent hover:border-white/30 cursor-pointer transition-colors"></div>
                <div className="w-6 h-6 rounded-full bg-[#e6e2dd] shadow-neo-sm border-2 border-transparent hover:border-white/30 cursor-pointer transition-colors"></div>
                <div className="w-6 h-6 rounded-full bg-[#4a5e3e] shadow-neo-sm border-2 border-transparent hover:border-white/30 cursor-pointer transition-colors"></div>
                <div className="w-6 h-6 rounded-full bg-white shadow-neo-sm border-2 border-transparent hover:border-[#1a1a1a] cursor-pointer transition-colors"></div>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Material Filter */}
            <div className="flex justify-between items-center cursor-pointer">
              <span className="text-xs font-bold text-mono-text">Material</span>
              <ChevronDown size={14} className="text-mono-text" />
            </div>
          </div>

        </div>

        {/* Main Product Grid */}
        <div className="flex-1 w-full flex flex-col">
          {loading ? (
            <div className="w-full flex justify-center py-20">
              <div className="w-8 h-8 rounded-full border-2 border-mono-muted border-t-mono-text animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full">
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
              </div>
              
              {/* Load More Button / Intersection target */}
              {products.length < total && (
                <div className="mt-12 mb-8">
                  <button 
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="px-8 py-3 rounded-full bg-mono-bg shadow-neo hover:shadow-neo-inset transition-all text-sm font-bold text-mono-text disabled:opacity-50 flex items-center gap-2"
                  >
                    {loadingMore ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-mono-muted border-t-mono-text animate-spin"></div>
                        Loading...
                      </>
                    ) : (
                      'Load More'
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-mono-bg rounded-[2rem] shadow-neo-sm p-8 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        
        <div className="flex items-start gap-4 pt-4 sm:pt-0 pl-0 sm:pl-4 lg:pl-8 first:pt-0 first:pl-0">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-mono-bg shadow-neo-inset-sm flex-shrink-0 text-mono-text">
            <ShieldCheck size={18} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-mono-text mb-1">Quality you can trust</h4>
            <p className="text-[0.65rem] font-medium text-mono-muted">Premium materials, always.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 sm:pt-0 pl-0 sm:pl-4 lg:pl-8">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-mono-bg shadow-neo-inset-sm flex-shrink-0 text-mono-text">
            <Truck size={18} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-mono-text mb-1">Fast & reliable shipping</h4>
            <p className="text-[0.65rem] font-medium text-mono-muted">Delivered to your door.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 sm:pt-0 pl-0 sm:pl-4 lg:pl-8">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-mono-bg shadow-neo-inset-sm flex-shrink-0 text-mono-text">
            <RefreshCw size={18} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-mono-text mb-1">Easy returns</h4>
            <p className="text-[0.65rem] font-medium text-mono-muted">30-day return policy.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 sm:pt-0 pl-0 sm:pl-4 lg:pl-8">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-mono-bg shadow-neo-inset-sm flex-shrink-0 text-mono-text">
            <Lock size={18} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-mono-text mb-1">Secure checkout</h4>
            <p className="text-[0.65rem] font-medium text-mono-muted">Your data is always safe.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
