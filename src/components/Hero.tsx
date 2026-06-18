import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="px-6 lg:px-12 py-4 lg:py-8">
      <div className="relative w-full h-[400px] lg:h-[480px] rounded-[2rem] shadow-neo-inset-sm overflow-hidden flex items-center bg-mono-bg">
        {/* Background image matching the layout - we'll position it so the image is on the right */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-right lg:bg-[center_right_-4rem] opacity-90" 
          style={{ backgroundImage: 'url(/hero.png)' }}
        ></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 px-8 lg:px-16 max-w-2xl mt-[-4rem] lg:mt-0">
          <span className="text-[0.65rem] lg:text-xs font-bold tracking-[0.15em] text-mono-muted uppercase mb-3 lg:mb-4 block">
            New Collection
          </span>
          <h2 className="text-4xl lg:text-6xl font-heading font-medium text-mono-text leading-[1.1] lg:leading-tight mb-6 lg:mb-8">
            Built for life.<br />
            Designed to last.
          </h2>
          
          <button className="inline-flex items-center gap-3 bg-mono-bg shadow-neo-sm hover:shadow-neo-inset transition-all px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs lg:text-sm font-bold tracking-wide text-mono-text">
            SHOP NOW <ArrowRight size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>
        </div>

        {/* Carousel indicators for mobile as shown in design */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
          <div className="w-2 h-2 rounded-full bg-mono-text"></div>
          <div className="w-2 h-2 rounded-full bg-mono-text/20"></div>
          <div className="w-2 h-2 rounded-full bg-mono-text/20"></div>
        </div>
      </div>
    </section>
  );
}
