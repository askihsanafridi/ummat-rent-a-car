import type { Metadata } from "next";
import { DirectCallButton } from "@/components/DirectCallButton";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Ummat Enterprises Rent-a-Car | Office in G-10 Markaz Islamabad",
  description:
    "Contact Ummat Enterprises Rent-a-Car: Call/WhatsApp +92 335 6868001 or visit our office at G-10 Markaz Islamabad. 24/7 airport transfers and luxury car rentals.",
  alternates: {
    canonical: "https://www.ummatrentacar.com/contact",
  },
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
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <DirectCallButton variant="primary" className="flex-1 text-sm font-bold" />
                <WhatsAppButton
                  message="Hello Ummat Enterprises, I want to contact you about a rent-a-car booking."
                  className="flex-1 text-sm font-bold"
                />
              </div>
            </div>
          </div>

          <div className="min-h-[520px] overflow-hidden rounded-[8px] border border-[#e7ebf0] bg-[#f8fafc] shadow-[0_16px_44px_rgba(7,17,31,0.06)]">
            <iframe
              title="Ummat Enterprises Rent-a-Car location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3320.297311153283!2d73.01217307570036!3d33.6753649733011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQwJzMxLjMiTiA3M8KwMDAnNTMuMSJF!5e0!3m2!1sen!2s!4v1786126010859!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 520 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
