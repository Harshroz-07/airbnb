"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Wifi,
  Car,
  Snowflake,
  Utensils,
  Laptop,
  Waves,
  Tv,
  ArrowUpDown,
  Shirt,
  X
} from "lucide-react";
import { ListingData } from "@/data/listingData";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6 text-gray-800" />,
  wifi: <Wifi className="w-6 h-6 text-gray-800" />,
  car: <Car className="w-6 h-6 text-gray-800" />,
  snowflake: <Snowflake className="w-6 h-6 text-gray-800" />,
  utensils: <Utensils className="w-6 h-6 text-gray-800" />,
  laptop: <Laptop className="w-6 h-6 text-gray-800" />,
  waves: <Waves className="w-6 h-6 text-gray-800" />,
  tv: <Tv className="w-6 h-6 text-gray-800" />,
  "arrow-up-down": <ArrowUpDown className="w-6 h-6 text-gray-800" />,
  shirt: <Shirt className="w-6 h-6 text-gray-800" />
};

interface AmenitiesSectionProps {
  amenities: ListingData["amenities"];
  onOpenAmenitiesModal?: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  amenities,
  onOpenAmenitiesModal
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const previewAmenities = amenities.slice(0, 10);

  const handleOpen = () => {
    if (onOpenAmenitiesModal) {
      onOpenAmenitiesModal();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="py-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        What this place offers
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previewAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-4 py-1">
            {iconMap[amenity.icon] || <Sparkles className="w-6 h-6 text-gray-800" />}
            <span className="text-gray-800 text-base">{amenity.name}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleOpen}
        className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-50 transition duration-150 active:scale-98 cursor-pointer"
      >
        Show all {amenities.length} amenities
      </button>

      {/* Amenities Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <div className="pt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What this place offers
              </h2>

              <div className="space-y-6 divide-y divide-gray-100">
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 pt-4 first:pt-0">
                    {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-gray-800" />}
                    <div>
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
