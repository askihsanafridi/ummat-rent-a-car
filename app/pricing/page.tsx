import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Pricing & Rates - Rent-a-Car Islamabad",
  description:
    "Transparent pricing for car rental in Islamabad. Rates for city travel, airport transfers, outstation trips, weddings, and monthly rentals. Contact us for a custom quote.",
  keywords: [
    "car rental prices Islamabad",
    "rent a car rates Islamabad",
    "airport transfer cost Islamabad",
    "outstation travel rates Pakistan",
    "wedding car rental prices Islamabad",
    "monthly car rental cost Pakistan",
  ],
};

const pricingPlans = [
  {
    name: "City Travel",
    description: "Hourly and daily city rides within Islamabad and Rawalpindi",
    features: [
      "Professional driver included",
      "Clean, AC vehicles",
      "Flexible hourly booking",
      "All sedan and hatchback options",
      "Fuel included for city travel",
    ],
    note: "Starting from competitive hourly rates. Contact us for exact pricing.",
  },
  {
    name: "Airport Transfer",
    description: "Pickup and drop-off from Islamabad International Airport",
    features: [
      "Flight tracking for delays",
      "Luggage space guaranteed",
      "Meet and greet available",
      "24/7 availability",
      "All car categories available",
    ],
    note: "Fixed rates based on car type. Contact us for a quote.",
  },
  {
    name: "Outstation Travel",
    description: "Long-distance travel to destinations across Pakistan",
    features: [
      "Experienced route-aware drivers",
      "Fuel and driver charges included",
      "Flexible stopovers",
      "All vehicle types available",
      "One-way and round-trip options",
    ],
    note: "Pricing based on distance, car type, and trip duration. Contact us for a custom quote.",
  },
  {
    name: "Wedding Rental",
    description: "Premium cars for weddings and special events",
    features: [
      "Decorated car options",
      "Bridal and family transport",
      "Multiple car packages",
      "Flexible hourly blocks",
      "SUV and sedan options",
    ],
    note: "Custom packages available. Contact us for wedding season pricing.",
  },
  {
    name: "Monthly Rental",
    description: "Long-term rental plans for businesses and regular commuters",
    features: [
      "Dedicated driver",
      "Flexible monthly plans",
      "Maintenance included",
      "Customizable usage limits",
      "Priority booking",
    ],
    note: "Contact us for monthly plan options and corporate discounts.",
  },
  {
    name: "VIP & Corporate",
    description: "Premium service for executives and special occasions",
    features: [
      "Premium SUV and sedan options",
      "Protocol-trained drivers",
      "Corporate billing available",
      "Dedicated account manager",
      "Flexible scheduling",
    ],
    note: "Custom corporate packages available. Contact us for a consultation.",
  },
];

const includedFeatures = [
  "Professional, experienced driver",
  "Clean, well-maintained vehicles",
  "Air-conditioned cars",
  "WhatsApp booking support",
  "24/7 airport availability",
  "Flexible cancellation",
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Transparent pricing for every journey"
        description="From quick city rides to long outstation trips, we offer competitive rates with no hidden charges. Contact us on WhatsApp for an instant quote."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Pricing"
            title="Simple, transparent car rental rates"
            description="Every trip is priced based on car type, distance, and duration. We believe in clear communication with no surprise charges."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className="flex flex-col rounded-[8px] border border-[#e7ebf0] bg-white p-6 shadow-[0_16px_44px_rgba(7,17,31,0.06)]"
              >
                <h2 className="text-xl font-semibold text-[#07111f]">
                  {plan.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#5f6b7a]">
                  {plan.description}
                </p>
                <ul className="mt-5 grid flex-1 gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#253041]"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f5b301]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-medium text-[#8b95a3]">
                  {plan.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="What's included"
            title="Every booking includes professional service"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-[8px] border border-[#e7ebf0] bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff4cf] text-sm font-semibold text-[#9a7100]">
                  ✓
                </span>
                <p className="text-sm font-medium text-[#253041]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Get an instant quote on WhatsApp
          </h2>
          <p className="mt-4 text-base leading-8 text-[#c6d0dd]">
            Share your trip details and receive a personalized quote within
            minutes. No commitment required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton message="Hello Ummat Enterprises, I would like a quote for a car rental." />
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-[#f5b301] hover:bg-white/10"
            >
              View contact options
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
