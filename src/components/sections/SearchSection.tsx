"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_FORM_URL } from "@/data";
import { cn } from "@/lib/utils";

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 relative z-20">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-0 px-2">
        {["Buy", "Rent", "Commercial"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={cn(
              "px-6 py-3 text-sm font-bold rounded-t-xl transition-all duration-200",
              activeTab === tab.toLowerCase()
                ? "bg-white text-black"
                : "bg-black/50 text-white hover:bg-black/70 backdrop-blur-md"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Card */}
      <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-2xl flex flex-col sm:flex-row items-center gap-3 w-full">
        <div className="relative flex-1 w-full h-full">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search city, locality, or landmark..."
            className="w-full h-full bg-transparent focus:bg-gray-50 border border-transparent focus:border-amber-400 focus:ring-0 rounded-xl pl-12 pr-4 py-4 text-black text-base outline-none transition-all placeholder:text-gray-400 font-medium"
          />
        </div>
        
        <div className="flex w-full sm:w-auto items-center gap-2">
          <Button
            className="w-full sm:w-32 bg-amber-400 hover:bg-amber-500 text-black font-bold text-base py-6 rounded-xl shadow-md transition-all hover:scale-[1.02]"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
            className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-bold text-base py-6 px-6 rounded-xl shadow-md transition-all hover:scale-[1.02] whitespace-nowrap"
          >
            Submit Requirement
          </Button>
        </div>
      </div>
    </div>
  );
}
