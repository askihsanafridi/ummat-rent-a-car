import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/images/hero-car.svg"
          alt="Premium sedan available for rent"
          fill
          priority
          sizes="50vw"
          className="object-contain object-right-bottom"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 bg-[#f5b301]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-[#07111f] sm:text-5xl lg:text-6xl">
            Reliable Rent-a-Car Services for Every Journey
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6b7a] sm:text-xl">
            Book clean, comfortable cars with professional drivers for city
            travel, airport transfers, weddings, family trips, and outstation
            travel.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message="Hello Ummat Enterprises, I want to book a rent-a-car for my trip." />
            <Link
              href="/fleet"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-semibold text-[#07111f] transition hover:border-[#c89400] hover:bg-[#fff8e1]"
            >
              View Our Fleet
            </Link>
          </div>
        </div>

        <div className="relative min-h-[250px] lg:hidden">
          <Image
            src="/images/hero-car.svg"
            alt="Premium sedan available for rent"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
