"use client";

import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Share, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "@/data/listingData";

interface LightboxModalProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  onShareClick: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
  onShareClick
}) => {
  const currentPhoto = photos[currentIndex] || photos[0];
  const total = photos.length;

  const handlePrev = useCallback(() => {
    const newIdx = currentIndex === 0 ? total - 1 : currentIndex - 1;
    onNavigate(newIdx);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    const newIdx = currentIndex === total - 1 ? 0 : currentIndex + 1;
    onNavigate(newIdx);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Lightbox photo viewer"
      className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between text-white select-none animate-in fade-in duration-200"
    >
      {/* Lightbox Header Bar */}
      <header className="p-6 flex items-center justify-between z-10">
        <button
          onClick={onClose}
          className="p-2.5 rounded-full hover:bg-white/10 transition text-white"
          aria-label="Close photo viewer"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        <div className="text-sm font-medium tracking-wide text-gray-200">
          {currentIndex + 1} / {total}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onShareClick}
            className="p-2.5 rounded-full hover:bg-white/10 transition text-white"
            aria-label="Share photo"
          >
            <Share className="w-5 h-5" />
          </button>
          <button
            className="p-2.5 rounded-full hover:bg-white/10 transition text-white"
            aria-label="Save photo"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Photo Viewing Area */}
      <main className="relative flex-1 flex items-center justify-center px-4 md:px-16 overflow-hidden">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-6 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 border border-white/20 text-white backdrop-blur-xs transition hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Animated Image Component */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative max-w-full max-h-full flex items-center justify-center"
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 border border-white/20 text-white backdrop-blur-xs transition hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>
      </main>

      {/* Lightbox Footer Caption */}
      <footer className="p-6 text-center text-sm text-gray-300 bg-gradient-to-t from-black/80 to-transparent">
        <p className="font-semibold text-white">{currentPhoto.category}</p>
        {currentPhoto.caption && (
          <p className="text-xs text-gray-400 mt-1 max-w-xl mx-auto">{currentPhoto.caption}</p>
        )}
      </footer>
    </div>
  );
};
