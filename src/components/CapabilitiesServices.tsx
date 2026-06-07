"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Layers, 
  Zap, 
  FileText, 
  Compass, 
  Megaphone, 
  ArrowUpRight 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  gradientColor: string; // Vibrant glowing accent hex
}

const ServiceCard = ({ icon, title, description, tag, imageSrc, gradientColor }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth spring physics for tracking cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.6 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Position image relative to the container center
    mouseX.set(e.clientX - rect.left - 100); 
    mouseY.set(e.clientY - rect.top - 120);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 rounded-[32px] bg-[#0d0d0e] border border-white/[0.03] hover:bg-[#121214] hover:border-white/[0.08] transition-all duration-500 ease-out flex flex-col justify-between min-h-[320px] overflow-hidden cursor-pointer"
    >
      {/* Dynamic Vibrant Ambient Light Mesh behind text */}
      <div 
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[50px] pointer-events-none"
        style={{ backgroundColor: gradientColor }}
      />
      
      <div className="space-y-6 relative z-10">
        <div className="flex justify-between items-center">
          <div 
            className="w-11 h-11 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#86868b] group-hover:text-[#000] transition-all duration-500"
            style={{ '--hover-bg': gradientColor } as React.CSSProperties}
          >
            <div className="absolute inset-0 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-[0.25,1,0.5,1]" style={{ backgroundColor: gradientColor }} />
            <span className="relative z-10 text-zinc-400 group-hover:text-black transition-colors duration-300">{icon}</span>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-[#86868b] font-medium bg-white/[0.02] border border-white/[0.04] px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-[20px] font-semibold text-[#f5f5f7] tracking-tight group-hover:text-white transition-colors duration-300">
            {title}
          </h4>
          <p className="text-[14px] text-[#86868b] leading-relaxed group-hover:text-[#e8e8ed] transition-colors duration-500">
            {description}
          </p>
        </div>
      </div>

      {/* Interactive Learn More Tag */}
      <div className="pt-6 flex items-center gap-1 font-sans text-[13px] font-medium text-[#2997ff] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mt-auto relative z-10">
        <span style={{ color: gradientColor }}>Discover project</span>
        <ArrowUpRight className="w-4 h-4" style={{ color: gradientColor }} />
      </div>

      {/* Floating Vibrant Image Card Engine */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{
              left: imageX,
              top: imageY,
            }}
            initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-20 w-[200px] h-[240px] pointer-events-none rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 hidden lg:block"
          >
            {/* Vibrant colorful gradient backdrop inside image portal */}
            <div 
              className="absolute inset-0 opacity-40 blur-xl animate-pulse scale-120"
              style={{ background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)` }}
            />
            {/* Rendered Mock Image Background */}
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover relative z-10 transform scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CapabilitiesServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="services" className="relative py-32 md:py-44 bg-[#000000] overflow-hidden font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      
      {/* Luxury Color-pop ambient lights floating deeply behind the canvas */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#3b82f6]/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ec4899]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1160px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Apple Editorial Centered Header Layout */}
        <div className="text-center space-y-4 max-w-[760px] mx-auto border-b border-white/[0.06] pb-20 md:pb-24">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">
            Capabilities
          </span>
          <h2 className="text-[42px] sm:text-[60px] font-semibold tracking-tight text-[#f5f5f7] leading-[1.06]">
            Designed to elevate your brand.
          </h2>
          <p className="text-[19px] sm:text-[22px] text-[#86868b] leading-relaxed font-normal pt-2 max-w-[620px] mx-auto">
            From high-performance digital ecosystems to striking print media, we blend technical precision with artistic mastery.
          </p>
        </div>

        {/* Pillars Stack */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="space-y-32 pt-20 md:pt-24"
        >
          
          {/* Pillar 1: The Pixels */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="flex items-center gap-3 border-b border-white/[0.04] pb-4">
              <h3 className="text-[22px] font-semibold text-[#f5f5f7]">The Pixels</h3>
              <span className="text-[14px] text-[#86868b] font-normal">— Digital & Development</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<Laptop className="w-4 h-4" />}
                tag="Websites"
                title="Custom Web Design & Dev"
                description="Turning complex ideas into sleek, fast, and responsive digital realities. We build tailor-made websites designed to convert traffic into loyal customers."
                gradientColor="#3b82f6" // Vibrant Electric Blue
                imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
              />
              <ServiceCard 
                icon={<Layers className="w-4 h-4" />}
                tag="Interfaces"
                title="UI/UX Design"
                description="Intuitive layouts and interactive prototypes. We map out user journeys that are effortless, engaging, and visually stunning."
                gradientColor="#a855f7" // Vibrant Royal Purple
                imageSrc="https://images.unsplash.com/photo-1634973357973-f2ed255753e1?q=80&w=600&auto=format&fit=crop"
              />
              <ServiceCard 
                icon={<Zap className="w-4 h-4" />}
                tag="Performance"
                title="Landing Pages & Micro-sites"
                description="High-converting single-page experiences built to launch products, capture leads, and scale your marketing campaigns instantly."
                gradientColor="#06b6d4" // Vibrant Cyan Electric
                imageSrc="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
              />
            </div>
          </motion.div>


          {/* Pillar 2: The Pen */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="flex items-center gap-3 border-b border-white/[0.04] pb-4">
              <h3 className="text-[22px] font-semibold text-[#f5f5f7]">The Pen</h3>
              <span className="text-[14px] text-[#86868b] font-normal">— Creative & Print</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<FileText className="w-4 h-4" />}
                tag="Print Assets"
                title="Flyers & Poster Design"
                description="High-impact layouts engineered for both digital distribution and physical print. We create visual assets that demand attention in any crowd."
                gradientColor="#ec4899" // Vibrant Hot Pink
                imageSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop"
              />
              <ServiceCard 
                icon={<Compass className="w-4 h-4" />}
                tag="Brand DNA"
                title="Brand Identity & Graphics"
                description="Crafting unforgettable visual languages. From custom logo suites to comprehensive brand guidelines, we establish your signature style."
                gradientColor="#f97316" // Vibrant Bright Orange
                imageSrc="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop"
              />
              <ServiceCard 
                icon={<Megaphone className="w-4 h-4" />}
                tag="Campaign Kits"
                title="Marketing & Social Kits"
                description="Scroll-stopping content for your digital channels. We design cohesive templates, ad creatives, and promotional banners that drive engagement."
                gradientColor="#10b981" // Vibrant Neon Emerald
                imageSrc="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}