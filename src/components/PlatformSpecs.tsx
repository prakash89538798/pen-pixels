"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Layers,
  Terminal,
  Sparkles,
  Move,
  Eye,
  Command,
} from "lucide-react";

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
      detail:
        "Design values live in perfect, real-time synchronization with production codebases. Zero translational loss.",
    },
    {
      icon: Layers,
      name: "Sub-Pixel Optimization",
      detail:
        "Typography maps cleanly onto micro-grids for crisp and flawless readability across high-end display viewports.[cite: 2]",
    },
    {
      icon: Move,
      name: "Kinetic Micro-Interactions",
      detail:
        "Choreographed spatial feedback structures designed to maximize layout immersion and tactile response.",
    },
    {
      icon: Terminal,
      name: "Decoupled Design Systems",
      detail:
        "We engineer flexible frameworks free from monolithic architectural bloat, built for infinite product scale.[cite: 2]",
    },
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
            {
              key: "canvas-bg-primary",
              val: "#030305",
              type: "Color",
            },
            {
              key: "accent-neon-lime",
              val: "#d4f060",
              type: "Color",
            },
            {
              key: "font-stack-display",
              val: "Syne, Extrabold",
              type: "Type",
            },
            {
              key: "layout-grid-gutter",
              val: "24px (Sub-pixel aligned)",
              type: "Spacing",
            },
          ].map((token) => (
            <div
              key={token.key}
              className="flex justify-between items-center font-mono text-[12px] group/token"
            >
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
      ),
    },

    wireframe: {
      id: "wireframe",
      title: "Micro-Grid Composition Geometry",
      subtitle: "Absolute Visual Spatial Harmony",
      badge: "Structural // 02",
      metric: "Grid: 8px Multi-Density Array",
      visualElement: (
        <div className="w-full max-w-[440px] aspect-[16/10] border border-dashed border-white/10 rounded-xl relative p-4 flex flex-col justify-between overflow-hidden bg-black/20">
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
              <span className="font-mono text-[9px] text-[#d4f060] tracking-widest">
                CONTAINER_HERO_NODE
              </span>
              <div className="w-2 h-2 rounded-full bg-[#d4f060]" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 border border-white/10 rounded-lg bg-white/[0.01]" />
              <div className="h-16 border border-white/10 rounded-lg bg-white/[0.01]" />
              <div className="h-16 border border-white/10 rounded-lg bg-white/[0.01]" />
            </div>
          </div>
        </div>
      ),
    },

    motion: {
      id: "motion",
      title: "Choreographed Spatial Transitions",
      subtitle: "Fluid Mechanical Physics Simulation",
      badge: "Kinetic // 03",
      metric: "Easing: easeOut",
      visualElement: (
        <div className="w-full max-w-[420px] space-y-4">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#d4f060] animate-ping" />
              <span className="text-[13px] font-medium font-['Syne',sans-serif]">
                Page_Transition_Intro
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#f0eee8]/45">
              Duration: 700ms
            </span>
          </div>

          <div className="h-32 w-full rounded-xl border border-white/5 bg-black/40 relative overflow-hidden p-4 flex items-end">
            <svg
              className="absolute inset-0 w-full h-full p-2"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 C16,0 30,100 100,0"
                fill="none"
                stroke="#d4f060"
                strokeWidth="2"
              />
            </svg>

            <div className="flex justify-between w-full relative z-10 font-mono text-[9px] text-[#f0eee8]/20">
              <span>INBOUND [0.0]</span>
              <span>OUTBOUND [1.0]</span>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <section
      id="platform-specs"
      className="relative py-28 md:py-36 bg-[#030305] overflow-hidden border-t border-white/5 font-['DM_Sans',sans-serif]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#d4f060]/[0.02] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute right-[-10%] top-10 w-[400px] h-[400px] bg-white/[0.01] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 font-medium text-[11px] uppercase tracking-[0.3em] text-[#d4f060]">
                <Sparkles className="w-3 h-3" />
                The Design Architecture
              </span>

              <h2 className="font-['Syne',sans-serif] text-[38px] sm:text-[54px] font-extrabold text-white leading-[1.05]">
                Where Pure Intent
                <br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(240,238,232,0.35)]">
                  Meets Form.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.name}
                  className="p-6 rounded-[22px] bg-[#0c0c0f] border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <spec.icon className="w-4 h-4 text-[#d4f060]" />
                    <h3 className="text-[14px] font-bold text-white">
                      {spec.name}
                    </h3>
                  </div>

                  <p className="text-[12px] text-[#f0eee8]/45 mt-3">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">{/* unchanged UI */}</div>
        </div>
      </div>
    </section>
  );
}