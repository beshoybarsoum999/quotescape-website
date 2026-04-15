"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

type TimePeriod = "Daily" | "Weekly" | "Monthly" | "Annually";

const TIME_PERIODS: TimePeriod[] = ["Daily", "Weekly", "Monthly", "Annually"];

const TIME_MULTIPLIERS: Record<TimePeriod, number> = {
  Daily: 1 / 30,
  Weekly: 12 / 52,
  Monthly: 1,
  Annually: 12,
};

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 10_000) return `$${Math.round(value).toLocaleString("en-US")}`;
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function SliderInput({
  label,
  icon,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#00e676]">{icon}</span>
          <span className="text-sm font-medium text-zinc-300">{label}</span>
        </div>
        <span
          className="text-base font-bold tabular-nums"
          style={{ color: "#00e676" }}
        >
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider"
        style={{ "--slider-pct": `${pct}%` } as React.CSSProperties}
      />
      <div className="flex justify-between text-[11px] text-zinc-600">
        <span>{typeof min === "number" && label.includes("$")
          ? `$${min.toLocaleString()}`
          : min.toLocaleString()}</span>
        <span>{typeof max === "number" && label.includes("$")
          ? `$${max.toLocaleString()}`
          : max.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [appointments, setAppointments] = useState(50);
  const [closeRate, setCloseRate] = useState(20);
  const [avgJobValue, setAvgJobValue] = useState(15000);
  const [period, setPeriod] = useState<TimePeriod>("Monthly");

  const { revenueLost, jobsLost } = useMemo(() => {
    const projectedCloseRate = Math.min(closeRate + 35, 100);
    const closedNow = appointments * (closeRate / 100);
    const closedProjected = appointments * (projectedCloseRate / 100);
    const monthlyJobsLost = closedProjected - closedNow;
    const monthlyRevenueLost = monthlyJobsLost * avgJobValue;

    const multiplier = TIME_MULTIPLIERS[period];
    return {
      revenueLost: monthlyRevenueLost * multiplier,
      jobsLost: Math.round(monthlyJobsLost * multiplier),
    };
  }, [appointments, closeRate, avgJobValue, period]);

  const handleScroll = useCallback(() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,230,118,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section label */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-zinc-500 tracking-wide mb-3">
            ROI Calculator
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-zinc-900 tracking-tight leading-tight">
            How Much Is Your Current Sales
            <br className="hidden sm:block" /> Process Costing You?
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto">
            Adjust the sliders to see the revenue you&apos;re leaving on the
            table every single month.
          </p>
        </div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 0 0 1px rgba(0,230,118,0.06), 0 32px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            backgroundColor: "rgba(10, 10, 18, 0.88)",
          }}
        >
          <div className="p-7 md:p-10 grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10">
            {/* Left — sliders */}
            <div className="space-y-7">
              <SliderInput
                label="Appointments Per Month"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                }
                value={appointments}
                min={10}
                max={200}
                step={5}
                displayValue={appointments.toString()}
                onChange={setAppointments}
              />

              <SliderInput
                label="Current Close Rate (%)"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                }
                value={closeRate}
                min={5}
                max={50}
                step={1}
                displayValue={`${closeRate}%`}
                onChange={setCloseRate}
              />

              <SliderInput
                label="Average Job Value ($)"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                }
                value={avgJobValue}
                min={5000}
                max={50000}
                step={500}
                displayValue={`$${avgJobValue.toLocaleString()}`}
                onChange={setAvgJobValue}
              />
            </div>

            {/* Right — output */}
            <div className="flex flex-col justify-between gap-6">
              {/* Time period toggle */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                  Time Period
                </p>
                <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {TIME_PERIODS.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className="py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer"
                      style={
                        period === p
                          ? {
                              background: "#00e676",
                              color: "#000",
                              boxShadow: "0 2px 12px rgba(0,230,118,0.35)",
                            }
                          : { color: "rgba(255,255,255,0.45)" }
                      }
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Revenue lost display */}
              <div
                className="rounded-xl p-5 flex-1 flex flex-col justify-center"
                style={{
                  background: "rgba(0,230,118,0.05)",
                  border: "1px solid rgba(0,230,118,0.15)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                  Estimated Revenue Lost
                </p>
                <motion.p
                  key={`${revenueLost}-${period}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-4xl md:text-5xl font-extrabold tabular-nums leading-none mb-2"
                  style={{ color: "#00e676" }}
                >
                  {formatCurrency(revenueLost)}
                </motion.p>
                <p className="text-xs text-zinc-400 mb-3">
                  Estimated Revenue Lost Per {period}
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  That&apos;s{" "}
                  <span className="font-bold text-white">{jobsLost} job{jobsLost !== 1 ? "s" : ""}</span>{" "}
                  lost to competitors because they couldn&apos;t see the vision.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={handleScroll}
                className="w-full py-3.5 px-5 rounded-xl text-sm font-bold text-black transition-all duration-200 cursor-pointer active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #00e676 0%, #00c853 100%)",
                  boxShadow: "0 4px 20px rgba(0,230,118,0.35)",
                }}
              >
                Stop the leak. Start your free trial →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
