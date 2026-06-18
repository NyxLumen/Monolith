import { ArrowRight, Gem, Leaf, User, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="px-6 lg:px-12 py-8 lg:py-12 max-w-7xl mx-auto w-full flex flex-col gap-12 lg:gap-20">
      
      {/* Hero Section */}
      <div className="bg-mono-bg rounded-[2rem] shadow-neo-sm flex flex-col lg:flex-row p-4 lg:p-6 gap-6">
        
        {/* Left Content */}
        <div className="lg:w-[40%] flex flex-col justify-center items-start px-4 py-8 lg:px-12 lg:py-16">
          <span className="text-[0.65rem] tracking-[0.2em] font-bold text-mono-muted uppercase mb-6">
            About Monolith
          </span>
          <h1 className="text-5xl lg:text-6xl font-heading font-medium text-mono-text mb-6 leading-[1.1]">
            Essentials.<br/>Elevated.
          </h1>
          <p className="text-sm lg:text-base text-mono-muted font-medium mb-10 max-w-sm leading-relaxed">
            Monolith is a mock brand built to showcase the beauty of minimal design, premium quality, and everyday functionality.
          </p>
          <button className="px-6 py-3 rounded-full bg-mono-bg shadow-neo hover:shadow-neo-inset transition-all text-sm font-bold text-mono-text flex items-center gap-3">
            Our Story <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Image Container */}
        <div className="lg:w-[60%] relative rounded-3xl overflow-hidden shadow-neo-inset-sm bg-mono-bg min-h-[300px] lg:min-h-[500px]">
          <img 
            src="/banner.png" 
            alt="Minimalist Essentials" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 scale-105"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="flex flex-col items-center">
        <span className="text-[0.65rem] tracking-[0.2em] font-bold text-mono-muted uppercase mb-10">
          Our Values
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Quality First */}
          <div className="bg-mono-bg rounded-3xl shadow-neo-sm p-6 lg:p-8 flex items-center lg:items-start lg:flex-row flex-col gap-6 text-center lg:text-left">
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-full bg-mono-bg shadow-neo-inset-sm flex items-center justify-center text-mono-text">
              <Gem size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3 className="font-bold text-mono-text mb-2 lg:mb-3 text-lg">Quality First</h3>
              <p className="text-xs lg:text-sm font-medium text-mono-muted leading-relaxed">
                We use premium materials and focus on lasting quality.
              </p>
            </div>
          </div>

          {/* Timeless Design */}
          <div className="bg-mono-bg rounded-3xl shadow-neo-sm p-6 lg:p-8 flex items-center lg:items-start lg:flex-row flex-col gap-6 text-center lg:text-left">
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-full bg-mono-bg shadow-neo-inset-sm flex items-center justify-center text-mono-text">
              <Leaf size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3 className="font-bold text-mono-text mb-2 lg:mb-3 text-lg">Timeless Design</h3>
              <p className="text-xs lg:text-sm font-medium text-mono-muted leading-relaxed">
                Clean, minimal and versatile products that never go out of style.
              </p>
            </div>
          </div>

          {/* Made for Everyone */}
          <div className="bg-mono-bg rounded-3xl shadow-neo-sm p-6 lg:p-8 flex items-center lg:items-start lg:flex-row flex-col gap-6 text-center lg:text-left">
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-full bg-mono-bg shadow-neo-inset-sm flex items-center justify-center text-mono-text">
              <User size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3 className="font-bold text-mono-text mb-2 lg:mb-3 text-lg">Made for Everyone</h3>
              <p className="text-xs lg:text-sm font-medium text-mono-muted leading-relaxed">
                Designed to fit seamlessly into your routine, every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-mono-bg rounded-[2rem] shadow-neo-sm p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
        
        <div className="flex items-center gap-6 text-center lg:text-left flex-col lg:flex-row w-full lg:w-auto">
          <div className="w-16 h-16 flex-shrink-0 rounded-full bg-mono-bg shadow-neo-inset-sm flex items-center justify-center text-mono-text">
            <Mail size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-bold text-mono-text text-lg mb-1 lg:mb-2">Be the first to know.</h3>
            <p className="text-xs lg:text-sm font-medium text-mono-muted">Get updates on new arrivals and exclusive offers.</p>
          </div>
        </div>

        <div className="w-full lg:max-w-md bg-mono-bg shadow-neo-inset-sm rounded-full p-2 flex items-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-transparent border-none outline-none px-4 lg:px-6 text-xs lg:text-sm font-medium text-mono-text placeholder:text-mono-muted"
          />
          <button className="bg-[#0a0a0a] text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full text-xs lg:text-sm font-bold shadow-neo-sm hover:bg-black transition-colors">
            Subscribe
          </button>
        </div>

      </div>

    </div>
  );
}
