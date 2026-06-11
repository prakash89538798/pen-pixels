"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Layers,
  Zap,
  FileText,
  Compass,
  Megaphone,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  imageSrc: string;
  tintColor: string;
}

interface ServiceRowProps {
  service: ServiceItem;
}

const ServiceRow = ({ service }: ServiceRowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-[500px] md:min-h-[650px] flex items-center justify-center overflow-hidden border-b border-white/[0.04] py-12 px-4 group cursor-pointer"
    >
      {/* BACKGROUND IMAGE WITH IMMERSIVE SMOKE MASK */}
      <div className="absolute inset-0 z-0 flex items-center justify-center transition-transform duration-1000 ease-out group-hover:scale-105">
        <div className="relative w-full h-full max-w-[600px] md:max-w-[700px]">
          {/* Main Cinematic Image */}
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover object-center grayscale contrast-150 brightness-[0.25] transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-[0.55]"
          />
          
          {/* Radial Smoke Tint Gradient */}
          <div 
            className="absolute inset-0 mix-blend-screen opacity-60 transition-opacity duration-700 group-hover:opacity-80"
            style={{
              background: `radial-gradient(circle at center, ${service.tintColor} 0%, transparent 65%)`
            }}
          />

          {/* Vignette Edge Blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>
      </div>

      {/* AMBIENT FLOATING DUST/SMOKE PARTICLES EFFECT */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-xl"
          />
        )}
      </AnimatePresence>

      {/* PEAKY BLINDERS INSPIRED FINE-LINE CONTAINER */}
      <div className="relative z-10 w-full max-w-5xl border border-white/10 md:px-12 px-6 py-10 md:py-14 bg-black/10 backdrop-blur-[2px] transition-colors duration-500 group-hover:border-white/20">
        
        <div className="grid md:grid-cols-12 gap-6 items-center">
          
          {/* LEFT METADATA BLOCK */}
          <div className="md:col-span-4 space-y-2 text-left">
            <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs tracking-widest uppercase">
              <span className="p-1.5 bg-white/5 border border-white/10 rounded">
                {service.icon}
              </span>
              <span>{service.tag}</span>
            </div>
            
            {/* Service Count Detail Added below Tag */}
            <p className="text-[10px] font-mono tracking-[0.3em] text-zinc-600 uppercase">
              Premium Service
            </p>

            <h3 className="text-2xl md:text-3xl font-light font-serif tracking-wider text-zinc-200 uppercase pt-2">
              {service.title}
            </h3>
            <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              {service.subtitle}
            </p>
          </div>

          {/* CENTER BRANDING WATERMARK - UPGRADED TEXT */}
          <div className="hidden md:flex md:col-span-4 flex-col items-center justify-center select-none pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <span className="font-serif tracking-[0.4em] text-sm text-zinc-400 uppercase">
              PEN & PIXELS
            </span>
            <span className="font-serif tracking-[0.2em] text-[10px] text-zinc-500 mt-1">
              CREATIVE STUDIO
            </span>
          </div>

          {/* RIGHT QUOTE / DESCRIPTION BLOCK */}
          <div className="md:col-span-4 text-left md:text-right space-y-4 md:ml-auto max-w-xs">
            <p className="font-serif italic text-sm md:text-base text-zinc-300 leading-relaxed relative">
              <span className="text-xl text-zinc-500 font-serif absolute -top-3 -left-4">“</span>
              {service.quote}
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans font-light">
              {service.description}
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default function CapabilitiesServices() {
  const digitalServices: ServiceItem[] = [
    {
      id: "logo-design",
      icon: <Compass className="w-3 h-3" />,
      tag: "Brand Identity",
      title: "Logo Design",
      subtitle: "Visual Identity",
      quote: "A logo speaks before your company does.",
      description:
        "Distinctive logos crafted to build trust, recognition, and a memorable brand presence.",
      imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
      tintColor: "rgba(168,85,247,0.4)",
    },
    {
      id: "branding",
      icon: <Zap className="w-3 h-3" />,
      tag: "Brand Systems",
      title: "Brand Guidelines",
      subtitle: "Complete Identity",
      quote: "Consistency transforms brands into institutions.",
      description:
        "Comprehensive visual systems including typography, colors, imagery, and brand standards.",
      imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      tintColor: "rgba(245,158,11,0.4)",
    },
    {
      id: "landing-pages",
      icon: <Laptop className="w-3 h-3" />,
      tag: "Web Experiences",
      title: "Landing Pages",
      subtitle: "Conversion Focused",
      quote: "Every click should lead somewhere valuable.",
      description:
        "Strategic landing pages designed to convert visitors into customers through modern aesthetics.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tintColor: "rgba(37,99,235,0.4)",
    },
    {
      id: "ui-design",
      icon: <Layers className="w-3 h-3" />,
      tag: "UI / UX Design",
      title: "Website & App UI",
      subtitle: "Digital Products",
      quote: "Great design feels effortless.",
      description:
        "Beautiful user interfaces and seamless experiences for web applications and mobile products.",
      imageSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      tintColor: "rgba(14,165,233,0.4)",
    },
    {
      id: "social-media",
      icon: <Megaphone className="w-3 h-3" />,
      tag: "Content Design",
      title: "Social Media Creatives",
      subtitle: "Campaign Assets",
      quote: "Design is the difference between seen and ignored.",
      description:
        "Instagram posts, carousels, advertisements, banners, and social campaigns built to engage audiences.",
      imageSrc: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
      tintColor: "rgba(236,72,153,0.4)",
    },
    {
      id: "posters",
      icon: <FileText className="w-3 h-3" />,
      tag: "Marketing Design",
      title: "Flyers & Posters",
      subtitle: "Print & Promotion",
      quote: "Attention is earned. Design decides who gets it.",
      description:
        "Eye-catching promotional materials, event posters, and marketing collateral that command attention.",
      imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      tintColor: "rgba(220,38,38,0.4)",
    },
    {
      id: "packaging",
      icon: <Zap className="w-3 h-3" />,
      tag: "Product Branding",
      title: "Packaging Design",
      subtitle: "Retail Experience",
      quote: "Products are judged before they are opened.",
      description:
        "Premium packaging systems that elevate products and create memorable customer experiences.",
      imageSrc: "https://images.unsplash.com/photo-1586880244406-556ebe35f282",
      tintColor: "rgba(249,115,22,0.4)",
    },
    {
      id: "presentation",
      icon: <FileText className="w-3 h-3" />,
      tag: "Business Design",
      title: "Pitch Decks",
      subtitle: "Presentations",
      quote: "Ideas win when they're presented beautifully.",
      description:
        "Investor presentations, startup pitch decks, and executive-level business storytelling.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      tintColor: "rgba(34,197,94,0.4)",
    },
    {
      id: "motion-design",
      icon: <Layers className="w-3 h-3" />,
      tag: "Motion Graphics",
      title: "Animated Visuals",
      subtitle: "Motion Design",
      quote: "Movement turns attention into emotion.",
      description:
        "Logo animations, motion graphics, social media reels, and engaging visual storytelling.",
      imageSrc: "https://images.unsplash.com/photo-1574717024453-354056dcf6b0",
      tintColor: "rgba(6,182,212,0.4)",
    },
    {
      id: "print-design",
      icon: <FileText className="w-3 h-3" />,
      tag: "Corporate Design",
      title: "Business Stationery",
      subtitle: "Print Identity",
      quote: "The smallest details leave the strongest impressions.",
      description:
        "Business cards, brochures, catalogs, menus, letterheads, and premium print assets.",
      imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      tintColor: "rgba(120,113,108,0.4)",
    },
  ];

  return (
    <section className="bg-black text-white py-24 md:py-36 overflow-hidden select-none">
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20 md:mb-32 space-y-4">
        <span className="font-serif tracking-[0.5em] text-xs text-zinc-500 uppercase block">
          ESTABLISHED CAPABILITIES
        </span>
        
        {/* Updated Section Heading */}
        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-wide text-zinc-100">
          Design. Identity. Impact.
        </h2>
        
        <div className="w-12 h-[1px] bg-zinc-700 mx-auto my-6" />
        
        {/* Updated Subtitle */}
        <p className="text-zinc-500 font-serif italic text-sm md:text-base max-w-xl mx-auto">
          "We craft brands, interfaces, campaigns, and visual experiences that leave a lasting impression."
        </p>
      </div>

      {/* CONTINUOUS CINEMATIC MAPPED SECTIONS */}
      <div className="w-full">
        {digitalServices.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>

      {/* FOOTER CALL-TO-ACTION SECTION */}
      <div className="text-center mt-24">
        <button
          className="
            border border-white/10
            px-8 py-4
            uppercase
            tracking-[0.3em]
            text-xs
            text-zinc-300
            hover:bg-white
            hover:text-black
            transition-all
            duration-500
          "
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}
