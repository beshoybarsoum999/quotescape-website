"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  { label: "Roofing", seed: "roof-project" },
  { label: "Siding", seed: "siding-project" },
  { label: "Paving", seed: "paving-project" },
  { label: "Garage Doors", seed: "garage-project" },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, pos)));
  };

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring" as const, stiffness: 80, damping: 20 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-600 font-medium">
                Before & After
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mt-3 max-w-[24ch]">
                The visual that closes the deal.
              </h2>
            </div>
            <div className="flex gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => {
                    setActive(i);
                    setSliderPos(50);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === i
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative rounded-[2rem] overflow-hidden bg-white border border-zinc-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] cursor-col-resize select-none aspect-[16/9]"
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            <img
              src={`https://picsum.photos/seed/${projects[active].seed}-before/1200/675`}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={`https://picsum.photos/seed/${projects[active].seed}-after/1200/675`}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5 3L2 8L5 13"
                    stroke="#71717a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 3L14 8L11 13"
                    stroke="#71717a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-zinc-900/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg">
              After
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
