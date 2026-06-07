"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Variants,
} from "framer-motion";

import {
  Laptop,
  Layers,
  Zap,
  FileText,
  Compass,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  gradientColor: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  tag,
  imageSrc,
  gradientColor,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.6 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - 100);
    mouseY.set(e.clientY - rect.top - 120);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 rounded-[32px] bg-[#0d0d0e] border border-white/[0.03] hover:bg-[#121214] hover:border-white/[0.08] transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden cursor-pointer"
    >
      <div
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[50px] pointer-events-none"
        style={{ backgroundColor: gradientColor }}
      />

      <div className="space-y-6 relative z-10">
        <div className="flex justify-between items-center">
          <div className="w-11 h-11 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
            <span className="text-zinc-400">{icon}</span>
          </div>

          <span className="font-mono text-[10px] tracking-wider text-[#86868b] bg-white/[0.02] border border-white/[0.04] px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>

        <div className="space-y-3">
          <h4 className="text-[20px] font-semibold text-[#f5f5f7]">
            {title}
          </h4>
          <p className="text-[14px] text-[#86868b] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="pt-6 flex items-center gap-1 text-[13px] font-medium mt-auto relative z-10">
        <span style={{ color: gradientColor }}>Discover project</span>
        <ArrowUpRight className="w-4 h-4" style={{ color: gradientColor }} />
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{ left: imageX, top: imageY }}
            initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-20 w-[200px] h-[240px] pointer-events-none rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 hidden lg:block"
          >
            <div
              className="absolute inset-0 opacity-40 blur-xl"
              style={{
                background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)`,
              }}
            />
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CapabilitiesServices() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-32 md:py-44 bg-black overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center space-y-4 max-w-[760px] mx-auto border-b border-white/10 pb-20">
          <span className="text-[12px] uppercase tracking-widest text-gray-400">
            Capabilities
          </span>

          <h2 className="text-[42px] sm:text-[60px] font-semibold text-white">
            Designed to elevate your brand.
          </h2>

          <p className="text-[18px] text-gray-400">
            From digital systems to print media, we build modern experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-32 pt-20"
        >
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="flex gap-3 border-b border-white/10 pb-4">
              <h3 className="text-xl text-white">The Pixels</h3>
              <span className="text-gray-400">Digital & Development</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Laptop />}
                tag="Web"
                title="Web Design & Dev"
                description="Fast, responsive digital experiences."
                gradientColor="#3b82f6"
                imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
              />

              <ServiceCard
                icon={<Layers />}
                tag="UI/UX"
                title="Interface Design"
                description="Clean user journeys and prototypes."
                gradientColor="#a855f7"
                imageSrc="https://images.unsplash.com/photo-1634973357973-f2ed255753e1"
              />

              <ServiceCard
                icon={<Zap />}
                tag="Speed"
                title="Landing Pages"
                description="High conversion landing pages."
                gradientColor="#06b6d4"
                imageSrc="https://images.unsplash.com/photo-1600132806370-bf17e65e942f"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-10">
            <div className="flex gap-3 border-b border-white/10 pb-4">
              <h3 className="text-xl text-white">The Pen</h3>
              <span className="text-gray-400">Creative & Print</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<FileText />}
                tag="Print"
                title="Flyers & Posters"
                description="High-impact print designs."
                gradientColor="#ec4899"
                imageSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d"
              />

              <ServiceCard
                icon={<Compass />}
                tag="Brand"
                title="Identity Design"
                description="Strong visual brand systems."
                gradientColor="#f97316"
                imageSrc="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
              />

              <ServiceCard
                icon={<Megaphone />}
                tag="Social"
                title="Marketing Kits"
                description="Engaging social media content."
                gradientColor="#10b981"
                imageSrc="https://images.unsplash.com/photo-1616469829581-73993eb86b02"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}