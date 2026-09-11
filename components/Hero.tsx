import Image from "next/image";
import Link from "next/link";
import { cars } from "@/data/cars";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  const heroCar = cars[0];
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 bg-[#f5b301]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div data-reveal className="max-w-3xl">
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

        <Link data-reveal href={`/fleet/${heroCar.slug}`} className="hero-photo relative block aspect-[3/2] overflow-hidden rounded-[8px] bg-[#f6f8fb] shadow-[0_24px_70px_rgba(7,17,31,0.12)]">
          <Image
            src={heroCar.image}
            alt={heroCar.imageAlt}
            fill
            preload
            sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </Link>
      </div>
    </section>
  );
}
