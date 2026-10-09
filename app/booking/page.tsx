import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Car with Driver in Islamabad | Instant WhatsApp Confirmation",
  description:
    "Book a car with Ummat Enterprises Rent-a-Car. Fast WhatsApp booking form for Islamabad airport transfers, city chauffeur rentals, weddings, and outstation trips.",
  alternates: {
    canonical: "https://www.ummatrentacar.com/booking",
  },
};

const bookingNotes = [
  "Send accurate pickup and drop-off details for faster confirmation.",
  "Mention passenger count, luggage, and trip type in the message field.",
  "Final availability and rates are confirmed by WhatsApp or phone.",
];

export default function BookingPage() {
  return (
    <>
      <PageHeader
        title="Book your rent-a-car on WhatsApp"
        description="Fill out the booking details and submit the form to open WhatsApp with a ready-to-send message for Ummat Enterprises."
      />

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-start">
          <div>
            <SectionHeading
              label="Booking form"
              title="Share your journey details"
              description="The form prepares your request for WhatsApp so our team can review your trip, car preference, and timing quickly."
            />
            <div className="mt-8">
              <BookingForm />
            </div>
          </div>

          <aside className="rounded-[8px] border border-[#e7ebf0] bg-white p-6 shadow-[0_16px_44px_rgba(7,17,31,0.06)]">
            <h2 className="text-xl font-semibold text-[#07111f]">
              Booking support
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5f6b7a]">
              For urgent bookings, call or WhatsApp directly and share your
              pickup time.
            </p>
            <div className="mt-6 grid gap-4 border-y border-[#e7ebf0] py-6">
              <a
                href={siteConfig.phoneHref}
                className="text-base font-semibold text-[#07111f] hover:text-[#c89400]"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base font-semibold text-[#07111f] hover:text-[#c89400]"
              >
                {siteConfig.email}
              </a>
            </div>
            <ul className="mt-6 grid gap-4">
              {bookingNotes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-7 text-[#5f6b7a]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f5b301]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
