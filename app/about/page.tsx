import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Ummat Enterprises Rent-a-Car | Premier Chauffeur Service Islamabad",
  description:
    "Learn about Ummat Enterprises Rent-a-Car in Islamabad: Our story, commitment to clean vehicles, vetted professional drivers, and 24/7 client care across Pakistan.",
  alternates: {
    canonical: "https://www.ummatrentacar.com/about",
  },
};

const values = [
  "Clean and well-presented vehicles",
  "Professional drivers for every booking",
  "Clear communication before pickup",
  "Flexible options for daily and monthly travel",
];

const steps = [
  {
    title: "Share your trip details",
    description:
      "Send pickup point, drop-off point, date, time, passenger count, and preferred car type.",
  },
  {
    title: "Confirm car availability",
    description:
      "Our team checks the right car and driver option for your travel plan.",
  },
  {
    title: "Travel comfortably",
    description:
      "Your driver arrives prepared for city travel, airport transfer, event duty, or outstation route.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A dependable rent-a-car partner for every journey"
        description="Ummat Enterprises Rent-a-Car provides clean vehicles, professional drivers, and flexible booking support for customers who want stress-free travel."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              label="About us"
              title="Built around reliability, comfort, and professional service"
              description="Whether you need an airport pickup, a car with driver for meetings, a wedding car, or a larger vehicle for family travel, our service is designed to make booking simple and travel comfortable."
            />
            <div className="mt-8 grid gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5b301]" />
                  <p className="text-base font-medium text-[#253041]">{value}</p>
                </div>
              ))}
            </div>
            <WhatsAppButton
              message="Hello Ummat Enterprises, I want to know more about your rent-a-car service."
              className="mt-8"
            />
          </div>

          <div className="relative flex flex-col items-center justify-center rounded-[20px] border border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] via-white to-white p-8 text-center shadow-[0_16px_40px_rgba(7,17,31,0.06)]">
            <div className="relative h-48 w-48 overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white p-3 shadow-[0_8px_30px_rgba(7,17,31,0.08)]">
              <Image
                src="/PHOTO-2026-10-09-11-17-11.jpg"
                alt="Ummat Enterprises Official Brand Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="mt-6">
              <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d4a329]">
                Official Brand Emblem
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-[#07111f]">
                Ummat Enterprises
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                Rent-a-Car • Islamabad & Rawalpindi
              </p>
              <p className="mt-3 text-xs text-[#5f6b7a] max-w-xs mx-auto">
                Flat No. 13, Plot 16, Gulistan Plaza, 2nd floor, G-10 Markaz, Islamabad
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="How it works"
            title="Simple booking, clear confirmation, comfortable travel"
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[8px] border border-[#e7ebf0] bg-white p-6 shadow-[0_16px_44px_rgba(7,17,31,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#fff4cf] text-lg font-semibold text-[#9a7100]">
                  {index + 1}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-[#07111f]">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5f6b7a]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
