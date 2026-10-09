import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Islamabad Airport Car Rental (ISB) | 24/7 Chauffeur Pickup & Drop",
  description:
    "Reliable 24/7 Islamabad International Airport (ISB) car rental and transfer service. Flight-tracked meet & greet, clean sedans, Prado & Hiace with professional drivers. Fixed rates.",
  keywords: [
    "rent a car Islamabad airport",
    "Islamabad airport car rental",
    "ISB airport pickup dropoff",
    "airport transfer Islamabad",
    "car rental with driver Islamabad airport",
    "Islamabad airport to Serena hotel taxi",
    "Islamabad airport to Rawalpindi rent a car",
    "24/7 airport car service Islamabad",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/services/airport-transfer-islamabad",
  },
};

const airportCars = cars.filter((c) =>
  ["toyota-corolla", "toyota-prado", "toyota-hiace", "honda-civic"].includes(c.slug)
);

const airportFaqs = [
  {
    q: "How does the driver find me at Islamabad International Airport (ISB)?",
    a: "Your chauffeur waits outside the arrival terminal gate with a name sign or coordinates directly with you on WhatsApp as soon as your plane lands.",
  },
  {
    q: "What if my flight is delayed?",
    a: "We track your flight number online in real time. If your arrival is delayed, our driver automatically adjusts pickup timing without extra waiting charges.",
  },
  {
    q: "Can I book a late-night or early-morning airport pickup?",
    a: "Yes! Our Islamabad airport transfer service operates 24 hours a day, 7 days a week on advance WhatsApp booking.",
  },
  {
    q: "Which car is recommended if I have a lot of international luggage?",
    a: "For 1-3 passengers with 2-3 bags, a Toyota Corolla or Civic is ideal. For families with 4-8 large suitcases, we recommend the Toyota Prado or Toyota Hiace Grand Cabin.",
  },
];

const airportJsonLd = {
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
          name: "Islamabad Airport Transfer",
          item: "https://www.ummatrentacar.com/services/airport-transfer-islamabad",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Islamabad Airport Transfer & Car Rental (ISB)",
      description:
        "Professional 24/7 chauffeur-driven airport pickup and drop-off service for Islamabad International Airport with live flight tracking.",
      provider: {
        "@type": "AutoRental",
        name: "Ummat Enterprises Rent-a-Car",
        telephone: "+92 335 6868001",
      },
      areaServed: {
        "@type": "City",
        name: "Islamabad",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: airportFaqs.map((faq) => ({
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

export default function AirportTransferPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airportJsonLd) }}
      />

      <PageHeader
        title="24/7 Islamabad Airport Car Rental & Transfers (ISB)"
        description="Punctual, flight-tracked chauffeur pickups and drop-offs between Islamabad International Airport and all sectors of Islamabad, Rawalpindi, and surrounding cities."
      />

      {/* Main Content & Benefits */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d4a329]">
                Zero Waiting Stress • 24/7 Service
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#07111f] sm:text-4xl">
                Arrive in Islamabad with Total Peace of Mind
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5f6b7a]">
                Whether you are an overseas Pakistani returning home, a business executive attending meetings in Blue Area, or a tourist embarking on a northern tour, Ummat Enterprises eliminates airport taxi hassles.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Live Flight Tracking:</strong> We monitor your flight arrival time so our driver is waiting before you clear customs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Terminal Meet & Greet:</strong> Driver assists with heavy luggage from the terminal trolley straight to your air-conditioned car.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Transparent Fixed Pricing:</strong> Fixed rates to G-sectors, F-sectors, DHA, Bahria Town, and Rawalpindi without surprise surge fares.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message="Hello Ummat Enterprises, I want to book an Islamabad Airport pickup/drop-off."
                  className="font-bold text-sm shadow-md"
                >
                  Book Airport Transfer on WhatsApp
                </WhatsAppButton>
                <Link
                  href="/booking"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-bold text-[#07111f] transition hover:border-[#d4a329]"
                >
                  Online Booking Form
                </Link>
              </div>
            </div>

            {/* Coverage Zones Matrix */}
            <div className="rounded-[16px] border border-[#e2e8f0] bg-[#f8fafc] p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-[#07111f]">
                Airport Transfer Coverage & Destinations
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                We serve all areas across the twin cities directly from Islamabad International Airport (ISB):
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Islamabad Sectors</p>
                  <p className="text-[#64748b] mt-0.5">F-6, F-7, F-8, F-10, F-11, G-10, G-11, E-7, Blue Area</p>
                </div>
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">DHA & Bahria Town</p>
                  <p className="text-[#64748b] mt-0.5">Bahria Town Phase 1-8, DHA Phases 1-5, Gulberg Greens</p>
                </div>
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Rawalpindi Cantt</p>
                  <p className="text-[#64748b] mt-0.5">Saddar, Westridge, Chaklala, Satellite Town</p>
                </div>
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Direct Outstation</p>
                  <p className="text-[#64748b] mt-0.5">Direct airport connection to Murree, Abbottabad, Peshawar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Airport Vehicles */}
      <section className="border-t border-[#e2e8f0] bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d4a329]">
              Recommended Vehicles
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#07111f]">
              Top Choices for Airport Transfers
            </h2>
            <p className="mt-2 text-sm text-[#5f6b7a]">
              Choose based on passenger headcount and luggage volume:
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {airportCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Airport FAQs */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 border-t border-[#e2e8f0]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-[#07111f]">
            Frequently Asked Questions — Islamabad Airport Transfers
          </h2>
          <div className="mt-8 grid gap-4">
            {airportFaqs.map((faq) => (
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
