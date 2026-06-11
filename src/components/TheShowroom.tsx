"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, ArrowUpRight, Command, Grid, Eye, ChevronUp, ChevronDown, Plus } from "lucide-react";

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
  iconType: "tasks" | "chat" | "project" | "notes" | "marketing";
}

export default function TheShowroom() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedVaultIndex, setSelectedVaultIndex] = useState<number>(2); /* Default to Project Management slice */
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

  // Extended Vault Dataset remapped to accommodate the Cyber-Dial Structure
  const vaultItems: VaultItem[] = [
    {
      id: "vault-1",
      type: "web",
      tag: "Index // Engine",
      title: "Automated Task Scheduler Pipeline Matrix",
      image: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?q=80&w=600&auto=format&fit=crop",
      iconType: "tasks"
    },
    {
      id: "vault-2",
      type: "brand",
      tag: "Social // Sync",
      title: "Design Chat Decentralized Workspace Interface",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
      iconType: "chat"
    },
    {
      id: "vault-3",
      type: "web",
      tag: "Interface // SaaS",
      title: "Horizon SaaS Project Management Blueprint Dashboard",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed255753e1?q=80&w=600&auto=format&fit=crop",
      iconType: "project"
    },
    {
      id: "vault-4",
      type: "print",
      tag: "System // Arch",
      title: "Encrypted Meeting Notes Knowledge Base Layout",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
      iconType: "notes"
    },
    {
      id: "vault-5",
      type: "brand",
      tag: "Strategy // Scale",
      title: "High-Yield Sales Marketing Funnel Graphics",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop",
      iconType: "marketing"
    }
  ];

  const filteredProjects = featuredProjects.filter(p => activeFilter === "all" || p.type === activeFilter);
  
  // Keep active index clamped within bounds if filters alter visible sets
  const activeVaultItem = vaultItems[selectedVaultIndex] || vaultItems[0];

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
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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

        {/* ================= PART 2: THE CREATIVE VAULT (HULY DIAL REDESIGN) ================= */}
        <div className="border-t border-white/[0.06] pt-24 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#d4f060] font-mono text-[12px] tracking-widest uppercase">
                <Grid className="w-3.5 h-3.5" />
                <span>Custom Huly Dial Index</span>
              </div>
              <h3 className="font-['Syne',sans-serif] text-[28px] font-bold text-white tracking-tight">
                The Creative Vault
              </h3>
            </div>
            <p className="text-[14px] text-[#86868b] max-w-[400px] font-light leading-relaxed">
              Interact directly with the systemic rotary canvas. Scrub the nodes or spin the dial structure to track production micro-sheets.
            </p>
          </div>

          {/* Master Structural Container for Dial Engine Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[640px] bg-[#070709] border border-white/[0.03] rounded-[48px] p-6 md:p-12 relative overflow-hidden group/vaultSection shadow-[2xl]">
            
            {/* Left/Center Column: The Huly Dial Interactive Mech Component */}
            <div className="col-span-1 lg:col-span-7 flex justify-center items-center relative py-12">
              <InteractiveDialEngine 
                items={vaultItems}
                selectedIndex={selectedVaultIndex}
                setSelectedIndex={setSelectedVaultIndex}
                hoveredIndex={hoveredVaultIndex}
                setHoveredIndex={setHoveredVaultIndex}
              />
            </div>

            {/* Right Column: High-Fidelity Context Window & Metadata Display */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:border-l border-white/[0.06] lg:pl-12">
              
              {/* Dynamic Image Frame Asset Card */}
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/[0.06] bg-black shadow-[0_30px_60px_rgba(0,0,0,0.6)] group/previewCard">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVaultItem.id}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={activeVaultItem.image} 
                      alt={activeVaultItem.title} 
                      className="w-full h-full object-cover transform scale-102 group-hover/previewCard:scale-108 transition-transform duration-[1.5s] ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Visual Glass Filter Top Bar Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md text-[#d4f060] px-3 py-1 rounded-full border border-white/10 tracking-widest">
                    Live Engine Terminal
                  </span>
                  <div className="w-7 h-7 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4f060] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Text Description Block metadata tracks selected elements */}
              <div className="space-y-4 min-h-[140px] flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVaultItem.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d4f060] bg-[#d4f060]/5 border border-[#d4f060]/10 px-2.5 py-1 rounded-md inline-block mb-2">
                        {activeVaultItem.tag}
                      </span>
                      <h4 className="font-['Syne',sans-serif] text-[22px] font-bold text-white tracking-tight leading-tight">
                        {activeVaultItem.title}
                      </h4>
                    </div>
                    <p className="text-[13.5px] text-[#86868b] leading-relaxed font-light">
                      Fully production-compiled interface element deployed via advanced micro-components architecture. Built with highly adaptable core hooks configuration layouts.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Trigger Interface */}
              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  Index Block 0{selectedVaultIndex + 1} // 0{vaultItems.length}
                </span>
                <button className="text-[13px] font-medium text-white hover:text-[#d4f060] flex items-center gap-1.5 transition-colors group/vaultBtn cursor-pointer">
                  <span>Extract Blueprint Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/vaultBtn:translate-x-0.5 group-hover/vaultBtn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>
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

  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightBG = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

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
      <motion.div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ background: spotlightBG }}
      />

      <div className="absolute inset-4 rounded-[24px] border border-white/[0.05] z-10 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-[2px]" />

      <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-neutral-900 shadow-inner">
        <img 
          src={src} 
          alt={title} 
          className="w-full h-full object-cover transform scale-102 group-hover/canvas:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 group-hover/canvas:bg-black/5 transition-colors duration-500" />
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#d4f060] shadow-2xl rounded-full flex items-center gap-2 transform scale-75 group-hover/canvas:scale-100 transition-transform duration-500 ease-out">
          <Eye className="w-3.5 h-3.5 text-black" />
          <span className="text-[11px] font-mono font-bold uppercase text-black tracking-wider">Inspect Mesh</span>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// --- PART 2 PREMIUM EXTRA: ADVANCED CYBER-DIAL ENGINE (HULY INSPIRED) ---
// ============================================================================
// ✅ PASTE THIS REWRITTEN BLOCK INSTEAD:
interface DialEngineProps {
  items: VaultItem[];
  selectedIndex: number;
  /* Fixed: Changed type definition to accept functional state updates */
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
}

function InteractiveDialEngine({ items, selectedIndex, setSelectedIndex, hoveredIndex, setHoveredIndex }: DialEngineProps) {
  const dialRef = useRef<HTMLDivElement>(null);

  // Parallax Spring Setup for the interactive component container
  const dialRotX = useSpring(useMotionValue(0), { damping: 35, stiffness: 180 });
  const dialRotY = useSpring(useMotionValue(0), { damping: 35, stiffness: 180 });

  const handleDialMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Low factor scale bounds to maintain clear reading alignment
    dialRotX.set(-y * 0.04);
    dialRotY.set(x * 0.04);
  };

  const handleDialMouseLeave = () => {
    dialRotX.set(0);
    dialRotY.set(0);
    setHoveredIndex(null);
  };

  // Convert raw icon types into custom visual configurations matching the image mesh
  const renderIcon = (type: string, cssClass: string) => {
    switch(type) {
      case "tasks":
        return (
          <svg className={cssClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        );
      case "chat":
        return (
          <span className={`${cssClass} font-mono font-bold text-[14px] flex items-center justify-center`}>#</span>
        );
      case "project":
        return (
          <svg className={cssClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        );
      case "notes":
        return (
          <svg className={cssClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.5 4.5 0 111.5 1.5m-3 0A3.513 3.513 0 019 5.25c0-1.03.693-1.9 1.638-2.166" />
          </svg>
        );
      case "marketing":
        return (
          <svg className={cssClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 8V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        );
      default:
        return <Plus className={cssClass} />;
    }
  };

  const totalAngleSpan = 140;
  const angleStep = totalAngleSpan / (items.length - 1);
  const baseOffsetAngle = -70;

  return (
    <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none">
      
      <div className="absolute top-0 left-4 font-mono text-[11px] text-white/30 tracking-widest uppercase">
        Customize Huly Dial <br />
        <span className="text-white/10 text-[10px]">Optimise your quick access menu</span>
      </div>

      <motion.div
        ref={dialRef}
        onMouseMove={handleDialMouseMove}
        onMouseLeave={handleDialMouseLeave}
        style={{
          rotateX: dialRotX,
          rotateY: dialRotY,
          transformStyle: "preserve-3d",
        }}
        className="w-[90%] h-[90%] rounded-full relative flex items-center justify-center transition-shadow duration-500"
      >
        
        <div className="absolute w-[180px] h-[180px] rounded-full bg-[#e3e3e6] shadow-[0_15px_45px_rgba(0,0,0,0.9),inset_0_-4px_12px_rgba(0,0,0,0.2),inset_0_4px_12px_rgba(255,255,255,0.6)] flex items-center justify-center z-30 border border-white/20 transform translate-z-[40px]">
          <div className="w-[84%] h-[84%] rounded-full border-2 border-dashed border-black/10 flex items-center justify-center relative">
            <div className="flex flex-col space-y-1 items-center justify-center">
              <div className="w-5 h-[2px] bg-neutral-800 rounded-full" />
              <div className="w-5 h-[2px] bg-neutral-800 rounded-full" />
              <div className="w-5 h-[2px] bg-neutral-800 rounded-full" />
            </div>
            <div className="absolute inset-0 rounded-full border border-black/[0.05] animate-spin-slow pointer-events-none" />
          </div>
        </div>

        <div className="absolute w-[320px] h-[320px] rounded-full border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent z-10 pointer-events-none" />

        {(() => {
          const currentActiveAngle = baseOffsetAngle + (selectedIndex * angleStep);
          return (
            <motion.div 
              className="absolute w-[340px] h-[340px] pointer-events-none z-10"
              animate={{ rotate: currentActiveAngle }}
              transition={{ type: "spring", stiffness: 140, damping: 24 }}
              style={{ originX: "50%", originY: "50%" }}
            >
              <div 
                className="absolute top-1/2 left-1/2 w-[150px] h-[80px] bg-white/[0.04] border-t border-b border-r border-white/10 rounded-r-full blur-[2px]"
                style={{
                  transform: "translate(20px, -40px)",
                  clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 65%)"
                }}
              />
            </motion.div>
          );
        })()}

        <div className="absolute inset-0 w-full h-full z-20">
          {items.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            const isHovered = hoveredIndex === idx;
            const currentAngle = baseOffsetAngle + (idx * angleStep);
            const radius = 210;
            const angleInRad = (currentAngle * Math.PI) / 180;
            const xPos = Math.cos(angleInRad) * radius;
            const yPos = Math.sin(angleInRad) * radius;

            return (
              <div
                key={item.id}
                className="absolute top-1/2 left-1/2 flex items-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-auto"
                style={{
                  transform: `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`,
                }}
              >
                <div 
                  className={`h-[1px] origin-left transition-all duration-500 absolute right-full top-1/2 -translate-y-1/2 ${
                    isSelected ? "bg-white/20 w-8" : "bg-transparent w-4"
                  }`} 
                />

                <button
                  onClick={() => setSelectedIndex(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`px-5 py-3 rounded-2xl border flex items-center gap-3 backdrop-blur-xl transition-all duration-500 min-w-[190px] shadow-lg text-left cursor-pointer group/node ${
                    isSelected 
                      ? "bg-white/[0.07] border-white/20 text-white translate-x-2 shadow-white/[0.02]" 
                      : isHovered
                      ? "bg-white/[0.04] border-white/10 text-neutral-200 translate-x-1"
                      : "bg-black/40 border-white/[0.03] text-neutral-400 opacity-60"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg border transition-colors duration-300 ${
                    isSelected ? "bg-white/10 border-white/20 text-[#d4f060]" : "bg-black/40 border-white/5 text-neutral-400"
                  }`}>
                    {renderIcon(item.iconType, "w-4 h-4")}
                  </div>

                  <span className="text-[13px] font-medium tracking-tight flex-1">
                    {item.iconType === "chat" ? "Design Chat" : 
                     item.iconType === "tasks" ? "Tasks Index" : 
                     item.iconType === "project" ? "Project management" : 
                     item.iconType === "notes" ? "Meeting notes" : "Sale marketing"}
                  </span>

                  <ArrowUpRight className={`w-3.5 h-3.5 opacity-0 transition-all duration-300 transform ${
                    isSelected ? "opacity-100 translate-x-0" : "group-node:opacity-40 -translate-x-1"
                  }`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* --- FIXED CYBER ACCENT BUTTONS --- */}
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 bg-white/[0.02] border border-white/[0.05] rounded-full p-2 backdrop-blur-md z-30">
          <button 
            onClick={() => setSelectedIndex((prev: number) => Math.max(0, prev - 1))}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <div className="w-5 h-5 rounded-md border border-white/20 flex items-center justify-center text-[10px] text-[#d4f060] font-mono">
            {selectedIndex + 1}
          </div>
          <button 
            onClick={() => setSelectedIndex((prev: number) => Math.min(items.length - 1, prev + 1))}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </motion.div>

      <div className="absolute bottom-0 right-4 flex gap-3 z-30">
        <button className="px-5 py-2.5 rounded-xl text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer">
          Cancel
        </button>
        <button className="px-5 py-2.5 rounded-xl text-xs font-medium bg-white/[0.06] border border-white/10 text-white hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg">
          Save changes
        </button>
      </div>

    </div>
  );
}
