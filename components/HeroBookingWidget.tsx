"use client";

import { useState } from "react";
import { cars } from "@/data/cars";
import { siteConfig, createWhatsAppUrl } from "@/data/site";

const tripTypes = [
  { id: "airport", label: "Airport Transfer", icon: "✈️" },
  { id: "daily", label: "City & Daily Rental", icon: "🏙️" },
  { id: "outstation", label: "Outstation / Tours", icon: "🏔️" },
  { id: "wedding", label: "Wedding & VIP", icon: "💍" },
] as const;

type TripTypeId = (typeof tripTypes)[number]["id"];

export function HeroBookingWidget() {
  const [tripType, setTripType] = useState<TripTypeId>("airport");
  const [pickup, setPickup] = useState("Islamabad International Airport (ISB)");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedCar, setSelectedCar] = useState("Toyota Corolla");
  const [passengers, setPassengers] = useState("1-3 Passengers");

  function handleTripTypeChange(id: TripTypeId) {
    setTripType(id);
    if (id === "airport") {
      setPickup("Islamabad International Airport (ISB)");
      setDropoff("Islamabad / Rawalpindi Address");
      setSelectedCar("Toyota Corolla");
    } else if (id === "daily") {
      setPickup("G-10 / Blue Area / Islamabad");
      setDropoff("Within Islamabad & Rawalpindi");
      setSelectedCar("Honda Civic");
    } else if (id === "outstation") {
      setPickup("Islamabad / Rawalpindi");
      setDropoff("Murree / Swat / Northern Areas");
      setSelectedCar("Toyota Prado");
    } else if (id === "wedding") {
      setPickup("Islamabad / Rawalpindi");
      setDropoff("Wedding Hall / Event Venue");
      setSelectedCar("Mercedes-Benz Cabriolet");
    }
  }

  function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault();

    const selectedTripLabel =
      tripTypes.find((t) => t.id === tripType)?.label || "Car Rental";

    const formattedMessage = [
      `*New Booking Request — ${selectedTripLabel}*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Pickup:* ${pickup || "To be confirmed"}`,
      `🏁 *Drop-off:* ${dropoff || "To be confirmed"}`,
      `📅 *Date:* ${date || "Flexible"}`,
      `⏰ *Time:* ${time || "Flexible"}`,
      `🚘 *Vehicle:* ${selectedCar || "Any suitable"}`,
      `👥 *Passengers:* ${passengers}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `Hello Ummat Enterprises, please confirm availability and provide a rate quote for this trip.`,
    ].join("\n");

    const url = createWhatsAppUrl(formattedMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="relative mt-8 overflow-hidden rounded-[16px] border border-[#d8dde5]/80 bg-white shadow-[0_20px_50px_rgba(7,17,31,0.14)]">
      {/* Top Trip Type Tabs */}
      <div className="flex border-b border-[#e9edf3] bg-[#f8fafc]/90 overflow-x-auto p-1.5 scrollbar-none">
        {tripTypes.map((tab) => {
          const isActive = tripType === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTripTypeChange(tab.id)}
              className={`flex flex-1 min-w-[120px] items-center justify-center gap-1.5 rounded-[10px] px-3 py-2.5 text-xs font-bold transition sm:text-sm ${
                isActive
                  ? "bg-[#07111f] text-white shadow-sm"
                  : "text-[#5f6b7a] hover:bg-white hover:text-[#07111f]"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Form Area */}
      <form onSubmit={handleBookingSubmit} className="p-4 sm:p-6">
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pickup */}
          <div>
            <label
              htmlFor="widget-pickup"
              className="block text-xs font-bold uppercase tracking-wider text-[#64748b]"
            >
              Pickup Location
            </label>
            <input
              id="widget-pickup"
              type="text"
              required
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Islamabad Airport, G-10, F-7"
              className="mt-1.5 h-11 w-full rounded-[10px] border border-[#d8dde5] bg-[#fcfdfd] px-3.5 text-xs font-semibold text-[#07111f] outline-none transition placeholder:text-[#94a3b8] focus:border-[#c89400] focus:bg-white focus:ring-2 focus:ring-[#f5b301]/20 sm:text-sm"
            />
          </div>

          {/* Destination */}
          <div>
            <label
              htmlFor="widget-dropoff"
              className="block text-xs font-bold uppercase tracking-wider text-[#64748b]"
            >
              Destination / Drop-off
            </label>
            <input
              id="widget-dropoff"
              type="text"
              required
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="e.g. Hotel, Sector, Outstation"
              className="mt-1.5 h-11 w-full rounded-[10px] border border-[#d8dde5] bg-[#fcfdfd] px-3.5 text-xs font-semibold text-[#07111f] outline-none transition placeholder:text-[#94a3b8] focus:border-[#c89400] focus:bg-white focus:ring-2 focus:ring-[#f5b301]/20 sm:text-sm"
            />
          </div>

          {/* Vehicle Selector */}
          <div>
            <label
              htmlFor="widget-car"
              className="block text-xs font-bold uppercase tracking-wider text-[#64748b]"
            >
              Select Vehicle
            </label>
            <select
              id="widget-car"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-[10px] border border-[#d8dde5] bg-[#fcfdfd] px-3.5 text-xs font-semibold text-[#07111f] outline-none transition focus:border-[#c89400] focus:bg-white focus:ring-2 focus:ring-[#f5b301]/20 sm:text-sm"
            >
              <optgroup label="Luxury & VIP SUVs">
                <option value="Toyota Land Cruiser 300">Toyota Land Cruiser 300 (VIP)</option>
                <option value="Lexus LX">Lexus LX (Executive)</option>
                <option value="Toyota Land Cruiser 200">Toyota Land Cruiser 200 V8</option>
                <option value="Toyota Prado">Toyota Prado (Most Popular)</option>
              </optgroup>
              <optgroup label="Wedding & Luxury Sedans">
                <option value="Mercedes-Benz Cabriolet">Mercedes-Benz Cabriolet (Convertible)</option>
                <option value="Audi A6">Audi A6 (Luxury)</option>
                <option value="Mercedes-Benz Sedan">Mercedes-Benz Sedan</option>
              </optgroup>
              <optgroup label="Family SUVs & Pickups">
                <option value="Toyota Fortuner">Toyota Fortuner (7-Seater)</option>
                <option value="Changan Oshan X7">Changan Oshan X7</option>
                <option value="Toyota Hilux">Toyota Hilux 4x4 (Double-Cab)</option>
                <option value="Toyota Corolla Cross">Toyota Corolla Cross</option>
                <option value="MG HS">MG HS Crossover</option>
              </optgroup>
              <optgroup label="Executive & Daily Sedans">
                <option value="Toyota Corolla">Toyota Corolla (Airport Favorite)</option>
                <option value="Honda Civic">Honda Civic (Executive)</option>
                <option value="Toyota Aqua">Toyota Aqua (Economical)</option>
              </optgroup>
              <optgroup label="Group Vans & Minibuses">
                <option value="Toyota Hiace">Toyota Hiace Grand Cabin (14-Seats)</option>
                <option value="Toyota Coaster">Toyota Coaster (29-Seats)</option>
              </optgroup>
            </select>
          </div>

          {/* Passenger count */}
          <div>
            <label
              htmlFor="widget-passengers"
              className="block text-xs font-bold uppercase tracking-wider text-[#64748b]"
            >
              Passengers & Date
            </label>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
              <select
                id="widget-passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="h-11 rounded-[10px] border border-[#d8dde5] bg-[#fcfdfd] px-2 text-xs font-semibold text-[#07111f] outline-none transition focus:border-[#c89400] focus:bg-white"
              >
                <option value="1-2 Passengers">1-2 Pass.</option>
                <option value="3-4 Passengers">3-4 Pass.</option>
                <option value="5-7 Passengers">5-7 Pass.</option>
                <option value="8-14 Passengers (Hiace)">8-14 Pass.</option>
                <option value="15-29 Passengers (Coaster)">15+ Pass.</option>
              </select>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-11 rounded-[10px] border border-[#d8dde5] bg-[#fcfdfd] px-2 text-xs font-semibold text-[#07111f] outline-none transition focus:border-[#c89400] focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* CTA Button & Trust Microcopy */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-[#f0f3f6] pt-4 sm:flex-row">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748b]">
            <span className="flex items-center gap-1 font-medium text-[#166534]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Professional Chauffeur Included
            </span>
            <span className="hidden text-[#cbd5e1] sm:inline">•</span>
            <span className="flex items-center gap-1">
              ⚡ Instant 5-min WhatsApp Quote
            </span>
            <span className="hidden text-[#cbd5e1] sm:inline">•</span>
            <span className="flex items-center gap-1">
              📍 G-10 Markaz Islamabad
            </span>
          </div>

          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 text-sm font-bold text-[#07111f] shadow-[0_12px_28px_rgba(37,211,102,0.32)] transition hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:ring-4 focus:ring-[#25d366]/30 sm:w-auto"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Get Instant Quote on WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
