"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Layers, ArrowRight, Eye, Monitor } from "lucide-react";

const TOTAL_FRAMES = 240;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState("Initializing creative canvas...");

  // Set up scrolling hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Spring physics for butter-smooth scrolling scrub
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 35,
    stiffness: 90,
    restDelta: 0.0001
  });

  // Map progress to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all 240 frames
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = async () => {
      const statusSteps = [
        "Crating brand matrices...",
        "Loading ultra-high definition assets...",
        "Optimizing digital frameworks...",
        "Rendering geometric guidelines...",
        "Synchronizing aesthetic engine...",
        "Creative engine ready...",
      ];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const frameNum = String(i).padStart(3, "0");
        const img = new Image();
        img.src = `/frames/ezgif-frame-${frameNum}.jpg`;

        img.onload = () => {
          loadedCount++;
          const progress = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
          setLoadProgress(progress);

          const statusIdx = Math.min(
            Math.floor((loadedCount / TOTAL_FRAMES) * statusSteps.length),
            statusSteps.length - 1
          );
          setLoadingStatus(`${statusSteps[statusIdx]} (${progress}%)`);

          if (loadedCount === TOTAL_FRAMES) {
            setLoading(false);
          }
        };

        img.onerror = () => {
          console.error(`Error loading frame: ${frameNum}`);
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setLoading(false);
          }
        };

        imagesRef.current.push(img);
      }
    };

    preloadImages();
  }, []);

  // Canvas drawing function
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgIndex = Math.min(Math.max(0, Math.floor(index)), TOTAL_FRAMES - 1);
    const img = imagesRef.current[imgIndex];

    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.width;
    const imgHeight = img.height;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const currentIdx = Math.floor(frameIndex.get());
      drawFrame(currentIdx);
    };

    window.addEventListener("resize", handleResize);

    if (!loading) {
      handleResize();
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [loading, frameIndex]);

  useEffect(() => {
    if (loading) return;

    const unsubscribe = frameIndex.on("change", (latest) => {
      drawFrame(latest);
    });

    return () => unsubscribe();
  }, [loading, frameIndex]);

  // Narrative scene transforms driven by scroll position
  const scene1Opacity = useTransform(smoothProgress, [0, 0.15, 0.22, 0.28], [0, 1, 1, 0]);
  const scene1Y = useTransform(smoothProgress, [0, 0.15, 0.22, 0.28], [30, 0, 0, -30]);

  const scene2Opacity = useTransform(smoothProgress, [0.32, 0.45, 0.52, 0.58], [0, 1, 1, 0]);
  const scene2Y = useTransform(smoothProgress, [0.32, 0.45, 0.52, 0.58], [30, 0, 0, -30]);

  const scene3Opacity = useTransform(smoothProgress, [0.62, 0.75, 0.82, 0.88], [0, 1, 1, 0]);
  const scene3Y = useTransform(smoothProgress, [0.62, 0.75, 0.82, 0.88], [30, 0, 0, -30]);

  const canvasOpacity = useTransform(smoothProgress, [0.85, 0.98], [0.7, 0.1]);
  const canvasBlur = useTransform(smoothProgress, [0.8, 0.98], ["blur(0px)", "blur(16px)"]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[350vh] bg-[#050505]">
      {/* Loading Screen Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" fill="transparent" />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="226"
                  animate={{ strokeDashoffset: 226 - (226 * loadProgress) / 100 }}
                  transition={{ ease: "easeOut" }}
                />
              </svg>
              <Sparkles className="w-6 h-6 text-zinc-400 animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Studio Engine Initializing
              </div>
              <h2 className="text-lg font-medium tracking-tight text-white font-mono">
                {loadProgress}%
              </h2>
              <p className="font-mono text-[9px] text-zinc-500 h-8 flex items-center justify-center tracking-wide">
                {loadingStatus}
              </p>
            </div>

            <div className="mt-8 w-64 p-3 rounded border border-white/[0.06] bg-white/[0.01] text-left font-mono text-[8px] text-zinc-600 space-y-1">
              <div>&gt; STUDIO SYSTEM ONLINE</div>
              <div>&gt; ASSET MATRIX OPTIMIZED</div>
              <div>&gt; HIGH-FIDELITY PIPELINE READY</div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 z-20 pointer-events-none" />

        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity, filter: canvasBlur }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Narrative Flow Overlay */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center h-full">

          {/* Scene 1: Main Landing Banner */}
          <motion.div
            style={{ opacity: scene1Opacity, y: scene1Y }}
            className="absolute flex flex-col items-center text-center max-w-5xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-300">Identity & Design Studio</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight font-sans">
              Elevate Your Brand. <br className="hidden md:inline" />Dominate Your Market.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-sans">
              We transform ambitious visions into iconic brands and digital experiences that captivate, convert, and command attention. Your next chapter of growth starts here.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative flex items-center justify-center gap-2 px-6 h-12 rounded bg-white text-black font-sans font-medium text-sm transition-all duration-300 hover:bg-zinc-200 cursor-pointer"
              >
                Schedule Your Brand Transformation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => document.getElementById("portfolio-showcase")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 px-6 h-12 rounded border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] text-white font-sans text-sm font-medium transition-all cursor-pointer backdrop-blur-sm"
              >
                Explore Our Work
              </button>
            </div>
          </motion.div>

          {/* Scene 2: Brand Strategy Focus */}
          <motion.div
            style={{ opacity: scene2Opacity, y: scene2Y }}
            className="absolute flex flex-col items-start text-left max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-300">Strategic Position</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
              Engineered to Capture <br />and Command Attention
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-sans">
              True differentiation isn't just cosmetic. We map market imbalances, rewrite product narratives, and reshape consumer perceptions to scale your business framework into an undeniable classic identity.
            </p>

            <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.06] p-3 rounded backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              STUDIO CAPABILITIES ACTIVE: IDENTITY · EMERGENCE · STRATEGY
            </div>
          </motion.div>

          {/* Scene 3: Digital Product & Experiences */}
          <motion.div
            style={{ opacity: scene3Opacity, y: scene3Y }}
            className="absolute flex flex-col items-center text-center max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
              <Monitor className="w-3.5 h-3.5 text-zinc-300" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-300">Digital Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
              Immersive Interactivity That Converts
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-sans">
              We bridge flawless UI aesthetic direction with state-of-the-art frontend deployment architectures to present digital interfaces that run smooth, perform beautifully, and look absolutely striking.
            </p>

            <button
              onClick={() => document.getElementById("portfolio-showcase")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-2 inline-flex items-center gap-1.5 font-sans text-xs font-medium text-white border-b border-white/20 pb-0.5 hover:border-zinc-400 transition-colors"
            >
              Discover the Interactive Case Studies
              <Eye className="w-3 h-3" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator Icon Element */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            Scroll to Experience
          </span>
          <div className="w-[18px] h-[32px] rounded-full border border-white/10 flex justify-center p-1 bg-white/[0.01]">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}