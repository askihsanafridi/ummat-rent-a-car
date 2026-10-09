import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Rent a Car with Driver in Islamabad | Professional Chauffeurs",
  description:
    "Hire clean cars with professional, courteous drivers in Islamabad and Rawalpindi. Hourly, daily, and monthly chauffeur service for business, embassies, and family travel.",
  keywords: [
    "rent a car with driver Islamabad",
    "chauffeur service Islamabad",
    "car rental with driver Rawalpindi",
    "executive driver car hire Islamabad",
    "daily car rental with driver Pakistan",
    "car hire with driver Islamabad Blue Area",
    "chauffeur driven cars Islamabad",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/services/rent-a-car-with-driver-islamabad",
  },
};

const chauffeurCars = cars.filter((c) =>
  [
    "toyota-corolla",
    "honda-civic",
    "toyota-prado",
    "toyota-land-cruiser-200",
    "toyota-fortuner",
    "toyota-hiace",
  ].includes(c.slug)
);

const chauffeurFaqs = [
  {
    q: "Why should I rent a car with a driver rather than self-drive?",
    a: "Chauffeur-driven rentals relieve you of traffic stress, parking hassles in busy commercial areas (like Blue Area or Saddar), and route navigation. Our verified drivers handle vehicle upkeep and safety while you relax or work.",
  },
  {
    q: "What are the working hours for the driver during a full-day booking?",
    a: "Standard full-day bookings cover 10 to 12 hours within the twin cities. Overtime can easily be arranged on hourly notice.",
  },
  {
    q: "Are the drivers familiar with Islamabad protocol and security checkpoints?",
    a: "Yes. All our chauffeurs are licensed, background-checked, and experienced with the Red Zone, Diplomatic Enclave, government ministries, and corporate headquarters.",
  },
  {
    q: "Can I book a car with driver for multiple days or weeks?",
    a: "Yes. We offer attractive weekly and monthly packages with a dedicated vehicle and driver for business executives, families, and project consultants.",
  },
];

const chauffeurJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Rent a Car with Driver",
          item: "https://www.ummatrentacar.com/services/rent-a-car-with-driver-islamabad",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Chauffeur-Driven Car Rental Islamabad",
      description:
        "Professional chauffeur service with clean, air-conditioned sedans, SUVs, and vans for city appointments and long-distance travel.",
      provider: {
        "@type": "AutoRental",
        name: "Ummat Enterprises Rent-a-Car",
        telephone: "+92 335 6868001",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: chauffeurFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function RentWithDriverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chauffeurJsonLd) }}
      />

      <PageHeader
        title="Rent a Car with Driver in Islamabad & Rawalpindi"
        description="Relax in pristine, air-conditioned comfort while our courteous, experienced chauffeurs take care of the road, traffic, and parking."
      />

      {/* Main Service Content */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d4a329]">
                Professional Chauffeur Service
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#07111f] sm:text-4xl">
                Your Personal Chauffeur in Pakistan's Capital
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5f6b7a]">
                Navigating Islamabad and Rawalpindi during peak hours or attending multiple high-profile meetings requires dependable wheels. With Ummat Enterprises, your driver is on standby, attentive, and respectful of your schedule.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Background-Checked Chauffeurs:</strong> Polite, non-smoking, professionally groomed drivers with valid commercial licenses.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Route Knowledge & Punctuality:</strong> Expert awareness of Islamabad expressway, Margalla road, Rawalpindi ring roads, and fast bypass routes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Flexible Hourly & Daily Terms:</strong> Need a car for 4 hours, a 12-hour day, or an entire month? We accommodate your itinerary.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message="Hello Ummat Enterprises, I want to rent a car with driver in Islamabad."
                  className="font-bold text-sm shadow-md"
                >
                  Book Chauffeur on WhatsApp
                </WhatsAppButton>
                <Link
                  href="/booking"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-bold text-[#07111f] transition hover:border-[#d4a329]"
                >
                  Online Booking Form
                </Link>
              </div>
            </div>

            {/* Chauffeur Packages Matrix */}
            <div className="rounded-[16px] border border-[#e2e8f0] bg-[#f8fafc] p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-[#07111f]">
                Chauffeur Service Options
              </h3>
              <p className="mt-1 text-xs text-[#64748b]">
                Designed for both local residents and international visitors:
              </p>
              <div className="mt-5 space-y-3 text-xs sm:text-sm">
                <div className="rounded-[12px] bg-white p-4 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">City Full-Day Package (10-12 Hours)</p>
                  <p className="text-[#64748b] mt-1">Car and chauffeur dedicated to you all day across Islamabad & Rawalpindi.</p>
                </div>
                <div className="rounded-[12px] bg-white p-4 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Corporate & Diplomatic Protocol</p>
                  <p className="text-[#64748b] mt-1">Executive sedans (Civic/Corolla) and luxury SUVs (Prado/Land Cruiser) with protocol drivers.</p>
                </div>
                <div className="rounded-[12px] bg-white p-4 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Monthly Dedicated Chauffeur</p>
                  <p className="text-[#64748b] mt-1">Dedicated vehicle and driver on a monthly contract with maintenance included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Chauffeur Fleet */}
      <section className="border-t border-[#e2e8f0] bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d4a329]">
              Featured Chauffeur Cars
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#07111f]">
              Popular Vehicles with Driver
            </h2>
            <p className="mt-2 text-sm text-[#5f6b7a]">
              Every car includes dual AC, sanitized interior, and a professional driver:
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chauffeurCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Chauffeur FAQs */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 border-t border-[#e2e8f0]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-[#07111f]">
            Frequently Asked Questions — Rent a Car with Driver
          </h2>
          <div className="mt-8 grid gap-4">
            {chauffeurFaqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-sm"
              >
                <h3 className="font-bold text-[#07111f]">{faq.q}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5f6b7a] sm:text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
