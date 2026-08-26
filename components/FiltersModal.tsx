"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Check } from "lucide-react";

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  selectedAmenities: string[];
  guestFavoriteOnly: boolean;
}

interface FiltersModalProps {
  initialFilters: FilterState;
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
}

const availableAmenities = [
  "Private Jacuzzi",
  "Swimming pool",
  "Wi-Fi",
  "Air conditioning",
  "Kitchen",
  "Free parking",
  "Dedicated workspace"
];

export const FiltersModal: React.FC<FiltersModalProps> = ({
  initialFilters,
  onClose,
  onApplyFilters
}) => {
  const [minPrice, setMinPrice] = useState(initialFilters.minPrice || 1000);
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice || 10000);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    initialFilters.selectedAmenities || []
  );
  const [guestFavoriteOnly, setGuestFavoriteOnly] = useState(
    initialFilters.guestFavoriteOnly || false
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleClearAll = () => {
    setMinPrice(1000);
    setMaxPrice(10000);
    setSelectedAmenities([]);
    setGuestFavoriteOnly(false);
  };

  const handleApply = () => {
    onApplyFilters({
      minPrice,
      maxPrice,
      selectedAmenities,
      guestFavoriteOnly
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="max-w-[650px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 cursor-pointer"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-base text-gray-900">Filters</h2>
          <div className="w-9" /> {/* Spacer */}
        </div>

        {/* Filter Form Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1 divide-y divide-gray-100">
          {/* 1. Guest Favorite Toggle */}
          <div className="flex items-center justify-between pb-2">
            <div className="space-y-0.5">
              <div className="font-bold text-base text-gray-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF385C]" />
                <span>Guest favorites only</span>
              </div>
              <p className="text-xs text-gray-500">
                Show only the most loved homes on Airbnb
              </p>
            </div>
            <button
              onClick={() => setGuestFavoriteOnly(!guestFavoriteOnly)}
              className={`w-12 h-7 rounded-full transition-colors p-1 flex items-center cursor-pointer ${
                guestFavoriteOnly ? "bg-black justify-end" : "bg-gray-200 justify-start"
              }`}
            >
              <div className="w-5 h-5 bg-white rounded-full shadow-md" />
            </button>
          </div>

          {/* 2. Price Range Slider */}
          <div className="pt-6 space-y-4">
            <div>
              <h3 className="font-bold text-base text-gray-900">Price range</h3>
              <p className="text-xs text-gray-500">Nightly prices before taxes and fees</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 border border-gray-300 rounded-2xl p-3">
                <label className="block text-[10px] font-bold text-gray-500 uppercase">Minimum</label>
                <div className="flex items-center text-sm font-bold text-gray-900">
                  <span>₹</span>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full bg-transparent focus:outline-none ml-1"
                  />
                </div>
              </div>

              <span className="text-gray-400 font-bold">-</span>

              <div className="flex-1 border border-gray-300 rounded-2xl p-3">
                <label className="block text-[10px] font-bold text-gray-500 uppercase">Maximum</label>
                <div className="flex items-center text-sm font-bold text-gray-900">
                  <span>₹</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full bg-transparent focus:outline-none ml-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Amenities Checkboxes */}
          <div className="pt-6 space-y-4">
            <h3 className="font-bold text-base text-gray-900">Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableAmenities.map((amenity) => {
                const isSelected = selectedAmenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    onClick={() => toggleAmenity(amenity)}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition duration-150 cursor-pointer ${
                      isSelected
                        ? "border-black bg-gray-50 ring-1 ring-black"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                        isSelected ? "bg-black border-black text-white" : "border-gray-300"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{amenity}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
          <button
            onClick={handleClearAll}
            className="text-sm font-semibold text-gray-900 underline hover:bg-gray-100 px-3 py-2 rounded-lg transition cursor-pointer"
          >
            Clear all
          </button>

          <button
            onClick={handleApply}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold text-sm transition shadow-md cursor-pointer"
          >
            Show listings
          </button>
        </div>
      </div>
    </div>
  );
};
