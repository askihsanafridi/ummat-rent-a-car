import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact - Ummat Enterprises Rent-a-Car",
  description:
    "Contact Ummat Enterprises Rent-a-Car by phone, WhatsApp, email, or address for rent-a-car bookings and travel support.",
};

const contactCards = [
  {
    title: "Phone",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
  },
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: "Address",
    value: siteConfig.address,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Ummat Enterprises Rent-a-Car"
        description="Call, WhatsApp, or email us for car availability, airport transfers, wedding bookings, corporate rental, and outstation travel."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="grid gap-5">
              {contactCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[8px] border border-[#e7ebf0] bg-white p-6 shadow-[0_16px_44px_rgba(7,17,31,0.06)]"
                >
                  <p className="text-sm font-semibold uppercase text-[#c89400]">
                    {card.title}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-2 block text-xl font-semibold text-[#07111f] hover:text-[#c89400]"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-xl font-semibold leading-8 text-[#07111f]">
                      {card.value}
                    </p>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[8px] border border-[#e7ebf0] bg-[#f8fafc] p-6">
              <h2 className="text-xl font-semibold text-[#07111f]">
                Business hours
              </h2>
              <div className="mt-4 grid gap-3">
                {siteConfig.businessHours.map((hours) => (
                  <p key={hours} className="text-sm leading-7 text-[#5f6b7a]">
                    {hours}
                  </p>
                ))}
              </div>
              <WhatsAppButton
                message="Hello Ummat Enterprises, I want to contact you about a rent-a-car booking."
                className="mt-6 w-full"
              />
            </div>
          </div>

          <div className="min-h-[520px] overflow-hidden rounded-[8px] border border-[#e7ebf0] bg-[#f8fafc] shadow-[0_16px_44px_rgba(7,17,31,0.06)]">
            <div className="relative h-full min-h-[520px]">
              <div className="map-grid absolute inset-0" />
              <div className="map-glow absolute inset-0" />
              <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[8px] border border-[#d8dde5] bg-white p-6 text-center shadow-[0_24px_70px_rgba(7,17,31,0.12)]">
                <p className="text-sm font-semibold uppercase text-[#c89400]">
                  Google Maps
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#07111f]">
                  Map location placeholder
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5f6b7a]">
                  Add the verified Google Maps embed link for the live business
                  location.
                </p>
                <p className="mt-5 text-base font-semibold text-[#07111f]">
                  {siteConfig.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
