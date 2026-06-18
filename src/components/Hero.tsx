import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  setCurrentPage: (page: 'home' | 'cart' | 'about' | 'shop') => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="px-6 lg:px-12 py-4 lg:py-8">
      <div 
        className="relative w-full h-[400px] lg:h-[480px] rounded-[2rem] overflow-hidden flex items-center bg-mono-bg bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero.png)' }}
      >
        {/* Shadow overlay to ensure inset shadow renders ON TOP of the background image */}
        <div className="absolute inset-0 rounded-[2rem] shadow-neo-inset-sm pointer-events-none z-20"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 px-8 lg:px-16 max-w-2xl mt-[-4rem] lg:mt-0">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="text-[0.65rem] lg:text-xs font-bold tracking-[0.15em] text-mono-muted uppercase mb-3 lg:mb-4 block"
          >
            New Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
            className="text-4xl lg:text-6xl font-heading font-medium text-mono-text leading-[1.1] lg:leading-tight mb-6 lg:mb-8"
          >
            Built for life.<br />
            Designed to last.
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('shop')}
            className="inline-flex items-center gap-3 bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-shadow px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs lg:text-sm font-bold tracking-wide text-mono-text"
          >
            SHOP NOW <ArrowRight size={16} className="lg:w-[18px] lg:h-[18px]" />
          </motion.button>
        </div>

        {/* Carousel indicators for mobile as shown in design */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-10">
          <div className="w-2 h-2 rounded-full bg-mono-text"></div>
          <div className="w-2 h-2 rounded-full bg-mono-text/20"></div>
          <div className="w-2 h-2 rounded-full bg-mono-text/20"></div>
        </div>
      </div>
    </section>
  );
}
