"use client";

import React from 'react';
import { ArrowUpRight, Zap, Star, Radio, Target, Shield } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function ClientBenefits() {
  const benefits: BenefitItem[] = [
    {
      icon: <Zap className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#030305]" />,
      title: "Accelerated Financial Velocity",
      desc: "Our components are engineered to attract, engage, and convert—contributing directly to your high-value client acquisition goals."
    },
    {
      icon: <Star className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#030305]" />,
      title: "Authority Positioning",
      desc: "Establish an elite, highly trustworthy market presence that builds immediate respect and lifelong brand loyalty from day one."
    },
    {
      icon: <Radio className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#030305]" />,
      title: "Frictionless User Experiences",
      desc: "Create smooth, fast, and remarkably simple user flows that turn standard site visitors into permanent brand promoters."
    },
    {
      icon: <Target className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#030305]" />,
      title: "Clean Market Differentiation",
      desc: "Separate your enterprise from competitors with a sharp, unique visual voice that cuts clean through generic design noise."
    },
    {
      icon: <Shield className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#030305]" />,
      title: "Absolute Operational Peace of Mind",
      desc: "Hand your visual assets over to a reliable team of dedicated experts, leaving your core leadership free to focus entirely on scaling operations."
    }
  ];

  return (
    <section className="w-full bg-[#030305] text-[#f0eee8] py-32 font-['DM_Sans',sans-serif] border-t border-white/5 relative overflow-hidden">
      {/* Structural Ambient Glow System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#d4f060]/[0.02] blur-[130px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] relative z-10">
        
        {/* Centered Premium Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-20 space-y-4">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#d4f060] block">
            The Competitive Premium
          </span>
          <h2 className="font-['Syne',sans-serif] text-[38px] sm:text-[54px] font-extrabold tracking-[-0.03em] text-white leading-[1.1]">
            The Structural Advantage of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f0eee8] to-[#f0eee8]/35">
              Partnering with Pen & Pixel.
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-white/10 mx-auto !mt-6" />
          <p className="text-[#f0eee8]/45 font-light text-[16px] sm:text-[18px] max-w-[540px] mx-auto pt-2">
            We don't just complete design tickets; we engineer permanent competitive advantages for scaling teams.
          </p>
        </div>

        {/* Symmetrical Matrix Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Flow Metrics (First 2 Cards) */}
          <div className="lg:col-span-4 space-y-6">
            {benefits.slice(0, 2).map((b, i) => (
              <div 
                key={i} 
                className="bg-[#0c0c0f] border border-white/5 p-8 rounded-[24px] hover:border-[#d4f060]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#d4f060] transition-all duration-300">
                  {b.icon}
                </div>
                <h3 className="font-['Syne',sans-serif] text-[18px] font-bold text-[#f0eee8] group-hover:text-[#d4f060] mb-2 tracking-[-0.01em] transition-colors flex items-center justify-between">
                  {b.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#d4f060]" />
                </h3>
                <p className="text-[#f0eee8]/45 text-[14px] leading-[1.65] font-light">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Centerpiece Container Block */}
          <div className="lg:col-span-4 h-full min-h-[400px] lg:min-h-[510px] rounded-[24px] overflow-hidden border border-white/5 bg-[#0c0c0f] relative group">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Minimal high-end architectural symmetry" 
              className="w-full h-full object-cover opacity-25 grayscale contrast-[1.15] transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <span className="font-['Syne',sans-serif] text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4f060] bg-[#030305]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                System Node // Pen & Pixel Studio
              </span>
            </div>
          </div>

          {/* Right Column: Flow Metrics (Remaining 3 Cards) */}
          <div className="lg:col-span-4 space-y-6">
            {benefits.slice(2).map((b, i) => (
              <div 
                key={i} 
                className="bg-[#0c0c0f] border border-white/5 p-8 rounded-[24px] hover:border-[#d4f060]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#d4f060] transition-all duration-300">
                  {b.icon}
                </div>
                <h3 className="font-['Syne',sans-serif] text-[18px] font-bold text-[#f0eee8] group-hover:text-[#d4f060] mb-2 tracking-[-0.01em] transition-colors flex items-center justify-between">
                  {b.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#d4f060]" />
                </h3>
                <p className="text-[#f0eee8]/45 text-[14px] leading-[1.65] font-light">{b.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}