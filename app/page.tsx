import Link from "next/link";
import { CarCard } from "@/components/CarCard";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { featuredCars } from "@/data/cars";
import { homeServices } from "@/data/services";

const reasons = [
  {
    title: "Clean, comfortable cars",
    description:
      "Every booking is prepared with tidy interiors, working AC, and a smooth travel experience.",
  },
  {
    title: "Professional drivers",
    description:
      "Courteous, route-aware drivers for city movement, airport transfers, and long trips.",
  },
  {
    title: "Flexible booking options",
    description:
      "Book sedans, vans, and SUVs for hourly, daily, outstation, wedding, or monthly needs.",
  },
  {
    title: "Fast WhatsApp response",
    description:
      "Share your pickup details and get availability, car options, and rates quickly.",
  },
];

const testimonials = [
  {
    quote:
      "The car was clean, the driver arrived on time, and the airport pickup was handled very professionally.",
    name: "Corporate Client",
    role: "Airport transfer booking",
  },
  {
    quote:
      "We booked a Hiace for a family trip. The ride was comfortable and the driver was cooperative throughout.",
    name: "Family Customer",
    role: "Outstation travel",
  },
  {
    quote:
      "Their Prado service made our event transport feel premium and well managed from start to finish.",
    name: "Event Guest",
    role: "VIP rental",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              label="Featured cars"
              title="Choose the right car for your next booking"
              description="A clean, reliable fleet for individual rides, family movement, business travel, weddings, and airport transfers."
            />
            <Link
              href="/fleet"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-semibold text-[#07111f] transition hover:border-[#c89400] hover:bg-[#fff8e1]"
            >
              View all cars
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Services"
            title="Car rental services for every local and outstation plan"
            description="From quick pickups to full-day travel, Ummat Enterprises supports personal, family, corporate, and event bookings."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f5b301]">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Reliable travel support with a premium service mindset
            </h2>
            <p className="mt-5 text-base leading-8 text-[#c6d0dd] sm:text-lg">
              We focus on the details that matter on the road: punctual
              arrivals, clean vehicles, polite drivers, clear communication, and
              flexible booking support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-[#f5b301]" />
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c6d0dd]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Testimonials"
            title="Trusted by customers for smooth, punctual travel"
            description="Bookings are handled with clear communication, clean cars, and reliable driver support."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[8px] border border-[#e7ebf0] bg-white p-6 shadow-[0_16px_44px_rgba(7,17,31,0.06)]"
              >
                <p className="text-base leading-8 text-[#253041]">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-6 border-t border-[#e7ebf0] pt-5">
                  <p className="font-semibold text-[#07111f]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-[#6b7787]">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8e1] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-[#07111f]">
              Ready to book a clean, comfortable car?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-[#5f6b7a]">
              Send your pickup location, travel date, passenger count, and car
              preference. Our team will respond with availability and rates.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton message="Hello Ummat Enterprises, I am ready to book a rent-a-car." />
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c89400]/45 bg-white px-6 text-sm font-semibold text-[#07111f] transition hover:border-[#c89400] hover:bg-[#fffdf5]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
