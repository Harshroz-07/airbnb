"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { CatalogListing } from "@/data/listingsCatalog";

interface ListingCardProps {
  listing: CatalogListing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const photos = listing.photos && listing.photos.length > 0 ? listing.photos : ["/placeholder.jpg"];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <Link
      href={`/listing/${listing.id}`}
      className="group cursor-pointer flex flex-col space-y-3 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Photo Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xs border border-gray-100">
        <img
          src={photos[currentPhotoIndex]}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
          loading="lazy"
        />

        {/* Badge Overlay (e.g. Guest favorite) */}
        {listing.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-xs border border-gray-200 z-10">
            {listing.badge}
          </div>
        )}

        {/* Heart Wishlist Button */}
        <button
          onClick={handleToggleSave}
          className="absolute top-3 right-3 p-2 text-white hover:scale-110 active:scale-90 transition z-10 focus:outline-none drop-shadow-md"
          aria-label="Save listing"
        >
          <Heart
            className={`w-6 h-6 ${
              isSaved
                ? "fill-[#FF385C] text-[#FF385C] stroke-[#FF385C]"
                : "fill-black/30 text-white stroke-white stroke-[2]"
            }`}
          />
        </button>

        {/* Left/Right Carousel Nav Arrows on Hover */}
        {photos.length > 1 && isHovered && (
          <>
            {currentPhotoIndex > 0 && (
              <button
                onClick={handlePrevPhoto}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-md backdrop-blur-xs transition hover:scale-105 active:scale-95 z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
            )}

            {currentPhotoIndex < photos.length - 1 && (
              <button
                onClick={handleNextPhoto}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-md backdrop-blur-xs transition hover:scale-105 active:scale-95 z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            )}
          </>
        )}

        {/* Carousel Pagination Dots */}
        {photos.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 px-4">
            {photos.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  idx === currentPhotoIndex
                    ? "w-2 bg-white"
                    : "w-1.5 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text Meta Container */}
      <div className="flex flex-col text-sm space-y-0.5">
        {/* Title & Rating Row */}
        <div className="flex items-center justify-between font-semibold text-gray-900 leading-snug">
          <span className="truncate pr-2">{listing.title}</span>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
            <span className="text-xs font-semibold">{listing.rating.toFixed(2)}</span>
          </div>
        </div>

        {/* Location / Distance Subtitle */}
        <p className="text-[#717171] truncate text-xs font-normal">
          {listing.distance || listing.location}
        </p>

        {/* Dates Available */}
        <p className="text-[#717171] text-xs font-normal">
          {listing.datesAvailable}
        </p>

        {/* Price Row */}
        <div className="pt-1.5 flex items-baseline gap-1 text-gray-900">
          <span className="font-bold text-sm">
            {listing.currency}{listing.pricePerNight.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-gray-800 font-normal">night</span>
        </div>
      </div>
    </Link>
  );
};
