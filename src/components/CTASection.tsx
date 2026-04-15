"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="max-w-[1200px] mx-auto bg-zinc-900 rounded-3xl overflow-hidden relative"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/40 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-[20%] w-[300px] h-[300px] bg-zinc-700/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] items-center">
          {/* Left: text content */}
          <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16" style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-white leading-[1.15] tracking-tight mb-4">
              Get Your 5 Days Free Trial
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 max-w-[38ch]">
              Start exploring QuoteScape risk-free with our 5-day free trial offer today and transform your sales process!
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white cursor-pointer shadow-lg shadow-purple-500/25 transition-all duration-200 hover:brightness-125 hover:shadow-purple-400/30"
              style={{
                background: "linear-gradient(135deg, #C084FC 0%, #A855F7 40%, #7C3AED 100%)",
              }}
            >
              Start for Free
            </a>
          </div>

          {/* Right: product mockup image */}
          <div className="relative h-[320px] md:h-[400px] overflow-hidden">
            <Image
              src="/cta-mockup-v4.png"
              alt="QuoteScape Dashboard and Mobile App"
              fill
              className="object-contain object-right-bottom"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
