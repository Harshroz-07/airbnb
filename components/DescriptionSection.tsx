"use client";

import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";

interface DescriptionSectionProps {
  description: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">About this space</h3>
      
      <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line line-clamp-4">
        {description}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 flex items-center gap-1 font-semibold text-gray-900 underline underline-offset-4 hover:text-black transition"
      >
        <span>Show more</span>
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Description Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <div className="pt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this space</h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-4 whitespace-pre-line">
                {description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
