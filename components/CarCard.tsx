import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="car-card group overflow-hidden rounded-[8px] border border-[#e7ebf0] bg-white shadow-[0_18px_48px_rgba(7,17,31,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,17,31,0.12)]">
      <Link href={`/fleet/${car.slug}`} className="relative block overflow-hidden aspect-[3/2] bg-[#f6f8fb]">
        <Image
          src={car.image}
          alt={car.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
        />
      </Link>
      <div className="p-6">
        <p className="text-sm font-semibold text-[#c89400]">{car.category}</p>
        <h3 className="mt-2 text-2xl font-semibold text-[#07111f]">
          <Link href={`/fleet/${car.slug}`} className="hover:text-[#9a7100]">{car.name}</Link>
        </h3>
        <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#5f6b7a]">
          {car.description}
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-[8px] bg-[#f7f9fc] p-3">
            <dt className="text-[#7b8794]">Vehicle type</dt>
            <dd className="mt-1 font-semibold text-[#07111f]">{car.bodyStyle}</dd>
          </div>
          <div className="rounded-[8px] bg-[#f7f9fc] p-3">
            <dt className="text-[#7b8794]">Pictured colors</dt>
            <dd className="mt-1 font-semibold text-[#07111f]">
              {car.colors}
            </dd>
          </div>
          <div className="rounded-[8px] bg-[#f7f9fc] p-3">
            <dt className="text-[#7b8794]">Gallery</dt>
            <dd className="mt-1 font-semibold text-[#07111f]">
              {car.gallery.length} {car.gallery.length === 1 ? "photo" : "photos"}
            </dd>
          </div>
          <div className="rounded-[8px] bg-[#f7f9fc] p-3">
            <dt className="text-[#7b8794]">Driver</dt>
            <dd className="mt-1 font-semibold text-[#07111f]">
              {car.driverAvailable ? "Available" : "On request"}
            </dd>
          </div>
        </dl>
        <Link
          href={`/fleet/${car.slug}`}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#d8dde5] px-5 text-sm font-semibold text-[#07111f] transition hover:border-[#c89400] hover:bg-[#fff8e1]"
        >
          View photos & details
        </Link>
        <WhatsAppButton
          message={`Hello Ummat Enterprises, I want to book ${car.name}. Please share availability and rates.`}
          className="mt-3 w-full"
        />
      </div>
    </article>
  );
}
