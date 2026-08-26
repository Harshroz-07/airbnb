"use client";

import React from "react";
import { Star } from "lucide-react";
import { ListingData } from "@/data/listingData";

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  ratingsBreakdown: ListingData["ratingsBreakdown"];
  reviews: ListingData["reviews"];
  onOpenReviewsModal?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  rating,
  reviewCount,
  ratingsBreakdown,
  reviews,
  onOpenReviewsModal
}) => {
  const categories = [
    { label: "Cleanliness", score: ratingsBreakdown.cleanliness },
    { label: "Accuracy", score: ratingsBreakdown.accuracy },
    { label: "Communication", score: ratingsBreakdown.communication },
    { label: "Location", score: ratingsBreakdown.location },
    { label: "Check-in", score: ratingsBreakdown.checkIn },
    { label: "Value", score: ratingsBreakdown.value }
  ];

  return (
    <div id="reviews-section" className="py-10 border-t border-gray-200">
      {/* Title */}
      <div className="flex items-center gap-2 mb-8">
        <Star className="w-6 h-6 fill-current text-gray-900" />
        <h3 className="text-2xl font-bold text-gray-900">
          {rating} &middot; {reviewCount} reviews
        </h3>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-10">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-800">{cat.label}</span>
            <div className="flex items-center gap-3 w-1/2">
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gray-900 h-full rounded-full"
                  style={{ width: `${(cat.score / 5) * 100}%` }}
                />
              </div>
              <span className="text-xs font-bold text-gray-900 shrink-0 w-6 text-right">
                {cat.score.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev) => (
          <div key={rev.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h4 className="font-semibold text-base text-gray-900">{rev.author}</h4>
                <p className="text-xs text-[#717171]">{rev.location} &middot; {rev.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: rev.rating }).map((_, idx) => (
                <Star key={idx} className="w-3.5 h-3.5 fill-current text-gray-900" />
              ))}
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">{rev.comment}</p>
          </div>
        ))}
      </div>

      {onOpenReviewsModal && (
        <button
          onClick={onOpenReviewsModal}
          className="mt-8 px-6 py-3 border border-gray-900 text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-50 transition duration-150 active:scale-98 cursor-pointer"
        >
          Show all {reviewCount} reviews
        </button>
      )}
    </div>
  );
};
