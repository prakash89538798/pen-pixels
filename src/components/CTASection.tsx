"use client";

import React from 'react';

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#050505] text-white py-40 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] border-t border-white/[0.04] relative overflow-hidden">
      
      {/* Immersive Panoramic Architecture Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-luminosity">
        <img 
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80" 
          alt="Premium luxury structural design panel" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505] z-0" />
      
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-[40px] sm:text-[62px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Ready to Redefine Your Brand's Future?[cite: 2]
        </h2>
        <p className="text-zinc-400 text-[17px] sm:text-[19px] font-light max-w-[580px] mx-auto mb-12 leading-relaxed">
          The path to true market authority and zero-friction growth begins with a single strategy sync. Let's build your brand legacy together.[cite: 2]
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-black font-medium text-[15px] rounded-full hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto">
            Launch Your Transformation Sync[cite: 2]
          </button>
          <button className="px-8 py-4 bg-transparent text-white border border-white/10 font-medium text-[15px] rounded-full hover:bg-white/[0.03] transition-all duration-300 w-full sm:w-auto">
            Connect with an Architect[cite: 2]
          </button>
        </div>
      </div>
    </section>
  );
}