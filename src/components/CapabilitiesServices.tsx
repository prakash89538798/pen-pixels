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
  tintColor: string; // The smoke color accent (e.g., gold, charcoal, deep crimson)
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
      className="relative w-full min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden border-b border-white/[0.04] py-12 px-4 group cursor-pointer"
    >
      {/* BACKGROUND IMAGE WITH IMMERSIVE SMOKE MASK */}
      <div className="absolute inset-0 z-0 flex items-center justify-center transition-transform duration-1000 ease-out group-hover:scale-105">
        <div className="relative w-full h-full max-w-[600px] md:max-w-[700px]">
          {/* Main Character Image */}
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.4] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-[0.5]"
          />
          
          {/* Radial Smoke Tint Gradient matching the uploaded image */}
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
            <h3 className="text-2xl md:text-3xl font-light font-serif tracking-wider text-zinc-200 uppercase pt-2">
              {service.title}
            </h3>
            <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              {service.subtitle}
            </p>
          </div>

          {/* CENTER BRANDING WATERMARK */}
          <div className="hidden md:flex md:col-span-4 flex-col items-center justify-center select-none pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <span className="font-serif tracking-[0.4em] text-sm text-zinc-400 uppercase">
              CAPABILITIES
            </span>
            <span className="font-serif tracking-[0.2em] text-[10px] text-zinc-500 mt-1">
              PRODUCTIONS
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
  // Configured data aligning perfectly to your features mapped to the template aesthetic
  const digitalServices: ServiceItem[] = [
    {
      id: "web-dev",
      icon: <Laptop className="w-3 h-3" />,
      tag: "Web Systems",
      title: "Thomas Shelby",
      subtitle: "Web Design & Dev",
      quote: "Everyone's a whore, Grace. We just sell different parts of ourselves.",
      description: "Fast, dangerously optimized, and ruthlessly tactical digital architectures built to command attention.",
      imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe", // Replace with high-contrast portrait
      tintColor: "rgba(115, 115, 115, 0.45)", // Charcoal smoke
    },
    {
      id: "ui-ux",
      icon: <Layers className="w-3 h-3" />,
      tag: "UI/UX Architecture",
      title: "Alfie Solomons",
      subtitle: "Interface Design",
      quote: "Intelligence is a very valuable thing, innit, my friend? And usually it comes far too fucking late.",
      description: "Meticulous user pathways. Designing sharp interfaces with absolute precision and hidden depth.",
      imageSrc: "https://images.unsplash.com/photo-1634973357973-f2ed255753e1",
      tintColor: "rgba(217, 119, 6, 0.35)", // Amber/Gold smoke
    },
    {
      id: "brand-identity",
      icon: <Compass className="w-3 h-3" />,
      tag: "Brand Identity",
      title: "Polly Shelby",
      subtitle: "Identity Design",
      quote: "Rule one. Don't punch above your weight.",
      description: "Establishing dominant visual systems and ironclad corporate identities that survive generations.",
      imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
      tintColor: "rgba(153, 27, 27, 0.4)", // Crimson smoke
    },
  ];

  return (
    <section className="bg-black text-white py-24 md:py-36 overflow-hidden select-none">
      {/* HEADER SECTION INITIATING THE THEME */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20 md:mb-32 space-y-4">
        <span className="font-serif tracking-[0.5em] text-xs text-zinc-500 uppercase block">
          ESTABLISHED CAPABILITIES
        </span>
        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-wide text-zinc-100">
          Designed to elevate your brand.
        </h2>
        <div className="w-12 h-[1px] bg-zinc-700 mx-auto my-6" />
        <p className="text-zinc-500 font-serif italic text-sm md:text-base max-w-xl mx-auto">
          "From digital control rooms to physical deployment assets, we engineer modern experiences."
        </p>
      </div>

      {/* CONTINUOUS CINEMATIC SECTIONS */}
      <div className="w-full">
        {digitalServices.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}