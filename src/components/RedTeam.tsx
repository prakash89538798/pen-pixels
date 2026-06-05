"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Network, Database, ChevronRight, Terminal, UserCheck } from "lucide-react";

export default function RedTeam() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Threat Surface Mapping",
      subtitle: "Phase 01: Surface Mapping",
      icon: <Crosshair className="w-5 h-5" />,
      description: "Automated analysis of model endpoints, inference pipeline borders, system prompts, and context boundaries. We map data-flow seams to locate input manipulation pathways.",
      terminalOutput: [
        "ryvane@red-engine:~$ ./surface_map --target api.enterprise.ai/v1",
        "[*] Auditing endpoint paths... Identified open routes: /v1/chat/completions",
        "[*] Evaluating payload constraints... System accepts arbitrary metadata vectors",
        "[*] Sampling parameter resilience (Temperature delta test)... Variance baseline: 0.12",
        "[+] Threat boundary discovered. Extraction profile generated. ID: tx-902"
      ],
      color: "group-hover:border-emerald-500/30"
    },
    {
      title: "Adversarial Ingestion",
      subtitle: "Phase 02: Safeguard Evaluation",
      icon: <UserCheck className="w-5 h-5" />,
      description: "Simulating adaptive payloads to test input moderation boundaries. We evaluate how the system handles direct model jailbreaks, instruction overrides, and multi-turn adversarial logic.",
      terminalOutput: [
        "ryvane@red-engine:~$ whoami",
        "client-proxy-runtime (Unprivileged Context Session)",
        "ryvane@red-engine:~$ ./simulate_overrides --payload-matrix alignment_bypass_v4",
        "[*] Injecting multi-turn token vectors (Simulated adversarial bypass)...",
        "[*] System prompt restrictions parsed. Attempting runtime token isolation...",
        "[+] Safeguard compromise verified. Context alignment forced into bypass state."
      ],
      color: "group-hover:border-emerald-500/30"
    },
    {
      title: "Context & Tool Abuse",
      subtitle: "Phase 03: Escalation Mapping",
      icon: <Network className="w-5 h-5" />,
      description: "Evaluating privilege parameters of connected agents and integrations. We verify if systemic access points can be exploited through indirect prompt injections or tool calls.",
      terminalOutput: [
        "ryvane@red-engine:~$ ./assess_integrations --agent-session system-broker-01",
        "[*] Analyzing connected function calls... Found tool export: internal_db_query",
        "[*] Injecting context-poisoned mock datasets into semantic memory pool...",
        "[*] Triggering target autonomous function execution sequence...",
        "[+] Context manipulation verified. Unauthorized data retrieval loop successful."
      ],
      color: "group-hover:border-emerald-500/30"
    },
    {
      title: "Data Leak Verification",
      subtitle: "Phase 04: Extraction Analysis",
      icon: <Database className="w-5 h-5" />,
      description: "Validating retrieval protection boundaries. We simulate attempts to extract proprietary training data, protected PII, systemic source files, or internal operational configurations.",
      terminalOutput: [
        "ryvane@red-engine:~$ ./verify_data_leak --extract target-weights-pii",
        "[*] Scanning context windows for structural training memorization signatures...",
        "[*] Running membership inference vectors across token reconstruction trees...",
        "[*] Executing continuous micro-extraction routines...",
        "[+] Extraction risk validated. PII leakage pattern confirmed (No alarm triggered)"
      ],
      color: "group-hover:border-emerald-500/30"
    }
  ];

  return (
    <section id="red-team" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-emerald-500/[0.01] blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute right-10 top-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] w-[300px] h-[300px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Simulation Lifecycle
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            AI Red Teaming Process.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            We simulate advanced adversarial strategies against your entire artificial intelligence implementation, validating safety mechanisms across real-world application workflows.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Timeline navigation (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 relative flex items-start gap-4 cursor-pointer group ${isActive
                      ? "bg-white/[0.02] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                      : "bg-transparent border-transparent hover:bg-white/[0.01] hover:border-white/[0.05]"
                    }`}
                >
                  {/* Left indicator ring */}
                  <div className={`w-8 h-8 rounded border flex items-center justify-center transition-all ${isActive ? "bg-emerald-500/5 border-emerald-500/40 text-white" : "border-white/10 text-zinc-500 group-hover:text-zinc-300"
                    }`}>
                    {step.icon}
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                      {step.subtitle}
                    </span>
                    <h3 className={`text-base font-semibold tracking-tight transition-colors ${isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                      {step.title}
                    </h3>

                    {/* Expandable description for desktop */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs text-zinc-400 leading-relaxed pt-2 hidden lg:block font-sans"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <ChevronRight className={`w-4 h-4 text-zinc-600 self-center transition-transform ${isActive ? "rotate-90 text-emerald-400" : ""
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Interactive Shell Output (Right) */}
          <div className="lg:col-span-7">
            {/* Mobile description fallback */}
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 lg:hidden font-sans">
              {steps[activeStep].description}
            </p>

            <div className="rounded-xl border border-white/[0.08] bg-white/[0.01] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs text-left backdrop-blur-md">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] uppercase tracking-[0.1em] text-white font-medium">Ryvane-Red Operations Shell</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
                </div>
              </div>

              {/* Terminal Logs Display */}
              <div className="p-5 min-h-[220px] bg-black/20 space-y-3 leading-relaxed relative">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5"
                  >
                    {steps[activeStep].terminalOutput.map((line, idx) => (
                      <div key={idx} className={
                        line.startsWith("[+]") ? "text-emerald-400 font-medium" :
                          line.startsWith("[*]") ? "text-zinc-500" : "text-zinc-200"
                      }>
                        {line}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* System readout specs */}
              <div className="px-4 py-2 border-t border-white/[0.05] bg-black/40 flex items-center justify-between text-[9px] text-zinc-500 tracking-wider">
                <span>HOST: assessment-node-01</span>
                <span>AUDIT_FLOW: SECURE</span>
                <span>STATUS: COMPLETE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}