"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Calendar, Users, CreditCard, Smartphone, Building, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { format } from "date-fns";

interface CheckoutModalProps {
  listingTitle: string;
  pricePerNight: number;
  currency: string;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guestCount: number;
  totalAmount: number;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  listingTitle,
  pricePerNight,
  currency,
  checkInDate,
  checkOutDate,
  guestCount,
  totalAmount,
  onClose
}) => {
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleConfirmAndPay = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
    setIsConfirmed(true);
  };

  const formattedCheckIn = checkInDate ? format(checkInDate, "MMM dd, yyyy") : "Sep 10, 2026";
  const formattedCheckOut = checkOutDate ? format(checkOutDate, "MMM dd, yyyy") : "Sep 15, 2026";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="max-w-[850px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-base text-gray-900">
            {isConfirmed ? "Booking Confirmed" : "Request to book"}
          </h2>
          <div className="w-9" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {isConfirmed ? (
            /* Confirmation Success Screen */
            <div className="py-8 text-center space-y-6 max-w-lg mx-auto animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reservation Reference: HM-89241</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  You're going to Goa! 🎉
                </h3>
                <p className="text-sm text-gray-600">
                  We've sent your confirmation email and receipt for <strong>{listingTitle}</strong>.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-left space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-900 font-semibold border-b border-gray-200 pb-3">
                  <span>Dates</span>
                  <span>{formattedCheckIn} – {formattedCheckOut}</span>
                </div>
                <div className="flex items-center justify-between text-gray-900 font-semibold border-b border-gray-200 pb-3">
                  <span>Guests</span>
                  <span>{guestCount} Guest{guestCount > 1 ? "s" : ""}</span>
                </div>
                <div className="flex items-center justify-between text-gray-900 font-bold text-base pt-1">
                  <span>Total Paid</span>
                  <span className="text-[#FF385C]">{currency}{totalAmount.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-2xl transition cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            /* Checkout Form View */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column (Trip details & Payment) */}
              <div className="lg:col-span-7 space-y-8">
                {/* 1. Trip Details */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">Your trip</h3>

                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-bold text-gray-900">Dates</div>
                      <div className="text-gray-500">{formattedCheckIn} – {formattedCheckOut}</div>
                    </div>
                    <span className="font-bold text-gray-900 underline cursor-pointer text-xs">Edit</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-bold text-gray-900">Guests</div>
                      <div className="text-gray-500">{guestCount} guest{guestCount > 1 ? "s" : ""}</div>
                    </div>
                    <span className="font-bold text-gray-900 underline cursor-pointer text-xs">Edit</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">Pay with</h3>

                  {/* Payment Methods Options */}
                  <div className="space-y-3">
                    <label
                      onClick={() => setPaymentMethod("upi")}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${
                        paymentMethod === "upi"
                          ? "border-black bg-gray-50 ring-1 ring-black"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-gray-800" />
                        <div>
                          <div className="font-bold text-sm text-gray-900">UPI / Google Pay / PhonePe</div>
                          <div className="text-xs text-gray-500">Instant approval</div>
                        </div>
                      </div>
                      <input type="radio" checked={paymentMethod === "upi"} readOnly className="accent-black" />
                    </label>

                    <label
                      onClick={() => setPaymentMethod("card")}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${
                        paymentMethod === "card"
                          ? "border-black bg-gray-50 ring-1 ring-black"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-gray-800" />
                        <div>
                          <div className="font-bold text-sm text-gray-900">Credit or Debit Card</div>
                          <div className="text-xs text-gray-500">Visa, Mastercard, Amex</div>
                        </div>
                      </div>
                      <input type="radio" checked={paymentMethod === "card"} readOnly className="accent-black" />
                    </label>
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div className="border-t border-gray-100 pt-6 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-gray-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Free cancellation for 48 hours</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Cancel before check-in for a full refund. No questions asked.
                  </p>
                </div>

                {/* Confirm Action Button */}
                <div className="pt-4">
                  <button
                    onClick={handleConfirmAndPay}
                    className="w-full bg-gradient-to-r from-[#FF385C] to-[#E61E4D] hover:brightness-105 text-white font-bold py-4 rounded-2xl shadow-lg transition duration-200 hover:scale-101 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Confirm and Pay · {currency}{totalAmount.toLocaleString("en-IN")}</span>
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-2">
                    By clicking Confirm, you agree to the Host's House Rules and Airbnb Terms.
                  </p>
                </div>
              </div>

              {/* Right Column (Order Summary Card) */}
              <div className="lg:col-span-5">
                <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 space-y-5 sticky top-4">
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0 shadow-xs">
                      <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=300"
                        alt={listingTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 line-clamp-2">{listingTitle}</h4>
                      <p className="text-xs text-gray-500 mt-1">Serviced apartment in Candolim</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm border-b border-gray-200 pb-4">
                    <h5 className="font-bold text-sm text-gray-900">Price details</h5>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{currency}{pricePerNight.toLocaleString("en-IN")} x 5 nights</span>
                      <span>{currency}{(pricePerNight * 5).toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Cleaning fee</span>
                      <span>{currency}800</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Airbnb service fee</span>
                      <span>{currency}1,200</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Occupancy taxes</span>
                      <span>{currency}450</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center font-bold text-base text-gray-900 pt-1">
                    <span>Total (INR)</span>
                    <span className="text-[#FF385C]">{currency}{totalAmount.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
