import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TrustBar } from "@/components/TrustBar";
import { FleetFilter } from "@/components/FleetFilter";
import { cars } from "@/data/cars";
import { homeServices } from "@/data/services";

const reasons = [
  {
    title: "Clean, Inspected Vehicles",
    description:
      "Every vehicle undergoes sanitization, tire checks, and air-conditioning verification before customer pickup.",
  },
  {
    title: "Professional Chauffeurs",
    description:
      "Polite, licensed, route-aware drivers trained for Islamabad city protocol and challenging mountainous northern highways.",
  },
  {
    title: "100% Punctual Guarantee",
    description:
      "For airport transfers and weddings, our drivers arrive at least 15 minutes before your scheduled departure.",
  },
  {
    title: "Transparent & Fast Booking",
    description:
      "Get exact availability, vehicle photos, and all-inclusive pricing via WhatsApp in under 5 minutes.",
  },
];

const testimonials = [
  {
    quote:
      "Booked an airport pickup from Islamabad Airport to Serena Hotel. The driver was waiting at the terminal on time with a clean Toyota Corolla. Highly dependable service!",
    name: "Dr. Hamza Tariq",
    role: "Islamabad Airport Transfer",
  },
  {
    quote:
      "We hired a Toyota Hiace for our family trip to Murree and Nathia Gali. The driver was extremely careful on the mountain roads and courteous throughout our journey.",
    name: "Mrs. Shazia Khan",
    role: "Family Outstation Trip",
  },
  {
    quote:
      "Rented the Mercedes Cabriolet for my brother's wedding arrival. The car was decorated flawlessly and made the event entry truly spectacular. Thank you Ummat Enterprises!",
    name: "Bilal Farooq",
    role: "Wedding Rental (Islamabad)",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <TrustBar />

      {/* Fleet Section with Interactive Filter Tabs */}
      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              label={`Our Complete Fleet · ${cars.length} Vehicles`}
              title="From Presidential SUVs to Daily Chauffeur Cars"
              description="Explore every vehicle in our Islamabad garage. Filter by luxury VIP SUVs, wedding convertibles, executive sedans, or group travel vans."
            />
            <Link
              href="/fleet"
              className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-xs font-bold text-[#07111f] transition hover:border-[#d4a329] hover:bg-[#fffdf5] sm:text-sm"
            >
              Browse Full Galleries &rarr;
            </Link>
          </div>

          <div className="mt-8">
            <FleetFilter cars={cars} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Chauffeur Services"
            title="Tailored Car Rental Services in Islamabad & Beyond"
            description="From seamless 24/7 airport transfers to luxury wedding convoys and intercity travel, Ummat Enterprises delivers five-star chauffeur service."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#07111f] bg-[#07111f] px-8 text-sm font-bold text-white transition hover:bg-[#1a2942]"
            >
              Explore All Services & Special Packages &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#07111f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#f5b301]">
              Why Choose Ummat Enterprises
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Reliable Travel Support with a Luxury Service Mindset
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#c6d0dd] sm:text-lg">
              We focus on the standards that elevate your travel: punctuality, spotless interiors, courteous chauffeurs, transparent rates, and responsive 24/7 WhatsApp booking support.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                message="Hello Ummat Enterprises, I want to book a car for an upcoming trip."
                className="font-bold text-sm"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[12px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-[#f5b301]" />
                <h3 className="text-base font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#c6d0dd] sm:text-sm">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Testimonials */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Verified Reviews"
            title="Trusted by Travelers, Families & Corporate Clients"
            description="Read what our clients say about our drivers, vehicles, and customer care in Islamabad and Rawalpindi."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col justify-between rounded-[16px] border border-[#e7ebf0] bg-white p-6 shadow-[0_12px_36px_rgba(7,17,31,0.06)]"
              >
                <div>
                  <div className="flex text-[#f5b301] text-sm mb-3">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-sm leading-relaxed text-[#253041] sm:text-base">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="mt-6 border-t border-[#e7ebf0] pt-4">
                  <p className="font-bold text-[#07111f]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#6b7787]">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps & Office Location */}
      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Visit Our Office"
            title="Conveniently Located at G-10 Markaz, Islamabad"
            description="Drop by our office or connect instantly on WhatsApp for car inspections, long-term corporate contracts, and wedding bookings."
            align="center"
          />
          <div className="mt-10 overflow-hidden rounded-[16px] border border-[#e7ebf0] bg-white shadow-[0_16px_44px_rgba(7,17,31,0.08)]">
            <iframe
              title="Ummat Enterprises Rent-a-Car location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3320.297311153283!2d73.01217307570036!3d33.6753649733011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQwJzMxLjMiTiA3M8KwMDAnNTMuMSJF!5e0!3m2!1sen!2s!4v1786126010859!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-[#fff8e1] via-[#fff4cf] to-[#ffecb3] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#9a7100]">
              Fastest Booking in Town
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07111f] sm:text-3xl">
              Ready to Book Your Clean, Chauffeur-Driven Car?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5f6b7a] sm:text-base">
              Share your pickup location, dates, passenger count, and preferred car. Our Islamabad team will confirm your booking in minutes.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton
              message="Hello Ummat Enterprises, I am ready to book a rent-a-car for my journey."
              className="font-bold text-sm shadow-md"
            />
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c89400]/45 bg-white px-6 text-sm font-bold text-[#07111f] transition hover:border-[#c89400] hover:bg-[#fffdf5]"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
