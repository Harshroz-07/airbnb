"use client";

import React, { useState, useEffect } from "react";
import { X, Search, Sparkles, Wifi, Car, Snowflake, Utensils, Laptop, Waves, Tv, ShieldCheck, Flame, Wind } from "lucide-react";

interface AmenityItem {
  name: string;
  icon: string;
  category: string;
  popular?: boolean;
}

interface AmenitiesModalProps {
  amenities: AmenityItem[];
  onClose: () => void;
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ amenities, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const filteredAmenities = amenities.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(filteredAmenities.map((a) => a.category)));

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="max-w-[750px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 cursor-pointer"
            aria-label="Close amenities"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-base text-gray-900">What this place offers</h2>
          <div className="w-9" />
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search amenities"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-900"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Amenities List Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {categories.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-sm">
              No amenities found matching "{searchQuery}"
            </div>
          ) : (
            categories.map((cat) => {
              const items = filteredAmenities.filter((a) => a.category === cat);
              return (
                <div key={cat} className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">{cat}</h3>
                  <div className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <div key={item.name} className="py-3.5 flex items-center gap-4 text-gray-900">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                          <Sparkles className="w-4 h-4 text-gray-800" />
                        </div>
                        <span className="text-sm font-semibold">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
