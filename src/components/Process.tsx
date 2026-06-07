"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  delay: string;
}

export default function Process() {
  // Cursor Refs for dynamic global sync
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const steps: ProcessStep[] = [
    {
      num: "01",
      title: "Discovery & Strategy Sync",
      desc: "We immerse ourselves directly into your operational model—analyzing your competitors, identifying technical requirements, and defining metrics for success.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      tags: ["Deep Dive", "Competitor Matrix", "Tech Audit"],
      delay: "0.1s"
    },
    {
      num: "02",
      title: "Concept & Architecture Blueprint",
      desc: "Our design studio transforms strategic insights into clean style options, high-fidelity interactive wireframes, and production prototypes.",
      img: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=600&q=80",
      tags: ["UX Wireframes", "Fidelity Testing", "Tokens Architecture"],
      delay: "0.2s"
    },
    {
      num: "03",
      title: "Development & Refinement Track",
      desc: "Once a direction is chosen, our technical experts bring it to life. Whether we are styling responsive Tailwind frontends or outputting print-ready files.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      tags: ["Tailwind UI", "Clean Deploy", "Refinement Cycle"],
      delay: "0.3s"
    },
    {
      num: "04",
      title: "Launch & Optimization Node",
      desc: "The global reveal. We handle your launch safely and cleanly. Following deployment, we remain active partners, tracking performance data and providing updates.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      tags: ["Global Launch", "Telemetry Tracking", "Evolution Loops"],
      delay: "0.4s"
    }
  ];

  // Global Tracking Systems (Cursor Follow & Scroll Reveal Engine)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    let frameId: number;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      frameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frameId = requestAnimationFrame(animateRing);

    // IntersectionObserver Reveal Core
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-[30px]");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  // Cursor Hover Scalers
  const handleCursorExpand = () => {
    if (cursorRef.current && ringRef.current) {
      cursorRef.current.style.width = "20px";
      cursorRef.current.style.height = "20px";
      ringRef.current.style.width = "60px";
      ringRef.current.style.height = "60px";
    }
  };

  const handleCursorShrink = () => {
    if (cursorRef.current && ringRef.current) {
      cursorRef.current.style.width = "12px";
      cursorRef.current.style.height = "12px";
      ringRef.current.style.width = "40px";
      ringRef.current.style.height = "40px";
    }
  };

  // Bento Card 3D Perspective Tilt Matrix Mechanics
  const handleBentoTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = -((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const resetBentoTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div className="bg-[#030305] text-[#f0eee8] font-['DM_Sans',sans-serif] selection:bg-[#d4f060] selection:text-[#030305] relative overflow-hidden py-[120px] border-t border-white/5">
      {/* Dynamic Sync Cursor Tokens */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-[#d4f060] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200 mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-[#d4f060]/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px]">
        
        {/* REVEAL HEADER */}
        <div className="scroll-reveal opacity-0 translate-y-[30px] transition-all duration-[700ms] cubic-bezier(0.16,1,0.3,1) max-w-[760px] mb-[80px]">
          <div className="font-['DM_Sans',sans-serif] text-[11px] font-medium tracking-[0.3em] uppercase text-[#d4f060] flex items-center gap-2 mb-6 before:content-[''] before:w-6 before:h-[1px] before:bg-[#d4f060]">
            The Operational Roadmap
          </div>
          <h2 className="font-['Syne',sans-serif] text-[clamp(36px,4.5vw,58px)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
            The Pen & Pixel
            <br />
            Blueprint.
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#f0eee8]/45 max-w-[500px]">
            A strict, low-overhead operational model designed to ensure a flawless structural translation from initial concept discovery straight into global production launch.
          </p>
        </div>

        {/* 4-COLUMN HIGH-CRAFT BENTO MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onMouseMove={handleBentoTilt}
              onMouseLeave={(e) => {
                resetBentoTilt(e);
                handleCursorShrink();
              }}
              onMouseEnter={handleCursorExpand}
              className="scroll-reveal opacity-0 translate-y-[30px] transition-all duration-[700ms] cubic-bezier(0.16,1,0.3,1) rounded-[24px] p-7 border border-white/5 bg-[#0c0c0f] relative overflow-hidden flex flex-col justify-between group will-change-transform [transform-style:preserve-3d] hover:border-[#d4f060]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] before:content-[''] before:absolute before:inset-0 before:rounded-[24px] before:bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(212,240,96,0.06)_0%,transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100"
              style={{ transitionDelay: step.delay }}
            >
              <div>
                {/* Visual Engineering Micro Asset Container */}
                <div className="relative w-full h-36 rounded-[16px] overflow-hidden bg-[#111115] mb-6 border border-white/5">
                  <img
                    className="w-full h-full object-cover scale-100 transition-all duration-[1000ms] cubic-bezier(0.16,1,0.3,1) filter grayscale-[70%] brightness-[60%] group-hover:scale-[1.06] group-hover:grayscale-0 group-hover:brightness-[80%]"
                    src={step.img}
                    alt={step.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f]/90 via-transparent to-transparent" />
                  
                  {/* Subtle Top Right Vector Indicator */}
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#030305]/60 border border-white/5 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4f060] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <div className="font-['Syne',sans-serif] text-[11px] font-bold tracking-[0.2em] text-[#d4f060]/60 mb-2">
                  {step.num} // ENGINE PATH
                </div>
                
                <h3 className="font-['Syne',sans-serif] text-[20px] font-bold tracking-[-0.02em] leading-[1.2] text-white mb-3 group-hover:text-[#d4f060] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-[13.5px] leading-[1.65] text-[#f0eee8]/45 mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Dynamic Technical Token Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {step.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] tracking-[0.05em] uppercase py-[4px] px-2.5 border border-white/5 rounded-[100px] text-[#f0eee8]/35 bg-white/[0.01]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}