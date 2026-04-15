"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Check,
  Shuffle,
  FileText,
  Briefcase,
  UsersThree,
} from "@phosphor-icons/react";

const monthlyPrices = { basic: "$99", pro: "$199" };
const yearlyPrices = { basic: "$79", pro: "$149" };

const basicFeatures = [
  "Unlimited Project design visualizations",
  "Real-Time Sync",
  "Automated proposal generation",
  "Customer management",
  "Basic Reporting",
  "Email, Chat & Phone Support",
  "Premium support",
];

const proFeatures = [
  "Unlimited Project design visualizations",
  "Real-Time Sync",
  "Automated proposal generation",
  "Customer management",
  "Advanced Reporting",
  "Email, Chat & Phone Support",
  "Premium support",
  "AI Field assistant",
  "Predictive Analytics",
  "Custom Integrations",
];

const additionalFeatures = [
  "Give crew leaders and estimators their own access",
  "Multiple users can quote from different job sites simultaneously",
  "Each seat includes full access to all features",
  "Admin controls for team oversight",
  "No per-user quote limits",
];

const allPlansInclude = [
  { label: "Mockup Visualization", icon: Shuffle },
  { label: "Proposal Generation", icon: FileText },
  { label: "Job Management", icon: Briefcase },
  { label: "Real-time Collaboration", icon: UsersThree },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const prices = billing === "yearly" ? yearlyPrices : monthlyPrices;

  return (
    <section id="pricing" className="py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring" as const, stiffness: 80, damping: 20 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium font-mono">
              Pricing Plans
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mt-3">
              Choose the Perfect Plan for You
            </h2>
            <p className="text-base text-zinc-500 leading-relaxed mt-3">
              Find the right option and start making the most of the platform
              today!
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex flex-col items-center gap-3 mb-12">
            <div className="inline-flex items-center bg-zinc-100 rounded-full p-1">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billing === "monthly"
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billing === "yearly"
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Yearly
              </button>
            </div>
            <p className="text-sm text-zinc-500">
              Save up to{" "}
              <span className="font-semibold text-zinc-900">30%</span> by paying
              yearly
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Basic */}
            <div className="rounded-[1.5rem] border border-zinc-200/60 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="bg-zinc-50 p-8 pb-6 border-b border-zinc-100">
                <span className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium font-mono">
                  Basic
                </span>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-5xl font-semibold tracking-tight text-zinc-900">
                    {prices.basic}
                  </span>
                  <span className="text-sm text-zinc-400">/month</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2">5-Day Free Trial</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3.5 mb-8">
                  {basicFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        weight="bold"
                        className="mt-0.5 flex-shrink-0 text-emerald-500"
                      />
                      <span className="text-sm text-zinc-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="flex items-center justify-center w-full py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98]"
                >
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* Pro — highlighted */}
            <div className="rounded-[1.5rem] bg-zinc-950 border border-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden md:-mt-4 md:mb-[-1rem]">
              <div className="p-8 pb-6 border-b border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="inline-block text-xs uppercase tracking-[0.15em] text-zinc-400 font-medium font-mono bg-zinc-800 px-3 py-1 rounded-md">
                    Pro
                  </span>
                  <span className="inline-block text-xs uppercase tracking-[0.15em] text-zinc-400 font-medium font-mono border border-zinc-700 px-3 py-1 rounded-md">
                    Most Popular
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    {prices.pro}
                  </span>
                  <span className="text-sm text-zinc-500">/month</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2">5-Day Free Trial</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3.5 mb-8">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        weight="bold"
                        className="mt-0.5 flex-shrink-0 text-emerald-400"
                      />
                      <span className="text-sm text-zinc-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98] text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #A78BFA 0%, #818CF8 50%, #7C3AED 100%)",
                  }}
                >
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* Additional Users */}
            <div className="rounded-[1.5rem] border border-zinc-200/60 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="bg-zinc-50 p-8 pb-6 border-b border-zinc-100">
                <span className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium font-mono">
                  Additional Users
                </span>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-5xl font-semibold tracking-tight text-zinc-900">
                    $79
                  </span>
                  <span className="text-sm text-zinc-400">/Additional Seat</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3.5 mb-8">
                  {additionalFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        weight="bold"
                        className="mt-0.5 flex-shrink-0 text-emerald-500"
                      />
                      <span className="text-sm text-zinc-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="flex items-center justify-center w-full py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98]"
                >
                  Add Users
                </a>
              </div>
            </div>
          </div>

          {/* All Plans Include */}
          <div className="mt-16 border-t border-zinc-100 pt-10 text-center">
            <p className="text-base font-medium text-zinc-900 italic mb-6">
              All Plans Include
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {allPlansInclude.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-600"
                >
                  <item.icon
                    size={16}
                    weight="duotone"
                    className="text-zinc-400"
                  />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
