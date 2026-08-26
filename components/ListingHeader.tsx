"use client";

import React, { useState } from "react";
import { Share, Heart } from "lucide-react";

interface ListingHeaderProps {
  title: string;
  onShareClick: () => void;
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({ title, onShareClick }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="pt-6 pb-4">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Title */}
        <h1 className="text-[26px] md:text-[28px] font-semibold text-[#222222] tracking-tight leading-snug">
          {title}
        </h1>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-start shrink-0">
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition duration-150 underline underline-offset-2 decoration-gray-400"
          >
            <Share className="w-4 h-4 text-gray-800 stroke-[2]" />
            <span>Share</span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition duration-150 underline underline-offset-2 decoration-gray-400 group"
          >
            <Heart
              className={`w-4 h-4 stroke-[2] transition-transform duration-200 group-hover:scale-110 ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-gray-800"
              }`}
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
