"use client";

import React, { useState } from "react";
import { Star, Trophy, Sparkles, Key, CalendarCheck, ShieldCheck } from "lucide-react";
import { ListingData } from "@/data/listingData";

interface ListingInfoProps {
  data: ListingData;
  onScrollToReviews: () => void;
}

export const ListingInfo: React.FC<ListingInfoProps> = ({ data, onScrollToReviews }) => {
  const [claimedDiscount, setClaimedDiscount] = useState(false);

  return (
    <div className="space-y-6">
      {/* Property Title & Capacity Metadata */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#222222]">
          {data.subtitle}
        </h2>
        <p className="text-[#717171] text-sm md:text-base mt-1">
          3 guests &middot; 1 bedroom &middot; 1 bed &middot; 1 bathroom
        </p>
      </div>

      {/* Promotional Discount Banner matching reference screenshot */}
      <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 text-white p-2 rounded-full">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-900">
              Get 10% off your next stay
            </p>
            <p className="text-xs text-emerald-700">
              Special promotional offer for instant booking
            </p>
          </div>
        </div>
        <button
          onClick={() => setClaimedDiscount(true)}
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
            claimedDiscount
              ? "bg-emerald-800 text-white"
              : "bg-white border border-emerald-600 text-emerald-800 hover:bg-emerald-100"
          }`}
        >
          {claimedDiscount ? "Claimed ✓" : "Claim"}
        </button>
      </div>

      {/* Guest Favorite Badge Box */}
      <div className="border border-gray-200 rounded-2xl p-6 flex items-center justify-between bg-white shadow-xs">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center text-center pr-6 border-r border-gray-200">
            <Trophy className="w-8 h-8 text-[#FF385C]" />
            <span className="font-bold text-xs uppercase tracking-wider text-gray-800 mt-1">
              Guest favorite
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-base">
              One of the most loved homes on Airbnb
            </p>
            <p className="text-sm text-[#717171]">
              Based on ratings, reviews, and reliability
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-center cursor-pointer" onClick={onScrollToReviews}>
          <div>
            <span className="text-2xl font-bold text-gray-900 flex items-center gap-1 justify-center">
              {data.rating} <Star className="w-4 h-4 fill-current text-gray-900 inline" />
            </span>
            <span className="text-xs font-semibold text-[#717171] underline">Overall rating</span>
          </div>
          <div className="pl-6 border-l border-gray-200">
            <span className="text-2xl font-bold text-gray-900">{data.reviewCount}</span>
            <span className="block text-xs font-semibold text-[#717171] underline">Reviews</span>
          </div>
        </div>
      </div>

      {/* Host Information */}
      <div className="flex items-center gap-4 py-4 border-y border-gray-200">
        <img
          src={data.host.avatar}
          alt={data.host.name}
          className="w-14 h-14 rounded-full object-cover border border-gray-200"
        />
        <div>
          <h3 className="font-semibold text-base text-gray-900">
            Hosted by {data.host.name}
          </h3>
          <p className="text-sm text-[#717171]">
            Superhost &middot; {data.host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="space-y-5 py-2">
        <div className="flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-gray-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base text-gray-900">Private jacuzzi</h4>
            <p className="text-sm text-[#717171]">
              Relax in your own private hot tub right inside the apartment.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Key className="w-6 h-6 text-gray-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base text-gray-900">Self check-in</h4>
            <p className="text-sm text-[#717171]">
              Check yourself in easily with the smart keypad.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CalendarCheck className="w-6 h-6 text-gray-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base text-gray-900">
              Free cancellation for 48 hours
            </h4>
            <p className="text-sm text-[#717171]">
              Full refund if you change your mind within 48 hours of booking.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-gray-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base text-gray-900">
              Mirashya is a Superhost
            </h4>
            <p className="text-sm text-[#717171]">
              Superhosts are experienced, highly rated hosts committed to providing great stays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
