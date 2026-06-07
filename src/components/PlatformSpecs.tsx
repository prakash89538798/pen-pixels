"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Layers, Terminal, Sparkles, Move, Eye, Command } from "lucide-react";

interface SpecItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  detail: string;
}

interface CanvasLayer {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  metric: string;
  visualElement: React.ReactNode;
}

export default function PlatformSpecs() {
  const [activeLayer, setActiveLayer] = useState<string>("tokens");

  const specs: SpecItem[] = [
    {
      icon: Layers,
      name: "Token-Driven Frameworks",
      detail: "Design values live in perfect, real-time synchronization with production codebases. Zero translational loss."
    },
    {
      icon: Layers,
      name: "Sub-Pixel Optimization",
      detail: "Typography maps cleanly onto micro-grids for crisp and flawless readability across high-end display viewports.[cite: 2]"
    },
    {
      icon: Move,
      name: "Kinetic Micro-Interactions",
      detail: "Choreographed spatial feedback structures designed to maximize layout immersion and tactile response."
    },
    {
      icon: Terminal,
      name: "Decoupled Design Systems",
      detail: "We engineer flexible frameworks free from monolithic architectural bloat, built for infinite product scale.[cite: 2]"
    }
  ];

  const canvasLayers: Record<string, CanvasLayer> = {
    tokens: {
      id: "tokens",
      title: "Global Design Tokens Matrix",
      subtitle: "Systematic Multi-Platform Scale Engine",
      badge: "Architecture // 01",
      metric: "Ratio: 1.618 (Golden Mean)",
      visualElement: (
        <div className="space-y-6 w-full max-w-[420px]">
          <div className="flex justify-between items-center text-[11px] font-mono tracking-wider text-[#f0eee8]/35 border-b border-white/5 pb-2">
            <span>TOKEN KEY</span>
            <span>SYSTEM COMPUTED VALUE</span>
          </div>
          {[
            { key: "canvas-bg-primary", val: "#030305", type: "Color" },
            { key: "accent-neon-lime", val: "#d4f060", type: "Color" },
            { key: "font-stack-display", val: "Syne, Extrabold", type: "Type" },
            { key: "layout-grid-gutter", val: "24px (Sub-pixel aligned)", type: "Spacing" },
          ].map((token) => (
            <div key={token.key} className="flex justify-between items-center font-mono text-[12px] group/token">
              <span className="text-[#f0eee8]/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4f060]" />
                {token.key}
              </span>
              <span className="text-white font-medium bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md group-hover/token:border-[#d4f060]/30 transition-colors">
                {token.val}
              </span>
            </div>
          ))}
        </div>
      )
    },
    wireframe: {
      id: "wireframe",
      title: "Micro-Grid Composition Geometry",
      subtitle: "Absolute Visual Spatial Harmony",
      badge: "Structural // 02",
      metric: "Grid: 8px Multi-Density Array",
      visualElement: (
        <div className="w-full max-w-[440px] aspect-[16/10] border border-dashed border-white/10 rounded-xl relative p-4 flex flex-col justify-between overflow-hidden bg-black/20">
          {/* Spatial Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,240,96,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,240,96,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="flex justify-between items-center relative z-10">
            <div className="w-24 h-3 bg-white/10 rounded-full" />
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-white/10" />
              <div className="w-4 h-4 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="space-y-3 relative z-10">
            <div className="w-full h-8 border border-[#d4f060]/30 rounded-lg flex items-center px-3 justify-between bg-[#d4f060]/[0.02]">
              <span className="font-mono text-[9px] text-[#d4f060] tracking-widest">CONTAINER_HERO_NODE</span>
              <div className="w-2 h-2 rounded-full bg-[#d4f060]" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 border border-white/10 rounded-lg bg-white/[0.01]" />
              <div className="h-16 border border-white/10 rounded-lg bg-white/[0.01]" />
              <div className="h-16 border border-white/10 rounded-lg bg-white/[0.01]" />
            </div>
          </div>
        </div>
      )
    },
    motion: {
      id: "motion",
      title: "Choreographed Spatial Transitions",
      subtitle: "Fluid Mechanical Physics Simulation",
      badge: "Kinetic // 03",
      metric: "Easing: cubic-bezier(0.16, 1, 0.3, 1)",
      visualElement: (
        <div className="w-full max-w-[420px] space-y-4">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#d4f060] animate-ping" />
              <span className="text-[13px] font-medium font-['Syne',sans-serif]">Page_Transition_Intro</span>
            </div>
            <span className="font-mono text-[11px] text-[#f0eee8]/45">Duration: 700ms</span>
          </div>
          {/* Vector Bezier Curve Graphic */}
          <div className="h-32 w-full rounded-xl border border-white/5 bg-black/40 relative overflow-hidden p-4 flex items-end">
            <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C16,0 30,100 100,0" fill="none" stroke="#d4f060" strokeWidth="2" strokeDasharray="100" strokeDashoffset="0" />
            </svg>
            <div className="flex justify-between w-full relative z-10 font-mono text-[9px] text-[#f0eee8]/20">
              <span>INBOUND [0.0]</span>
              <span>OUTBOUND [1.0]</span>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="platform-specs" className="relative py-28 md:py-36 bg-[#030305] overflow-hidden border-t border-white/5 font-['DM_Sans',sans-serif]">
      {/* High-End Atmospheric Production Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#d4f060]/[0.02] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute right-[-10%] top-10 w-[400px] h-[400px] bg-white/[0.01] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column & Feature Grids */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 font-medium text-[11px] uppercase tracking-[0.3em] text-[#d4f060] before:content-[''] before:w-4 before:h-[1px] before:bg-[#d4f060]">
                <Sparkles className="w-3 h-3 opacity-80" />
                The Design Architecture
              </span>
              <h2 className="font-['Syne',sans-serif] text-[38px] sm:text-[54px] font-extrabold tracking-[-0.03em] text-white leading-[1.05]">
                Where Pure Intent <br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(240,238,232,0.35)]">Meets Form.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#f0eee8]/45 leading-relaxed font-light pt-2">
                We design flawless structural systems. By uniting strict spatial mathematics with elegant aesthetic principles, Pen & Pixel engineers high-velocity brand canvases that feel effortless and look inevitable.
              </p>
            </div>

            {/* Custom Interactive Architectural Grid Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div 
                  key={spec.name} 
                  className="group space-y-4 p-6 rounded-[22px] bg-[#0c0c0f] border border-white/5 hover:border-[#d4f060]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#d4f060] before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 group-hover:before:scale-y-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#d4f060]/5 border border-[#d4f060]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#d4f060] group-hover:text-[#030305]">
                      <spec.icon
  className="w-4 h-4 text-[#d4f060] group-hover:text-[#030305] transition-colors duration-300"
/>
                    </div>
                    <h3 className="font-['Syne',sans-serif] text-[14px] font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-[#d4f060]">
                      {spec.name}
                    </h3>
                  </div>
                  <p className="text-[12.5px] text-[#f0eee8]/45 leading-relaxed font-light">{spec.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Luxury Canvas Preview Engine */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-[28px] border border-white/5 bg-[#0c0c0f] shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden relative">
              
              {/* Studio Canvas Control Bar */}
              <div className="px-6 py-4 bg-white/[0.01] border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Command className="w-3.5 h-3.5 text-[#d4f060]" />
                  <span className="font-['Syne',sans-serif] text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                    Living Design Canvas
                  </span>
                </div>
                
                {/* Visual Framework Toggle Switches */}
                <div className="flex bg-black/40 border border-white/5 rounded-xl p-1 gap-1">
                  {(Object.keys(canvasLayers) as Array<keyof typeof canvasLayers>).map((key) => {
                    const isActive = activeLayer === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveLayer(key)}
                        className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-[#d4f060] text-[#030305] font-semibold shadow-lg"
                            : "text-[#f0eee8]/45 hover:text-[#f0eee8]/80"
                        }`}
                      >
                        {key}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Central Interactive Showroom Window */}
              <div className="p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black/30 relative overflow-hidden">
                
                {/* Absolute Floating UI Badges */}
                <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[10px] text-[#f0eee8]/30">
                  <Eye className="w-3 h-3 text-[#d4f060]" />
                  <span>{canvasLayers[activeLayer].badge}</span>
                </div>
                <div className="absolute top-6 right-6 font-mono text-[10px] text-[#f0eee8]/30">
                  <span>{canvasLayers[activeLayer].metric}</span>
                </div>

                {/* Animated Layer Transition Portals */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayer}
                    initial={{ opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.04, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center text-center space-y-8"
                  >
                    {/* Active Layer Graphics */}
                    {canvasLayers[activeLayer].visualElement}

                    {/* Metadata Readouts */}
                    <div className="space-y-1 pt-4 border-t border-white/5 w-full">
                      <h4 className="font-['Syne',sans-serif] text-[18px] font-bold text-white tracking-tight">
                        {canvasLayers[activeLayer].title}
                      </h4>
                      <p className="text-[13px] font-mono tracking-wide text-[#d4f060]/70">
                        {canvasLayers[activeLayer].subtitle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Luxury Studio Grid Footer */}
              <div className="px-6 py-4 border-t border-white/5 bg-black/40 flex items-center justify-between font-mono text-[9px] text-[#f0eee8]/20 tracking-[0.12em]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4f060] animate-pulse" />
                  <span>CANVAS VIEWPORT // ACTIVE SYSTEM SYNCHRONIZATION</span>
                </div>
                <span className="hidden sm:inline text-right">SCALE v1.0.9</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}