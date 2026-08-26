"use client";

import React, { useState, use } from "react";
import { Header } from "@/components/Header";
import { ListingHeader } from "@/components/ListingHeader";
import { HeroPhotoGrid } from "@/components/HeroPhotoGrid";
import { ListingInfo } from "@/components/ListingInfo";
import { DescriptionSection } from "@/components/DescriptionSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { DatePickerCalendar } from "@/components/DatePickerCalendar";
import { ReserveCard } from "@/components/ReserveCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { HostSection } from "@/components/HostSection";
import { Footer } from "@/components/Footer";
import { PhotoTourModal } from "@/components/PhotoTourModal";
import { LightboxModal } from "@/components/LightboxModal";
import { ShareModal } from "@/components/ShareModal";
import { CheckoutModal } from "@/components/CheckoutModal";
import { AmenitiesModal } from "@/components/AmenitiesModal";
import { ReviewsModal } from "@/components/ReviewsModal";
import { HostModal } from "@/components/HostModal";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { listingData } from "@/data/listingData";

interface ListingDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  const resolvedParams = use(params);
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [photoTourInitialIndex, setPhotoTourInitialIndex] = useState<number | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [isHostModalOpen, setIsHostModalOpen] = useState(false);
  const [checkoutTotalAmount, setCheckoutTotalAmount] = useState(11700);
  const [checkoutGuestsCount, setCheckoutGuestsCount] = useState(2);

  // DatePicker state
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date(2026, 8, 10)); // Sep 10 2026
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date(2026, 8, 15)); // Sep 15 2026

  const handleOpenPhotoTour = (index?: number) => {
    setPhotoTourInitialIndex(typeof index === "number" ? index : null);
    setIsPhotoTourOpen(true);
  };

  const handleScrollToReviews = () => {
    const reviewsEl = document.getElementById("reviews-section");
    if (reviewsEl) {
      reviewsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCalendar = () => {
    const calendarEl = document.getElementById("calendar-section");
    if (calendarEl) {
      calendarEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCheckout = (total: number, guests: number) => {
    setCheckoutTotalAmount(total);
    setCheckoutGuestsCount(guests);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FF385C] selection:text-white">
      {/* Global Airbnb Navigation Header */}
      <Header />

      {/* Main Container */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-10 pb-16">
        {/* Listing Title & Actions */}
        <ListingHeader
          title={listingData.title}
          onShareClick={() => setIsShareModalOpen(true)}
        />

        {/* 5-Photo Hero Collage */}
        <HeroPhotoGrid
          photos={listingData.photos}
          onOpenPhotoTour={handleOpenPhotoTour}
        />

        {/* Two-Column Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          {/* Left Column (Details, Amenities, Calendar, Reviews, Host) */}
          <div className="lg:col-span-7 space-y-4">
            <ListingInfo
              data={listingData}
              onScrollToReviews={handleScrollToReviews}
            />

            <DescriptionSection description={listingData.description} />

            <AmenitiesSection
              amenities={listingData.amenities}
              onOpenAmenitiesModal={() => setIsAmenitiesModalOpen(true)}
            />

            <div id="calendar-section">
              <DatePickerCalendar
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                onSelectDates={(checkIn, checkOut) => {
                  setCheckInDate(checkIn);
                  setCheckOutDate(checkOut);
                }}
              />
            </div>

            <ReviewsSection
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
              ratingsBreakdown={listingData.ratingsBreakdown}
              reviews={listingData.reviews}
              onOpenReviewsModal={() => setIsReviewsModalOpen(true)}
            />

            <LocationSection location={listingData.location} />

            <HostSection
              host={listingData.host}
              onOpenHostModal={() => setIsHostModalOpen(true)}
            />

            <ArchitectureDiagram />
          </div>

          {/* Right Column (Sticky Reservation Widget) */}
          <div className="lg:col-span-5 relative">
            <ReserveCard
              pricePerNight={listingData.pricePerNight}
              currency={listingData.currency}
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onOpenCalendar={handleScrollToCalendar}
              onOpenCheckout={handleOpenCheckout}
            />
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* OVERLAY VIEWS */}
      {/* 1. Photo Tour View */}
      {isPhotoTourOpen && (
        <PhotoTourModal
          photos={listingData.photos}
          initialPhotoIndex={photoTourInitialIndex}
          onClose={() => setIsPhotoTourOpen(false)}
          onOpenLightbox={(index) => {
            setActiveLightboxIndex(index);
          }}
          onShareClick={() => setIsShareModalOpen(true)}
        />
      )}

      {/* 2. Lightbox View */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          photos={listingData.photos}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
          onShareClick={() => setIsShareModalOpen(true)}
        />
      )}

      {/* 3. Share Modal View */}
      {isShareModalOpen && (
        <ShareModal
          onClose={() => setIsShareModalOpen(false)}
          title={listingData.title}
        />
      )}

      {/* 4. Booking Checkout View */}
      {isCheckoutModalOpen && (
        <CheckoutModal
          listingTitle={listingData.title}
          pricePerNight={listingData.pricePerNight}
          currency={listingData.currency}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          guestCount={checkoutGuestsCount}
          totalAmount={checkoutTotalAmount}
          onClose={() => setIsCheckoutModalOpen(false)}
        />
      )}

      {/* 5. Amenities Dialog */}
      {isAmenitiesModalOpen && (
        <AmenitiesModal
          amenities={listingData.amenities}
          onClose={() => setIsAmenitiesModalOpen(false)}
        />
      )}

      {/* 6. Reviews Search Dialog */}
      {isReviewsModalOpen && (
        <ReviewsModal
          rating={listingData.rating}
          reviewCount={listingData.reviewCount}
          ratingsBreakdown={listingData.ratingsBreakdown}
          reviews={listingData.reviews}
          onClose={() => setIsReviewsModalOpen(false)}
        />
      )}

      {/* 7. Host Profile & Chat Dialog */}
      {isHostModalOpen && (
        <HostModal
          host={listingData.host}
          onClose={() => setIsHostModalOpen(false)}
        />
      )}
    </div>
  );
}
