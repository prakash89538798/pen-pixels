"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Terminal, Cpu, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "AI Auditing", id: "ai-security" },
    { name: "Red Teaming", id: "red-team" },
    { name: "Framework Specs", id: "platform-specs" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${isScrolled
            ? "h-16 bg-[#050505]/80 backdrop-blur-md border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "h-20 bg-transparent border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo Section */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative w-8 h-8 rounded border border-white/10 bg-white/[0.02] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Shield className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-mono text-sm font-semibold tracking-[0.25em] text-white transition-colors">
              Pen&Pixels
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="font-sans text-xs text-zinc-400 hover:text-white transition-colors tracking-wide relative py-1 cursor-pointer group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Call-to-Action Link Block */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("cta-section")}
              className="relative px-4 py-2 rounded bg-white text-black font-sans text-xs font-medium hover:bg-zinc-200 transition-all duration-300 cursor-pointer overflow-hidden group flex items-center gap-1.5"
            >
              <span>Schedule Assessment</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>

          {/* Mobile Menu Interactive Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-white/[0.06] bg-white/[0.01] text-zinc-400 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Context Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-30 md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.08]"
          >
            <div className="flex flex-col p-6 space-y-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, idx) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center gap-3 font-sans text-sm text-zinc-400 hover:text-white py-3 border-b border-white/[0.04] text-left cursor-pointer"
                  >
                    {idx === 0 && <Cpu className="w-4 h-4 text-emerald-400" />}
                    {idx === 1 && <Shield className="w-4 h-4 text-zinc-400" />}
                    {idx === 2 && <Terminal className="w-4 h-4 text-zinc-500" />}
                    {item.name}
                  </motion.button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => handleNavClick("cta-section")}
                className="w-full flex items-center justify-center gap-2 h-11 rounded bg-white text-black font-sans text-xs font-medium hover:bg-zinc-200 cursor-pointer"
              >
                Schedule Assessment
              </motion.button>

              <div className="pt-8 border-t border-white/[0.06] space-y-2 text-[10px] font-mono text-zinc-500 tracking-wider">
                <div>AUDIT ENGINE: ACTIVE</div>
                <div>SECURE TUNNEL: TLS_1_3</div>
                <div>NODE VERIFICATION: VERIFIED</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}