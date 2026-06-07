"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { PenTool, Compass, Terminal, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

// --- Types & Interfaces ---
interface ProcessStep {
  id: string;
  phase: string;
  title: string;
  concept: string;
  details: string[];
  icon: React.ReactNode;
  image: string;
  interactiveStyle?: string;
}

export default function TheBlueprint() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      id: "step-1",
      phase: "Phase 01",
      title: "Ink the Vision",
      concept: "Every great digital experience starts with a raw, unconstrained idea. Before we write a single line of code or touch a pixel, we pick up the pen to map out your brand’s soul.",
      details: [
        "Deep-dive creative brief and strategy alignment sessions.",
        "Analyzing your target audience, competitors, and goals.",
        "Rapid brainstorming, mood boards, and conceptual rough sketches."
      ],
      icon: <PenTool className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
      interactiveStyle: "pen-canvas"
    },
    {
      id: "step-2",
      phase: "Phase 02",
      title: "The Blueprint",
      concept: "Here, chaos gets structured. We turn rough ideas into architectural blueprints, mapping out user journeys for websites and definitive layouts for print marketing materials.",
      details: [
        "Crafting high-fidelity, interactive wireframes and UI prototypes.",
        "Designing exact layout grids for flyers, posters, and marketing kits.",
        "Establishing the definitive typography, color psychology, and asset sizing."
      ],
      icon: <Compass className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      interactiveStyle: "grid-blueprint"
    },
    {
      id: "step-3",
      phase: "Phase 03",
      title: "The Digital Build",
      concept: "This is where the magic happens. We hand the blueprints over to the digital workshop, transforming vector graphics into razor-sharp marketing assets and high-performance, responsive code.",
      details: [
        "Writing clean, scalable frontend code tailored for modern devices.",
        "Polishing graphics into pixel-perfect, print-ready digital formats.",
        "Integrating seamless micro-interactions, dark-theme styling, and testing."
      ],
      icon: <Terminal className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      interactiveStyle: "terminal-code"
    },
    {
      id: "step-4",
      phase: "Phase 04",
      title: "The Hand-off",
      concept: "Your masterpiece is complete. We launch your platform into the digital wild and deliver high-impact marketing print files engineered to turn heads.",
      details: [
        "Final deployment, domain configuration, and performance optimization.",
        "Delivery of organized, vector-source marketing files ready for commercial printing.",
        "A 30-minute walkthrough to ensure your team knows exactly how to scale."
      ],
      icon: <Rocket className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop",
      interactiveStyle: "rocket-launch"
    }
  ];

  return (
    <section 
      id="blueprint" 
      className="relative py-32 md:py-48 bg-[#ffffff] text-[#1d1d1f] overflow-hidden font-['DM_Sans',sans-serif]"
    >
      {/* --- High-End Contrast Blend Top Border --- */}
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-black to-transparent opacity-[0.03] pointer-events-none" />

      {/* Subtle luxury watermark drafting background behind everything */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e7_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-black/[0.06]">
          <div className="lg:col-span-4 space-y-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#86868b]">
              Our Process
            </span>
            <h2 className="font-['Syne',sans-serif] text-[38px] sm:text-[52px] font-extrabold tracking-[-0.03em] text-black leading-[1.1]">
              The Blueprint.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end space-y-4">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-black/80 tracking-tight">
              From Concept to Reality. No Guesswork.
            </h3>
            <p className="text-[16px] text-[#515154] font-normal leading-relaxed max-w-[720px]">
              We’ve engineered a transparent, fluid workflow that fuses creative artistry with technical execution. 
              Here is how your vision evolves from a blank page to a digital powerhouse.
            </p>
          </div>
        </div>

        {/* ================= INTERACTIVE WORKFLOW FLOW-LINE MATRIX ================= */}
        <div className="py-12 overflow-x-auto lg:overflow-x-visible scrollbar-none">
          <div className="flex items-center justify-between min-w-[800px] lg:min-w-full relative px-4">
            
            {/* Absolute Linear Connector Pipeline SVG */}
            <div className="absolute top-[26px] left-[5%] right-[5%] h-[2px] bg-[#e5e5e7] z-0">
              <motion.div 
                className="h-full bg-black origin-left shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: (activeStep + 1) / 4 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              />
            </div>

            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center space-y-4 relative z-10 group focus:outline-none cursor-pointer"
                  style={{ width: "20%" }}
                >
                  {/* Step Interactive Node Ball */}
                  <div className="relative flex items-center justify-center">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          layoutId="activePill"
                          className="absolute inset-0 bg-neutral-900/5 rounded-full -m-2 z-0 border border-black/5"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>

                    <motion.div 
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        boxShadow: isActive ? "0 20px 25px -5px rgb(0 0 0 / 0.15)" : "0 1px 2px 0 rgb(0 0 0 / 0.05)"
                      }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-500 relative z-10 ${
                        isActive 
                          ? "bg-black text-white" 
                          : isPast 
                            ? "bg-black text-white" 
                            : "bg-white text-[#86868b] border-2 border-[#e5e5e7] group-hover:border-black/50 group-hover:text-black"
                      }`}
                    >
                      {isPast ? <CheckCircle2 className="w-5 h-5 text-white" /> : step.icon}
                    </motion.div>
                  </div>

                  {/* Micro Labels */}
                  <div className="text-center space-y-0.5 relative z-10">
                    <span className={`text-[10px] uppercase font-mono tracking-wider block transition-colors duration-300 ${isActive ? "text-black font-bold" : "text-[#86868b]"}`}>
                      {step.phase}
                    </span>
                    <span className={`text-[13px] font-medium transition-colors duration-300 ${isActive ? "text-black font-bold" : "text-[#515154] group-hover:text-black"}`}>
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= PHASE INTERACTION DISPLAY SHOWCASE ================= */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch"
            >
              
              {/* Dynamic Left Column: Dark Masterful Ink Glassmorphism Panel */}
              <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 rounded-[40px] bg-[#0a0a0c]/85 text-white relative overflow-hidden border border-white/[0.08] shadow-[0_50px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl group/panel min-h-[460px]">
                
                {/* Embedded Blueprint Interactive Layout Engine Backdrops */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  <AnimatePresence mode="wait">
                    {steps[activeStep].interactiveStyle === "pen-canvas" && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.12 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 mix-blend-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"
                      >
                        <svg className="w-full h-full stroke-white stroke-[2] fill-none" xmlns="http://www.w3.org/2000/svg">
                          <motion.path 
                            d="M -50 350 C 150 200, 350 400, 850 150" 
                            initial={{ pathLength: 0 }} 
                            animate={{ pathLength: 1 }} 
                            transition={{ duration: 1.5, ease: "easeInOut" }} 
                          />
                        </svg>
                      </motion.div>
                    )}

                    {steps[activeStep].interactiveStyle === "grid-blueprint" && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 0.8, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" 
                      />
                    )}

                    {steps[activeStep].interactiveStyle === "terminal-code" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-6 right-8 font-mono text-[11px] text-emerald-400/10 pointer-events-none select-none text-right hidden md:block leading-relaxed"
                      >
                        {`const compile = async () => {\n  await optimizeFrontend();\n  return pipeline('PixelPerfect');\n};`}
                      </motion.div>
                    )}

                    {steps[activeStep].interactiveStyle === "rocket-launch" && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.02, 0.06, 0.02] }}
                        exit={{ opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-white via-transparent to-transparent blur-3xl rounded-full" 
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Content Elements */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] tracking-widest text-[#86868b] bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.05]">
                      {steps[activeStep].phase}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                  </div>
                  
                  <h3 className={`font-['Syne',sans-serif] text-[32px] sm:text-[42px] font-bold tracking-tight text-white transition-all duration-300 ${
                    steps[activeStep].interactiveStyle === "terminal-code" ? "font-mono tracking-normal text-[26px] sm:text-[34px] text-emerald-500/90" : ""
                  }`}>
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-[16px] sm:text-[17px] text-[#9a9a9f] font-light leading-relaxed max-w-[580px]">
                    {steps[activeStep].concept}
                  </p>
                </div>

                {/* Extended Execution Track scope details */}
                <div className="mt-12 space-y-4 pt-8 border-t border-white/[0.06] relative z-10">
                  <h4 className="text-[11px] font-mono tracking-widest text-white/40 uppercase">Execution Framework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps[activeStep].details.map((detail, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        key={idx} 
                        className="flex gap-3 items-start group/item"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0 group-hover/item:bg-white transition-colors duration-300" />
                        <span className="text-[13.5px] text-[#e8e8ed]/80 font-light leading-normal transition-colors duration-300 group-hover/item:text-white">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Dynamic Right Column: Cinematic High-Resolution Production Image Asset with 3D Parallax Tilt */}
              <div className="lg:col-span-5 h-full min-h-[380px]">
                <PerspectiveWrapper>
                  <img 
                    src={steps[activeStep].image} 
                    alt={steps[activeStep].title} 
                    className="w-full h-full object-cover transform scale-102"
                  />
                  
                  {/* High-End Soft Overlay shading gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Upper Sticky Interactive Callout */}
                  <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 pointer-events-none">
                    <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center">
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-[#86868b] font-mono uppercase tracking-wider">Engine Vector</p>
                      <p className="text-[12px] font-bold text-black tracking-tight">Verified Strategy</p>
                    </div>
                  </div>

                  {/* Quick Advance Footer Trigger */}
                  {activeStep < 3 && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Stops event bubbling to tilt engine
                        setActiveStep((prev) => prev + 1);
                      }}
                      className="absolute bottom-6 right-6 px-5 py-3 rounded-full bg-white text-black text-[12px] font-semibold tracking-wide flex items-center gap-2 shadow-2xl hover:bg-neutral-100 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer z-20"
                    >
                      <span>Next Phase</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </PerspectiveWrapper>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// --- Internal High-Fidelity 3D Interactivity Wrapper Sub-Component ---
function PerspectiveWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate angle orientation maps (-8 deg to 8 deg tracking fields)
    const rX = ((mouseY / height) - 0.5) * -8;
    const rY = ((mouseX / width) - 0.5) * 8;

    rotateX.set(rX);
    rotateY.set(rY);
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
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="w-full h-full rounded-[40px] overflow-hidden relative border border-black/[0.04] shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out will-change-transform"
    >
      <div className="w-full h-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}