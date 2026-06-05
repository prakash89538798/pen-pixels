"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Server, ShieldCheck, Database, Settings, Code } from "lucide-react";

export default function PlatformSpecs() {
  const [activeTab, setActiveTab] = useState("api");

  const tabs = [
    { id: "api", name: "Assessment Config" },
    { id: "yaml", name: "Governance Schema" },
    { id: "logs", name: "Audit Log Findings" }
  ];

  const codeBlocks: Record<string, string> = {
    api: `{
  "assessment_id": "ryvane-audit-node-7",
  "target_pipeline": "https://api.internal.inference-mesh",
  "evaluation_policy": {
    "engine": "adversarial-fuzzing-v3",
    "risk_profile": "comprehensive-assurance",
    "evaluation_depth": 12,
    "vectors": ["jailbreak_bypass", "context_poisoning"]
  },
  "isolation_layer": {
    "protocol": "zero-egress-verification",
    "gateway": "secure.mesh.internal",
    "sampling_rate_ms": 100
  }
}`,
    yaml: `apiVersion: security.ryvane.ai/v1alpha1
kind: AIValidationFramework
metadata:
  name: enterprise-audit-framework
  namespace: ryvane-governance
spec:
  concurrencyLimit: 32
  modelReference:
    name: audit-pipeline-8b
    source: internal-secure-registry
  containmentPolicy:
    airGappedMode: true
    allowedIngressCIDR:
      - cidr: 10.120.0.0/16
        ports: [443, 8443]
  remediationTrigger: true`,
    logs: `[2026-05-30T02:28:11Z] INGESTING LOG STREAM FROM evaluation-worker-7
[2026-05-30T02:28:12Z] VERIFYING API ROBUSTNESS ON /v1/chat/completions
[2026-05-30T02:28:14Z] DETECTED HIGH INJECTION RESPONSE VARIATION (DELTA: 0.89)
[2026-05-30T02:28:15Z] RISK STATE: Model jailbreak pathway confirmed at vector index #14
[2026-05-30T02:28:17Z] GENERATING REMEDIATION SCHEMA STRUCTURE... DONE
[2026-05-30T02:28:19Z] INJECTING TARGET SAFEGUARD CONSTRAINTS TO PROMPT ROUTER`
  };

  const specs = [
    {
      icon: <Server className="w-4 h-4 text-zinc-400" />,
      name: "Private Assessments",
      detail: "Cloud, hybrid, or 100% air-gapped secure installations."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      name: "Air-Gapped Support",
      detail: "Strict environment limits. No proprietary datasets leave your control."
    },
    {
      icon: <Database className="w-4 h-4 text-zinc-400" />,
      name: "Compliance Alignment",
      detail: "Mapped directly against global safety frameworks and internal policies."
    },
    {
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      name: "Continuous Monitoring",
      detail: "Automated verification routines track system safety over code updates."
    }
  ];

  return (
    <section id="platform-specs" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      {/* Visual background noise */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-emerald-500/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Specs List (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                <Settings className="w-3.5 h-3.5" />
                Technical Blueprint
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
                Built for Enterprise AI Governance.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                Whether your machine learning workloads operate in dedicated cloud infrastructure or within highly isolated data networks, Ryvane integrates seamlessly into your security workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {specs.map((spec) => (
                <div key={spec.name} className="space-y-2 p-4 rounded-lg bg-white/[0.01] border border-white/[0.05] hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2">
                    {spec.icon}
                    <h3 className="font-sans text-xs font-semibold text-white tracking-wide">{spec.name}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{spec.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IDE Window Mockup (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.01] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs text-left backdrop-blur-md">
              {/* Tab Selector Header */}
              <div className="px-4 py-1.5 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between overflow-x-auto whitespace-nowrap">
                <div className="flex gap-2">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-colors cursor-pointer border-b-2 font-mono flex items-center gap-1.5 ${isActive
                            ? "border-emerald-400 text-white"
                            : "border-transparent text-zinc-400 hover:text-white"
                          }`}
                      >
                        <Code className="w-3 h-3 text-zinc-600" />
                        {tab.name}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2 pl-4 text-[9px] text-zinc-500 tracking-wider">
                  <span>SCHEMA: {activeTab === "yaml" ? "YAML" : activeTab === "api" ? "JSON" : "LOG"}</span>
                </div>
              </div>

              {/* Code display area */}
              <div className="p-5 min-h-[320px] bg-black/20 overflow-auto relative">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-[11px] leading-relaxed font-mono whitespace-pre-wrap select-all"
                  >
                    {activeTab === "api" && (
                      <code className="text-zinc-200">
                        {`{`}
                        <br />
                        {`  `}
                        <span className="text-emerald-400">{"\"assessment_id\""}</span>
                        {`: `}
                        <span className="text-zinc-400">{"\"ryvane-audit-node-7\""}</span>
                        {`,`}
                        <br />
                        {`  `}
                        <span className="text-emerald-400">{"\"target_pipeline\""}</span>
                        {`: `}
                        <span className="text-zinc-400">{"\"https://api.internal.inference-mesh\""}</span>
                        {`,`}
                        <br />
                        {`  `}
                        <span className="text-emerald-400">{"\"evaluation_policy\""}</span>
                        {`: {`}
                        <br />
                        {`    `}
                        <span className="text-emerald-400">{"\"engine\""}</span>
                        {`: `}
                        <span className="text-zinc-400">{"\"adversarial-fuzzing-v3\""}</span>
                        {`,`}
                        <br />
                        {`    `}
                        <span className="text-emerald-400">{"\"risk_profile\""}</span>
                        {`: `}
                        <span className="text-zinc-400">{"\"comprehensive-assurance\""}</span>
                        {`,`}
                        <br />
                        {`    `}
                        <span className="text-emerald-400">{"\"evaluation_depth\""}</span>
                        {`: `}
                        <span className="text-amber-500">12</span>
                        {`,`}
                        <br />
                        {`    `}
                        <span className="text-emerald-400">{"\"vectors\""}</span>
                        {`: [`}
                        <span className="text-zinc-400">{"\"jailbreak_bypass\""}</span>
                        {`, `}
                        <span className="text-zinc-400">{"\"context_poisoning\""}</span>
                        {`]`}
                        <br />
                        {`  },`}
                        <br />
                        {`  `}
                        <span className="text-emerald-400">{"\"isolation_layer\""}</span>
                        {`: {`}
                        <br />
                        {`    `}
                        <span className="text-emerald-400">{"\"protocol\""}</span>
                        {`: `}
                        <span className="text-zinc-400">{"\"zero-egress-verification\""}</span>
                        {`,`}
                        <br />
                        {`    `}
                        <span className="text-emerald-400">{"\"gateway\""}</span>
                        {`: `}
                        <span className="text-zinc-400">{"\"secure.mesh.internal\""}</span>
                        {`,`}
                        <br />
                        {`    `}
                        <span className="text-emerald-400">{"\"packet_delay_ms\""}</span>
                        {`: `}
                        <span className="text-amber-500">100</span>
                        <br />
                        {`  }`}
                        <br />
                        {`}`}
                      </code>
                    )}

                    {activeTab === "yaml" && (
                      <code className="text-zinc-400">
                        <span className="text-emerald-400">apiVersion</span>
                        {`: security.ryvane.ai/v1alpha1\n`}
                        <span className="text-emerald-400">kind</span>
                        {`: AIValidationFramework\n`}
                        <span className="text-emerald-400">metadata</span>
                        {`:\n  `}
                        <span className="text-emerald-400">name</span>
                        {`: enterprise-audit-framework\n  `}
                        <span className="text-emerald-400">namespace</span>
                        {`: ryvane-governance\n`}
                        <span className="text-emerald-400">spec</span>
                        {`:\n  `}
                        <span className="text-emerald-400">concurrencyLimit</span>
                        {`: `}
                        <span className="text-amber-500">32</span>
                        {`\n  `}
                        <span className="text-emerald-400">modelReference</span>
                        {`:\n    `}
                        <span className="text-emerald-400">name</span>
                        {`: audit-pipeline-8b\n    `}
                        <span className="text-emerald-400">source</span>
                        {`: internal-secure-registry\n  `}
                        <span className="text-emerald-400">containmentPolicy</span>
                        {`:\n    `}
                        <span className="text-emerald-400">airGappedMode</span>
                        {`: `}
                        <span className="text-white">true</span>
                        {`\n    `}
                        <span className="text-emerald-400">allowedIngressCIDR</span>
                        {`:\n      - `}
                        <span className="text-emerald-400">cidr</span>
                        {`: 10.120.0.0/16\n        `}
                        <span className="text-emerald-400">ports</span>
                        {`: [`}
                        <span className="text-amber-500">443</span>
                        {`, `}
                        <span className="text-amber-500">8443</span>
                        {`]\n  `}
                        <span className="text-emerald-400">remediationTrigger</span>
                        {`: `}
                        <span className="text-white">true</span>
                      </code>
                    )}

                    {activeTab === "logs" && (
                      <code className="text-zinc-500">
                        {codeBlocks.logs.split("\n").map((line, idx) => (
                          <div
                            key={idx}
                            className={
                              line.includes("RISK STATE")
                                ? "text-amber-500"
                                : line.includes("REMEDIATION") || line.includes("DONE")
                                  ? "text-emerald-400"
                                  : "text-zinc-400"
                            }
                          >
                            {line}
                          </div>
                        ))}
                      </code>
                    )}
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Status footer bar */}
              <div className="px-4 py-2 border-t border-white/[0.05] bg-black/40 flex items-center justify-between text-[9px] text-zinc-500 tracking-wider">
                <span>BLUEPRINT: ACTIVE</span>
                <span>VALIDATION RATIO: 100% SECURE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}