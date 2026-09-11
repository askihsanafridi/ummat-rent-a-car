import type { Metadata } from "next";
import { CarCard } from "@/components/CarCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import Image from "next/image";
import { cars, cabinPhotos } from "@/data/cars";

export const metadata: Metadata = {
  title: "Fleet - Ummat Enterprises Rent-a-Car",
  description:
    "Browse photos of sedans, SUVs, pickups, convertibles, and group vehicles, including Toyota Prado, Land Cruiser, Honda Civic, Lexus LX, Hiace, and Coaster.",
};

export default function FleetPage() {
  return (
    <>
      <PageHeader
        title="Fleet options for city travel, family trips, and VIP movement"
        description="Explore our vehicle photos, compare body styles, and find a car for your journey. Contact our team to confirm the exact vehicle and availability."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label={`${cars.length} vehicle options`}
            title="Clean, comfortable vehicles ready for booking"
            description="Send your preferred car on WhatsApp and our team will confirm availability, driver details, and pricing for your route."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Inside the cabin"
            title="A closer look at the interior"
            description="Explore these SUV cabin views. Interior finish and seating layout depend on the vehicle assigned; confirm your preferences with our team."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cabinPhotos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-[8px] border border-[#e7ebf0] bg-white">
                <a href={photo.src} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain" />
                </a>
                <figcaption className="p-4 text-sm text-[#5f6b7a]">{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
