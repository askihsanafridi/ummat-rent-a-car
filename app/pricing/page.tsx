import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Car Rental Rates & Pricing Islamabad | Contact on WhatsApp for Latest Prices",
  description:
    "For updated and latest car rental prices in Islamabad, contact Ummat Enterprises on WhatsApp. Get instant, customized chauffeur-driven rental quotes for luxury SUVs, sedans, and vans.",
  keywords: [
    "car rental prices Islamabad",
    "rent a car rates Islamabad",
    "Prado rent per day Islamabad",
    "airport transfer cost Islamabad",
    "wedding car rental price Islamabad",
    "Toyota Hiace daily rent Islamabad",
    "cheap rent a car Islamabad rates",
    "rent a car Islamabad WhatsApp quote",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/pricing",
  },
};

const pricingCategories = [
  {
    category: "Economy Sedans (Corolla / Aqua)",
    features: "Clean AC, 4-5 Seats, 2-3 Bags, Chauffeur Included",
    bestFor: "Airport runs, city errands, daily commutes",
  },
  {
    category: "Executive Sedans (Honda Civic)",
    features: "Premium styling, 5 Seats, Dual AC, Chauffeur Included",
    bestFor: "Business appointments, executive arrivals",
  },
  {
    category: "Family 7-Seaters (Fortuner / Oshan X7)",
    features: "High clearance, 7 Seats, 3-4 Bags, Chauffeur Included",
    bestFor: "Family trips, airport with luggage, outstation",
  },
  {
    category: "Luxury VIP SUVs (Toyota Prado TX/TZ)",
    features: "Commanding road presence, 7 Seats, Chauffeur Included",
    bestFor: "VIP protocol, Northern areas tours, weddings",
  },
  {
    category: "Presidential SUVs (Land Cruiser 200/300 / Lexus)",
    features: "High-level diplomatic spec, V8 / Twin Turbo, Protocol Driver",
    bestFor: "Government delegations, luxury VIP arrivals",
  },
  {
    category: "Wedding Luxury (Mercedes Cabriolet / Audi A6)",
    features: "Open-top or executive luxury, ribbon/flower decor option",
    bestFor: "Bridal entries, groom entry, photo sessions",
  },
  {
    category: "Group Vans (Toyota Hiace Grand Cabin 14-Seat)",
    features: "High-roof, 14 Seats, 8+ large bags, Chauffeur Included",
    bestFor: "Large families, wedding guests, tour parties",
  },
  {
    category: "Tour Minibuses (Toyota Coaster 29-Seat)",
    features: "29 Seats, heavy luggage boot, experienced tour driver",
    bestFor: "Corporate retreats, wedding convoys, group tours",
  },
];

const includedFeatures = [
  "Verified, courteous professional chauffeur",
  "Clean, sanitized vehicle with chilling AC",
  "24/7 flight-tracked airport availability",
  "Tire inspection and roadside assistance warranty",
  "Zero hidden booking commissions or surprise surcharges",
  "Direct WhatsApp confirmation in under 5 minutes",
];

const quoteSteps = [
  {
    step: "01",
    title: "Send Your Trip Details",
    description:
      "Click the WhatsApp button and share your pickup location, drop-off destination, travel dates, and preferred car type.",
  },
  {
    step: "02",
    title: "Receive Instant Updated Rates",
    description:
      "Our team calculates the current fuel and route estimates and replies with accurate, updated rates and car photos within 5 minutes.",
  },
  {
    step: "03",
    title: "Confirmed Booking & On-Time Arrival",
    description:
      "Confirm your booking on WhatsApp. Your sanitized vehicle and courteous chauffeur arrive at your doorstep 15 minutes before departure.",
  },
];

const pricingBreadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ummatrentacar.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://www.ummatrentacar.com/pricing",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingBreadcrumbsJsonLd) }}
      />

      <PageHeader
        title="Car Rental Rates in Islamabad"
        description="For updated and latest rental prices, please contact us on WhatsApp. We provide transparent, competitive rates customized to your route, duration, and schedule."
      />

      {/* WhatsApp Pricing Notice Callout */}
      <section className="bg-white px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[20px] border border-[#25d366]/30 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] p-6 shadow-sm sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-bold text-[#15803d]">
                  <span className="h-2 w-2 rounded-full bg-[#25d366] animate-pulse" />
                  Live Rate Inquiries on WhatsApp
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-[#07111f] sm:text-3xl">
                  Contact Us on WhatsApp for Updated & Latest Prices
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569] sm:text-base">
                  Rental rates vary based on current fuel rates, season, and route details (city travel vs. outstation mountain roads). To ensure you always receive the most accurate and discounted rate without outdated website estimates, our fleet manager provides instant quotes directly on WhatsApp.
                </p>
              </div>

              <div className="shrink-0">
                <WhatsAppButton
                  message="Hello Ummat Enterprises, please share the latest and updated car rental prices for your fleet."
                  className="font-bold text-sm shadow-md"
                >
                  Get Latest Rates on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Category Rate Inquiries */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Fleet Rate Overview"
            title="Inquire Current Rates by Vehicle Category"
            description="Select any vehicle category below and click Inquire to request current rates, availability, and vehicle photos directly on WhatsApp."
            align="center"
          />

          <div className="mt-10 overflow-x-auto rounded-[16px] border border-[#e2e8f0] shadow-sm">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] bg-[#f8fafc] text-xs font-bold uppercase tracking-wider text-[#07111f]">
                  <th className="py-4 px-5">Vehicle Category</th>
                  <th className="py-4 px-5">Rate Status</th>
                  <th className="py-4 px-5">Key Inclusions</th>
                  <th className="py-4 px-5 text-center">Get Quote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9] text-xs sm:text-sm text-[#334155]">
                {pricingCategories.map((row) => (
                  <tr key={row.category} className="transition hover:bg-[#fffdf5]">
                    <td className="py-4 px-5 font-bold text-[#07111f]">
                      {row.category}
                      <span className="block text-[11px] font-normal text-[#64748b] mt-0.5">
                        {row.bestFor}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 text-xs font-bold text-[#047857]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                        Rates on WhatsApp
                      </span>
                    </td>
                    <td className="py-4 px-5 text-[#64748b]">
                      {row.features}
                    </td>
                    <td className="py-4 px-5 text-center">
                      <WhatsAppButton
                        message={`Hello Ummat Enterprises, please share the updated and latest rental rates for ${row.category}.`}
                        className="h-9 px-3.5 text-xs font-bold"
                      >
                        Inquire
                      </WhatsAppButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-[#64748b] text-center">
            * All rentals include vehicle and verified professional chauffeur. Fuel, tolls, and any outstation night allowances are clarified transparently based on your route itinerary.
          </p>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="border-t border-[#e2e8f0] bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Simple Booking"
            title="How to Get Your Rate Quote in 3 Steps"
            description="Booking your chauffeur-driven car is fast, direct, and hassle-free."
            align="center"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quoteSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-[16px] border border-[#e2e8f0] bg-white p-6 shadow-sm"
              >
                <span className="text-3xl font-extrabold text-[#d4a329]/80">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[#07111f]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5f6b7a] sm:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-t border-[#e2e8f0] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Standard Guarantees"
            title="Every Booking Includes Five-Star Chauffeur Standards"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-sm font-bold text-[#059669]">
                  ✓
                </span>
                <p className="text-xs font-semibold text-[#1e293b] sm:text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Quote Banner */}
      <section className="bg-[#07111f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f5b301]">
            Instant Quotations
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            Need an Updated Price Quote Right Now?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#c6d0dd] sm:text-base">
            Send your pickup location, dates, and destination on WhatsApp. We provide exact, all-inclusive rates and available car photos in under 5 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton
              message="Hello Ummat Enterprises, I would like to get updated prices for a car rental."
              className="text-sm font-bold shadow-md"
            >
              Chat on WhatsApp for Latest Rates
            </WhatsAppButton>
            <Link
              href="/fleet"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:border-[#f5b301] hover:bg-white/10"
            >
              Browse Full Fleet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
