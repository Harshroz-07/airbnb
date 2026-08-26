"use client";

import React from "react";
import { ShieldCheck, Star, Award, MessageSquare } from "lucide-react";
import { ListingData } from "@/data/listingData";

interface HostSectionProps {
  host: ListingData["host"];
  onOpenHostModal?: () => void;
}

export const HostSection: React.FC<HostSectionProps> = ({ host, onOpenHostModal }) => {
  return (
    <div className="py-10 border-t border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={host.avatar}
          alt={host.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">Hosted by {host.name}</h3>
          <p className="text-sm text-[#717171]">Joined in August 2022 &middot; Superhost</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <Star className="w-5 h-5 text-gray-900" />
          <span className="text-sm font-semibold text-gray-900">48 Reviews</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <ShieldCheck className="w-5 h-5 text-gray-900" />
          <span className="text-sm font-semibold text-gray-900">Identity verified</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <Award className="w-5 h-5 text-gray-900" />
          <span className="text-sm font-semibold text-gray-900">Superhost</span>
        </div>
      </div>

      <div className="space-y-4 max-w-xl text-gray-700 text-sm leading-relaxed">
        <p>
          Hello! I am Mirashya, a passionate hospitality host based in North Goa. I aim to offer guest-centric luxury stays with high hygiene standards and total privacy.
        </p>
        <p>
          Response rate: <span className="font-semibold text-gray-900">{host.responseRate}</span>
          <br />
          Response time: <span className="font-semibold text-gray-900">{host.responseTime}</span>
        </p>

        <button
          onClick={onOpenHostModal}
          className="mt-4 px-6 py-3 border border-gray-900 text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-50 transition flex items-center gap-2 cursor-pointer active:scale-98"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Contact Host</span>
        </button>
      </div>
    </div>
  );
};
