"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isWithinInterval, isBefore, startOfToday } from "date-fns";

interface DatePickerCalendarProps {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  onSelectDates: (checkIn: Date | null, checkOut: Date | null) => void;
}

export const DatePickerCalendar: React.FC<DatePickerCalendarProps> = ({
  checkInDate,
  checkOutDate,
  onSelectDates
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8, 1)); // September 2026
  const today = startOfToday();

  const nextMonth = addMonths(currentMonth, 1);

  const handleDateClick = (day: Date) => {
    if (isBefore(day, today)) return;

    if (!checkInDate || (checkInDate && checkOutDate)) {
      onSelectDates(day, null);
    } else if (checkInDate && !checkOutDate) {
      if (isBefore(day, checkInDate)) {
        onSelectDates(day, null);
      } else {
        onSelectDates(checkInDate, day);
      }
    }
  };

  const renderMonth = (monthDate: Date) => {
    const start = startOfMonth(monthDate);
    const end = endOfMonth(monthDate);
    const days = eachDayOfInterval({ start, end });
    const startDayOfWeek = start.getDay(); // 0 = Sun

    return (
      <div className="w-full">
        <h4 className="font-semibold text-gray-900 text-center mb-4 text-sm">
          {format(monthDate, "MMMM yyyy")}
        </h4>

        {/* Days of week header */}
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty prefix padding days */}
          {Array.from({ length: startDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10" />
          ))}

          {days.map((day) => {
            const isCheckIn = checkInDate && isSameDay(day, checkInDate);
            const isCheckOut = checkOutDate && isSameDay(day, checkOutDate);
            const isInRange =
              checkInDate &&
              checkOutDate &&
              isWithinInterval(day, { start: checkInDate, end: checkOutDate });
            const isDisabled = isBefore(day, today);

            let dayClasses = "h-10 w-10 flex items-center justify-center rounded-full text-sm transition ";

            if (isDisabled) {
              dayClasses += "text-gray-300 cursor-not-allowed line-through";
            } else if (isCheckIn || isCheckOut) {
              dayClasses += "bg-black text-white font-bold shadow-md";
            } else if (isInRange) {
              dayClasses += "bg-gray-100 text-gray-900 rounded-none font-medium";
            } else {
              dayClasses += "hover:border hover:border-black font-normal text-gray-800 cursor-pointer";
            }

            return (
              <button
                key={day.toISOString()}
                onClick={() => handleDateClick(day)}
                disabled={isDisabled}
                className={dayClasses}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  return (
    <div className="py-8 border-t border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900">
          {nights > 0 ? `${nights} nights in Candolim` : "Select check-in date"}
        </h3>
        {checkInDate && (
          <button
            onClick={() => onSelectDates(null, null)}
            className="text-xs font-semibold underline text-gray-700 hover:text-black"
          >
            Clear dates
          </button>
        )}
      </div>
      <p className="text-sm text-[#717171] mb-6">
        {checkInDate && checkOutDate
          ? `${format(checkInDate, "MMM d, yyyy")} – ${format(checkOutDate, "MMM d, yyyy")}`
          : "Add your travel dates for exact pricing"}
      </p>

      {/* Dual Month Calendar */}
      <div className="relative">
        <div className="flex items-center justify-between absolute -top-12 right-0 left-0 px-2 pointer-events-none">
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
            className="p-2 rounded-full hover:bg-gray-100 pointer-events-auto transition"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="p-2 rounded-full hover:bg-gray-100 pointer-events-auto transition"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {renderMonth(currentMonth)}
          {renderMonth(nextMonth)}
        </div>
      </div>
    </div>
  );
};
