import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Navbar } from "@/components/Navbar";
import { SiteMotion } from "@/components/SiteMotion";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ummatrentacar.com"),
  title: {
    default: `${siteConfig.name} | Rent a Car in Islamabad with Driver`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Ummat Enterprises Rent-a-Car: Premium chauffeur-driven car rental in Islamabad, Rawalpindi & Pakistan. 24/7 Islamabad Airport transfers, luxury Land Cruiser, Prado, wedding cars, and outstation trips.",
  keywords: [
    "rent a car Islamabad",
    "car rental Islamabad",
    "rent a car with driver Islamabad",
    "Islamabad airport car rental",
    "airport transfer Islamabad",
    "wedding car rental Islamabad",
    "Prado for rent in Islamabad",
    "Land Cruiser for rent Islamabad",
    "Toyota Hiace rental Islamabad",
    "corporate car rental Pakistan",
    "outstation car rental Islamabad",
    "car hire Islamabad",
    "cheap car rental Islamabad",
    "VIP car rental Islamabad",
    "Ummat Enterprises Rent-a-Car",
    "G-10 Markaz car rental",
    "luxury car rental Pakistan",
  ],
  authors: [{ name: "Ummat Enterprises" }],
  creator: "Ummat Enterprises",
  publisher: "Ummat Enterprises",
  alternates: {
    canonical: "https://www.ummatrentacar.com",
  },
  openGraph: {
    title: `${siteConfig.name} | Premium Rent-a-Car Islamabad with Driver`,
    description:
      "Clean, sanitized cars with professional drivers. 24/7 airport pickups, luxury SUVs, wedding cars, and nationwide outstation travel.",
    type: "website",
    locale: "en_PK",
    alternateLocale: ["en_US", "ur_PK"],
    siteName: siteConfig.name,
    url: "https://www.ummatrentacar.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Rent-a-Car Islamabad`,
    description:
      "Clean cars with professional drivers. Airport transfers, luxury weddings, and outstation tours across Pakistan.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "-RHinDxubya9I6Fdt50XeUCR_0DbVbmvh67KJrqb-Q4",
  },
  category: "transportation",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRental", "LocalBusiness"],
  "@id": "https://www.ummatrentacar.com/#business",
  name: "Ummat Enterprises Rent-a-Car",
  alternateName: "Ummat Rent-a-Car",
  description:
    "Professional chauffeur-driven rent-a-car service in Islamabad, Pakistan. Clean luxury SUVs, sedans, and group vans with professional drivers for Islamabad airport transfers, weddings, corporate travel, and outstation tours.",
  url: "https://www.ummatrentacar.com",
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  email: siteConfig.email,
  priceRange: "$$",
  currenciesAccepted: "PKR, USD",
  paymentAccepted: "Cash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Flat No. 13, Plot 16, Gulistan Plaza, 2nd floor, G-10 Markaz",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    postalCode: "44000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.675365,
    longitude: 73.01475,
  },
  hasMap: "https://maps.google.com/?q=33.675365,73.01475",
  areaServed: [
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Rawalpindi" },
    { "@type": "AdministrativeArea", name: "Islamabad Capital Territory" },
    { "@type": "Country", name: "Pakistan" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 33.675365, longitude: 73.01475 },
    geoRadius: "600km",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 Airport Transfer Bookings and Emergency Travel",
    },
  ],
  knowsAbout: [
    "Car rental with driver Islamabad",
    "Islamabad Airport transfer",
    "Wedding car rental Islamabad",
    "Toyota Prado for rent",
    "Toyota Land Cruiser V8 rental",
    "Toyota Hiace van rental Islamabad",
    "Corporate car rental Pakistan",
    "Northern areas car rental",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rent-a-Car Services Islamabad",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Islamabad Airport Pickup and Drop-off",
          description: "24/7 airport transfer from Islamabad International Airport with flight tracking and luggage assistance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rent a Car with Driver",
          description: "Experienced, courteous chauffeurs for city travel, business meetings, and daily tours.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury Wedding Car Rental",
          description: "Decorated Mercedes, Audi, Prado, and Land Cruiser for weddings and bridal entries.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outstation & Northern Area Tours",
          description: "Intercity car travel from Islamabad to Murree, Swat, Naran, Lahore, and Northern Pakistan.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monthly & Corporate Fleet",
          description: "Dedicated chauffeur and long-term vehicle hire for organizations, NGOs, and executives.",
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
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="google-site-verification" content="-RHinDxubya9I6Fdt50XeUCR_0DbVbmvh67KJrqb-Q4" />
        <meta name="theme-color" content="#07111f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ummat Rent-a-Car" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col pb-20 antialiased md:pb-0">
        <SiteMotion />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  );
}
