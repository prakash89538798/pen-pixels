"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, ArrowUpRight, Command, Grid, Eye, Layers } from "lucide-react";

// --- Types & Data Interfaces ---
interface Project {
  id: string;
  type: "web" | "print" | "brand";
  num: string;
  categoryName: string;
  title: string;
  challenge: string;
  delivered: string[];
  image: string;
}

interface VaultItem {
  id: string;
  type: "web" | "print" | "brand";
  tag: string;
  title: string;
  image: string;
}

export default function TheShowroom() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredVaultIndex, setHoveredVaultIndex] = useState<number | null>(null);

  // Core Projects Dataset
  const featuredProjects: Project[] = [
    {
      id: "feat-1",
      type: "web",
      num: "01 // UI/UX Architecture",
      categoryName: "Web & UI/UX",
      title: "Apex FinTech – Next-Gen Digital Banking",
      challenge: "Transforming a traditional financial platform into a sleek, dark-themed mobile and web application for modern users.",
      delivered: ["Full UI/UX redesign", "Responsive frontend layout", "Interactive financial dashboard widgets", "Smooth micro-interactions"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "feat-2",
      type: "print",
      num: "02 // Campaign Systems",
      categoryName: "Print & Marketing Media",
      title: "Vanguard Music Festival – Event Campaign",
      challenge: "Creating a unified, high-energy visual identity for a major electronic music festival that works equally well on city street posters and Instagram feeds.",
      delivered: ["Holographic flyer designs", "Large-format street posters", "Motion graphic social media stories", "Artist lineup templates"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "feat-3",
      type: "brand",
      num: "03 // Corporate DNA",
      categoryName: "Full-Scale Branding",
      title: "Nebula Coffee Co. – Identity & Packaging",
      challenge: "Designing a cohesive brand experience for a premium, tech-inspired coffee roastery from the ground up.",
      delivered: ["Custom vector logo suite", "Minimalist product packaging design", "Brand menu cards", "Conversion-focused single-page ordering website"],
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  // Extended Vault Dataset
  const vaultItems: VaultItem[] = [
    {
      id: "vault-1",
      type: "print",
      tag: "Flyer // Graphic",
      title: "Cyberpunk Tech Conference Promotional Flyer",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "vault-2",
      type: "web",
      tag: "Interface // SaaS",
      title: "Horizon SaaS Landing Page Interface",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed255753e1?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "vault-3",
      type: "print",
      tag: "Poster // System",
      title: "Retro-Futuristic Film Festival Poster Series",
      image: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "vault-4",
      type: "brand",
      tag: "Social // Kit",
      title: "E-Commerce Product Launch Kit",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Filtering System Calculations
  const filteredProjects = featuredProjects.filter(p => activeFilter === "all" || p.type === activeFilter);
  const filteredVault = vaultItems.filter(v => activeFilter === "all" || v.type === activeFilter);

  return (
    <section id="showroom" className="relative py-32 md:py-48 bg-[#000000] overflow-hidden border-t border-white/[0.04] font-['DM_Sans',sans-serif]">
      
      {/* --- Luxury Lighting Canvas Layout --- */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#d4f060]/[0.015] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] bg-white/[0.01] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-[#d4f060]/[0.01] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= SECTION HEADER & NAVIGATION ================= */}
        <div className="flex flex-col items-center text-center space-y-6 pb-20 border-b border-white/[0.06]">
          <span className="inline-flex items-center gap-2 font-medium text-[11px] uppercase tracking-[0.3em] text-[#d4f060] before:content-[''] before:w-4 before:h-[1px] before:bg-[#d4f060]">
            <Sparkles className="w-3 h-3 opacity-80" />
            Our Work / Selected Projects
          </span>
          <h2 className="font-['Syne',sans-serif] text-[42px] sm:text-[64px] font-extrabold tracking-[-0.03em] text-white leading-[1.05] max-w-[850px]">
            Crafted with Precision. <br />
            Delivered with <span className="text-transparent [-webkit-text-stroke:1px_rgba(245,245,247,0.4)]">Impact.</span>
          </h2>
          
          {/* Elite Glassmorphic Filter Matrix */}
          <div className="pt-6">
            <div className="p-1.5 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.05] flex flex-wrap gap-1 justify-center">
              {[
                { id: "all", label: "Show All" },
                { id: "web", label: "Web & UI/UX" },
                { id: "print", label: "Print & Posters" },
                { id: "brand", label: "Brand Identity" }
              ].map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`relative px-6 py-2.5 rounded-full text-[12px] font-medium tracking-wide transition-all duration-500 cursor-pointer ${
                      isActive ? "text-[#030305]" : "text-[#86868b] hover:text-[#f5f5f7]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterGlow"
                        className="absolute inset-0 bg-[#d4f060] shadow-[0_4px_20px_rgba(212,240,96,0.3)] rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= PART 1: FEATURED CASE STUDIES ================= */}
        <div className="py-24 space-y-32 md:space-y-48">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.7, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  
                  {/* Text Description Column */}
                  <div className={`lg:col-span-5 space-y-8 ${!isEven ? "lg:order-2" : ""}`}>
                    <span className="font-mono text-[13px] text-[#d4f060] tracking-widest block">
                      {project.num}
                    </span>
                    <div className="space-y-4">
                      <h3 className="font-['Syne',sans-serif] text-[28px] sm:text-[36px] font-bold tracking-tight text-white leading-tight">
                        {project.title}
                      </h3>
                      <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-sm">
                        <h4 className="text-[11px] font-mono tracking-widest text-[#86868b] uppercase mb-2">The Challenge</h4>
                        <p className="text-[14.5px] text-[#86868b] leading-relaxed font-light">
                          {project.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Output Scope Tags */}
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-mono tracking-widest text-white/40 uppercase">What We Delivered</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.delivered.map((item, i) => (
                          <span 
                            key={i} 
                            className="text-[12px] text-[#f5f5f7]/80 bg-white/[0.02] border border-white/[0.05] px-3.5 py-1.5 rounded-xl font-sans"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphic Parallax Image Node Column */}
                  <div className={`lg:col-span-7 ${!isEven ? "lg:order-1" : ""}`}>
                    <InteractiveImageContainer src={project.image} title={project.title} />
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ================= PART 2: THE CREATIVE VAULT ================= */}
        <div className="border-t border-white/[0.06] pt-24 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#d4f060] font-mono text-[12px] tracking-widest uppercase">
                <Grid className="w-3.5 h-3.5" />
                <span>Extended Index</span>
              </div>
              <h3 className="font-['Syne',sans-serif] text-[24px] font-bold text-white tracking-tight">
                The Creative Vault
              </h3>
            </div>
            <p className="text-[14px] text-[#86868b] max-w-[360px] font-light leading-relaxed">
              A deep ecosystem library containing rapid-deployment micro-projects and exploratory structural UI design sheets.
            </p>
          </div>

          {/* High-Contrast Masonry Style Dynamic Vault Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredVault.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onMouseEnter={() => setHoveredVaultIndex(idx)}
                  onMouseLeave={() => setHoveredVaultIndex(null)}
                  className="group relative rounded-3xl bg-[#0c0c0f] border border-white/[0.04] overflow-hidden p-4 flex flex-col justify-between aspect-[3/4] hover:border-white/[0.1] hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500"
                >
                  {/* Subtle Interactive Mesh Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-black/40 z-0 pointer-events-none" />
                  
                  {/* Vault Image Frame */}
                  <div className="w-full h-[65%] rounded-2xl overflow-hidden relative border border-white/[0.03]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform scale-102 group-hover:scale-108 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>

                  {/* Metadata Track */}
                  <div className="space-y-2 pt-4 relative z-10 mt-auto">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#d4f060] bg-[#d4f060]/5 border border-[#d4f060]/10 px-2 py-0.5 rounded-md inline-block">
                      {item.tag}
                    </span>
                    <h4 className="text-[14px] font-medium text-[#e8e8ed] tracking-tight line-clamp-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  {/* Upper Right Action Flag */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d4f060]" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ================= SECTION FOOTER CALL-TO-ACTION ================= */}
        <div className="mt-36 md:mt-48 rounded-[40px] bg-gradient-to-b from-[#0c0c0f] to-[#040405] border border-white/[0.04] p-8 md:p-16 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.9)] group/cta">
          {/* Glassmorphic Core Mask Orbs */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,240,96,0.04),transparent_60%)] pointer-events-none" />
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4f060]/[0.02] blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[620px] mx-auto space-y-8 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mx-auto shadow-inner text-zinc-400 group-hover/cta:text-[#d4f060] group-hover/cta:border-[#d4f060]/20 transition-colors duration-500">
              <Command className="w-5 h-5 animate-spin-slow" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-[32px] sm:text-[46px] font-extrabold text-white tracking-tight leading-[1.1]">
              Your project deserves a spot in our showroom.
            </h3>
            
            <div className="pt-2 flex justify-center">
              <button className="px-8 py-4 rounded-full bg-white text-black font-medium tracking-wide text-[14px] shadow-[0_15px_30px_rgba(255,255,255,0.1)] hover:bg-[#d4f060] hover:shadow-[0_15px_35px_rgba(212,240,96,0.25)] hover:scale-[1.03] transition-all duration-500 ease-out cursor-pointer flex items-center gap-2 group/btn">
                <span>Launch Your Project With Us</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- High-End Interactive Parallax Glass Container Sub-Component ---
function InteractiveImageContainer({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion metrics for high-fidelity 3D spring warping transformations
  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });

  // Floating spotlight coordinate structures
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightBG = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Relative tracking values
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    // Convert mouse vectors to angle offsets (-10 deg to 10 deg scale bounds)
    const rX = ((mouseYPos / height) - 0.5) * -12;
    const rY = ((mouseXPos / width) - 0.5) * 12;

    rotateX.set(rX);
    rotateY.set(rY);

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d"
      }}
      className="w-full aspect-[16/11] rounded-[32px] bg-[#0c0c0f] border border-white/[0.04] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.7)] relative overflow-hidden group/canvas transition-shadow duration-500 hover:shadow-[0_50px_100px_rgba(212,240,96,0.05)] cursor-none"
    >
      {/* Absolute High-Fidelity Spotlight Layer */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ background: spotlightBG }}
      />

      {/* Internal Glassmorphic Canvas Backdrop */}
      <div className="absolute inset-4 rounded-[24px] border border-white/[0.05] z-10 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-[2px]" />

      {/* Embedded Render Image Element */}
      <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-neutral-900 shadow-inner">
        <img 
          src={src} 
          alt={title} 
          className="w-full h-full object-cover transform scale-102 group-hover/canvas:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 group-hover/canvas:bg-black/5 transition-colors duration-500" />
      </div>

      {/* Floating Hover Custom Pointer Flag */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#d4f060] shadow-2xl rounded-full flex items-center gap-2 transform scale-75 group-hover/canvas:scale-100 transition-transform duration-500 ease-out">
          <Eye className="w-3.5 h-3.5 text-black" />
          <span className="text-[11px] font-mono font-bold uppercase text-black tracking-wider">Inspect Mesh</span>
        </div>
      </div>
    </motion.div>
  );
}