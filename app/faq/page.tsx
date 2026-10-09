import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Rent-a-Car Islamabad",
  description:
    "Common questions about renting a car in Islamabad. Learn about booking, pricing, driver availability, airport transfers, wedding rentals, and more.",
  keywords: [
    "rent a car Islamabad FAQ",
    "car rental questions Islamabad",
    "how to book rent a car Islamabad",
    "airport transfer Islamabad questions",
    "car rental pricing Pakistan",
  ],
  alternates: {
    canonical: "https://www.ummatrentacar.com/faq",
  },
};

const faqs = [
  {
    question: "How do I book a rent-a-car with Ummat Enterprises?",
    answer:
      "You can book a car by sending your trip details on WhatsApp. Share your pickup location, drop-off point, date, time, passenger count, and preferred car type. Our team will confirm availability and rates within minutes.",
  },
  {
    question: "What areas does Ummat Enterprises serve?",
    answer:
      "We primarily serve Islamabad and Rawalpindi, but we also provide outstation travel to all major cities in Pakistan including Lahore, Murree, Abbottabad, Swat, Naran, Kaghan, and more.",
  },
  {
    question: "Is a driver included with every rental?",
    answer:
      "Yes, all our cars come with a professional, experienced driver. We are a chauffeur-driven car rental service. Self-drive options are not currently available.",
  },
  {
    question: "What cars are available for rent in Islamabad?",
    answer:
      `Our fleet includes ${cars.map((car) => car.name).join(", ")}. Browse the fleet for photos and contact our team to confirm the exact vehicle, seating, and availability.`,
  },
  {
    question: "How much does it cost to rent a car in Islamabad?",
    answer:
      "Rental rates depend on the vehicle selected, trip duration, route (city vs outstation), and current fuel prices. For updated and latest prices, please contact us directly on WhatsApp (+92 335 6868001) for an instant, customized quote.",
  },
  {
    question: "Do you provide airport pickup and drop-off?",
    answer:
      "Yes, we provide 24/7 airport pickup and drop-off from Islamabad International Airport (ISB) and Benazir Bhutto International Airport. Share your flight details and we will track your arrival for timely pickup.",
  },
  {
    question: "Can I rent a car for a wedding event?",
    answer:
      "Absolutely. We offer wedding car rentals for bridal entries, family movement, and guest transport. Options include decorated sedans, SUVs, and vans. Book in advance for wedding season availability.",
  },
  {
    question: "Is monthly car rental available?",
    answer:
      "Yes, we offer flexible monthly rental plans for businesses, families, and regular commuters. Monthly plans include a dedicated driver and can be customized based on your usage needs.",
  },
  {
    question: "What is included in the rental price?",
    answer:
      "Our rental pricing includes the car, a professional driver, fuel for city travel (within standard limits), and basic insurance. Outstation trips may have separate fuel and driver allowance charges.",
  },
  {
    question: "How can I contact Ummat Enterprises Rent-a-Car?",
    answer:
      "You can reach us on WhatsApp at +92 335 6868001, call us at the same number, or email muhammadilyasafridi354@gmail.com. We are also located at Flat No. 13, Plot 16, Gulistan Plaza, 2nd floor, G-10 Markaz, Islamabad.",
  },
  {
    question: "What documents do I need to rent a car?",
    answer:
      "For booking, we only require your name and phone number. No documents are needed upfront. For certain long-term rentals, a copy of your CNIC may be requested.",
  },
  {
    question: "Can I book a car for outstation travel from Islamabad?",
    answer:
      "Yes, we offer outstation travel to destinations across Pakistan including Murree, Nathia Gali, Abbottabad, Swat, Naran, Kaghan, Lahore, and more. Pricing is based on distance and trip duration.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        title="Frequently Asked Questions about Rent-a-Car in Islamabad"
        description="Find answers to common questions about booking, pricing, cars, airport transfers, and more. Can't find your answer? Contact us on WhatsApp."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="rounded-[8px] border border-[#e7ebf0] bg-white p-6"
              >
                <h2 className="text-lg font-semibold text-[#07111f]">
                  {faq.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5f6b7a]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[8px] border border-[#e7ebf0] bg-[#fff8e1] p-8 text-center">
            <h2 className="text-2xl font-semibold text-[#07111f]">
              Still have questions?
            </h2>
            <p className="mt-3 text-base leading-7 text-[#5f6b7a]">
              Our team is available on WhatsApp to answer your questions about
              car availability, pricing, and booking.
            </p>
            <WhatsAppButton
              message={`Hello Ummat Enterprises, I have a question about your rent-a-car service.`}
              className="mt-6"
            />
          </div>
        </div>
      </section>
    </>
  );
}
