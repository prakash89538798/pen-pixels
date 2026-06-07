"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

// Types for components
interface ServiceItem {
  num: string;
  title: string;
  label: string;
  body: string;
  img: string;
  tags: string[];
}

interface BentoCardItem {
  tag: string;
  title: string;
  desc: string;
  className: string;
  img?: string;
  bigNum?: string;
  delay: string;
}

interface HorizontalCard {
  icon: string;
  title: string;
  desc: string;
}

interface FAQItem {
  q: string;
  a: string;
}

export default function ServicesPage() {
  // Cursor Refs & States
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  // Interactive Active States
  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Data Arrays
  const services: ServiceItem[] = [
    {
      num: "01",
      title: "Brand Identity Systems",
      label: "Brand",
      body: "We architect complete brand universes — from logo semantics and type hierarchies to motion principles and spatial identity. Every atom is systematized for infinite scalability.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      tags: ["Logo Design", "Typography", "Color Systems", "Brand Voice"],
    },
    {
      num: "02",
      title: "Design Engineering",
      label: "Engineering",
      body: "Production-grade UI systems where design tokens map directly to code. We bridge the gap between visual precision and technical performance — zero translation loss, ever.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["Component Libraries", "Token Systems", "React / Next.js"],
    },
    {
      num: "03",
      title: "Motion & Interaction",
      label: "Motion",
      body: "Choreographed interfaces that feel inevitable. We design micro-interactions, page transitions, and data-driven animations that transform static layouts into kinetic experiences.",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      tags: ["GSAP / Framer", "3D Scenes", "Micro-interactions"],
    },
    {
      num: "04",
      title: "Product Strategy",
      label: "Strategy",
      body: "We embed as strategic design partners — mapping user journeys, defining information architecture, and translating complex business logic into intuitive product flows.",
      img: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=800&q=80",
      tags: ["UX Research", "IA & Flows", "Prototyping"],
    },
    {
      num: "05",
      title: "Creative Direction",
      label: "Creative",
      body: "Visionary creative leadership for campaigns, product launches, and brand moments. We define the aesthetic language and ensure every touchpoint speaks with a singular voice.",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
      tags: ["Art Direction", "Campaign Design", "Visual Language"],
    },
  ];

  const bentoCards: BentoCardItem[] = [
    {
      tag: "Sub-pixel Precision",
      title: "Obsessive craft at every scale.",
      desc: "Typography mapped to micro-grids. Spacing derived from mathematical ratios. Colour scientifically validated across every rendering environment.",
      className: "col-span-12 md:col-span-7 min-h-[360px]",
      img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
      delay: "0.1s",
    },
    {
      tag: "System Velocity",
      bigNum: "99.9%",
      title: "Hardware-native performance.",
      desc: "Deployed structural modules operate out-of-the-box with native hardware acceleration. Zero runtime bloat.",
      className: "col-span-12 md:col-span-5 bg-[#d4f060] text-[#030305] min-h-[360px]",
      delay: "0.2s",
    },
    {
      tag: "Philosophy",
      title: "Legacies, not layouts.",
      desc: "Corporate identities as scalable systems. Built to outlast trends by decades.",
      className: "col-span-12 md:col-span-4 min-h-[300px]",
      delay: "0.3s",
    },
    {
      tag: "Collaboration",
      title: "Design × Engineering.",
      desc: "Production tokens embedded directly into design assets. No handoff friction. Ever.",
      className: "col-span-12 md:col-span-4 min-h-[300px]",
      delay: "0.4s",
    },
    {
      tag: "Privacy & Security",
      title: "Absolute trust.",
      desc: "Client data sandboxed client-side. Advanced cryptographic standards from day one.",
      className: "col-span-12 md:col-span-4 min-h-[300px]",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80",
      delay: "0.5s",
    },
  ];

  const hCards: HorizontalCard[] = [
    { icon: "✦", title: "Brand Architecture", desc: "Complete identity systems built for legacy, not novelty." },
    { icon: "⬡", title: "UI Engineering", desc: "Token-driven component libraries with zero technical debt." },
    { icon: "◈", title: "Motion Systems", desc: "Choreographed interfaces that feel inevitable and alive." },
    { icon: "⟡", title: "3D & Spatial", desc: "Immersive product visualizations and spatial computing experiences." },
    { icon: "◉", title: "Creative Direction", desc: "Singular aesthetic vision across every brand touchpoint." },
    { icon: "⌘", title: "Product Strategy", desc: "UX architecture that converts complexity into clarity." },
  ];

  const faqs: FAQItem[] = [
    {
      q: "How do you integrate with our existing engineering team?",
      a: "We embed as an integrated engineering catalyst — not a vendor. We supply code repositories, verified UI components, and complete documentation that slots into your deployment pipeline from day one. No onboarding drag, no handoff overhead.",
    },
    {
      q: "Can you migrate our legacy design system into your token architecture?",
      a: "Absolutely. Our structural ingestion process cleanly translates your existing design values, layout rules, and nested styles into pristine global token configurations — without disrupting any live operations.",
    },
    {
      q: "What does a typical engagement look like?",
      a: "Engagements start with a deep-dive discovery sprint — we map your architecture, define the system vocabulary, and establish shared design–engineering protocols. From there, we run iterative build cycles with continuous delivery and zero-surprise timelines.",
    },
    {
      q: "Do you offer ongoing retainer partnerships?",
      a: "Yes — and it's how most of our best work happens. Embedded retainers let us act as a genuine extension of your team: attending standups, owning design systems evolution, and responding to product velocity in real time.",
    },
  ];

  // Effect handles tracking Custom Cursor & Scroll Reveals
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

    // Reveal Logic via IntersectionObserver
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

  // Cursor Hover Scale Event Triggers
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

  // Bento Card 3D Perspective Tilt Mechanics
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

  // Magnetic Spring Displacement on Horizontal Micro Cards
  const handleMagneticCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 10;
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 10;
    card.style.transform = `translateY(-6px) translate(${x}px, ${y * 0.5}px)`;
  };

  const resetMagneticCard = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div className="bg-[#030305] text-[#f0eee8] font-['DM_Sans',sans-serif] selection:bg-[#d4f060] selection:text-[#030305] relative overflow-hidden min-h-screen">
      {/* Dynamic Cursor Tokens */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-[#d4f060] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200 mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-[#d4f060]/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
      />

      {/* MARQUEE RUNWAY */}
      <div className="overflow-hidden border-t border-b border-white/5 py-3.5 bg-[#0c0c0f]">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, mainIdx) => (
            <React.Fragment key={mainIdx}>
              {[
                "Brand Identity",
                "Design Systems",
                "Motion Design",
                "Engineering",
                "Product Strategy",
                "3D & Spatial",
                "Creative Direction",
                "UX Architecture",
              ].map((text, idx) => (
                <span
                  key={idx}
                  className="font-['Syne',sans-serif] text-[13px] font-semibold tracking-[0.18em] uppercase text-[#f0eee8]/45 px-10 flex items-center gap-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4f060] shrink-0" />
                  {text}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* REVEAL HEADER */}
      <header className="scroll-reveal opacity-0 translate-y-[30px] transition-all duration-[700ms] cubic-bezier(0.16,1,0.3,1) max-w-[1280px] mx-auto縱 px-6 md:px-[60px] pt-[100px] pb-[60px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-end">
        <div>
          <div className="font-['DM_Sans',sans-serif] text-[11px] font-medium tracking-[0.3em] uppercase text-[#d4f060] flex items-center gap-2 mb-6 before:content-[''] before:w-6 before:h-[1px] before:bg-[#d4f060]">
            What We Build
          </div>
          <h1 className="font-['Syne',sans-serif] text-[clamp(42px,5vw,72px)] font-extrabold line-height-[1.0] tracking-[-0.03em]">
            We craft
            <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(240,238,232,0.35)]">digital</span>
            <br />
            legacies.
          </h1>
        </div>
        <div>
          <p className="text-[16px] stroke-none line-height-[1.7] text-[#f0eee8]/45 max-w-[420px] mt-4">
            Pen & Pixel merges engineering discipline with obsessive design craft. Every service we offer is a fully
            integrated system — not a deliverable, but a living architecture.
          </p>
          <div className="text-left md:text-right mt-10">
            <div className="font-['Syne',sans-serif] text-[80px] font-extrabold leading-none text-[#d4f060] tracking-[-0.04em]">
              98%
            </div>
            <div className="text-[13px] text-[#f0eee8]/45 mt-1 tracking-[0.05em]">
              Client retention rate — because the work speaks.
            </div>
          </div>
        </div>
      </header>

      {/* STICKY SPLIT ENGINE VIEWPORT */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-t border-white/5">
        {/* Dynamic Static Anchored Structural Preview Frame */}
        <div className="hidden md:flex sticky top-0 h-screen overflow-hidden bg-[#0c0c0f] flex-col justify-center px-[60px] py-[80px]">
          <div className="font-['Syne',sans-serif] text-[100px] font-extrabold text-[#d4f060] leading-none tracking-[-0.05em] opacity-15 mb-[-10px]">
            {services[activeServiceIdx].num}
          </div>
          <div className="font-['Syne',sans-serif] text-[36px] font-extrabold tracking-[-0.03em] mb-4">
            {services[activeServiceIdx].title}
          </div>
          <div className="relative w-full h-[340px] rounded-[20px] overflow-hidden bg-[#111115] mb-8 group">
            <img
              className="w-full h-full object-cover scale-100 transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) filter grayscale-[60%] brightness-[70%] group-hover:scale-[1.06] group-hover:grayscale-0 group-hover:brightness-[85%]"
              src={services[activeServiceIdx].img}
              alt={services[activeServiceIdx].label}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 font-['Syne',sans-serif] text-[22px] font-bold tracking-[-0.02em]">
              {services[activeServiceIdx].label}
            </div>
          </div>
          <div className="flex gap-1.5 mt-7">
            {services.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  idx === activeServiceIdx ? "w-7 bg-[#d4f060]" : "w-1.5 bg-white/5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Scrolling Capability Tracks */}
        <div className="p-0">
          {services.map((service, idx) => {
            const isActive = idx === activeServiceIdx;
            return (
              <div
                key={idx}
                onClick={() => setActiveServiceIdx(idx)}
                onMouseEnter={() => {
                  handleCursorExpand();
                  setActiveServiceIdx(idx);
                }}
                onMouseLeave={handleCursorShrink}
                className={`p-6 md:p-[60px] border-b border-white/5 cursor-pointer relative overflow-hidden transition-colors duration-500 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[3px] before:h-full before:bg-[#d4f060] before:origin-bottom before:transition-transform before:duration-500 before:cubic-bezier(0.16,1,0.3,1) ${
                  isActive ? "bg-[#d4f060]/[0.02] before:scale-y-100" : "before:scale-y-0 hover:bg-[#d4f060]/[0.02] hover:before:scale-y-100"
                }`}
              >
                <div className="font-['Syne',sans-serif] text-[11px] font-bold tracking-[0.2em] text-[#d4f060] opacity-60 mb-3">
                  {service.num}
                </div>
                <div
                  className={`font-['Syne',sans-serif] text-[28px] font-bold tracking-[-0.02em] mb-4 transition-colors duration-300 ${
                    isActive ? "text-[#d4f060]" : "text-white hover:text-[#d4f060]"
                  }`}
                >
                  {service.title}
                </div>
                <div
                  className="text-[15px] leading-[1.7] text-[#f0eee8]/45 overflow-hidden transition-all duration-[600ms] cubic-bezier(0.16,1,0.3,1)"
                  style={{
                    maxHeight: isActive ? "200px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  {service.body}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] tracking-[0.1em] uppercase py-[5px] px-3 border border-white/5 rounded-[100px] text-[#f0eee8]/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ARCHITECTURAL BENTO MATRIX */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-[60px] py-[100px]">
        <div className="scroll-reveal opacity-0 translate-y-[30px] transition-all duration-[700ms] cubic-bezier(0.16,1,0.3,1) mb-[60px]">
          <div className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#d4f060] mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[1px] before:bg-[#d4f060]">
            Our Capabilities
          </div>
          <h2 className="font-['Syne',sans-serif] text-[clamp(32px,4vw,56px)] font-extrabold tracking-[-0.03em] leading-[1.05]">
            Every pixel.
            <br />
            Every line of code.
            <br />
            Intentional.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {bentoCards.map((card, idx) => (
            <div
              key={idx}
              onMouseMove={handleBentoTilt}
              onMouseLeave={(e) => {
                resetBentoTilt(e);
                handleCursorShrink();
              }}
              onMouseEnter={handleCursorExpand}
              className={`scroll-reveal opacity-0 translate-y-[30px] transition-all duration-[700ms] cubic-bezier(0.16,1,0.3,1) rounded-[24px] p-9 relative overflow-hidden border border-white/5 bg-[#0c0c0f] shadow-none will-change-transform [transform-style:preserve-3d] hover:border-[#d4f060]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] before:content-[''] before:absolute before:inset-0 before:rounded-[24px] before:bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(212,240,96,0.08)_0%,transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 ${card.className}`}
              style={{ transitionDelay: card.delay }}
            >
              <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase border py-[5px] px-3 rounded-[100px] inline-block mb-6 ${idx === 1 ? "text-[#030305]/50 border-[#030305]/15" : "text-[#f0eee8]/45 border-white/5"}`}>
                {card.tag}
              </span>
              {card.bigNum && (
                <div className="font-['Syne',sans-serif] text-[86px] font-extrabold tracking-[-0.05em] leading-none text-[#030305] my-2">
                  {card.bigNum}
                </div>
              )}
              <h3 className={`font-['Syne',sans-serif] text-[28px] font-bold tracking-[-0.02em] leading-[1.15] mb-3 ${idx === 1 ? "text-[#030305]" : "text-white"}`}>
                {card.title}
              </h3>
              <p className={`text-[14px] leading-[1.65] ${idx === 1 ? "text-[#030305]/65" : "text-[#f0eee8]/45"} ${idx === 0 ? "max-w-[360px] mt-3" : ""} ${idx > 1 ? "mt-3" : ""}`}>
                {card.desc}
              </p>
              {card.img && (
                <img
                  className={`absolute bottom-0 right-0 object-cover opacity-25 transition-all duration-500 cubic-bezier(0.16,1,0.3,1) pointer-events-none ${idx === 0 ? "w-[55%] h-[65%] [mask-image:linear-gradient(135deg,transparent_20%,black_70%)]" : "w-[70%] h-[50%]"}`}
                  src={card.img}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* HORIZONTAL CARD SCROLL PIPELINE */}
      <div className="py-[100px] overflow-hidden">
        <div className="scroll-reveal opacity-0 translate-y-[30px] transition-all duration-[700ms] cubic-bezier(0.16,1,0.3,1) max-w-[1280px] mx-auto px-6 md:px-[60px] pb-12 flex justify-between items-end">
          <h2 className="font-['Syne',sans-serif] text-[clamp(28px,3.5vw,48px)] font-extrabold tracking-[-0.03em]">
            Every tool. Every discipline.
          </h2>
          <a
            href="#"
            onMouseEnter={handleCursorExpand}
            onMouseLeave={handleCursorShrink}
            className="text-[13px] text-[#d4f060] tracking-[0.1em] uppercase flex items-center gap-2 font-semibold no-underline group"
          >
            View all services{" "}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex gap-5 px-6 md:px-[60px] animate-[hscroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, loopIdx) => (
            <React.Fragment key={loopIdx}>
              {hCards.map((card, idx) => (
                <div
                  key={idx}
                  onMouseMove={handleMagneticCard}
                  onMouseLeave={(e) => {
                    resetMagneticCard(e);
                    handleCursorShrink();
                  }}
                  onMouseEnter={handleCursorExpand}
                  className="flex-shrink-0 w-[340px] rounded-[20px] border border-white/5 bg-[#0c0c0f] p-8 relative overflow-hidden transition-all duration-300 group hover:border-[#d4f060]/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d4f060]/10 flex items-center justify-center mb-6 text-[22px] transition-all duration-300 group-hover:bg-[#d4f060]/20 group-hover:-rotate-6 group-hover:scale-11">
                    {card.icon}
                  </div>
                  <div className="font-['Syne',sans-serif] text-[20px] font-bold tracking-[-0.02em] mb-2.5">
                    {card.title}
                  </div>
                  <div className="text-[14px] leading-[1.6] text-[#f0eee8]/45">
                    {card.desc}
                  </div>
                  <div className="absolute inset-[-1px] rounded-[20px] opacity-0 transition-opacity duration-400 pointer-events-none group-hover:opacity-100 z-[-1] [background:conic-gradient(from_var(--a),transparent_20%,rgba(212,240,96,0.15)_40%,transparent_60%)] animate-[spin_3s_linear_infinite]" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SYSTEM ARCHITECTURE FAQ */}
      <section className="max-w-[900px] mx-auto px-6 md:px-[60px] py-[100px]">
        <h2 className="scroll-reveal opacity-0 translate-y-[30px] transition-all duration-[700ms] cubic-bezier(0.16,1,0.3,1) font-['Syne',sans-serif] text-[clamp(28px,4vw,52px)] font-extrabold tracking-[-0.03em] mb-[60px] text-center">
          Answers worth <span className="text-[#d4f060]">knowing.</span>
        </h2>
        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="border-t border-white/5 overflow-hidden group">
                <div
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  onMouseEnter={handleCursorExpand}
                  onMouseLeave={handleCursorShrink}
                  className="flex justify-between items-center py-7 cursor-pointer gap-5"
                >
                  <span className="font-['Syne',sans-serif] text-[18px] font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#d4f060]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/5 flex items-center justify-center shrink-0 transition-all duration-400 ${
                      isOpen ? "bg-[#d4f060] border-[#d4f060] rotate-45" : ""
                    }`}
                  >
                    <Plus className={`w-3.5 h-3.5 ${isOpen ? "text-[#030305]" : "text-white"}`} />
                  </div>
                </div>
                <div
                  className="overflow-hidden transition-all duration-[500ms] cubic-bezier(0.16,1,0.3,1)"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <div className="pb-7 text-[15px] leading-[1.7] text-[#f0eee8]/45">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global CSS Injectors for Specialized Animation Tracks */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes hscroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin {
          to { --a: 360deg; }
        }
        @property --a {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }
      `}</style>
    </div>
  );
}