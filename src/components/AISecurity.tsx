"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Target, Activity, CheckCircle2, PlayCircle } from "lucide-react";

interface AcademyModule {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  // This allows you to render custom components, mockups, or absolute image routes dynamically
  visualType: "foundations" | "engage" | "progress";
}

export default function AISecurity() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const modules: AcademyModule[] = [
    {
      id: 1,
      label: "1. Encounter",
      title: "Encounter",
      icon: <Compass className="w-4 h-4" />,
      description: "Structured courses that build from first principles: how language models actually function, how agents make decisions, and how attackers exploit both. No assumed knowledge.",
      visualType: "foundations"
    },
    {
      id: 2,
      label: "2. Engage",
      title: "Engage",
      icon: <Target className="w-4 h-4" />,
      description: "Long-form lessons with production code examples, adversarial exercises, and the depth that comes from original research, and the kind of depth a single blog post can't give you.",
      visualType: "engage"
    },
    {
      id: 3,
      label: "3. Progress",
      title: "Progress",
      icon: <Activity className="w-4 h-4" />,
      description: "A dashboard that tracks streaks, mastery, and completed courses. AI security is a compounding skill. Small daily work builds into operational instinct.",
      visualType: "progress"
    }
  ];

  return (
    <section id="ai-security" className="relative py-32 md:py-44 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      {/* Structural Subtle Grid Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.005)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Header Section explicitly matching the layout screenshot */}
        <div className="max-w-3xl space-y-5 mb-24 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            Ryvane Academy <span className="text-zinc-600">(Beta)</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-white font-sans leading-tight">
            Learn AI Security the way <br />
            <span className="font-serif italic font-light text-zinc-300">it's actually practiced.</span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed font-sans max-w-2xl pt-2">
            As part of our mission to make people AI-ready, Ryvane Academy is where that work becomes something you can learn. It is early and still in beta, but the shape is clear: structured courses, hands-on labs, and progress you can feel as AI security turns into instinct.
          </p>
        </div>

        {/* 12-Column Symmetrical Feature Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Column (Width: 7/12) — Dynamic Media Viewport Container */}
          <div className="lg:col-span-7 w-full aspect-[4/3] rounded-xl border border-white/[0.04] bg-[#090909]/20 backdrop-blur-md overflow-hidden relative shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex items-center justify-center p-6 sm:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {activeTab === 1 && (
                <motion.div
                  key="foundations-track"
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full max-w-md rounded-xl border border-white/[0.06] bg-[#0c0c0e]/90 p-5 font-sans shadow-2xl backdrop-blur-xl relative overflow-hidden"
                >
                  {/* Subtle glass overlay light leak */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/[0.01] blur-2xl rounded-full" />

                  {/* Card Track Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4 font-mono text-[10px] tracking-wider text-zinc-400">
                    <span className="text-white font-medium">Foundations track</span>
                    <span className="text-zinc-500">4 MODULES · 1H 56M</span>
                  </div>

                  {/* Class List Simulation */}
                  <div className="space-y-3.5">
                    {[
                      { num: "01", name: "How LLMs actually work", time: "18m", done: true },
                      { num: "02", name: "Prompt injection 101", time: "22m", done: true },
                      { num: "03", name: "Agent threat models", time: "31m", active: true },
                      { num: "04", name: "Your first red team", time: "45m" }
                    ].map((row, rIdx) => (
                      <div key={rIdx} className="flex items-center justify-between text-xs tracking-wide">
                        <div className="flex items-center gap-3">
                          {row.done ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/80" />
                          ) : row.active ? (
                            <PlayCircle className="w-3.5 h-3.5 text-amber-500/80" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-white/10" />
                          )}
                          <span className="font-mono text-zinc-600 text-[10px]">{row.num}</span>
                          <span className={row.active ? "text-white font-medium" : "text-zinc-400 font-light"}>
                            {row.name}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-600">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="engage-track"
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full h-full relative rounded-sm overflow-hidden"
                >
                  {/* Cross-fading alternative image style presentation directly referenced */}
                  <img
                    src="https://deepfa.ir/img/blogs/Ht31xbLsx0.webp"
                    alt="Adversarial Data Stream"
                    className="w-full h-full object-cover mix-blend-lighten opacity-40 select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 opacity-95" />
                  <div className="absolute bottom-6 left-6 right-6 text-left space-y-1.5 z-10">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">Lab Sandbox Active</div>
                    <h4 className="text-sm font-medium text-white tracking-wide">Module 03 // Inline Token Injection Environment</h4>
                  </div>
                </motion.div>
              )}

              {activeTab === 3 && (
                <motion.div
                  key="progress-track"
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full max-w-sm rounded-lg border border-white/[0.04] bg-white/[0.01] p-6 text-left space-y-6 shadow-2xl backdrop-blur-md"
                >
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500 font-mono tracking-wider">ANALYTICS ENGINE</div>
                    <h4 className="text-base font-semibold text-white tracking-tight">Compounding Operational Instinct</h4>
                  </div>

                  {/* Micro dashboard mock visualization details */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-zinc-400 mb-1">
                        <span>METRIC COVERAGE</span>
                        <span className="text-emerald-400">84% DONE</span>
                      </div>
                      <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "84%" }} transition={{ duration: 0.8, delay: 0.1 }} className="h-full bg-emerald-400" />
                      </div>
                    </div>
                    <div className="pt-2 flex justify-between gap-4 font-mono text-[9px] text-zinc-500">
                      <div>STREAK: <span className="text-white">14 DAYS</span></div>
                      <div>COMPLETED: <span className="text-white">11 MODULES</span></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column (Width: 5/12) — Interactive Clickable Tabs Stack */}
          <div className="lg:col-span-5 flex flex-col space-y-2 relative border-l border-white/[0.04] pl-6 md:pl-8">
            {modules.map((mod) => {
              const isActive = activeTab === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(mod.id)}
                  className="w-full text-left p-6 rounded-lg relative transition-all duration-300 focus:outline-none group cursor-pointer"
                >
                  {/* Sliding vertical emerald dynamic tracking indicator border line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-academy-indicator"
                      className="absolute left-[-25px] md:left-[-33px] top-0 bottom-0 w-[1.5px] bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="space-y-3 relative z-10">
                    {/* Icon + Label Row */}
                    <div className={`flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase transition-colors duration-300 ${isActive ? "text-emerald-400 font-medium" : "text-zinc-600 group-hover:text-zinc-400"
                      }`}>
                      <div className="p-1 rounded bg-white/[0.01] border border-white/[0.06] shadow-md">
                        {mod.icon}
                      </div>
                      <span>{mod.label}</span>
                    </div>

                    {/* Description Paragraph with layout opacity transition */}
                    <p className={`text-xs font-sans leading-relaxed tracking-wide transition-colors duration-300 ${isActive ? "text-zinc-300 font-normal" : "text-zinc-500 group-hover:text-zinc-400 font-light"
                      }`}>
                      {mod.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}