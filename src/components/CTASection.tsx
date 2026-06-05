"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Send, ShieldCheck, RefreshCw } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState<"idle" | "connecting" | "success">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !domain) return;

    setStatus("connecting");

    const steps = [
      "Initializing environment verification...",
      "Analyzing endpoint routing paths...",
      "Verifying security protocol alignment...",
      "Environment mapping verified. Connection established."
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setStatusMsg(step);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            setStatus("success");
          }, 800);
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <section id="cta-section" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        {/* Glow card layout container */}
        <div className="p-8 md:p-12 rounded-xl bg-white/[0.01] border border-white/[0.06] shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/[0.02] blur-3xl pointer-events-none opacity-50" />

          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="form-idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white mb-2 shadow-xl">
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                    Let's Evaluate Your AI Systems.
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-sans">
                    Tell us what you are building. We will help identify operational risks, validate safeguards, and strengthen model security before deployment.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 ml-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="security@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 px-4 rounded border border-white/[0.08] bg-white/[0.01] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 ml-1">
                      Primary Model Endpoint or Domain
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="secure-api.yourcompany.com"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full h-11 px-4 rounded border border-white/[0.08] bg-white/[0.01] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 h-12 mt-6 rounded bg-white text-black font-sans text-xs font-medium hover:bg-zinc-200 transition-all cursor-pointer shadow-lg"
                  >
                    <span>Request Security Assessment</span>
                    <Send className="w-3 h-3 text-black" />
                  </button>
                </form>
              </motion.div>
            )}

            {status === "connecting" && (
              <motion.div
                key="form-connecting"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium">
                    Synchronizing Connection
                  </h3>
                  <p className="font-mono text-[10px] text-zinc-400 h-6 tracking-wide">
                    {statusMsg}
                  </p>
                </div>

                {/* Simulated progress slider tracker line */}
                <div className="w-44 h-[1px] bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-400"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 2.4, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium">
                    Request Received
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm leading-relaxed font-sans">
                    A secure session handshake has been scheduled for <strong className="text-white font-medium">{domain}</strong>. Our engineering team will contact you at <strong className="text-white font-medium">{email}</strong> to coordinate access parameters.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                    setDomain("");
                  }}
                  className="font-sans text-[11px] text-zinc-500 border-b border-white/10 hover:text-white transition-colors pt-2"
                >
                  Configure another target system setup
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}