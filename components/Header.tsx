"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Globe, Menu, User } from "lucide-react";

interface HeaderProps {
  activeLocation?: string;
  activeGuests?: number;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeLocation,
  activeGuests,
  onOpenSearch
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none">
          <svg
            className="h-8 w-auto text-[#FF385C] transition-transform duration-200 group-hover:scale-105"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.308-3.268 7.806-7.5 7.806-3.328 0-5.834-1.92-7.5-4.887-1.666 2.967-4.172 4.887-7.5 4.887-4.232 0-7.5-3.498-7.5-7.806 0-1.164.318-2.348 1.116-4.064l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.537 1.963 10.992 1 13 1h3zm0 2h-3c-1.306 0-2.316.634-3.414 2.586l-.448.862C7.26 10.198 3.16 18.777 2.22 20.97l-.116.282c-.61 1.345-.884 2.25-.884 3.111 0 3.218 2.378 5.806 5.5 5.806 2.766 0 4.862-1.745 6.012-4.498l.268-.67.268.67c1.15 2.753 3.246 4.498 6.012 4.498 3.122 0 5.5-2.588 5.5-5.806 0-.861-.274-1.766-.884-3.111l-.116-.282c-.94-2.193-5.04-10.772-6.92-14.522l-.448-.862C18.316 3.634 17.306 3 16 3zm0 15c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-[#FF385C] hidden sm:inline">
            airbnb
          </span>
        </Link>

        {/* Compact Search Bar */}
        <div
          onClick={onOpenSearch}
          className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition duration-200 px-4 py-2 text-sm font-medium text-gray-800 cursor-pointer divide-x divide-gray-200"
        >
          <button className="px-3 hover:text-black font-semibold text-gray-900 truncate max-w-[120px]">
            {activeLocation || "Anywhere"}
          </button>
          <button className="px-3 hover:text-black font-semibold text-gray-900 hidden sm:inline">
            Any week
          </button>
          <div className="flex items-center pl-3 gap-3 text-gray-500">
            <span className="font-normal text-gray-500 hidden md:inline">
              {activeGuests && activeGuests > 0 ? `${activeGuests} guest${activeGuests > 1 ? "s" : ""}` : "Add guests"}
            </span>
            <div className="bg-[#FF385C] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#E00B41] transition">
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* Right Menu Controls */}
        <div className="flex items-center gap-2">
          <button className="hidden md:block text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2.5 rounded-full transition duration-150">
            Airbnb your home
          </button>
          <button
            className="p-3 text-gray-700 hover:bg-gray-100 rounded-full transition duration-150"
            aria-label="Choose language"
          >
            <Globe className="w-4 h-4" />
          </button>

          {/* User Menu Button */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 border border-gray-300 rounded-full p-2 pl-3 hover:shadow-md transition duration-200 bg-white"
              aria-expanded={isMenuOpen}
              aria-label="Main navigation menu"
            >
              <Menu className="w-4 h-4 text-gray-600" />
              <div className="bg-gray-600 text-white rounded-full p-1">
                <User className="w-4 h-4 fill-current" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-100">
                <a href="#" className="block px-4 py-3 font-semibold text-gray-800 hover:bg-gray-50">
                  Sign up
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                  Log in
                </a>
                <div className="border-t border-gray-100 my-1"></div>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                  Gift cards
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                  Airbnb your home
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                  Help Centre
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
