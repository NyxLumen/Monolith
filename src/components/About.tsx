import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AboutProps {
  onReturnToShop: () => void;
}

export const About: React.FC<AboutProps> = ({ onReturnToShop }) => {
  return (
    <section className="w-full max-w-3xl mx-auto p-6 md:p-10 rounded-[2rem] shadow-raised bg-white border border-white/70 flex flex-col gap-8 select-none">
      
      {/* Back Button */}
      <button
        onClick={onReturnToShop}
        className="flex items-center gap-2 py-2 px-4 rounded-xl shadow-key-raised bg-[#F4F4F6]/60 hover:bg-[#F4F4F6] border border-white/60 text-xs font-mono font-bold tracking-wider text-slate-500 hover:text-slate-800 transition-spring cursor-pointer select-none active:scale-95 self-start"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO SHOP</span>
      </button>

      {/* Brand Header */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[9px] font-extrabold tracking-[0.25em] text-slate-400 uppercase select-none">
          Our Philosophy
        </span>
        <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight lowercase">
          monolith
        </h2>
        <div className="h-[1px] w-full bg-slate-200/50 my-2"></div>
      </div>

      {/* Storytelling Text Grid */}
      <div className="flex flex-col gap-6 text-slate-600 text-xs md:text-sm font-body leading-relaxed font-medium">
        <p>
          At Monolith, we believe that objects should be built to endure. In a world of fast-moving trends and transient designs, we strip away the noise of excess to focus entirely on core function, tactile material honesties, and refined skeuomorphic usability.
        </p>
        <h3 className="font-heading text-sm font-extrabold text-slate-900 tracking-wide uppercase mt-2">
          Built for life. Designed to last.
        </h3>
        <p>
          Each item in our catalog—from our double-walled insulated water canisters to our heavy-weave organic cotton tote bags—is engineered from raw, robust elements. We source materials for their durability, choosing textures that age beautifully with use, developing a rich personal character.
        </p>
        <p>
          Monolith represents a commitment to the timeless essentials. These are the tools that integrate into your daily habits, working quietly, reliably, and satisfyingly. Built for life, because your essentials should last as long as the memories they help you build.
        </p>
      </div>

      {/* Philosophy Callout card */}
      <div className="p-4 rounded-2xl shadow-recessed bg-[#F4F4F6]/50 border border-white/60 flex flex-col md:flex-row justify-between items-center gap-4 mt-2">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[10px] font-mono font-bold text-slate-400 select-none">MATERIAL STANDARD</span>
          <span className="text-xs font-heading font-extrabold text-slate-800">100% Recyclable Packaging & Carbon-Neutral Shipping</span>
        </div>
        <div className="text-[10px] font-mono text-slate-400 font-semibold border-l border-slate-200 pl-4 select-none uppercase tracking-wider hidden md:block">
          DEVICE SPEC // MNLH-01
        </div>
      </div>

    </section>
  );
};
