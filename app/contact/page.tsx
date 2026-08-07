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
            <iframe
              title="Ummat Enterprises Rent-a-Car location on Google Maps"
              src="https://maps.google.com/maps?q=Flat%20No.%2013%2C%20Plot%2016%2C%20Gulistan%20Plaza%2C%202nd%20floor%2C%20G-10%20Markaz%2C%20Islamabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 520 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
