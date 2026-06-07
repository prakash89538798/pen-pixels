// 

"use client"; // Fixes: React Server Component module hook error

import React, { useState } from 'react';

// Custom type definitions for strict type safety
interface NarrativeTab {
  id: string;
  badge: string;
  buttonText: string;
  heading: string;
  description: string;
  imageAlt: string;
  imageUrl: string;
}

interface CorePillar {
  id: string;
  category: 'philosophy' | 'craft' | 'scale' | 'all';
  tagline: string;
  title: React.ReactNode;
  description: string;
  bgClass: string;
  textClass: string;
  overlay?: React.ReactNode;
}

// Fixes: Default export mismatch error so your page.tsx imports it cleanly
export default function AISecurity() {
  // State management for interactive tab structures
  const [activeTab, setActiveTab] = useState<string>('tab-origin');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Tab Data Definition
  const narrativeTabs: NarrativeTab[] = [
    {
      id: 'tab-origin',
      badge: 'Our Origin',
      buttonText: 'How did Pen & Pixel begin?',
      heading: 'Born at the intersection of structure and soul.',
      description: 'We started with a simple, provocative premise: code should be as elegant as the visual blueprints that inspired it. Founded by an elite group of architects, builders, and designers, we set out to eliminate the creative friction between pixel-perfect aesthetics and system-level performance.',
      imageAlt: 'Creative workspace design layout',
      imageUrl: 'https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'tab-philosophy',
      badge: 'The Philosophy',
      buttonText: 'What guides our building principles?',
      heading: 'We design for clarity. We engineer for longevity.',
      description: 'We reject transient design trends. Our core system frameworks treat interface components as enduring architectural parameters. Every line of markup, structural layout choice, and pixel configuration is purpose-built to withstand generation-level shifts in scale.',
      imageAlt: 'Abstract neon architectural vectors',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'tab-methodology',
      badge: 'Our Methodology',
      buttonText: 'How do we approach engineering pipelines?',
      heading: 'Natively integrated, step-by-step performance.',
      description: 'Our workflows do not produce static, throwaway assets. Instead, we generate dynamic, token-driven environments where structural design variables live in perfect, real-time synchronization with production codebases. True speed comes from zero translational loss.',
      imageAlt: 'Sleek system network data nodes',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Bento Box Core Pillars Definition (Darkened to match Hero background perfectly)
  const corePillars: CorePillar[] = [
    {
      id: 'pillar-1',
      category: 'craft',
      tagline: 'Sub-Pixel Precision',
      title: <>Obsessive focus.<br />Down to the node.</>,
      description: 'Our team balances design intuition with deep architectural rigors, ensuring typography maps cleanly onto micro-grids for perfect readability across screens.',
      bgClass: 'bg-[#121214] border border-white/[0.04]',
      textClass: 'text-zinc-100',
      overlay: (
        <div className="absolute bottom-0 right-0 w-1/2 h-44 opacity-5 group-hover:opacity-15 transition-opacity duration-500 ease-out">
          <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80" alt="Mesh" className="w-full h-full object-cover" />
        </div>
      )
    },
    {
      id: 'pillar-2',
      category: 'philosophy',
      tagline: 'Deep Structural Intent',
      title: 'Crafting legacies, not temporary layouts.',
      description: 'We treat corporate identities as highly scalable design systems, building comprehensive structural layers to keep platforms agile.',
      bgClass: 'bg-gradient-to-br from-[#1c1c1e] to-[#0a0a0b] border border-white/[0.05]',
      textClass: 'text-white',
      overlay: <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_60%)]" />
    },
    {
      id: 'pillar-3',
      category: 'scale',
      tagline: 'System Velocity',
      title: '99.9%',
      description: 'Of our deployed structural modules operate out-of-the-box with native hardware acceleration, completely free from runtime bloat.',
      bgClass: 'bg-[#121214] border border-white/[0.04]',
      textClass: 'text-zinc-100'
    },
    {
      id: 'pillar-4',
      category: 'craft',
      tagline: 'Collaborative Synergy',
      title: 'Unified engineering boundaries.',
      description: 'We erase the conceptual divide separating developers from visual designers, embedding production tokens directly into design assets.',
      bgClass: 'bg-[#121214] border border-white/[0.04]',
      textClass: 'text-zinc-100'
    },
    {
      id: 'pillar-5',
      category: 'all',
      tagline: 'Uncompromising Privacy',
      title: <>Secured source.<br />Absolute trust.</>,
      description: 'Sensitive client data maps exclusively within client-side sandboxes, fully protected by advanced cryptographic standards.',
      bgClass: 'bg-[#0f0f11] border border-white/[0.06]',
      textClass: 'text-white',
      overlay: (
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=500&q=80" alt="Lines" className="w-full h-full object-cover" />
        </div>
      )
    }
  ];

  // FAQ Data Definition
  const faqItems = [
    {
      question: "How does Pen & Pixel integrate with our internal engineering teams?",
      answer: "We function as an embedded engineering catalyst. Rather than dropping off standard design files, we supply integrated code repositories, verified UI components, and complete documentation layers that slide seamlessly into your deployment pipeline."
    },
    {
      question: "Can we migrate legacy design frameworks into your modern token system?",
      answer: "Yes. Our structural ingestion strategies cleanly translate current design values, layout rules, and nested styles into pristine global system configurations without disrupting current operations."
    }
  ];

  return (
    <div id="ai-security" className="w-full bg-[#050505] text-zinc-100 antialiased select-none selection:bg-white/20 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] border-t border-white/[0.04]">
      
      {/* SECTION 1: Dynamic Editorial Header */}
      <header className="max-w-[1260px] mx-auto px-6 md:px-10 pt-32 pb-16 text-left">
        <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-zinc-500 block mb-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 mr-2 animate-pulse" />
          Who We Are
        </span>
        <h2 className="text-[38px] sm:text-[56px] font-bold tracking-tight text-white leading-[1.08] mb-6">
          Architects of digital form.<br />
          <span className="text-zinc-500">Driven by absolute precision.</span>
        </h2>
        <p className="max-w-[720px] text-[18px] sm:text-[21px] leading-[1.4] font-light text-zinc-400">
          Pen & Pixel is a high-performance design and engineering studio. We partner with ambitious systems teams to construct clean, meaningful digital legacies.
        </p>
      </header>

      {/* SECTION 2: Interrogative Narrative Tab Switcher */}
      <section className="max-w-[1260px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0b0b0d] border border-white/[0.04] rounded-[28px] p-8 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
          
          {/* Left Navigation Track */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
            {narrativeTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-5 rounded-2xl border-l-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activeTab === tab.id
                    ? 'bg-white/[0.03] border-white text-white'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.01]'
                }`}
              >
                <span className="block text-[11px] font-semibold uppercase tracking-wider mb-1 opacity-60">
                  {tab.badge}
                </span>
                <span className="text-[17px] sm:text-[18px] font-medium">
                  {tab.buttonText}
                </span>
              </button>
            ))}
          </div>

          {/* Right Visual Terminal Viewports */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[420px] lg:pl-8 relative overflow-hidden">
            {narrativeTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] space-y-6 ${
                    isSelected 
                      ? 'opacity-100 scale-100 block' 
                      : 'opacity-0 scale-95 hidden'
                  }`}
                >
                  <h3 className="text-[26px] sm:text-[32px] font-bold tracking-tight text-white leading-tight">
                    {tab.heading}
                  </h3>
                  <p className="text-zinc-400 text-[16px] sm:text-[17px] leading-relaxed font-light">
                    {tab.description}
                  </p>
                  <div className="w-full h-56 rounded-2xl overflow-hidden shadow-xs relative bg-zinc-900/40 border border-white/[0.05]">
                    <img 
                      src={tab.imageUrl} 
                      alt={tab.imageAlt} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale opacity-60 hover:grayscale-0 hover:opacity-90 hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: The Pillars Bento Grid Matrix */}
      <section className="max-w-[1260px] mx-auto px-6 md:px-10 py-16">
        <div className="text-left mb-12">
          <h3 className="text-[32px] sm:text-[44px] font-bold tracking-tight text-white mb-6">
            Values embedded in our system.
          </h3>
          
          {/* Filtering Pillars Controls */}
          <div className="flex flex-wrap gap-3">
            {[
              { key: 'all', label: 'All Ecosystems' },
              { key: 'philosophy', label: 'Philosophy' },
              { key: 'craft', label: 'Craft' },
              { key: 'scale', label: 'Scale' }
            ].map((btn) => (
              <button
                key={btn.key}
                onClick={() => setActiveCategory(btn.key)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activeCategory === btn.key
                    ? 'bg-white text-black evaluation-active'
                    : 'bg-white/[0.02] text-zinc-400 border border-white/[0.08] hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Integration Layer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500">
          {corePillars.map((pillar, idx) => {
            const isDimmed = activeCategory !== 'all' && pillar.category !== activeCategory && pillar.category !== 'all';
            
            const gridSpans = idx === 0 ? 'md:col-span-7 min-h-[380px]' : 
                              idx === 1 ? 'md:col-span-5 min-h-[380px]' : 
                              'md:col-span-4 min-h-[340px]';

            return (
              <div
                key={pillar.id}
                className={`group rounded-[28px] p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${gridSpans} ${pillar.bgClass} ${pillar.textClass} ${
                  isDimmed ? 'opacity-10 pointer-events-none scale-[0.98]' : 'opacity-100 scale-100'
                }`}
              >
                {pillar.overlay}
                
                <div className="relative z-10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] block mb-2 text-zinc-500">
                    {pillar.tagline}
                  </span>
                  <h4 className={`tracking-tight font-bold text-white ${
                    pillar.tagline === 'System Velocity' 
                      ? 'text-[64px] sm:text-[72px] font-extrabold leading-none mt-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500' 
                      : 'text-[26px] sm:text-[30px] leading-tight mt-1 font-medium'
                  }`}>
                    {pillar.title}
                  </h4>
                </div>
                
                <p className="text-[14px] leading-relaxed relative z-10 max-w-[440px] text-zinc-400 font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Studio FAQ Integration Track */}
      <section className="max-w-[840px] mx-auto px-6 py-24">
        <h3 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-white text-center mb-16">
          Questions? Answers.
        </h3>
        <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
          {faqItems.map((faq, index) => {
            const isOpen = openAccordion === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-[18px] sm:text-[21px] font-medium text-zinc-200 group-hover:text-white tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <span 
                    className="text-[24px] text-zinc-500 group-hover:text-zinc-300 font-light font-mono select-none transition-transform duration-300 ease-out"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-400 text-[15px] sm:text-[16px] leading-relaxed max-w-[780px] font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}