"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, CheckCircle, ArrowRight } from "@phosphor-icons/react";

export default function TheProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Section label */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400"
          >
            The Problem
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mb-16 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Every Contractor and Sales Rep
            <br />
            Has the Same Pitch.
          </motion.h2>

          {/* Before / After cards */}
          <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-0">
            {/* BEFORE card */}
            <motion.div
              variants={itemVariants}
              className="w-full rounded-2xl border border-slate-700/60 bg-slate-800/50 p-8 md:flex-1 md:rounded-r-none"
            >
              <div className="mb-6 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-700">
                  <X size={14} weight="bold" className="text-slate-400" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Before
                </span>
              </div>

              <p
                className="mb-1 text-4xl font-bold md:text-5xl"
                style={{ color: "#F1F5F9" }}
              >
                72%
              </p>
              <p className="mb-6 text-base text-slate-400">
                of homeowners get multiple quotes — and choose whoever helps them see it first
              </p>

              <div className="space-y-4">
                {[
                  "Showing swatches and samples that don't translate to their home",
                  "Homeowners stalling because they \"need to think about it\"",
                  "Losing deals to competitors who follow up with better visuals",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X
                      size={16}
                      weight="bold"
                      className="mt-0.5 shrink-0 text-slate-500"
                    />
                    <span className="text-sm leading-relaxed text-slate-400">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Arrow connector */}
            <motion.div
              variants={itemVariants}
              className="z-10 flex items-center justify-center md:-mx-5"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
                style={{ background: "#F97316" }}
              >
                <ArrowRight size={20} weight="bold" className="text-white" />
              </span>
            </motion.div>

            {/* AFTER card */}
            <motion.div
              variants={itemVariants}
              className="w-full rounded-2xl border border-emerald-500/30 bg-slate-800/50 p-8 md:flex-1 md:rounded-l-none"
              style={{
                boxShadow: "0 0 40px rgba(5, 150, 105, 0.08)",
              }}
            >
              <div className="mb-6 flex items-center gap-2">
                <CheckCircle
                  size={22}
                  weight="fill"
                  className="text-emerald-500"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                  After
                </span>
              </div>

              <p className="mb-1 text-4xl font-bold text-emerald-400 md:text-5xl">
                3x
              </p>
              <p className="mb-6 text-base text-slate-300">
                higher close rate when homeowners can see the finished project on their home
              </p>

              <div className="space-y-4">
                {[
                  "Visualize new roofing, siding, or pavers right on their house in seconds",
                  "Generate a polished proposal before you leave the driveway",
                  "Close on the spot — no follow-ups, no lost momentum",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />
                    <span className="text-sm leading-relaxed text-slate-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom description */}
          <motion.p
            variants={itemVariants}
            className="mt-12 max-w-2xl text-center text-base leading-relaxed text-slate-400"
          >
            QuoteScape lets you show homeowners exactly what their new roof,
            siding, or patio will look like — right on their house, right on
            the spot — and generate a ready-to-sign proposal before you leave
            the driveway.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
