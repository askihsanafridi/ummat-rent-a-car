export const siteConfig = {
  name: "Ummat Enterprises Rent-a-Car",
  shortName: "Ummat Rent-a-Car",
  description:
    "Reliable rent-a-car services with clean vehicles and professional drivers for city travel, airport transfers, weddings, family trips, and outstation travel.",
  phoneDisplay: "+92 335 6868001",
  phoneHref: "tel:+923356868001",
  whatsappNumber: "923356868001",
  email: "info@ummatenterprises.com",
  address:
    "Flat No. 13, Plot 16, Gulistan Plaza, 2nd floor, G-10 Markaz, Islamabad.",
  businessHours: [
    "Monday to Saturday: 8:00 AM - 10:00 PM",
    "Sunday: 9:00 AM - 8:00 PM",
    "Emergency airport bookings: 24/7 on request",
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}
