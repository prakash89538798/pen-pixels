"use client";

import { Shield, GitCommit, Radio } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030307] border-t border-white/[0.04] py-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-dots opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand info (Left) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border border-ryvane-accent-blue/30 bg-ryvane-accent-blue/10 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-ryvane-accent-blue" />
              </div>
              <span className="font-mono text-sm font-bold tracking-widest text-white">
                RYVANE
              </span>
            </div>
            <p className="text-xs text-ryvane-text-body max-w-sm leading-relaxed">
              Precision-engineered offensive agent pools designed to secure the modern intelligence-driven enterprise. Completely private, secure, and sovereign.
            </p>
          </div>

          {/* Links (Center) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-ryvane-text-dim">
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-ryvane-text-body">
                <li>
                  <button 
                    onClick={() => document.getElementById("ai-security")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    AI Auditing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById("red-team")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Red Teaming
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById("platform-specs")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Specifications
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-ryvane-text-dim">
                Operational
              </h4>
              <ul className="space-y-2 text-xs text-ryvane-text-body">
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    PGP Key Directory
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Security Disclosure
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Legal Charter
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Diagnostic Console (Right) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-ryvane-text-dim">
              System Telemetry
            </h4>
            <div className="p-4 rounded border border-white/5 bg-white/[0.01] font-mono text-[10px] space-y-2 text-ryvane-text-body">
              <div className="flex items-center justify-between">
                <span>NODE CORE:</span>
                <span className="text-white">ONLINE</span>
              </div>
              <div className="flex items-center justify-between">
                <span>GEO_LATENCY:</span>
                <span className="text-ryvane-accent-cyan flex items-center gap-1">
                  <Radio className="w-2.5 h-2.5 animate-pulse" />
                  12ms
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>GATEWAY_VER:</span>
                <span className="text-white">v3.4.1</span>
              </div>
              <div className="flex items-center justify-between">
                <span>INTEGRITY_HASH:</span>
                <span className="text-ryvane-text-dim text-[8px]">0x3C81...FA92</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-ryvane-text-dim">
          <div>
            &copy; {currentYear} Ryvane Security AG. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <GitCommit className="w-3.5 h-3.5" />
            <span>COMMIT SHA: RELEASE_PRODUCTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
