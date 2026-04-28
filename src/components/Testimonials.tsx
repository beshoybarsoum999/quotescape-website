"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Marcus Delaney",
    title: "Owner, Ridgeline Roofing Co.",
    location: "Nashville, TN",
    rating: 4.9,
    text: "Closed $340K in roofing contracts the first month. The moment I show a homeowner their new roof on their actual house, the conversation shifts from 'we need to think about it' to 'when can you start.'",
    avatar: "seed/marcus-d/80/80",
  },
  {
    name: "Priya Venkatesh",
    title: "Sales Director, Apex Paving Group",
    location: "Scottsdale, AZ",
    rating: 4.8,
    text: "Our close rate went from 23% to 61% in under 90 days. The proposals alone used to take us two business days. Now my reps hand them over before they leave the property.",
    avatar: "seed/priya-v/80/80",
  },
  {
    name: "Cody Bergstrom",
    title: "Lead Estimator, Summit Garage Solutions",
    location: "Minneapolis, MN",
    rating: 5.0,
    text: "We run 8 to 12 inspections a day. Before QuoteScape, we would get back to the office and lose the details. Now every appointment ends with a signed estimate.",
    avatar: "seed/cody-b/80/80",
  },
  {
    name: "Danielle Moreau",
    title: "VP Operations, Coastal Siding Works",
    location: "Charleston, SC",
    rating: 4.8,
    text: "Onboarding new reps used to take six weeks. With QuoteScape, a fresh hire can run a professional inspection and deliver a polished proposal by their second day in the field.",
    avatar: "seed/danielle-m/80/80",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          weight="fill"
          className={i < Math.floor(rating) ? "text-amber-400" : "text-zinc-200"}
        />
      ))}
      <span className="ml-1.5 text-xs font-mono text-zinc-400">{rating}</span>
    </div>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
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
        delay: index * 0.1,
      }}
      className={`bg-white rounded-[1.5rem] p-8 border border-zinc-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ${
        index % 2 !== 0 ? "md:mt-12" : ""
      }`}
    >
      <StarRating rating={t.rating} />
      <p className="text-base text-zinc-600 leading-relaxed mt-5 mb-8">
        &ldquo;{t.text}&rdquo;
      </p>
      <div>
        <p className="text-sm font-medium text-zinc-900">{t.name}</p>
        <p className="text-xs text-zinc-400">
          {t.title.split(",")[0]} &middot; {t.location}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-[#F5F5F4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-600 font-medium">
            Results
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mt-3 max-w-[28ch]">
            Contractors who switched are not going back.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
