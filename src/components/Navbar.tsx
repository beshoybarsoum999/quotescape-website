"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img
              src="/quotescape-logo.png"
              alt="QuoteScape"
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors px-4 py-2"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-white px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98] active:-translate-y-[1px] hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #60A5FA 0%, #2563EB 50%, #1E40AF 100%)" }}
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-600"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-xl border-t border-zinc-100 px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-zinc-600 hover:text-zinc-900 border-b border-zinc-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="mt-4 block w-full text-center text-sm font-medium text-white px-5 py-3 rounded-lg"
            style={{ background: "linear-gradient(135deg, #60A5FA 0%, #2563EB 50%, #1E40AF 100%)" }}
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
