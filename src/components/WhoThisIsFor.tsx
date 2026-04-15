"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trades = [
  {
    name: "Roofing",
    image:
      "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=600&h=400&fit=crop&crop=top",
  },
  {
    name: "Paving",
    image: "/paving.png",
  },
  {
    name: "Siding",
    image: "/siding.png",
  },
  {
    name: "Garage Doors",
    image: "/garage-door.png",
  },
  {
    name: "Landscaping",
    image: "/landscaping.png",
  },
  {
    name: "Windows",
    image: "/windows.png",
  },
];

// Double the array for seamless infinite scroll
const duplicatedTrades = [...trades, ...trades];

export default function WhoThisIsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 max-w-[28ch]">
            Built for every trade that transforms the outside of a home.
          </h2>
        </motion.div>
      </div>

      {/* Scrolling slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTrades.map((trade, i) => (
            <div
              key={`${trade.name}-${i}`}
              className="flex-shrink-0 w-[280px] md:w-[340px] mx-3 group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/2] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.12)]">
                <img
                  src={trade.image}
                  alt={trade.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />
                {/* Name label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-semibold tracking-tight">
                    {trade.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAF9] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAF9] to-transparent z-10" />
      </motion.div>
    </section>
  );
}
