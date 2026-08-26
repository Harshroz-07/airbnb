"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Bed,
  Waves,
  Sun,
  Flame,
  Landmark,
  Building2,
  Trees,
  Compass,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
}

const categories: Category[] = [
  { id: "all", label: "Icons", icon: Sparkles },
  { id: "rooms", label: "Rooms", icon: Bed },
  { id: "pools", label: "Amazing pools", icon: Waves },
  { id: "beachfront", label: "Beachfront", icon: Sun },
  { id: "jacuzzi", label: "Jacuzzi", icon: Flame },
  { id: "heritage", label: "Heritage", icon: Landmark },
  { id: "mansions", label: "Mansions", icon: Building2 },
  { id: "cabins", label: "Cabins", icon: Trees },
  { id: "lakefront", label: "Lakefront", icon: Compass }
];

interface CategoryHeaderProps {
  activeCategory: string;
  activeFilterCount?: number;
  onSelectCategory: (id: string) => void;
  onOpenFilters?: () => void;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  activeCategory,
  activeFilterCount = 0,
  onSelectCategory,
  onOpenFilters
}) => {
  return (
    <div className="sticky top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-xs">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        {/* Category Icons Carousel */}
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-none py-1 flex-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center gap-2 border-b-2 py-2 px-1 cursor-pointer transition-colors duration-150 shrink-0 group ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
                }`}
              >
                <Icon
                  className={`w-6 h-6 stroke-[1.75] transition-transform duration-150 group-hover:scale-105 ${
                    isActive ? "text-black" : "text-gray-500 group-hover:text-black"
                  }`}
                />
                <span className="text-xs font-semibold whitespace-nowrap">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filters Button */}
        <button
          onClick={onOpenFilters}
          className="hidden md:flex items-center gap-2 border border-gray-300 hover:border-black rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-900 transition shadow-xs shrink-0 cursor-pointer relative"
        >
          <SlidersHorizontal className="w-4 h-4 stroke-[2]" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="ml-1 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
