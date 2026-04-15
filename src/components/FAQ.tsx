"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who is QuoteScape for?",
    answer:
      "QuoteScape is for outdoor living and home exterior projects: paving, landscaping, fencing, roofing, siding, garage doors, chimneys, and general contracting work. If you're tired of explaining designs that homeowners can't visualize, or losing bids to competitors - QuoteScape was built for you.",
  },
  {
    question: "How many more deals can QuoteScape help us close?",
    answer:
      "Users using QuoteScape are closing 20-34% more jobs than before. That typically translates to 3-6 additional projects per month. The reason: Instant visuals eliminate \"I need to think about it\" and professional proposals justify premium pricing. Homeowners decide faster when they can actually see what they're buying.",
  },
  {
    question: "How does QuoteScape help me stand out from competitors?",
    answer:
      "Your competitor brings a catalog and explains what it might look like. You bring QuoteScape and show them what it will look like—right on their property, in real-time. They don't have to imagine anymore. They see it, they feel it, they want it. No more competing on price. You're competing on experience, and you're winning.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Less than 5 minutes from sign up to first quote! Create your account, add your company info, and you're ready to use it on properties right away.",
  },
  {
    question: "Do I need to be 'tech-savvy' to use QuoteScape?",
    answer:
      "Not at all! We built QuoteScape for contractors who work outdoors, not behind a desk. If you can take a photo and answer a few questions, you can create professional quotes in minutes. No training required.",
  },
  {
    question: "Can I track and manage my jobs?",
    answer:
      "Absolutely! Everything you quote shows up in your pipeline automatically. You can customize how you view it, filter by job stage, which team member is handling it, dollar amount, dates, whatever you need. Your team can access it too. And you can set up your job stages to match however you already track work, so you don't have to change your process.",
  },
  {
    question: "What kind of support is available if I need help?",
    answer:
      "We've got you covered. Email us or drop us a text at anytime. Our support team is always available to assist, you'll get actual answers from people who understand your work.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-[#F5F5F0]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-18"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Frequently Asked Questions
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-zinc-900 leading-[1.15] tracking-tight"
            style={{ fontFamily: "'Clash Grotesk', sans-serif" }}
          >
            Wondering About Something?
            <br />
            Let&rsquo;s Clear Things Up!
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-md mx-auto leading-relaxed">
            We&apos;ve gathered all the important info right here.
            <br />
            Explore our FAQs and find the answers you need.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: "easeOut",
              }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "bg-zinc-900 text-white shadow-xl"
          : "bg-white border border-zinc-200/80 hover:border-zinc-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span
          className={`text-base md:text-lg font-semibold pr-4 ${
            isOpen ? "text-[#D4E157]" : "text-zinc-800"
          }`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-zinc-700 text-white rotate-45"
              : "bg-zinc-100 text-zinc-500"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
