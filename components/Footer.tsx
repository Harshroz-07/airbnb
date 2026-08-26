"use client";

import React from "react";
import { Globe, IndianRupee } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-sm text-gray-700 mt-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Hosting</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Airbnb</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Candolim Stays</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Explore 1BHK serviced apartments, romantic jacuzzi stays, and beach villas in Candolim, North Goa.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; 2026 Airbnb, Inc.</span>
            <span>&middot;</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>&middot;</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>&middot;</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>&middot;</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-gray-900">
            <button className="flex items-center gap-2 hover:underline">
              <Globe className="w-4 h-4" />
              <span>English (IN)</span>
            </button>

            <button className="flex items-center gap-1 hover:underline">
              <IndianRupee className="w-4 h-4" />
              <span>INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
