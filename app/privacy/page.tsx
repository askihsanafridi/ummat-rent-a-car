import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy - Ummat Enterprises Rent-a-Car",
  description:
    "Learn how Ummat Enterprises collects, uses, and protects your personal information when you book a rent-a-car service.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect personal information you provide when making a booking, including your name, phone number, email address, pickup and drop-off locations, and trip details.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process bookings, communicate trip details, assign drivers, and improve our services. We may also use your contact information to send booking confirmations and follow-up messages.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or share your personal information with third parties. Information is only shared with assigned drivers for the purpose of completing your trip.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction. Booking data is stored securely and accessed only by authorized personnel.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "Our website may use cookies and similar technologies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at info@ummatenterprises.com or +92 335 6868001.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about this Privacy Policy or our data practices, please contact us at info@ummatenterprises.com or visit our office at Flat No. 13, Plot 16, Gulistan Plaza, 2nd floor, G-10 Markaz, Islamabad.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Your privacy matters to us. Learn how we handle your personal information."
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
