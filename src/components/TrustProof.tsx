"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, ShieldCheck, ArrowUpRight, ArrowRight, Quote } from "lucide-react";

// --- Types & Interfaces ---
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  title: string;
  review: string;
  tags: string[];
  image: string;
}

export default function TrustProof() {
  const logos = [
    "Aura Apparel", "Nexus Summit", "CloudScale AI", "Acme Corp", 
    "Vortex Digital", "Pulse Fintech", "Quantum Labs", "Nova Studio"
  ];

  const testimonials: TestimonialCardProps[] = [
    {
      name: "Sarah Jenkins",
      role: "Founder & CEO",
      company: "Aura Apparel",
      title: "The E-Commerce Web Overhaul",
      review: "Pen & Pixels completely transformed our digital storefront. They took our slow, outdated website and rebuilt a lightning-fast, dark-themed custom frontend that perfectly captures our premium aesthetic. Our conversion rate jumped by 34% within the first month of launching.",
      tags: ["Custom Web Development", "Brand Identity"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "Head of Marketing",
      company: "Nexus Summit",
      title: "The Sold-Out Marketing Campaign",
      review: "We needed an explosive visual campaign for our annual tech summit. Pen & Pixels delivered an incredible suite of high-impact digital flyers, street posters, and social media assets that absolutely stood out. Our early-bird tickets sold out in less than 48 hours.",
      tags: ["Print Media", "Marketing Kit"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Marcus Vance",
      role: "Co-Founder",
      company: "CloudScale AI",
      title: "The SaaS Launch Experience",
      review: "As a fast-growing startup, we needed both an intuitive UI/UX design for our software dashboard and a high-converting landing page. The team delivered a beautiful, pixel-perfect layout and smooth micro-interactions that kept users completely engaged.",
      tags: ["UI/UX Design", "Landing Page"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section 
      id="trust-proof" 
      className="relative py-32 md:py-48 bg-[#09090b] text-white overflow-hidden font-['DM_Sans',sans-serif]"
    >
      {/* ================= HIGH-END BLENDING MIX MATRIX ================= */}
      {/* Absolute top glow gradient that catches the previous white section and bleeds it down into velvet black */}
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-white via-[#141417]/40 to-transparent opacity-100 pointer-events-none z-10 mix-blend-normal" />
      
      {/* Subtle luxury technical drafting patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-20">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20 border-b border-white/[0.08]">
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#86868b]">
                Success Stories
              </span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-[38px] sm:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
              Trusted by <br/>Ambitious Brands.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-5">
            <h3 className="text-[20px] sm:text-[26px] font-medium text-white/90 tracking-tight max-w-[540px]">
              Don’t just take our word for it. Look at the architectural evidence.
            </h3>
            <p className="text-[16px] text-[#86868b] font-light leading-relaxed max-w-[640px]">
              We’ve engineered a transparent, fluid workflow that fuses creative artistry with technical execution. 
              Here is how we’ve helped businesses scale their digital presence and command attention in the real world.
            </p>
          </div>
        </div>

        {/* ================= PART 1: THE CLIENT MARQUEE ================= */}
        <div className="py-16 relative overflow-hidden mask-gradient-horizontal">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max gap-16 animate-marquee pause-hover">
            {/* Double mapping array loop for seamless infinite structural carousel */}
            {[...logos, ...logos].map((logo, idx) => (
              <div 
                key={idx} 
                className="text-[15px] md:text-[18px] font-['Syne',sans-serif] font-bold tracking-wider text-white/20 uppercase hover:text-white/80 transition-colors duration-300 flex items-center gap-2 select-none cursor-default"
              >
                <span>✦</span>
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: 3D BENTO GLASS TESTIMONIAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>

        {/* ================= PART 3: THE AUTHENTICITY BADGES ================= */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-wrap items-center gap-8 justify-center sm:justify-start">
            {/* Badge 1 */}
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-amber-400 group-hover:bg-amber-400/10 transition-all duration-300">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white tracking-tight">4.9/5 Average Rating</p>
                <p className="text-[11px] text-[#86868b] font-mono uppercase tracking-wider">40+ Creative Contracts</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/10 transition-all duration-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white tracking-tight">100% Verified Reviews</p>
                <p className="text-[11px] text-[#86868b] font-mono uppercase tracking-wider">Linked to Active Engines</p>
              </div>
            </div>
          </div>

          {/* Action Trigger Anchor */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3.5 rounded-full bg-white text-black text-[13px] font-semibold tracking-wide flex items-center gap-2 shadow-2xl hover:bg-neutral-100 transition-all duration-300"
          >
            <span>Launch Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

        </div>

      </div>
    </section>
  );
}

// --- High-Performance Glassmorphism 3D Card Sub-Component ---
function TestimonialCard({ name, role, company, title, review, tags, image }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values initialization for realistic spatial cursor parallax tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    const width = bounds.width;
    const height = bounds.height;
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative rounded-[32px] p-8 bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col justify-between min-h-[440px] hover:border-white/[0.18] transition-colors duration-500 overflow-hidden will-change-transform"
    >
      {/* Spotlight Backlighting Effect Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(800px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.04),transparent_40%)]" 
           onMouseMove={(e) => {
             const target = e.currentTarget;
             const rect = target.getBoundingClientRect();
             target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
             target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
           }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="space-y-6 transition-transform duration-500">
        
        {/* Header Elements */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-white/[0.03] group-hover:text-white/[0.08] transform group-hover:rotate-12 transition-all duration-500" />
        </div>

        {/* Review Title & Body text layer */}
        <div className="space-y-3">
          <h4 className="text-[17px] font-bold tracking-tight text-white/95 group-hover:text-white transition-colors duration-300">
            {title}
          </h4>
          <p className="text-[14px] leading-relaxed font-light text-[#86868b] group-hover:text-[#a2a2a8] transition-colors duration-300">
            "{review}"
          </p>
        </div>
      </div>

      {/* Footer Profile Frame Layer */}
      <div style={{ transform: "translateZ(40px)" }} className="mt-8 pt-6 border-t border-white/[0.05] flex items-center justify-between transition-transform duration-500">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-white/[0.1] shadow-inner relative bg-zinc-800">
            <img src={image} alt={name} className="w-full h-full object-cover scale-102 group-hover:scale-108 transition-transform duration-500" />
          </div>
          <div>
            <h5 className="text-[14px] font-bold tracking-tight text-white">{name}</h5>
            <p className="text-[11px] text-[#86868b] font-medium tracking-tight">{role}, <span className="text-white/60">{company}</span></p>
          </div>
        </div>

        {/* Dynamic Project Scope System Pill Indicators */}
        <div className="flex flex-col gap-1 items-end hidden sm:flex">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[9px] font-mono uppercase tracking-wider text-white/40 bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
}