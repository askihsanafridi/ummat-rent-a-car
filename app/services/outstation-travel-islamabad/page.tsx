import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Outstation Car Rental from Islamabad | Murree, Swat, Naran & Lahore",
  description:
    "Intercity and Northern area car rental with driver from Islamabad. Comfortable SUVs, 4x4s, and Hiace vans for Murree, Abbottabad, Swat, Naran, Hunza, Skardu, and Lahore.",
  keywords: [
    "outstation car rental Islamabad",
    "Islamabad to Murree car rental",
    "Islamabad to Lahore car hire",
    "rent a car Islamabad to Northern areas",
    "Prado for rent Northern areas Pakistan",
    "Hiace van rental for family tour Pakistan",
    "Islamabad to Swat car rental with driver",
    "intercity car rental Pakistan",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/services/outstation-travel-islamabad",
  },
};

const outstationCars = cars.filter((c) =>
  [
    "toyota-prado",
    "toyota-fortuner",
    "toyota-hilux",
    "toyota-hiace",
    "toyota-coaster",
    "toyota-corolla",
  ].includes(c.slug)
);

const outstationFaqs = [
  {
    q: "Can I rent a car with driver from Islamabad to Murree or Nathia Gali?",
    a: "Yes! Murree, Patriata, Bhurban, and the Galyat region are our most frequent destinations. Our drivers know mountain roads thoroughly and provide safe driving in all weather conditions.",
  },
  {
    q: "Do you offer tours to Naran, Kaghan, Swat, and Hunza?",
    a: "Yes. We arrange multi-day tours to Swat (Kalam, Malam Jabba), Kaghan Valley (Naran, Saif-ul-Malook, Babusar Pass), and Gilgit-Baltistan (Hunza, Skardu) with sturdy 4x4 SUVs and high-roof Hiace vans.",
  },
  {
    q: "How is outstation pricing calculated?",
    a: "Outstation travel is priced either on a per-kilometer basis plus driver allowance, or as an all-inclusive daily package covering the car, driver, fuel, and tolls. We provide a custom transparent quote on WhatsApp before confirmation.",
  },
  {
    q: "Does the client need to provide the driver's food and stay during outstation trips?",
    a: "A reasonable daily driver food & accommodation allowance is included in outstation package quotations, so you do not have to worry about driver lodging.",
  },
];

const outstationJsonLd = {
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
          name: "Outstation Travel",
          item: "https://www.ummatrentacar.com/services/outstation-travel-islamabad",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Outstation Car Rental & Northern Area Tours from Islamabad",
      description:
        "Intercity car rental service connecting Islamabad to Murree, Northern areas of Pakistan, and major motorway cities with skilled chauffeurs.",
      provider: {
        "@type": "AutoRental",
        name: "Ummat Enterprises Rent-a-Car",
        telephone: "+92 335 6868001",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: outstationFaqs.map((faq) => ({
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

export default function OutstationTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(outstationJsonLd) }}
      />

      <PageHeader
        title="Outstation Car Rental from Islamabad & Northern Tours"
        description="Explore Pakistan with confidence. Reliable 4x4 SUVs, family vans, and sedans with skilled chauffeurs trained for motorway and mountain routes."
      />

      {/* Main Outstation Content */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d4a329]">
                🏔️ Intercity & Tourism Specialists
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#07111f] sm:text-4xl">
                Travel Across Pakistan in Safe, Reliable Hands
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5f6b7a]">
                Long-distance highway travel and high-altitude mountain passes require two things: a mechanically sound, well-maintained vehicle, and a driver with sharp mountain instincts. Ummat Enterprises excels at both.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>Mountain Highway Experts:</strong> Chauffeurs skilled on the Murree Expressway, Hazara Motorway, Karakoram Highway (KKH), and winding valley tracks.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>4x4 SUVs & Group Vans:</strong> Robust Toyota Prado, Fortuner, Hilux, and 14-seater Hiace vans equipped for steep grades and luggage.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-xs font-bold text-[#059669]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#1e293b]">
                    <strong>One-Way & Round-Trip Packages:</strong> Flexible drop-offs to Lahore, Faisalabad, Peshawar, or multi-day return leisure itineraries.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message="Hello Ummat Enterprises, I want to book an outstation car rental from Islamabad."
                  className="font-bold text-sm shadow-md"
                >
                  Get Outstation Quote on WhatsApp
                </WhatsAppButton>
                <Link
                  href="/booking"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-bold text-[#07111f] transition hover:border-[#d4a329]"
                >
                  Online Trip Request
                </Link>
              </div>
            </div>

            {/* Popular Routes Matrix */}
            <div className="rounded-[16px] border border-[#e2e8f0] bg-[#f8fafc] p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-[#07111f]">
                Top Destinations from Islamabad
              </h3>
              <p className="mt-1 text-xs text-[#64748b]">
                Comfortable pickup right from your home or airport:
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Murree & Galyat</p>
                  <p className="text-[#64748b] mt-0.5">Mall Road, Patriata, Bhurban, Nathia Gali, Ayubia</p>
                </div>
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Kaghan & Naran</p>
                  <p className="text-[#64748b] mt-0.5">Balakot, Shogran, Naran, Saif-ul-Malook, Babusar</p>
                </div>
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Swat Valley</p>
                  <p className="text-[#64748b] mt-0.5">Mingora, Malam Jabba, Bahrain, Kalam, Mahodand</p>
                </div>
                <div className="rounded-[10px] bg-white p-3 border border-[#eef2f6]">
                  <p className="font-bold text-[#07111f]">Motorway Cities</p>
                  <p className="text-[#64748b] mt-0.5">Lahore (M-2), Peshawar (M-1), Faisalabad (M-4)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Outstation Fleet */}
      <section className="border-t border-[#e2e8f0] bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d4a329]">
              Built for Long Distances
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#07111f]">
              Recommended Outstation Vehicles
            </h2>
            <p className="mt-2 text-sm text-[#5f6b7a]">
              Robust suspension, ample luggage volume, and chilled AC:
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outstationCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Outstation FAQs */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 border-t border-[#e2e8f0]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-[#07111f]">
            Frequently Asked Questions — Outstation Travel
          </h2>
          <div className="mt-8 grid gap-4">
            {outstationFaqs.map((faq) => (
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
