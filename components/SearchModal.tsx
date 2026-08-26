"use client";

import React, { useState, useEffect } from "react";
import { Search, X, MapPin, Calendar, Users, Plus, Minus } from "lucide-react";

interface SearchModalProps {
  initialLocation?: string;
  initialGuests?: number;
  onClose: () => void;
  onApplySearch: (searchParams: {
    location: string;
    guests: number;
  }) => void;
}

const destinationCards = [
  { name: "North Goa", subtitle: "Candolim, Baga, Vagator", icon: "🌴" },
  { name: "South Goa", subtitle: "Benaulim, Palolem, Colva", icon: "🏖️" },
  { name: "Pune", subtitle: "Koregaon Park, Baner", icon: "🏙️" },
  { name: "Mumbai", subtitle: "Bandra, Juhu, Alibaug", icon: "🌆" },
  { name: "Udaipur", subtitle: "Lake Pichola, Heritage", icon: "🏰" },
  { name: "I'm flexible", subtitle: "Explore top rated stays", icon: "🗺️" }
];

export const SearchModal: React.FC<SearchModalProps> = ({
  initialLocation = "",
  initialGuests = 1,
  onClose,
  onApplySearch
}) => {
  const [activeTab, setActiveTab] = useState<"where" | "when" | "who">("where");
  const [location, setLocation] = useState(initialLocation);
  const [adults, setAdults] = useState(initialGuests);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const totalGuests = adults + children;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSearchSubmit = () => {
    onApplySearch({
      location: location === "I'm flexible" ? "" : location,
      guests: totalGuests
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex flex-col justify-start pt-4 sm:pt-10 px-4 animate-in fade-in duration-200"
    >
      <div className="max-w-[850px] w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        {/* Header Bar */}
        <div className="p-4 sm:px-8 sm:py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("where")}
              className={`text-sm font-semibold transition ${
                activeTab === "where" ? "text-gray-900 border-b-2 border-black pb-0.5" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Stays
            </button>
            <button
              onClick={() => setActiveTab("when")}
              className={`text-sm font-semibold transition ${
                activeTab === "when" ? "text-gray-900 border-b-2 border-black pb-0.5" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Experiences
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Segment Pills Bar */}
        <div className="p-4 sm:p-6 bg-gray-50 border-b border-gray-100">
          <div className="bg-white rounded-full border border-gray-200 shadow-md p-2 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Where Field */}
            <div
              onClick={() => setActiveTab("where")}
              className={`flex-1 w-full px-5 py-2.5 rounded-full cursor-pointer transition ${
                activeTab === "where" ? "bg-gray-100 shadow-xs" : "hover:bg-gray-50"
              }`}
            >
              <span className="block text-xs font-bold text-gray-800 tracking-wide uppercase">Where</span>
              <input
                type="text"
                placeholder="Search destinations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm text-gray-900 font-medium focus:outline-none placeholder:text-gray-400"
              />
            </div>

            {/* When Field */}
            <div
              onClick={() => setActiveTab("when")}
              className={`flex-1 w-full px-5 py-2.5 rounded-full cursor-pointer transition ${
                activeTab === "when" ? "bg-gray-100 shadow-xs" : "hover:bg-gray-50"
              }`}
            >
              <span className="block text-xs font-bold text-gray-800 tracking-wide uppercase">When</span>
              <span className="block text-sm text-gray-900 font-medium truncate">
                Sep 10 – Sep 15
              </span>
            </div>

            {/* Who Field */}
            <div
              onClick={() => setActiveTab("who")}
              className={`flex-1 w-full px-5 py-2.5 rounded-full cursor-pointer transition ${
                activeTab === "who" ? "bg-gray-100 shadow-xs" : "hover:bg-gray-50"
              }`}
            >
              <span className="block text-xs font-bold text-gray-800 tracking-wide uppercase">Who</span>
              <span className="block text-sm text-gray-900 font-medium truncate">
                {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : "Add guests"}
              </span>
            </div>

            {/* Search Submit Button */}
            <div className="p-1 w-full md:w-auto">
              <button
                onClick={handleSearchSubmit}
                className="w-full md:w-auto bg-[#FF385C] hover:bg-[#E00B41] text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition hover:scale-102 active:scale-98 cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          {activeTab === "where" && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900">Search by region or city</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {destinationCards.map((dest) => (
                  <button
                    key={dest.name}
                    onClick={() => {
                      setLocation(dest.name === "I'm flexible" ? "" : dest.name);
                      setActiveTab("who");
                    }}
                    className={`p-4 rounded-2xl border text-left transition duration-150 cursor-pointer flex flex-col gap-2 ${
                      location === dest.name
                        ? "border-black bg-gray-50 ring-1 ring-black"
                        : "border-gray-200 hover:border-black hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-2xl">{dest.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-gray-900">{dest.name}</div>
                      <div className="text-xs text-gray-500 font-normal">{dest.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "when" && (
            <div className="space-y-4 text-center py-4">
              <h3 className="text-sm font-bold text-gray-900">Select dates</h3>
              <p className="text-xs text-gray-500">Flexible dates stay window selected (Sep 10 – Sep 15 2026)</p>
              <div className="inline-flex items-center gap-3 bg-gray-100 p-3 rounded-2xl">
                <Calendar className="w-5 h-5 text-[#FF385C]" />
                <span className="text-sm font-semibold text-gray-800">5 Nights · Sep 10 - Sep 15</span>
              </div>
            </div>
          )}

          {activeTab === "who" && (
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <div className="font-bold text-sm text-gray-900">Adults</div>
                  <div className="text-xs text-gray-500">Ages 13 or above</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    disabled={adults <= 1}
                    className="p-1.5 rounded-full border border-gray-300 hover:border-black disabled:opacity-30 disabled:hover:border-gray-300 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm w-5 text-center">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="p-1.5 rounded-full border border-gray-300 hover:border-black transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <div className="font-bold text-sm text-gray-900">Children</div>
                  <div className="text-xs text-gray-500">Ages 2–12</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    disabled={children <= 0}
                    className="p-1.5 rounded-full border border-gray-300 hover:border-black disabled:opacity-30 disabled:hover:border-gray-300 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm w-5 text-center">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="p-1.5 rounded-full border border-gray-300 hover:border-black transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-gray-900">Infants</div>
                  <div className="text-xs text-gray-500">Under 2</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setInfants(Math.max(0, infants - 1))}
                    disabled={infants <= 0}
                    className="p-1.5 rounded-full border border-gray-300 hover:border-black disabled:opacity-30 disabled:hover:border-gray-300 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm w-5 text-center">{infants}</span>
                  <button
                    onClick={() => setInfants(infants + 1)}
                    className="p-1.5 rounded-full border border-gray-300 hover:border-black transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
