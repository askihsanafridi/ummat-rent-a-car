"use client";

import { useState } from "react";
import type { Car, CarCategorySlug } from "@/data/cars";
import { fleetCategories } from "@/data/cars";
import { CarCard } from "@/components/CarCard";

type FleetFilterProps = {
  cars: Car[];
  initialCategory?: string;
};

export function FleetFilter({ cars, initialCategory = "all" }: FleetFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchesCategory =
      activeCategory === "all" || car.categorySlug === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.bodyStyle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Category Tabs & Quick Search */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-none">
          {fleetCategories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const count =
              cat.slug === "all"
                ? cars.length
                : cars.filter((c) => c.categorySlug === cat.slug).length;

            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                  isActive
                    ? "bg-[#07111f] text-white shadow-md"
                    : "border border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#d4a329] hover:text-[#07111f]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive
                      ? "bg-white/20 text-[#f5b301]"
                      : "bg-[#f1f5f9] text-[#64748b]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[220px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Prado, Civic, Hiace..."
            className="h-10 w-full rounded-full border border-[#e2e8f0] bg-white px-4 pl-9 text-xs font-semibold text-[#07111f] placeholder:text-[#94a3b8] focus:border-[#d4a329] focus:outline-none focus:ring-2 focus:ring-[#f5b301]/20 sm:text-sm"
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-[#94a3b8]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Results Count & Status */}
      <div className="mt-6 flex items-center justify-between text-xs text-[#64748b]">
        <span>
          Showing <strong className="text-[#07111f]">{filteredCars.length}</strong> of {cars.length} vehicles
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="font-bold text-[#d4a329] hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Grid of Cars */}
      {filteredCars.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-[16px] border border-dashed border-[#cbd5e1] p-12 text-center">
          <p className="text-base font-bold text-[#07111f]">
            No vehicles found matching your criteria.
          </p>
          <p className="mt-1 text-sm text-[#64748b]">
            Try choosing another category or clearing your search.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 rounded-full bg-[#07111f] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#1e293b]"
          >
            Show All Fleet
          </button>
        </div>
      )}
    </div>
  );
}
