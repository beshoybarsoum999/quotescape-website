"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Instant Visualization",
    description:
      "Snap a photo of the homeowner's property and instantly generate a photorealistic mockup of the finished project on their property in seconds, right on the spot.",
    image: "/feature-visualize.png",
    tags: [
      "Real-Time Overview",
      "Project Tracking",
      "Revenue Monitoring",
      "Pipeline Management",
      "Team Activity",
    ],
    variant: "dark" as const,
    badge: "Visualization",
    darkTitle: "VISUALIZE ANY\nPROJECT",
    darkTitleHighlight: "",
    darkTags: [
      "Photo to Mockup",
      "Real-Time Rendering",
      "Custom Design Options",
      "On-Site Previews",
      "Roofing, Siding, Paving & More",
      "20 Second Generation",
    ],
  },
  {
    title: "On-Site Proposals",
    description:
      "Generate polished, branded proposals in seconds, right from the jobsite. QuoteScape automatically pulls in your visualization, material specs, and pricing to create a professional quote the homeowner can sign on the spot.",
    image: "/feature-proposals.png",
    tags: [
      "One-Tap Proposals",
      "Real-Time Pricing",
      "Branded Templates",
      "Digital Signatures",
      "Instant PDF Export",
    ],
    variant: "light" as const,
    badge: "Proposals",
    darkTitle: "CLOSE DEALS ON\nTHE SPOT",
    darkTitleHighlight: "",
    darkTags: [
      "One Tap Proposals",
      "Real Time Pricing",
      "Branded Templates",
      "Digital Signatures",
      "Instant PDF Export",
      "Material Specs Included",
    ],
  },
  {
    title: "Pipeline Management",
    description:
      "Track every project from first photo to final payment. QuoteScape organizes your jobs by stage, assigns them to team members, and keeps every visualization, proposal, and homeowner communication in one place.",
    image: "/feature-jobs.png",
    tags: [
      "Custom Job Stages",
      "Team Assignment",
      "Lead Tracking",
      "Revenue Analytics",
      "Complete History",
    ],
    variant: "light" as const,
    badge: "Pipeline",
    darkTitle: "MANAGE YOUR\nENTIRE PIPELINE",
    darkTitleHighlight: "",
    darkTags: [
      "Custom Job Stages",
      "Team Assignment",
      "Lead Tracking",
      "Revenue Analytics",
      "Complete History",
      "Full Project Timeline",
    ],
  },
];

type FeatureItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  variant: "dark" | "light";
  badge: string;
  darkTitle: string;
  darkTitleHighlight: string;
  darkTags: string[];
};

function FeatureCard({
  feature,
  index,
}: {
  feature: FeatureItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 !== 0;
  const isDark = feature.variant === "dark";
  const isLight = feature.variant === "light";

  return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          type: "spring" as const,
          stiffness: 60,
          damping: 20,
          delay: 0.1,
        }}
        className="rounded-[1.5rem] overflow-hidden shadow-[0_4px_30px_-6px_rgba(0,0,0,0.15)]"
        style={{
          background: isLight
            ? "linear-gradient(135deg, #93C5FD 0%, #60A5FA 20%, #BFDBFE 50%, #EFF6FF 80%, #FFFFFF 100%)"
            : "linear-gradient(135deg, #1E3A5F 0%, #2563EB 40%, #60A5FA 80%, #93C5FD 100%)",
        }}
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch ${isReversed ? "md:[direction:rtl]" : ""}`}>
          {/* Text side */}
          <div className={`p-8 md:p-12 lg:p-14 flex flex-col justify-center ${isReversed ? "md:[direction:ltr]" : ""}`}>
            <span className={`inline-block px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest mb-6 w-fit ${
              isLight
                ? "border-blue-800/20 bg-blue-900/10 text-blue-900"
                : "border-white/20 bg-white/10 text-white"
            }`}>
              {"badge" in feature ? feature.badge : ""}
            </span>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] mb-2 ${
              isLight ? "text-blue-900" : "text-white"
            }`} style={{ whiteSpace: "pre-line" }}>
              {feature.darkTitle}
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] mb-4 italic" style={{ color: isLight ? "#1E40AF" : "#93C5FD" }}>
              {feature.darkTitleHighlight}
            </h3>
            <p className={`text-sm md:text-base leading-relaxed mb-8 max-w-md ${
              isLight ? "text-blue-900/60" : "text-white/60"
            }`} dangerouslySetInnerHTML={{ __html: feature.description }}>
            </p>
            <div className="flex flex-wrap gap-2">
              {"darkTags" in feature &&
                feature.darkTags.map((tag: string) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                      isLight
                        ? "text-blue-900/70 border-blue-800/15 bg-blue-900/8"
                        : "text-white/80 border-white/20 bg-white/10"
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={isLight ? "text-blue-800/50 flex-shrink-0" : "text-white/60 flex-shrink-0"}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 12l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {tag}
                  </span>
                ))}
            </div>
          </div>

          {/* Image side */}
          <div className={`relative min-h-[300px] md:min-h-[420px] ${isReversed ? "md:[direction:ltr]" : ""}`}>
            <div className={`absolute inset-3 md:inset-5 rounded-xl overflow-hidden shadow-lg ${isLight ? "bg-white/30" : "bg-white/10"}`}>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mt-3">
            Smart Software For Contractors and Sales Reps
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Visualize projects on-site, generate proposals instantly, and manage
            your entire pipeline, all from your phone or tablet.
          </p>
        </div>

        {/* Feature cards */}
        <div className="space-y-8 md:space-y-12">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
