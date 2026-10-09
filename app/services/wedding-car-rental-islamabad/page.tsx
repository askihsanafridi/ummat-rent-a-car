import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Wedding Car Rental in Islamabad | Decorated Luxury Cars & Chauffeurs",
  description:
    "Luxury wedding car rental in Islamabad & Rawalpindi. Decorated Mercedes Cabriolet, Audi A6, Mercedes-Benz, Land Cruiser 300, and Prado with professional chauffeurs for bridal entries & barath convoys.",
  keywords: [
    "wedding car rental Islamabad",
    "wedding car with flowers Islamabad",
    "Mercedes wedding car rental Islamabad",
    "Audi wedding car rental Pakistan",
    "bridal car rental Rawalpindi",
    "luxury car for wedding Islamabad",
    "decorated car for rent Islamabad",
    "barath car convoy rental Islamabad",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/services/wedding-car-rental-islamabad",
  },
};

const weddingCars = cars.filter((c) =>
  [
    "mercedes-benz-cabriolet",
    "audi-a6",
    "mercedes-benz-sedan",
    "toyota-land-cruiser-300",
    "toyota-prado",
  ].includes(c.slug)
);

const weddingFaqs = [
  {
    q: "Do you provide fresh flower decoration with wedding cars?",
    a: "Yes! We coordinate fresh floral bouquets, ribbons, and custom heart-shaped flower arrangements upon your preference so your car arrives ready for photo sessions and ceremony arrivals.",
  },
  {
    q: "Can I book an open-top convertible for the wedding entry?",
    a: "Yes, our white Mercedes-Benz Cabriolet is one of Islamabad's most popular open-top wedding cars for groom arrivals, bridal entries, and cinematic video shoots.",
  },
  {
    q: "Can you provide multi-car packages for barath and family guests?",
    a: "Absolutely. We offer convoy packages combining a bridal luxury car (Mercedes or Audi) alongside Land Cruisers, Prados, and Toyota Hiace / Coasters for guests.",
  },
  {
    q: "How early should I book for wedding season in Islamabad?",
    a: "Wedding season (November through March) books up rapidly. We recommend reserving your wedding car at least 1-2 weeks in advance to secure your preferred vehicle.",
  },
];

const weddingJsonLd = {
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
          name: "Wedding Car Rental",
          item: "https://www.ummatrentacar.com/services/wedding-car-rental-islamabad",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Luxury Wedding Car Rental Islamabad",
      description:
        "Premier luxury wedding car rental in Islamabad & Rawalpindi featuring decorated convertibles, executive sedans, and presidential SUVs.",
      provider: {
        "@type": "AutoRental",
        name: "Ummat Enterprises Rent-a-Car",
        telephone: "+92 335 6868001",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: weddingFaqs.map((faq) => ({
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

export default function WeddingCarRentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingJsonLd) }}
      />

      <PageHeader
        title="Luxury Wedding Car Rentals in Islamabad & Rawalpindi"
        description="Make your special day unforgettable with elegant decorated cars, open-top convertibles, luxury sedans, and presidential escort SUVs with uniformed chauffeurs."
      />

      {/* Main Wedding Service Details */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-[#fff4cf] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#9a7100]">
                💍 Memorable Celebrations & Royalty
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#07111f] sm:text-4xl">
                Arrive in Elegance on Your Big Day
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5f6b7a]">
                A wedding ceremony deserves perfection. Ummat Enterprises provides immaculate luxury cars prepared with showroom polish, courteous chauffeurs, and customized flower decorations.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f8] text-xs font-bold text-[#db2777]">
                    💐
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Custom Floral Styling:</strong> Fresh red rose garlands, ribbon designs, or minimalist contemporary bouquets tailored to your wedding theme.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f8] text-xs font-bold text-[#db2777]">
                    👔
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Polite, Uniformed Chauffeur:</strong> Experienced drivers who understand wedding protocols, bridal timing, and polite hospitality.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f8] text-xs font-bold text-[#db2777]">
                    📸
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Photo & Video Session Ready:</strong> Cars arrive early for couple photo sessions and cinematic venue arrival coverage.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message="Hello Ummat Enterprises, I want to book a luxury wedding car in Islamabad."
                  className="font-bold text-sm shadow-md"
                >
                  Book Wedding Car on WhatsApp
                </WhatsAppButton>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-bold text-[#07111f] transition hover:border-[#d4a329]"
                >
                  Talk to Our Wedding Desk
                </Link>
              </div>
            </div>

            {/* Wedding Packages Showcase */}
            <div className="rounded-[16px] border border-[#e2e8f0] bg-[#fffdfa] p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-[#07111f]">
                Wedding Packages & Fleet Options
              </h3>
              <p className="mt-1 text-xs text-[#64748b]">
                Tailored arrangements for Barat, Walima, and Nikkah events:
              </p>
              <div className="mt-5 space-y-3 text-xs sm:text-sm">
                <div className="rounded-[12px] bg-white p-4 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Mercedes Cabriolet (Open-Top)</p>
                  <p className="text-[#64748b] mt-1">Groom entry, outdoor photography, and dramatic bridal entries.</p>
                </div>
                <div className="rounded-[12px] bg-white p-4 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Audi A6 & Mercedes Sedan</p>
                  <p className="text-[#64748b] mt-1">Executive luxury, quiet cabins, and sophisticated ribbon decoration.</p>
                </div>
                <div className="rounded-[12px] bg-white p-4 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Land Cruiser 300 / Prado Convoys</p>
                  <p className="text-[#64748b] mt-1">Commanding SUV presence for family VIPs and security protocol.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wedding Cars Grid */}
      <section className="border-t border-[#e2e8f0] bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d4a329]">
              Featured Wedding Fleet
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#07111f]">
              Popular Wedding Vehicles
            </h2>
            <p className="mt-2 text-sm text-[#5f6b7a]">
              Inspect photos, decoration samples, and reach out on WhatsApp for wedding dates:
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {weddingCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Wedding FAQs */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 border-t border-[#e2e8f0]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-[#07111f]">
            Wedding Car Rental — Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-4">
            {weddingFaqs.map((faq) => (
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
