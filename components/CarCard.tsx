import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="car-card group flex flex-col overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white shadow-[0_10px_30px_rgba(7,17,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,17,31,0.12)] hover:border-[#d4a329]/50">
      {/* Photo with Overlay Badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f8fafc] p-3">
        {car.featuredBadge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-[#07111f]/90 px-3 py-1 text-[11px] font-bold text-[#f5b301] shadow-sm backdrop-blur-md">
            {car.featuredBadge}
          </span>
        )}

        {car.indicativeRate && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#166534] shadow-sm backdrop-blur-md border border-[#e2e8f0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
            {car.indicativeRate}
          </span>
        )}

        <Link
          href={`/fleet/${car.slug}`}
          className="relative block h-full w-full"
        >
          <Image
            src={car.image}
            alt={car.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-2 transition duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#d4a329]">
            {car.category}
          </span>
          <span className="text-xs text-[#64748b]">
            {car.colors}
          </span>
        </div>

        <h3 className="mt-1.5 text-xl font-bold text-[#07111f]">
          <Link
            href={`/fleet/${car.slug}`}
            className="transition hover:text-[#d4a329]"
          >
            {car.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#5f6b7a] sm:text-sm">
          {car.description}
        </p>

        {/* Spec Chips Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 rounded-[8px] bg-[#f8fafc] px-2.5 py-1.5 font-medium text-[#334155]">
            <span>👤</span>
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-[8px] bg-[#f8fafc] px-2.5 py-1.5 font-medium text-[#334155]">
            <span>🧳</span>
            <span>{car.luggage} Bags</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-[8px] bg-[#f8fafc] px-2.5 py-1.5 font-medium text-[#334155]">
            <span>❄️</span>
            <span>Dual AC</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-[8px] bg-[#f8fafc] px-2.5 py-1.5 font-medium text-[#334155]">
            <span>👔</span>
            <span>Driver Included</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2 pt-2 border-t border-[#f1f5f9]">
          <Link
            href={`/fleet/${car.slug}`}
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-3 text-xs font-bold text-[#07111f] transition hover:border-[#d4a329] hover:bg-[#fffdf5]"
          >
            Photos ({car.gallery.length}) &rarr;
          </Link>

          <WhatsAppButton
            message={`Hello Ummat Enterprises, I want to rent ${car.name} with driver in Islamabad. Please share availability and latest updated rates.`}
            className="h-11 px-3 text-xs"
          >
            WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
