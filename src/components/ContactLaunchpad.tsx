"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, Mail, MapPin, Zap, Rocket, Check, ArrowRight } from "lucide-react";

// --- Types & Interfaces ---
interface ProjectTypeOption {
  id: string;
  label: string;
}

interface TimelineOption {
  id: string;
  label: string;
}

export default function ContactLaunchpad() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const services: ProjectTypeOption[] = [
    { id: "web-dev", label: "Web Design & Development" },
    { id: "ui-ux", label: "UI/UX Design & Prototyping" },
    { id: "marketing", label: "Marketing Flyers & Posters" },
    { id: "branding", label: "Complete Brand Identity" },
  ];

  const timelines: TimelineOption[] = [
    { id: "immediate", label: "Immediate (ASAP)" },
    { id: "1-2-months", label: "Within 1–2 Months" },
    { id: "flexible", label: "Flexible / Just exploring" },
  ];

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="relative py-32 md:py-48 bg-[#030303] text-white overflow-hidden font-['DM_Sans',sans-serif]"
    >
      {/* ================= HIGH-END BACKGROUND ARCHITECTURE ================= */}
      {/* Top boundary structural blend */}
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-[#09090b] to-transparent pointer-events-none z-0" />
      
      {/* Ambient Radial Mesh Lights (White/Silver Frosted Glows) */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-white/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Technical Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-70" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl pb-20 border-b border-white/[0.06]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Ready to Build?
            </span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-[42px] sm:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
            Let’s Turn Pixels <br />into Profit.
          </h2>
          <p className="mt-6 text-[17px] text-zinc-400 font-light leading-relaxed max-w-[620px]">
            Have a groundbreaking project in mind or looking to elevate your current brand presence? 
            Tell us a bit about your vision, and let’s construct something unforgettable together.
          </p>
        </div>

        {/* ================= THE LAYOUT SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-20 items-start">
          
          {/* LEFT SIDE: THE CREATIVE PARTNERSHIP HUB */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Calendly Anchor Block */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">Direct Sync</h4>
              <p className="text-[16px] text-zinc-300 font-light leading-relaxed">
                Skip the form structure entirely. Secure an immediate live slot on our internal engineering calendar for a 15-minute concept discovery session.
              </p>
              <motion.a 
                href="#calendly"
                whileHover={{ x: 6 }}
                className="inline-flex items-center gap-3 text-[14px] font-semibold text-white group pt-2"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="border-b border-white/20 group-hover:border-white pb-0.5 transition-colors duration-300">
                  Schedule a Call on Calendly →
                </span>
              </motion.a>
            </div>

            {/* Direct Information Hub */}
            <div className="space-y-4 pt-4">
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">Direct Inquiries</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4 text-zinc-500" />
                  <span className="text-[15px] font-light">hello@penandpixels.com</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span className="text-[15px] font-light">Digital First | Operating Globally</span>
                </div>
              </div>
            </div>

            {/* Response Guarantee Badge */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-white/[0.02] to-transparent border border-white/[0.05] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 shadow-lg">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div className="space-y-1">
                <h5 className="text-[14px] font-bold tracking-tight text-white">The 24-Hour Promise</h5>
                <p className="text-[13px] text-zinc-400 font-light leading-normal">
                  We value momentum. Our team reviews and responds to all structured design briefs within 24 business hours.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: THE INTERACTIVE BRIEF FORM (Premium White Gradient Glassmorphism) */}
          <div className="lg:col-span-7">
            <GlassCardWrapper>
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10 relative z-10">
                
                {/* Question 1: Text Inputs */}
                <div className="space-y-4">
                  <label className="block text-[14px] font-medium tracking-tight text-zinc-300">
                    <span className="font-mono text-zinc-600 mr-2">01.</span> Who are we speaking with?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="e.g., Jane Doe" 
                      required
                      className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-white/30 rounded-2xl px-5 py-4 text-[14px] text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 shadow-inner"
                    />
                    <input 
                      type="email" 
                      placeholder="e.g., jane@company.com" 
                      required
                      className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-white/30 rounded-2xl px-5 py-4 text-[14px] text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>
                </div>

                {/* Question 2: Multi-Select Chips */}
                <div className="space-y-4">
                  <label className="block text-[14px] font-medium tracking-tight text-zinc-300">
                    <span className="font-mono text-zinc-600 mr-2">02.</span> What are we building together?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {services.map((service) => {
                      const isSelected = selectedServices.includes(service.id);
                      return (
                        <button
                          type="button"
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`px-4 py-3 rounded-full text-[13px] font-medium tracking-tight transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                            isSelected
                              ? "bg-white text-black border-white shadow-[0_10px_20px_rgba(255,255,255,0.1)] scale-[1.02]"
                              : "bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          <span>{service.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question 3: Radio Timelines */}
                <div className="space-y-4">
                  <label className="block text-[14px] font-medium tracking-tight text-zinc-300">
                    <span className="font-mono text-zinc-600 mr-2">03.</span> What is your target timeline?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {timelines.map((time) => {
                      const isSelected = selectedTimeline === time.id;
                      return (
                        <button
                          type="button"
                          key={time.id}
                          onClick={() => setSelectedTimeline(time.id)}
                          className={`p-4 rounded-2xl text-left text-[13px] transition-all duration-300 cursor-pointer border ${
                            isSelected
                              ? "bg-white/[0.06] text-white border-white/40 shadow-md font-semibold"
                              : "bg-white/[0.01] text-zinc-400 border-white/[0.04] hover:border-white/10 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? "border-white" : "border-zinc-700"}`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <span>{time.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question 4: Textarea Text Field */}
                <div className="space-y-4">
                  <label className="block text-[14px] font-medium tracking-tight text-zinc-300">
                    <span className="font-mono text-zinc-600 mr-2">04.</span> Tell us about the master plan
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us a bit about your brand, goals, or specific design requirements..."
                    className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-white/30 rounded-2xl p-5 text-[14px] text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 resize-none shadow-inner"
                  />
                </div>

                {/* Submit Trigger Action Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-white text-black py-4 rounded-2xl text-[14px] font-bold tracking-wide shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-100"
                  >
                    <span>Initialize Project Launchpad</span>
                    <Rocket className="w-4 h-4 fill-current" />
                  </motion.button>
                </div>

              </form>

              {/* Form Success View State Layer Overlay */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0c0c0e] backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="space-y-6 max-w-sm"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white text-black mx-auto flex items-center justify-center shadow-2xl">
                        <Rocket className="w-6 h-6 fill-current" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-['Syne',sans-serif] text-[24px] font-bold tracking-tight">Launch Sequence Initiated</h3>
                        <p className="text-[14px] text-zinc-400 font-light leading-relaxed">
                          Your design specifications have been received by our core platform. Expect communication alignment within 24 business hours.
                        </p>
                      </div>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="text-[12px] font-mono tracking-wider text-zinc-500 hover:text-white underline transition-colors cursor-pointer"
                      >
                        Submit another brief
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCardWrapper>
          </div>

        </div>

        {/* ================= SECTION FOOTER ================= */}
        <div className="mt-32 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-zinc-600 font-light">
          <p>Built with precision by Pen & Pixels. © 2026. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-zinc-400 transition-colors">Privacy Architecture</a>
            <a href="#terms" className="hover:text-zinc-400 transition-colors">Terms of Vector</a>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- High-End Frosted Glass Container Sub-Component ---
function GlassCardWrapper({ children }: { children: React.ReactNode }) {
  const boundingRef = useRef<HTMLDivElement>(null);
  const xX = useMotionValue(0);
  const yY = useMotionValue(0);

  const springX = useSpring(useTransform(yY, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 25 });
  const springY = useSpring(useTransform(xX, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 25 });

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current.getBoundingClientRect();
    xX.set(e.clientX - rect.left / rect.width - 0.5);
    yY.set(e.clientY - rect.top / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={boundingRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => { xX.set(0); yY.set(0); }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d"
      }}
      className="relative rounded-[40px] bg-gradient-to-b from-white/[0.04] to-white/[0.005] border border-white/[0.08] shadow-[0_60px_100px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-colors duration-500 hover:border-white/[0.14] overflow-hidden will-change-transform"
    >
      {/* Real-time Cursor Reactive Reflection Overlay */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none bg-[radial-gradient(400px_circle_at_var(--cx,0px)_var(--cy,0px),rgba(255,255,255,0.12),transparent_60%)]"
           onMouseMove={(e) => {
             const element = e.currentTarget;
             const bounds = element.getBoundingClientRect();
             element.style.setProperty("--cx", `${e.clientX - bounds.left}px`);
             element.style.setProperty("--cy", `${e.clientY - bounds.top}px`);
           }}
      />
      
      <div style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
}