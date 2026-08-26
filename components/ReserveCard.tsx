"use client";

import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { format } from "date-fns";

interface ReserveCardProps {
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewCount: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  onOpenCalendar: () => void;
  onOpenCheckout?: (grandTotal: number, totalGuests: number) => void;
}

export const ReserveCard: React.FC<ReserveCardProps> = ({
  pricePerNight,
  currency,
  rating,
  reviewCount,
  checkInDate,
  checkOutDate,
  onOpenCalendar,
  onOpenCheckout
}) => {
  const [guests, setGuests] = useState({ adults: 2, children: 0, infants: 0, pets: 0 });
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 5; // Default 5 nights preview
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const basePriceTotal = pricePerNight * nights;
  const cleaningFee = 800;
  const serviceFee = 1200;
  const taxes = 450;
  const grandTotal = basePriceTotal + cleaningFee + serviceFee + taxes;

  const totalGuestsCount = guests.adults + guests.children;

  const handleReserve = () => {
    if (onOpenCheckout) {
      onOpenCheckout(grandTotal, totalGuestsCount);
    } else {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 4000);
    }
  };

  const updateGuest = (type: keyof typeof guests, delta: number) => {
    setGuests((prev) => {
      const current = prev[type];
      const next = Math.max(0, current + delta);
      if (type === "adults" && next < 1) return prev;
      if (type === "adults" && next + prev.children > 3) return prev;
      return { ...prev, [type]: next };
    });
  };

  return (
    <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl space-y-5">
      {/* Header Price & Rating */}
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-2xl font-bold text-gray-900">
            {currency}{pricePerNight.toLocaleString()}
          </span>
          <span className="text-gray-600 text-sm font-normal"> / night</span>
        </div>

        <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
          <Star className="w-4 h-4 fill-current text-black" />
          <span>{rating}</span>
          <span className="text-gray-400 font-normal">&middot;</span>
          <span className="text-[#717171] underline font-normal">{reviewCount} reviews</span>
        </div>
      </div>

      {/* Inputs Box */}
      <div className="border border-gray-400 rounded-xl overflow-hidden shadow-2xs">
        {/* Date Inputs */}
        <div
          onClick={onOpenCalendar}
          className="grid grid-cols-2 divide-x divide-gray-400 border-b border-gray-400 cursor-pointer hover:bg-gray-50 transition p-3"
        >
          <div>
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-wider">
              CHECK-IN
            </label>
            <span className="text-sm font-medium text-gray-800">
              {checkInDate ? format(checkInDate, "dd/MM/yyyy") : "Add date"}
            </span>
          </div>

          <div className="pl-3">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-wider">
              CHECKOUT
            </label>
            <span className="text-sm font-medium text-gray-800">
              {checkOutDate ? format(checkOutDate, "dd/MM/yyyy") : "Add date"}
            </span>
          </div>
        </div>

        {/* Guest Selector Input */}
        <div className="relative">
          <div
            onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
            className="p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition"
          >
            <div>
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-wider">
                GUESTS
              </label>
              <span className="text-sm font-medium text-gray-800">
                {totalGuestsCount} guest{totalGuestsCount > 1 ? "s" : ""}
                {guests.infants > 0 ? `, ${guests.infants} infant` : ""}
              </span>
            </div>
            {isGuestDropdownOpen ? (
              <ChevronUp className="w-4 h-4 text-gray-700" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-700" />
            )}
          </div>

          {/* Guest Selector Dropdown */}
          {isGuestDropdownOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 z-40 space-y-4 animate-in fade-in duration-150">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-900">Adults</p>
                  <p className="text-xs text-gray-500">Age 13+</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateGuest("adults", -1)}
                    disabled={guests.adults <= 1}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">{guests.adults}</span>
                  <button
                    onClick={() => updateGuest("adults", 1)}
                    disabled={guests.adults + guests.children >= 3}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-900">Children</p>
                  <p className="text-xs text-gray-500">Ages 2–12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateGuest("children", -1)}
                    disabled={guests.children <= 0}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">{guests.children}</span>
                  <button
                    onClick={() => updateGuest("children", 1)}
                    disabled={guests.adults + guests.children >= 3}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-500">
                This home has a maximum capacity of 3 guests.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleReserve}
        className="w-full py-3.5 bg-gradient-to-r from-[#FF385C] via-[#E61E4D] to-[#D70466] hover:brightness-105 text-white font-semibold text-base rounded-xl shadow-md transition duration-200 active:scale-98 flex items-center justify-center gap-2"
      >
        {isBooked ? (
          <>
            <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
            <span>Reservation Confirmed!</span>
          </>
        ) : (
          <span>Reserve</span>
        )}
      </button>

      <p className="text-center text-xs text-[#717171]">You won't be charged yet</p>

      {/* Price Breakdown */}
      <div className="space-y-3 pt-4 border-t border-gray-200 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="underline">
            {currency}{pricePerNight.toLocaleString()} &times; {nights} night{nights > 1 ? "s" : ""}
          </span>
          <span>{currency}{basePriceTotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>{currency}{cleaningFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="underline">Airbnb service fee</span>
          <span>{currency}{serviceFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="underline">Occupancy taxes</span>
          <span>{currency}{taxes.toLocaleString()}</span>
        </div>
      </div>

      {/* Total Amount */}
      <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-base font-bold text-gray-900">
        <span>Total before taxes</span>
        <span>{currency}{grandTotal.toLocaleString()}</span>
      </div>
    </div>
  );
};
