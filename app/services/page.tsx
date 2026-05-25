import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services - Ummat Enterprises Rent-a-Car",
  description:
    "Airport pickup and drop-off, rent a car with driver, wedding car rental, family trips, corporate rental, outstation travel, monthly rental, and VIP car rental.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Professional rent-a-car services for every travel need"
        description="Book clean cars with experienced drivers for airport transfers, business travel, wedding events, family trips, monthly rentals, and VIP movement."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Services"
            title="Flexible car rental support from pickup to drop-off"
            description="Select the service that fits your plan and contact us on WhatsApp for availability, timing, and rates."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Need help choosing a service?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-[#c6d0dd]">
              Share your pickup location, route, timing, and passenger count. We
              will recommend the right car and booking type.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton message="Hello Ummat Enterprises, please recommend the right rent-a-car service for my trip." />
            <Link
              href="/booking"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-[#f5b301] hover:bg-white/10"
            >
              Open booking form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
