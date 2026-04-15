"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowClockwise, ArrowRight } from "@phosphor-icons/react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEnded(false);
      // Small delay to let the modal animate in before playing
      const t = setTimeout(() => videoRef.current?.play(), 300);
      return () => clearTimeout(t);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleReplay() {
    setEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }

  function handleGoToPricing() {
    onClose();
    // Wait for modal close animation, then scroll
    setTimeout(() => {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <X size={18} weight="bold" />
            </button>

            {/* Video */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                playsInline
                onEnded={() => setEnded(true)}
                className="w-full h-full object-contain bg-black"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
              </video>

              {/* End-screen overlay */}
              <AnimatePresence>
                {ended && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/80"
                  >
                    <p className="text-white/70 text-sm font-medium mb-2">
                      What would you like to do?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleReplay}
                        className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-200 cursor-pointer"
                      >
                        <ArrowClockwise size={16} weight="bold" />
                        Watch Again
                      </button>

                      <button
                        onClick={handleGoToPricing}
                        className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-white transition-all duration-200 cursor-pointer"
                      >
                        Want to try it on your next appointment?
                        <ArrowRight size={16} weight="bold" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
