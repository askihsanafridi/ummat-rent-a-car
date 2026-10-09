import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { FleetFilter } from "@/components/FleetFilter";
import Image from "next/image";
import { cars, cabinPhotos } from "@/data/cars";

export const metadata: Metadata = {
  title: "Complete Car Fleet in Islamabad | Luxury SUVs, Sedans & Vans",
  description:
    "Explore Ummat Enterprises' complete vehicle fleet in Islamabad: Toyota Land Cruiser 300/200, Prado, Lexus LX, Mercedes Cabriolet, Audi A6, Toyota Hiace, and executive sedans with professional chauffeurs.",
  keywords: [
    "car rental fleet Islamabad",
    "Toyota Prado for rent Islamabad",
    "Land Cruiser 300 rental Islamabad",
    "Mercedes wedding car rental Islamabad",
    "Audi A6 rental Pakistan",
    "Toyota Hiace van rental Islamabad",
    "Toyota Coaster rental Islamabad",
    "Honda Civic rent a car Islamabad",
    "luxury car fleet Islamabad",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/fleet",
  },
};

const fleetBreadcrumbsJsonLd = {
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
      name: "Fleet",
      item: "https://www.ummatrentacar.com/fleet",
    },
  ],
};

export default function FleetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetBreadcrumbsJsonLd) }}
      />

      <PageHeader
        title="Complete Vehicle Fleet with Professional Chauffeurs"
        description="Filter and compare our full vehicle lineup in Islamabad: luxury VIP SUVs, wedding convertibles, executive business sedans, and group tour vans."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label={`${cars.length} Fleet Choices`}
            title="Clean, Inspected Vehicles Ready for Booking"
            description="Select any category to view options, check seating capacity, and get an instant rate quote on WhatsApp."
            align="center"
          />

          <div className="mt-10">
            <FleetFilter cars={cars} />
          </div>
        </div>
      </section>

      {/* Interior & Cabin Section */}
      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Cabin Comfort"
            title="Spotless, Air-Conditioned Interiors"
            description="Take a closer look at our luxury SUV cabin quality. Every vehicle features chilled dual-zone AC, plush seating, and generous legroom."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cabinPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-[#f1f5f9]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-2"
                  />
                </div>
                <figcaption className="p-4 text-xs font-semibold text-[#5f6b7a] sm:text-sm">
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
