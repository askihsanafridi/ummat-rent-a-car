import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ummatenterprises.com"),
  title: {
    default: `${siteConfig.name} | Professional Rent-a-Car Services in Islamabad`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Ummat Enterprises Rent-a-Car offers clean cars with professional drivers in Islamabad, Pakistan. Book for airport transfers, weddings, corporate travel, outstation trips, and monthly rentals.",
  keywords: [
    "rent a car Islamabad",
    "car rental Islamabad",
    "rent a car with driver Islamabad",
    "airport transfer Islamabad",
    "wedding car rental Islamabad",
    "corporate car rental Pakistan",
    "outstation travel from Islamabad",
    "car hire Islamabad",
    "car rental Pakistan",
    "rent a car Rawalpindi",
    "rent a car with driver Pakistan",
    "airport pickup Islamabad",
    "Toyota Corolla rental Islamabad",
    "Toyota Prado rental Islamabad",
    "Toyota Hiace rental Islamabad",
    "monthly car rental Islamabad",
    "Ummat Enterprises Rent-a-Car",
    "best rent a car service Islamabad",
    "cheap car rental Islamabad",
    "VIP car rental Islamabad",
  ],
  authors: [{ name: "Ummat Enterprises" }],
  creator: "Ummat Enterprises",
  publisher: "Ummat Enterprises",
  alternates: {
    canonical: "https://ummatenterprises.com",
  },
  openGraph: {
    title: `${siteConfig.name} | Rent-a-Car in Islamabad & Pakistan`,
    description:
      "Book clean, comfortable cars with professional drivers. Airport transfers, weddings, corporate travel, outstation trips, and monthly rentals available.",
    type: "website",
    locale: "en_PK",
    alternateLocale: ["en_US", "ur_PK"],
    siteName: siteConfig.name,
    url: "https://ummatenterprises.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Rent-a-Car Islamabad`,
    description:
      "Clean cars with professional drivers. Airport transfers, weddings, corporate travel, and outstation trips across Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "car rental",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ummatenterprises.com/#business",
  name: "Ummat Enterprises Rent-a-Car",
  description:
    "Professional rent-a-car service in Islamabad, Pakistan. Clean vehicles with professional drivers for airport transfers, weddings, corporate travel, and outstation trips.",
  url: "https://ummatenterprises.com",
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Flat No. 13, Plot 16, Gulistan Plaza, 2nd floor, G-10 Markaz",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    postalCode: "44000",
    addressCountry: "PK",
  },
  areaServed: [
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Rawalpindi" },
    { "@type": "Country", name: "Pakistan" },
  ],
  priceRange: "$$",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 33.6844, longitude: 73.0479 },
    geoRadius: "500km",
  },
  knowsAbout: [
    "Car rental",
    "Airport transfer",
    "Wedding car rental",
    "Corporate car rental",
    "Outstation travel",
    "Monthly car rental",
    "VIP car rental",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rent-a-Car Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Airport Pickup and Drop-off",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Car Rental",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Car Rental",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outstation Travel",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monthly Car Rental",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VIP Car Rental",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
