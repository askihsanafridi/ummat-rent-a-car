import type { Metadata } from "next";
import { CarCard } from "@/components/CarCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Fleet - Ummat Enterprises Rent-a-Car",
  description:
    "Browse Toyota Corolla, Honda Civic, Toyota Yaris, Suzuki Alto, Toyota Hiace, and Toyota Prado rental options with driver availability.",
};

export default function FleetPage() {
  return (
    <>
      <PageHeader
        title="Fleet options for city travel, family trips, and VIP movement"
        description="Choose from sedans, hatchbacks, vans, and SUVs with AC and professional driver availability for convenient rent-a-car bookings."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our fleet"
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
    </>
  );
}
