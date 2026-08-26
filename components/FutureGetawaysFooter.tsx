"use client";

import React, { useState } from "react";
import { getawayTabs } from "@/data/listingsCatalog";

export const FutureGetawaysFooter: React.FC = () => {
  const [activeTab, setActiveTab] = useState(getawayTabs[0].name);

  const currentTabContent = getawayTabs.find((t) => t.name === activeTab) || getawayTabs[0];

  return (
    <section className="bg-[#F7F7F7] border-t border-gray-200 py-12 text-gray-900 mt-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
          Inspiration for future getaways
        </h2>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-300 overflow-x-auto scrollbar-none pb-1">
          {getawayTabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`text-sm font-semibold whitespace-nowrap pb-3 border-b-2 transition duration-150 cursor-pointer ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4 pt-2">
          {currentTabContent.items.map((item, idx) => (
            <div key={idx} className="flex flex-col text-xs space-y-0.5">
              <span className="font-semibold text-gray-900 hover:underline cursor-pointer">
                {item.name}
              </span>
              <span className="text-[#717171] font-normal">{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
