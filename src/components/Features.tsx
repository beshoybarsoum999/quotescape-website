"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, memo } from "react";
import {
  Eye,
  FileText,
  Palette,
} from "@phosphor-icons/react";

const TypewriterLoop = memo(function TypewriterLoop() {
  const prompts = [
    "Roof Replacement Proposal",
    "Siding Installation Quote",
    "Paver Driveway Estimate",
    "Garage Door Upgrade Bid",
  ];
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = prompts[current];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setIsDeleting(false);
      setCurrent((c) => (c + 1) % prompts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, current]);

  return (
    <div className="font-mono text-sm text-zinc-600">
      <span>{displayed}</span>
      <span className="inline-block w-[2px] h-4 bg-emerald-500 ml-0.5 animate-pulse" />
    </div>
  );
});

const features = [
  {
    icon: Eye,
    title: "Live Visualization",
    description:
      "AR overlay renders materials directly onto the home exterior. Homeowners see the final result before any work begins.",
    span: "md:col-span-2",
    content: (
      <div className="mt-6 rounded-xl overflow-hidden relative aspect-[2.2/1]">
        <img
          src="/generatingimage.png"
          alt="Live visualization preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
          <span className="text-xs font-medium text-zinc-700">
            Rendering live
          </span>
        </div>
      </div>
    ),
  },
  {
    icon: FileText,
    title: "Instant Proposals",
    description:
      "Generate branded, itemized proposals with a single tap. Before/after visuals, pricing, specs included.",
    span: "md:col-span-1",
    content: (
      <div className="mt-6 bg-zinc-50 rounded-xl p-4 border border-zinc-100 h-auto">
        <div className="text-xs text-zinc-400 mb-3 uppercase tracking-wider">
          Generating...
        </div>
        <TypewriterLoop />
        <div className="mt-4 space-y-2">
          {["Before/After Visuals", "Material Breakdown", "Labor Estimate"].map(
            (item) => (
              <div
                key={item}
                className="h-2 bg-zinc-200/60 rounded-full animate-shimmer"
                style={{
                  background:
                    "linear-gradient(90deg, #e4e4e7 25%, #f4f4f5 50%, #e4e4e7 75%)",
                  backgroundSize: "200% 100%",
                }}
              />
            )
          )}
        </div>
      </div>
    ),
  },
  {
    icon: Palette,
    title: "Material Library",
    description:
      "2,400+ manufacturer-matched materials across roofing, siding, paving, and garage doors. Upload your own custom designs or generate new ones to match any style.",
    span: "md:col-span-1",
    content: (
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-zinc-100 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900" />
          <div>
            <p className="text-xs font-medium text-zinc-700">Manufacturer Catalogs</p>
            <p className="text-[11px] text-zinc-400">Roofing, siding, paving & more</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-emerald-200 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">+</span>
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-700">Custom Designs</p>
            <p className="text-[11px] text-zinc-400">Upload or generate your own</p>
          </div>
        </div>
      </div>
    ),
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        delay: index * 0.08,
      }}
      className={`${feature.span} bg-white rounded-[1.5rem] p-8 border border-zinc-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-shadow duration-300`}
    >
      <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4">
        <feature.icon size={20} weight="duotone" className="text-zinc-600" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed max-w-[50ch]">
        {feature.description}
      </p>
      {feature.content}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="product" className="py-24 md:py-36 bg-[#F5F5F4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-600 font-medium">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mt-3 max-w-[24ch]">
            Everything you need to close on the first visit.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
