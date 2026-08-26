"use client";

import React, { useState, useEffect } from "react";
import { X, Star, Search, Sparkles } from "lucide-react";
import { Review } from "@/data/listingData";

interface ReviewsModalProps {
  rating: number;
  reviewCount: number;
  ratingsBreakdown: {
    cleanliness: number;
    accuracy: number;
    communication: number;
    location: number;
    checkIn: number;
    value: number;
  };
  reviews: Review[];
  onClose: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  rating,
  reviewCount,
  ratingsBreakdown,
  reviews,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const filteredReviews = reviews.filter(
    (rev) =>
      rev.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="max-w-[950px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 cursor-pointer"
            aria-label="Close reviews"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 font-bold text-base text-gray-900">
            <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
            <span>{rating.toFixed(2)} &middot; {reviewCount} reviews</span>
          </div>
          <div className="w-9" />
        </div>

        {/* Modal Body: Split Screen */}
        <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
          {/* Left Column (Overall Ratings & Meters) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-center space-y-2">
              <div className="text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-1">
                <span>{rating.toFixed(2)}</span>
                <Star className="w-7 h-7 fill-gray-900 text-gray-900" />
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Overall Guest Rating
              </p>
            </div>

            {/* Category Breakdown Progress Meters */}
            <div className="space-y-4 text-sm text-gray-900">
              <h4 className="font-bold text-sm text-gray-900">Rating breakdown</h4>

              <div className="space-y-3">
                {[
                  { label: "Cleanliness", score: ratingsBreakdown.cleanliness },
                  { label: "Accuracy", score: ratingsBreakdown.accuracy },
                  { label: "Communication", score: ratingsBreakdown.communication },
                  { label: "Location", score: ratingsBreakdown.location },
                  { label: "Check-in", score: ratingsBreakdown.checkIn },
                  { label: "Value", score: ratingsBreakdown.value }
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>{item.label}</span>
                      <span>{item.score.toFixed(1)}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-900 rounded-full"
                        style={{ width: `${(item.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Search & Reviews List) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Review Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search reviews (e.g. jacuzzi, clean, location)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {filteredReviews.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-sm">
                  No reviews matching "{searchQuery}"
                </div>
              ) : (
                filteredReviews.map((rev) => (
                  <div key={rev.id} className="space-y-2 border-b border-gray-100 pb-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-10 h-10 rounded-full object-cover shadow-xs"
                      />
                      <div>
                        <div className="font-bold text-sm text-gray-900">{rev.author}</div>
                        <div className="text-xs text-gray-500">{rev.location} &middot; {rev.date}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pt-1">{rev.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
