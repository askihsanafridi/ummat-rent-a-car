import Image from "next/image";
import Link from "next/link";
import { cars } from "@/data/cars";
import { HeroBookingWidget } from "@/components/HeroBookingWidget";

export function Hero() {
  const heroCar = cars[0]; // Toyota Land Cruiser 300
  const secondaryCar = cars[3]; // Toyota Prado

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-8 pb-14 sm:pt-12 sm:pb-20">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#f5b301]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Column: Heading, Subheading & Badges */}
          <div data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-3.5 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#25d366] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#07111f]">
                Islamabad & Rawalpindi • 24/7 Chauffeur Service
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#07111f] sm:text-5xl lg:text-6xl">
              Premier Rent-a-Car in Islamabad with Professional Chauffeurs
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5f6b7a] sm:text-lg">
              Experience comfortable, stress-free journeys with clean luxury SUVs, executive sedans, and group vans. Specializing in 24/7 Islamabad Airport transfers, weddings, corporate VIP travel, and outstation trips.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#07111f]">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#d4a329]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Verified Professional Drivers
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#d4a329]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Zero Hidden Charges
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#d4a329]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                100% Punctual Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div data-reveal className="relative">
            <Link
              href={`/fleet/${heroCar.slug}`}
              className="hero-photo group relative block aspect-[16/10] overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white p-4 shadow-[0_20px_50px_rgba(7,17,31,0.12)] transition hover:shadow-[0_25px_60px_rgba(7,17,31,0.18)]"
            >
              <div className="absolute top-4 left-4 z-10 rounded-full bg-[#07111f]/90 px-3 py-1 text-xs font-bold text-[#f5b301] backdrop-blur-md">
                ⭐ {heroCar.name} • {heroCar.featuredBadge || "VIP Choice"}
              </div>
              <Image
                src={heroCar.image}
                alt={`${heroCar.name} for rent in Islamabad`}
                fill
                preload
                sizes="(min-width: 1280px) 580px, (min-width: 1024px) 50vw, 100vw"
                className="object-contain p-4 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#07111f] shadow-sm backdrop-blur-md">
                View Specs &rarr;
              </div>
            </Link>

            {/* Quick mini floating card */}
            <div className="mt-3 flex items-center justify-between rounded-[12px] border border-[#eef2f6] bg-white px-4 py-2.5 shadow-sm">
              <span className="text-xs text-[#64748b]">
                Looking for another model?
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href={`/fleet/${secondaryCar.slug}`}
                  className="text-xs font-bold text-[#07111f] hover:text-[#d4a329]"
                >
                  Toyota Prado
                </Link>
                <span className="text-[#cbd5e1]">•</span>
                <Link
                  href="/fleet"
                  className="text-xs font-bold text-[#d4a329] hover:underline"
                >
                  All {cars.length} Vehicles &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Luxury Booking Search Widget */}
        <div data-reveal>
          <HeroBookingWidget />
        </div>
      </div>
    </section>
  );
}
