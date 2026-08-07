import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions - Ummat Enterprises Rent-a-Car",
  description:
    "Read the terms and conditions for booking a rent-a-car with Ummat Enterprises in Islamabad, Pakistan.",
};

const sections = [
  {
    title: "Booking and Confirmation",
    content:
      "All bookings are subject to vehicle availability. A booking is confirmed only after the customer receives confirmation from Ummat Enterprises via WhatsApp, phone, or email. We reserve the right to decline any booking at our discretion.",
  },
  {
    title: "Pricing and Payment",
    content:
      "Rates are communicated at the time of booking confirmation. Prices may vary based on fuel prices, season, or route conditions. Payment is due upon completion of the trip unless otherwise agreed. We accept cash and bank transfer.",
  },
  {
    title: "Driver and Vehicle",
    content:
      "All vehicles are provided with a professional driver. The driver's working hours are regulated, and overtime charges may apply for extended hours. Vehicles are clean, maintained, and insured for passenger safety.",
  },
  {
    title: "Customer Responsibilities",
    content:
      "Customers must provide accurate pickup, drop-off, and trip details. Any damage to the vehicle caused by the customer's negligence will be charged accordingly. Smoking and illegal substances are strictly prohibited in all vehicles.",
  },
  {
    title: "Cancellation and Refunds",
    content:
      "Cancellations made before the scheduled pickup time may not incur charges. Late cancellations or no-shows may be subject to a cancellation fee. Refund eligibility is determined on a case-by-case basis.",
  },
  {
    title: "Liability",
    content:
      "Ummat Enterprises is not responsible for loss or damage to personal belongings left in the vehicle. We are not liable for delays caused by traffic, road conditions, weather, or other circumstances beyond our control.",
  },
  {
    title: "Outstation Travel",
    content:
      "For outstation trips, driver allowance and fuel costs may be additional charges. Route changes during the trip may affect the final price. Overnight stays for the driver are the customer's responsibility.",
  },
  {
    title: "Privacy",
    content:
      "Customer information including name, phone number, and trip details are kept confidential and used only for booking purposes. We do not share personal information with third parties.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms and Conditions"
        description="Please read these terms carefully before booking a rent-a-car with Ummat Enterprises."
      />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 text-sm text-[#6b7787]">
            Last updated: August 2025
          </p>
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <article key={section.title}>
                <h2 className="text-lg font-semibold text-[#07111f]">
                  {index + 1}. {section.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#5f6b7a]">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
