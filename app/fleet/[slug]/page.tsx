import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarGallery } from "@/components/CarGallery";
import Link from "next/link";
import { cars } from "@/data/cars";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);

  if (!car) {
    return {
      title: "Car Not Found",
    };
  }

  return {
    title: `${car.name} for Rent in Islamabad | ${car.category}`,
    description: `${car.name} rental in Islamabad. ${car.description} ${car.bodyStyle} with professional driver availability. Book now on WhatsApp.`,
    keywords: [
      `${car.name} rental Islamabad`,
      `${car.name} rent a car Islamabad`,
      `${car.category} rental Islamabad`,
      `hire ${car.name} Islamabad`,
      `${car.name} with driver Islamabad`,
    ],
    openGraph: {
      title: `${car.name} for Rent in Islamabad | Ummat Enterprises`,
      description: car.description,
      images: [{ url: car.image, alt: car.imageAlt }],
    },
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);

  if (!car) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: car.name,
    description: car.description,
    image: car.gallery.map((photo) => photo.src),
    bodyType: car.bodyStyle,
    color: car.colors,
    offers: {
      "@type": "Offer",
      seller: {
        "@type": "LocalBusiness",
        name: "Ummat Enterprises Rent-a-Car",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 text-sm text-[#6b7787]">
            <Link href="/" className="hover:text-[#c89400]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/fleet" className="hover:text-[#c89400]">
              Fleet
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#07111f]">{car.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <CarGallery key={car.slug} name={car.name} photos={car.gallery} />

            <div>
              <p className="text-sm font-semibold uppercase text-[#c89400]">
                {car.category}
              </p>
              <h1 className="mt-2 text-4xl font-semibold text-[#07111f]">
                {car.name} for Rent
              </h1>
              <p className="mt-4 text-base leading-7 text-[#5f6b7a]">
                {car.description} Available for booking in Islamabad and across
                Pakistan with a professional driver.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-[8px] bg-[#f7f9fc] p-4">
                  <dt className="text-sm text-[#7b8794]">Vehicle type</dt>
                  <dd className="mt-1 text-lg font-semibold text-[#07111f]">
                    {car.bodyStyle}
                  </dd>
                </div>
                <div className="rounded-[8px] bg-[#f7f9fc] p-4">
                  <dt className="text-sm text-[#7b8794]">Pictured colors</dt>
                  <dd className="mt-1 text-lg font-semibold text-[#07111f]">
                    {car.colors}
                  </dd>
                </div>
                <div className="rounded-[8px] bg-[#f7f9fc] p-4">
                  <dt className="text-sm text-[#7b8794]">Rates</dt>
                  <dd className="mt-1 text-lg font-semibold text-[#07111f]">
                    Quote on request
                  </dd>
                </div>
                <div className="rounded-[8px] bg-[#f7f9fc] p-4">
                  <dt className="text-sm text-[#7b8794]">Driver</dt>
                  <dd className="mt-1 text-lg font-semibold text-[#07111f]">
                    Professional driver available
                  </dd>
                </div>
              </dl>

              <p className="mt-5 text-sm leading-6 text-[#5f6b7a]">
                Confirm the exact vehicle, model year, seating, luggage space,
                transmission, AC, and preferred color with our team. Wedding
                decoration and pricing are arranged when booking.
              </p>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-[#07111f]">
                  Best for
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {car.bestFor.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[#d8dde5] bg-white px-4 py-1.5 text-sm text-[#253041]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message={`Hello Ummat Enterprises, I want to book ${car.name} in Islamabad. Please share availability and rates.`}
                />
                <Link
                  href="/booking"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-semibold text-[#07111f] transition hover:border-[#c89400] hover:bg-[#fff8e1]"
                >
                  Fill booking form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-[#07111f]">
            Book the {car.name} for your next trip
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5f6b7a]">
            Ready to book? Share your pickup location, travel date, and
            passenger count on WhatsApp for instant confirmation and pricing.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[8px] border border-[#e7ebf0] bg-white p-5">
              <div className="text-2xl font-semibold text-[#f5b301]">1</div>
              <h3 className="mt-2 font-semibold text-[#07111f]">
                Send your details
              </h3>
              <p className="mt-1 text-sm text-[#5f6b7a]">
                Share pickup, date, time, and passengers on WhatsApp.
              </p>
            </div>
            <div className="rounded-[8px] border border-[#e7ebf0] bg-white p-5">
              <div className="text-2xl font-semibold text-[#f5b301]">2</div>
              <h3 className="mt-2 font-semibold text-[#07111f]">
                Confirm booking
              </h3>
              <p className="mt-1 text-sm text-[#5f6b7a]">
                We confirm availability, rates, and driver assignment.
              </p>
            </div>
            <div className="rounded-[8px] border border-[#e7ebf0] bg-white p-5">
              <div className="text-2xl font-semibold text-[#f5b301]">3</div>
              <h3 className="mt-2 font-semibold text-[#07111f]">
                Travel comfortably
              </h3>
              <p className="mt-1 text-sm text-[#5f6b7a]">
                Your driver arrives prepared for a smooth journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
