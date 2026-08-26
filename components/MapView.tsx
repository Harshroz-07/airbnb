"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, X, Plus, Minus, Navigation, MapPin } from "lucide-react";
import { CatalogListing } from "@/data/listingsCatalog";

interface MapViewProps {
  listings: CatalogListing[];
}

export const MapView: React.FC<MapViewProps> = ({ listings }) => {
  const [selectedListing, setSelectedListing] = useState<CatalogListing | null>(
    listings[0] || null
  );
  const [zoomLevel, setZoomLevel] = useState(1);

  // Position coordinates map helper based on listing id / location
  const getListingCoords = (index: number, total: number) => {
    // Generate organic positions across the vector map grid
    const columns = 4;
    const row = Math.floor(index / columns);
    const col = index % columns;

    const left = 15 + col * 22 + (row % 2 === 1 ? 8 : 0);
    const top = 20 + row * 24;

    return { left: `${Math.min(85, left)}%`, top: `${Math.min(80, top)}%` };
  };

  return (
    <div className="relative w-full h-[75vh] min-h-[500px] bg-[#E5E3DF] rounded-3xl overflow-hidden shadow-inner border border-gray-200 select-none">
      {/* Background Vector Map Stylized Tile Overlay */}
      <div
        className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] transition-transform duration-300"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        {/* Coastal / Topography Accents */}
        <svg className="w-full h-full text-slate-300" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -100 200 Q 200 100 400 300 T 900 200 T 1400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <path
            d="M 100 -50 Q 300 400 800 200 T 1300 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Map Control Buttons Top-Right */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-white rounded-2xl shadow-md border border-gray-200 p-1">
        <button
          onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
          className="p-2.5 rounded-xl hover:bg-gray-100 transition text-gray-800 cursor-pointer"
          aria-label="Zoom in"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </button>
        <div className="h-[1px] bg-gray-200 my-0.5" />
        <button
          onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
          className="p-2.5 rounded-xl hover:bg-gray-100 transition text-gray-800 cursor-pointer"
          aria-label="Zoom out"
        >
          <Minus className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Map Regional Header Tag */}
      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-2 text-xs font-bold text-gray-800">
        <Navigation className="w-3.5 h-3.5 text-[#FF385C]" />
        <span>Map View · {listings.length} stays available</span>
      </div>

      {/* Interactive Price Pins Layer */}
      <div
        className="absolute inset-0 transition-transform duration-300"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        {listings.map((item, index) => {
          const coords = getListingCoords(index, listings.length);
          const isSelected = selectedListing?.id === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedListing(item)}
              style={{ left: coords.left, top: coords.top }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 cursor-pointer z-10 hover:z-30 ${
                isSelected
                  ? "scale-110 z-30"
                  : "hover:scale-105"
              }`}
            >
              <div
                className={`px-3 py-1.5 rounded-full font-bold text-xs shadow-md transition-colors flex items-center gap-1 border ${
                  isSelected
                    ? "bg-gray-900 text-white border-black ring-2 ring-white scale-110"
                    : "bg-white text-gray-900 border-gray-300 hover:border-black"
                }`}
              >
                <span>₹{(item.pricePerNight / 1000).toFixed(1)}k</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Listing Pop-up Preview Card Bottom-Left */}
      {selectedListing && (
        <div className="absolute bottom-6 left-6 z-30 max-w-[340px] w-full bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          <div className="relative aspect-[16/10] w-full bg-gray-100">
            <img
              src={selectedListing.photos[0]}
              alt={selectedListing.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setSelectedListing(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-xs transition cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedListing.badge && (
              <div className="absolute top-3 left-3 bg-white/95 text-gray-900 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
                {selectedListing.badge}
              </div>
            )}
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-bold text-sm text-gray-900 line-clamp-1">
                {selectedListing.title}
              </h4>
              <div className="flex items-center gap-1 shrink-0 text-xs font-bold text-gray-900">
                <Star className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                <span>{selectedListing.rating.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 line-clamp-1">{selectedListing.location}</p>

            <div className="pt-2 flex items-center justify-between border-t border-gray-100">
              <div className="text-sm font-bold text-gray-900">
                {selectedListing.currency}
                {selectedListing.pricePerNight.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-normal text-gray-500">night</span>
              </div>

              <Link
                href={`/listing/${selectedListing.id}`}
                className="bg-black hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer"
              >
                View stay
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
