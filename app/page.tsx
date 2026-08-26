"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { CategoryHeader } from "@/components/CategoryHeader";
import { ListingCard } from "@/components/ListingCard";
import { MapView } from "@/components/MapView";
import { FutureGetawaysFooter } from "@/components/FutureGetawaysFooter";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { FiltersModal, FilterState } from "@/components/FiltersModal";
import { listingsCatalog, CatalogListing } from "@/data/listingsCatalog";
import { SlidersHorizontal, RefreshCw, Map as MapIcon, List as ListIcon } from "lucide-react";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  // Search state
  const [searchLocation, setSearchLocation] = useState("");
  const [searchGuests, setSearchGuests] = useState(1);

  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 1000,
    maxPrice: 10000,
    selectedAmenities: [],
    guestFavoriteOnly: false
  });

  // Calculate active filter count badge
  const activeFilterCount =
    (filters.guestFavoriteOnly ? 1 : 0) +
    (filters.selectedAmenities.length > 0 ? filters.selectedAmenities.length : 0) +
    (filters.minPrice > 1000 || filters.maxPrice < 10000 ? 1 : 0);

  // Dynamic filtering logic
  const filteredListings = listingsCatalog.filter((listing) => {
    // Location filter
    if (searchLocation) {
      const query = searchLocation.toLowerCase();
      const matchLoc =
        listing.location.toLowerCase().includes(query) ||
        listing.title.toLowerCase().includes(query) ||
        listing.categorySection.toLowerCase().includes(query);
      if (!matchLoc) return false;
    }

    // Price filter
    if (listing.pricePerNight < filters.minPrice || listing.pricePerNight > filters.maxPrice) {
      return false;
    }

    // Guest favorite filter
    if (filters.guestFavoriteOnly && !listing.isGuestFavorite) {
      return false;
    }

    // Category filter bar
    if (activeCategory !== "all") {
      const cat = activeCategory.toLowerCase();
      if (cat === "pools" && !listing.title.toLowerCase().includes("pool") && !listing.categorySection.toLowerCase().includes("pool")) {
        return false;
      }
      if (cat === "jacuzzi" && !listing.title.toLowerCase().includes("jacuzzi") && !listing.categorySection.toLowerCase().includes("jacuzzi")) {
        return false;
      }
      if (cat === "beachfront" && !listing.location.toLowerCase().includes("beach") && !listing.title.toLowerCase().includes("beach") && !listing.title.toLowerCase().includes("ocean")) {
        return false;
      }
      if (cat === "heritage" && !listing.title.toLowerCase().includes("heritage") && !listing.title.toLowerCase().includes("haveli") && !listing.categorySection.toLowerCase().includes("heritage")) {
        return false;
      }
    }

    return true;
  });

  // Get distinct section categories from filtered list
  const sections = Array.from(new Set(filteredListings.map((item) => item.categorySection)));

  const handleClearAllFilters = () => {
    setSearchLocation("");
    setSearchGuests(1);
    setActiveCategory("all");
    setFilters({
      minPrice: 1000,
      maxPrice: 10000,
      selectedAmenities: [],
      guestFavoriteOnly: false
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FF385C] selection:text-white relative">
      {/* Global Navigation Header */}
      <Header
        activeLocation={searchLocation}
        activeGuests={searchGuests}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

      {/* Top Category Icon Filter Bar */}
      <CategoryHeader
        activeCategory={activeCategory}
        activeFilterCount={activeFilterCount}
        onSelectCategory={(catId) => setActiveCategory(catId)}
        onOpenFilters={() => setIsFiltersModalOpen(true)}
      />

      {/* Main Container (List View OR Map View) */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 space-y-14">
        {viewMode === "map" ? (
          /* Interactive Map View */
          <div className="space-y-4 animate-in fade-in duration-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Interactive Map Feed
            </h2>
            <MapView listings={filteredListings} />
          </div>
        ) : filteredListings.length === 0 ? (
          /* Empty State */
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No exact matches</h3>
            <p className="text-sm text-gray-500">
              Try changing or clearing some of your search parameters or filters to find available homes.
            </p>
            <button
              onClick={handleClearAllFilters}
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Clear all filters</span>
            </button>
          </div>
        ) : (
          /* Sectioned Grid Listing Feed */
          sections.map((sectionTitle) => {
            const sectionListings = filteredListings.filter(
              (item) => item.categorySection === sectionTitle
            );

            return (
              <section key={sectionTitle} className="space-y-5">
                {/* Section Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2 group cursor-pointer">
                    <span>{sectionTitle}</span>
                    <span className="text-gray-400 group-hover:text-gray-900 transition">›</span>
                  </h2>
                </div>

                {/* 4-Column Grid of Airbnb Listing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                  {sectionListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      {/* Floating Map / List Toggle Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setViewMode(viewMode === "list" ? "map" : "list")}
          className="bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-full shadow-2xl border border-gray-700 font-semibold text-sm flex items-center gap-2 transition duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {viewMode === "list" ? (
            <>
              <span>Show map</span>
              <MapIcon className="w-4 h-4 text-white stroke-[2.5]" />
            </>
          ) : (
            <>
              <span>Show list</span>
              <ListIcon className="w-4 h-4 text-white stroke-[2.5]" />
            </>
          )}
        </button>
      </div>

      {/* Tabbed Inspiration Directory Footer */}
      <FutureGetawaysFooter />

      {/* Global Footer */}
      <Footer />

      {/* MODALS */}
      {/* 1. Expanded Search Modal */}
      {isSearchModalOpen && (
        <SearchModal
          initialLocation={searchLocation}
          initialGuests={searchGuests}
          onClose={() => setIsSearchModalOpen(false)}
          onApplySearch={(params) => {
            setSearchLocation(params.location);
            setSearchGuests(params.guests);
          }}
        />
      )}

      {/* 2. Advanced Filters Modal */}
      {isFiltersModalOpen && (
        <FiltersModal
          initialFilters={filters}
          onClose={() => setIsFiltersModalOpen(false)}
          onApplyFilters={(newFilters) => setFilters(newFilters)}
        />
      )}
    </div>
  );
}
