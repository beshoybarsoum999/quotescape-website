"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1a1033 0%, #0d0a1a 60%, #050310 100%)",
      }}
    >
      {/* Top content */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-12 md:gap-20">
          {/* Left column — headline + description + social */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-normal text-white leading-[1.15] tracking-tight mb-4"
              style={{ fontFamily: "'Clash Grotesk', sans-serif" }}
            >
              Seemlessly
              <br />
              Close More Deals
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-[36ch] mb-6">
              QuoteScape gives you everything you need to stay in control. Get
              started today and starting turning &quot;Maybe&quot; into
              &quot;Yes&quot;
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <a
                href="mailto:amelia@quote-scape.com"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                amelia@quote-scape.com
              </a>
              <a
                href="tel:+18322815930"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +1 832-281-5930
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
                Social
              </p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/quotescape.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-zinc-700/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/Quote-Scape/61573837121109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-zinc-700/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle column — Main Pages */}
          <div className="md:pt-2">
            {/* Newsletter */}
            <p className="text-sm font-semibold text-white mb-3">
              Subscribe to our Newsletter
            </p>
            <div className="flex gap-2 mb-10">
              <input
                type="email"
                placeholder="james@quotescape.com"
                className="flex-1 px-4 py-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700/50 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-500/60 transition-colors"
              />
              <button className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors cursor-pointer">
                Submit
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">
                  Main Pages
                </h4>
                <ul className="space-y-2.5">
                  {["Home", "Features", "Waitlist"].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large logo watermark */}
      <div className="relative w-full flex items-end justify-center overflow-hidden pb-4 px-8 md:px-16 lg:px-20">
        <div
          className="w-full max-w-[1400px]"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.05) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.05) 100%)",
          }}
        >
          <Image
            src="/quotescape-footer-logo.png"
            alt=""
            width={1400}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-zinc-800/60">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 py-5">
          <p className="text-xs text-zinc-500">
            Copyright &copy; 2026 QuoteScape. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
