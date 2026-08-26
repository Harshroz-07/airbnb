"use client";

import React from "react";
import { MapPin, Navigation, Compass } from "lucide-react";

interface LocationSectionProps {
  location: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  return (
    <div className="py-10 border-t border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Where you'll be</h3>
      <p className="text-gray-700 text-base mb-6 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-gray-800 shrink-0" />
        <span>{location}</span>
      </p>

      {/* Styled Interactive Map Container */}
      <div className="relative w-full h-[360px] rounded-2xl overflow-hidden border border-gray-200 bg-slate-100 shadow-inner group">
        <iframe
          title="Candolim Goa Map"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Candolim%20Goa%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
        />

        {/* Map Location Overlay Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl shadow-lg border border-gray-200 flex items-center gap-3">
          <div className="bg-[#FF385C] text-white p-2 rounded-full shadow-md">
            <Navigation className="w-4 h-4 fill-current" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900">Exact location provided after booking</p>
            <p className="text-[11px] text-gray-500">10 mins walk to Candolim Beach</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-gray-800" /> Candolim Beach
          </h4>
          <p className="text-xs text-gray-600">850 meters &middot; 10 min walk</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-gray-800" /> Fort Aguada
          </h4>
          <p className="text-xs text-gray-600">3.5 km &middot; 8 min drive</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-gray-800" /> Baga Beach & Nightlife
          </h4>
          <p className="text-xs text-gray-600">5.2 km &middot; 12 min drive</p>
        </div>
      </div>
    </div>
  );
};
