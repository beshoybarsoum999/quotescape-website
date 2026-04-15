"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "@phosphor-icons/react";
import VideoModal from "./VideoModal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Video Background — right half only on desktop */}
      <div className="absolute inset-0 z-0 md:left-[45%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/standing-seam-video.mp4" type="video/mp4" />
        </video>

        {/* Radial inward mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 60% 50%, transparent 40%, rgba(250,250,249,0.35) 60%, rgba(250,250,249,0.78) 78%, #FAFAF9 100%)",
          }}
        />
        {/* Top + bottom edge bleed */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#FAFAF9] via-transparent to-[#FAFAF9]/50" />
        {/* Left edge bleed for smooth transition into text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #FAFAF9 0%, rgba(250,250,249,0.85) 15%, rgba(250,250,249,0.4) 35%, transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-28 pb-20 md:pt-0 md:pb-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start text-left md:max-w-[55%]"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] text-emerald-700 text-xs font-medium tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              The #1 on-site visual sales tool nationwide
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none font-semibold text-zinc-950 mb-6 max-w-[20ch]"
          >
            Visualize, Quote, and Close —{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #60A5FA 0%, #2563EB 50%, #1E40AF 100%)",
              }}
            >Before You Leave The Driveway.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[52ch] mb-10"
          >
            Show homeowners exactly what their project will look like on their
            property — on the spot.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98] active:-translate-y-[1px] shadow-lg shadow-zinc-900/20"
            >
              Start Free Now
              <ArrowRight size={16} weight="bold" />
            </a>
            <button
              onClick={() => setShowDemo(true)}
              className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-700 px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-white transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Play size={16} weight="fill" />
              Watch It In Action
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              "Easy Setup – Less than 2 Minutes",
              "Cancel at Anytime",
              "Used by Teams Nationwide",
            ].map((text) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-zinc-200/50 text-sm text-zinc-600"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#D4E157" />
                  <path d="M6 10.5l2.5 2.5L14 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {text}
              </span>
            ))}
          </motion.div>

        </motion.div>
      </div>

      <VideoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
}
