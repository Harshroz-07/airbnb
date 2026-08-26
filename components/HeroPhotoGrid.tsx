"use client";

import React from "react";
import { Grid } from "lucide-react";
import { Photo } from "@/data/listingData";

interface HeroPhotoGridProps {
  photos: Photo[];
  onOpenPhotoTour: (index?: number) => void;
}

export const HeroPhotoGrid: React.FC<HeroPhotoGridProps> = ({ photos, onOpenPhotoTour }) => {
  const heroPhotos = photos.slice(0, 5);

  return (
    <div className="relative my-4">
      {/* 5-Photo Grid Collage */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden max-h-[460px]">
        {/* Main Big Photo (Left 2 cols) */}
        {heroPhotos[0] && (
          <div
            onClick={() => onOpenPhotoTour(0)}
            className="md:col-span-2 relative group cursor-pointer overflow-hidden aspect-[4/3] md:aspect-auto"
          >
            <img
              src={heroPhotos[0].src}
              alt={heroPhotos[0].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
          </div>
        )}

        {/* 4 Smaller Photos (Right 2 cols: 2x2 grid) */}
        <div className="hidden md:grid col-span-2 grid-cols-2 gap-2 h-full">
          {heroPhotos.slice(1, 5).map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onOpenPhotoTour(index + 1)}
              className="relative group cursor-pointer overflow-hidden h-[226px]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Show All Photos Button Overlaid Bottom-Right */}
      <button
        onClick={() => onOpenPhotoTour(0)}
        className="absolute bottom-5 right-5 bg-white/95 hover:bg-white text-gray-900 px-4 py-2 rounded-lg border border-gray-900/80 shadow-md font-semibold text-sm flex items-center gap-2 transition duration-150 hover:scale-105 active:scale-95 z-10"
      >
        <Grid className="w-4 h-4 stroke-[2]" />
        <span>Show all photos</span>
      </button>
    </div>
  );
};
