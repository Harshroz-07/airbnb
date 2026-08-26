"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowLeft, Share, Heart } from "lucide-react";
import { Photo, categoryFeatures } from "@/data/listingData";

interface PhotoTourModalProps {
  photos: Photo[];
  initialPhotoIndex?: number | null;
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
  onShareClick: () => void;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  photos,
  initialPhotoIndex,
  onClose,
  onOpenLightbox,
  onShareClick
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isSaved, setIsSaved] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Group categories and get representative thumbnail per category
  const categories = Array.from(new Set(photos.map((p) => p.category)));
  const categoryThumbnails = categories.map((cat) => {
    const firstPhoto = photos.find((p) => p.category === cat);
    return {
      category: cat,
      src: firstPhoto?.src || photos[0].src,
      features: categoryFeatures[cat] || ""
    };
  });

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Initial scroll if opening targeting a specific photo index
  useEffect(() => {
    if (typeof initialPhotoIndex === "number" && photos[initialPhotoIndex]) {
      const targetPhoto = photos[initialPhotoIndex];
      const sectionEl = sectionRefs.current[targetPhoto.category];
      if (sectionEl) {
        setTimeout(() => {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [initialPhotoIndex, photos]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const target = sectionRefs.current[category];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour gallery"
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-in fade-in duration-200 selection:bg-[#FF385C] selection:text-white"
    >
      {/* 1. Main Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-xs">
        <button
          onClick={onClose}
          className="p-2.5 rounded-full hover:bg-gray-100 transition flex items-center gap-2 font-semibold text-sm text-gray-900 cursor-pointer"
          aria-label="Back to listing"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900 stroke-[2.5]" />
          <span className="hidden sm:inline text-gray-900 font-semibold">Photo tour</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onShareClick}
            className="p-2.5 rounded-full hover:bg-gray-100 transition text-gray-800 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            aria-label="Share listing"
          >
            <Share className="w-4 h-4 stroke-[2]" />
            <span className="hidden md:inline">Share</span>
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="p-2.5 rounded-full hover:bg-gray-100 transition text-gray-800 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            aria-label="Save listing"
          >
            <Heart
              className={`w-4 h-4 stroke-[2] ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-gray-800"
              }`}
            />
            <span className="hidden md:inline">{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </header>

      {/* 2. Top Category Thumbnail Navigation Bar */}
      <nav className="sticky top-[61px] z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-3">
        <div className="max-w-[1120px] mx-auto flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
          {categoryThumbnails.map((item) => {
            const isActive = activeCategory === item.category;
            return (
              <button
                key={item.category}
                onClick={() => handleCategoryClick(item.category)}
                className={`flex flex-col items-center gap-1.5 shrink-0 group transition duration-150 cursor-pointer p-1.5 rounded-xl border ${
                  isActive
                    ? "border-black bg-gray-50 ring-1 ring-black"
                    : "border-transparent hover:bg-gray-100/80"
                }`}
              >
                <div className="w-20 h-14 rounded-lg overflow-hidden relative shadow-xs group-hover:opacity-90 transition">
                  <img
                    src={item.src}
                    alt={item.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />
                </div>
                <span className="text-xs font-medium text-gray-800 max-w-[90px] truncate text-center">
                  {item.category}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. Categorized Photo Sections Gallery */}
      <main className="max-w-[1120px] mx-auto px-6 py-8 space-y-16">
        <div className="border-b border-gray-100 pb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Photo tour</h1>
          <p className="text-sm text-[#717171] mt-1 font-normal">
            Explore all {photos.length} photos grouped by room and space
          </p>
        </div>

        {categories.map((category) => {
          const categoryPhotos = photos.filter((p) => p.category === category);
          const featuresText = categoryFeatures[category];

          return (
            <section
              key={category}
              ref={(el) => {
                sectionRefs.current[category] = el;
              }}
              className="space-y-4 pt-4 scroll-mt-36"
            >
              {/* Category Header with Title & Feature Tagline */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  {category}
                </h2>
                {featuresText && (
                  <p className="text-sm text-[#717171] mt-0.5 font-normal">
                    {featuresText}
                  </p>
                )}
              </div>

              {/* Photo Grid (2 columns on md/lg) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryPhotos.map((photo) => {
                  const globalIndex = photos.findIndex((p) => p.id === photo.id);
                  return (
                    <div
                      key={photo.id}
                      onClick={() => onOpenLightbox(globalIndex)}
                      className="group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 relative aspect-[4/3] shadow-xs border border-gray-200/60"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                      
                      {/* Caption overlay on hover */}
                      <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-xs text-white text-xs px-3.5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-between">
                        <span className="truncate font-medium">{photo.caption || photo.alt}</span>
                        <span className="text-[10px] text-gray-300 ml-2 font-mono shrink-0">Click to view</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};
