"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const traditionalItems = [
  "Hiring Editors and static photos",
  "Measuring, designing, and quoting done separately",
  "Manual Quoting",
  "Showing up with paper books and generic proposals",
  "Lost upsells due to lack of visualization",
  "Deals slipping because clients can't picture the final result",
];

const quoteScapeItems = [
  "Instant visual options on-site",
  "Synced automatically all in one place",
  "Auto-generated quotes tied with visuals",
  "Changes made live with the homeowner",
  "Easy upsells by showing multiple design options",
  "Fewer follow-ups and higher close rates",
];

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3">
            Upgrade with QuoteScape
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Old School vs. QuoteScape
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Why stick with outdated methods when you can breeze through your
            appointments with QuoteScape? Let us show you how our smart tech
            leaves the old way in the dust.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          {/* Traditional column */}
          <motion.div
            className="bg-white rounded-2xl md:rounded-r-none border border-zinc-200/80 p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 text-center">
              Traditional
            </h3>
            <div className="space-y-5">
              {traditionalItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3.5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.35,
                    delay: 0.2 + i * 0.07,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                        stroke="#EF4444"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-zinc-700 leading-snug font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* QuoteScape column */}
          <motion.div
            className="bg-zinc-900 rounded-2xl md:rounded-l-none p-8 md:p-10 shadow-2xl relative z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              QuoteScape
            </h3>
            <div className="space-y-4">
              {quoteScapeItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3.5 bg-zinc-800/80 rounded-xl px-4 py-3.5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.35,
                    delay: 0.3 + i * 0.07,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D4E157] flex items-center justify-center mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 7.5l2.5 2.5L11 4"
                        stroke="#1a1a1a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-zinc-100 leading-snug font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Get Started button */}
            <motion.a
              href="#pricing"
              className="mt-8 block w-full text-center py-3.5 rounded-full bg-[#D4E157] text-zinc-900 font-semibold text-sm hover:bg-[#cddc39] transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
