import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Car Rental Services in Islamabad | Airport, Weddings & Outstation",
  description:
    "Explore Ummat Enterprises' chauffeur-driven car rental services in Islamabad: 24/7 airport transfers, luxury wedding rentals, corporate protocol, outstation northern tours, and monthly fleet hire.",
  keywords: [
    "car rental services Islamabad",
    "rent a car with driver Islamabad",
    "airport transfer Islamabad",
    "wedding car rental Islamabad",
    "outstation car rental Pakistan",
    "monthly car rental Islamabad",
    "corporate chauffeur service Islamabad",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/services",
  },
};

const servicesBreadcrumbsJsonLd = {
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
      name: "Services",
      item: "https://www.ummatrentacar.com/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbsJsonLd) }}
      />

      <PageHeader
        title="Chauffeur Services Tailored for Every Journey"
        description="Book immaculate cars with experienced, licensed drivers for airport transfers, executive business, luxury weddings, family tours, and monthly contracts."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Service Options"
            title="Dependable Ground Travel from Pickup to Destination"
            description="Select any specialized service below to view package options, recommended vehicles, and get updated rates on WhatsApp."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Consultation CTA */}
      <section className="bg-[#07111f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#f5b301]">
              Instant Travel Advice
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
              Need Help Deciding the Best Service & Vehicle?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#c6d0dd] sm:text-base">
              Share your route, headcount, and luggage volume. Our Islamabad dispatch desk will recommend the optimal car and driver arrangement.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton
              message="Hello Ummat Enterprises, please recommend the best car rental service for my upcoming trip."
              className="text-sm font-bold shadow-md"
            />
            <Link
              href="/booking"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:border-[#f5b301] hover:bg-white/10"
            >
              Open Booking Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
