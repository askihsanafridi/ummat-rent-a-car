import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarGallery } from "@/components/CarGallery";
import Link from "next/link";
import { cars } from "@/data/cars";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DirectCallButton } from "@/components/DirectCallButton";

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

  const rateText = car.indicativeRate ? ` - ${car.indicativeRate}` : "";

  return {
    title: `${car.name} for Rent in Islamabad with Driver${rateText}`,
    description: `Rent a ${car.name} in Islamabad with professional chauffeur. ${car.seats} seats, ${car.luggage} bags capacity, pristine condition. 24/7 airport transfers, weddings, and outstation trips. Book on WhatsApp.`,
    keywords: [
      `${car.name} rental Islamabad`,
      `${car.name} rent a car Islamabad`,
      `${car.name} with driver Islamabad`,
      `hire ${car.name} Rawalpindi`,
      `${car.category} rental Islamabad`,
      `${car.name} price per day Islamabad`,
    ],
    alternates: {
      canonical: `https://www.ummatrentacar.com/fleet/${car.slug}`,
    },
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

  const carFaqs = [
    {
      q: `How do I check current rates and book the ${car.name} in Islamabad?`,
      a: `Simply click the WhatsApp button or call +92 335 6868001. Send your pickup address, dates, passenger count, and route. Our team confirms latest rates, vehicle availability, and driver details in minutes.`,
    },
    {
      q: `Is a professional driver included with the ${car.name}?`,
      a: `Yes, all our rentals include an experienced, licensed, courteous chauffeur. We do not provide self-drive rentals to guarantee optimal vehicle safety and maintenance.`,
    },
    {
      q: `Can I book the ${car.name} for Islamabad Airport transfer or outstation trips?`,
      a: `Yes! The ${car.name} is available for 24/7 Islamabad International Airport (ISB) pickups, daily city movement, weddings, and intercity trips across Pakistan (Murree, Swat, Lahore, Abbottabad).`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ummatrentacar.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Fleet",
            item: "https://www.ummatrentacar.com/fleet",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: car.name,
            item: `https://www.ummatrentacar.com/fleet/${car.slug}`,
          },
        ],
      },
      {
        "@type": "Car",
        name: car.name,
        description: car.description,
        image: car.gallery.map((photo) => photo.src),
        bodyType: car.bodyStyle,
        color: car.colors,
        seatingCapacity: car.seats,
        offers: {
          "@type": "Offer",
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "AutoRental",
            name: "Ummat Enterprises Rent-a-Car",
            telephone: "+92 335 6868001",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Flat No. 13, Plot 16, Gulistan Plaza, 2nd floor, G-10 Markaz",
              addressLocality: "Islamabad",
              addressCountry: "PK",
            },
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: carFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center text-xs font-medium text-[#64748b] sm:text-sm">
            <Link href="/" className="transition hover:text-[#d4a329]">
              Home
            </Link>
            <span className="mx-2 text-[#cbd5e1]">/</span>
            <Link href="/fleet" className="transition hover:text-[#d4a329]">
              Fleet
            </Link>
            <span className="mx-2 text-[#cbd5e1]">/</span>
            <span className="font-bold text-[#07111f]">{car.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Gallery Column */}
            <div>
              <CarGallery key={car.slug} name={car.name} photos={car.gallery} />
            </div>

            {/* Vehicle Details Column */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#d4a329]">
                  {car.category}
                </span>
                {car.featuredBadge && (
                  <span className="rounded-full bg-[#07111f] px-3 py-1 text-xs font-bold text-[#f5b301]">
                    ⭐ {car.featuredBadge}
                  </span>
                )}
                {car.indicativeRate && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] px-3 py-1 text-xs font-bold text-[#047857]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                    {car.indicativeRate}
                  </span>
                )}
              </div>

              <h1 className="mt-3 text-3xl font-extrabold text-[#07111f] sm:text-4xl">
                {car.name} for Rent in Islamabad
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-[#5f6b7a] sm:text-base">
                {car.description} Provided with a courteous, route-aware chauffeur for city movement, airport transfers, VIP delegations, and northern trips across Pakistan.
              </p>

              {/* Specifications Matrix */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] p-3 text-center">
                  <span className="text-xl">👤</span>
                  <p className="mt-1 text-[11px] text-[#64748b]">Capacity</p>
                  <p className="text-sm font-bold text-[#07111f]">{car.seats} Seats</p>
                </div>
                <div className="rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] p-3 text-center">
                  <span className="text-xl">🧳</span>
                  <p className="mt-1 text-[11px] text-[#64748b]">Luggage</p>
                  <p className="text-sm font-bold text-[#07111f]">{car.luggage} Bags</p>
                </div>
                <div className="rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] p-3 text-center">
                  <span className="text-xl">⚙️</span>
                  <p className="mt-1 text-[11px] text-[#64748b]">Transmission</p>
                  <p className="text-sm font-bold text-[#07111f]">{car.transmission}</p>
                </div>
                <div className="rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] p-3 text-center">
                  <span className="text-xl">👔</span>
                  <p className="mt-1 text-[11px] text-[#64748b]">Chauffeur</p>
                  <p className="text-sm font-bold text-[#07111f]">Included</p>
                </div>
              </div>

              {/* Best For Tags */}
              <div className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#64748b]">
                  Recommended For
                </h2>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {car.bestFor.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-full border border-[#d8dde5] bg-white px-3.5 py-1 text-xs font-semibold text-[#1e293b]"
                    >
                      ✓ {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Booking CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton
                  message={`Hello Ummat Enterprises, I want to rent the ${car.name} with driver in Islamabad. Please share availability and latest updated rates.`}
                  className="font-bold text-sm shadow-md"
                >
                  Get Latest Rates on WhatsApp
                </WhatsAppButton>
                <DirectCallButton variant="outline" className="text-sm font-bold" />
                <Link
                  href="/booking"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-bold text-[#07111f] transition hover:border-[#d4a329] hover:bg-[#fffdf5]"
                >
                  Detailed Form
                </Link>
              </div>

              {/* Reassurance Callout */}
              <div className="mt-6 rounded-[12px] border border-[#eef2f6] bg-[#fcfdfd] p-4 text-xs leading-relaxed text-[#64748b]">
                <strong className="text-[#07111f]">Updated & Latest Rates:</strong> Rental rates are confirmed on WhatsApp based on your exact route, dates, and current fuel prices. Contact us for an immediate customized quote with zero hidden charges.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Specific FAQs & Booking Steps */}
      <section className="border-t border-[#e2e8f0] bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#07111f] sm:text-3xl text-center">
            Frequently Asked Questions About Renting {car.name}
          </h2>
          <div className="mt-8 grid gap-4">
            {carFaqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[12px] border border-[#e2e8f0] bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-[#07111f] sm:text-base">
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5f6b7a] sm:text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
