"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    day: "Day 1 (5 minutes)",
    number: "1",
    title: "Create your account and add your services",
    description:
      "Sign up, enter your company info, and select the services you offer — roofing, siding, paving, garage doors. QuoteScape builds your profile and you're ready to go.",
  },
  {
    day: "Day 2",
    number: "2",
    title: "Upload your first property photo",
    description:
      "Snap a photo of a homeowner's property during an inspection. QuoteScape's AI processes the image and prepares it for visualization in seconds.",
  },
  {
    day: "Day 3",
    number: "3",
    title: "Close your first deal before leaving the driveway",
    description:
      "Show homeowners the visualization, generate a proposal on the spot, and get their signature — all in one visit. No follow-ups, no chasing.",
  },
  {
    day: "Days 4–5",
    number: "4–5",
    title: "Your crew is closing every first visit",
    description:
      "Your entire sales team is running QuoteScape on every inspection. Visualize, quote, and close — on repeat. You've built a first-visit closing machine.",
  },
];

export default function GetStartedSteps() {
  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-zinc-500 tracking-wide mb-3">
            After You Sign Up
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Your first 5 days with QuoteScape
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-lg mx-auto">
            Here&apos;s exactly what happens. No guessing, no waiting around.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, i) => (
            <TimelineStep
              key={step.number}
              step={step}
              isLast={i === steps.length - 1}
              index={i}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-10">
          <motion.a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-800 shadow-lg shadow-zinc-900/20 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
          >
            Start My 5-Day Sprint
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  isLast,
  index,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-6 md:gap-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Circle + line column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#F4A261] text-white flex items-center justify-center text-sm md:text-base font-bold shadow-sm">
          {step.number}
        </div>
        {!isLast && (
          <div className="w-[2px] flex-1 bg-gradient-to-b from-[#F4A261]/40 to-[#F4A261]/10 mt-1" />
        )}
      </div>

      {/* Content column */}
      <div className={`pb-14 md:pb-16 ${isLast ? "pb-0 md:pb-0" : ""}`}>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1.5">
          {step.day}
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight mb-2.5">
          {step.title}
        </h3>
        <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
