"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const AnimatedNumber = memo(function AnimatedNumber({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.12, 0.6, 0.18, 1],
      onUpdate(v) {
        setDisplay(Math.round(v));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span className="tabular-nums">
      {display.toLocaleString()}
      <span className="text-[#A3B83C]">{suffix}</span>
    </span>
  );
});

const stats = [
  {
    value: 700,
    suffix: " K+",
    label: "Hours Saved",
    description:
      "Automate proposals, visuals, and follow-ups so you can focus on revenue-generating work.",
  },
  {
    value: 10,
    suffix: " K+",
    label: "Projects Completed",
    description:
      "Trusted by contractors to win jobs faster and stand out in competitive markets. Turn more estimates into signed contracts.",
  },
  {
    value: 30,
    suffix: " %",
    label: "Average Increase in Close Rate",
    description:
      "Increase revenue per rep by closing more deals during the first appointment. Win more jobs without lowering your price by giving homeowners more compelling decision.",
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const numbersRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const areNumbersInView = useInView(numbersRef, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 bg-[#F0F0F8]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring" as const, stiffness: 80, damping: 20 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 leading-tight max-w-[22ch] mb-16 md:mb-20">
            Transform your sales process - Exceed expectations from the first
            conversation to the final signature.
          </h2>

          <div
            ref={numbersRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={areNumbersInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring" as const,
                  stiffness: 80,
                  damping: 20,
                  delay: i * 0.12,
                }}
              >
                <p className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-900 leading-none">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={areNumbersInView}
                  />
                </p>
                <p className="text-base font-semibold text-zinc-900 mt-3 mb-3">
                  {stat.label}
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[38ch]">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
