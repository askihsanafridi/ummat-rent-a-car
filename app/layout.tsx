import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ummatenterprises.com"),
  title: {
    default: `${siteConfig.name} | Professional Rent-a-Car Services`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "rent a car",
    "car rental",
    "rent a car with driver",
    "airport transfer",
    "wedding car rental",
    "corporate car rental",
    "outstation travel",
    "Ummat Enterprises Rent-a-Car",
  ],
  openGraph: {
    title: `${siteConfig.name} | Professional Rent-a-Car Services`,
    description: siteConfig.description,
    type: "website",
    locale: "en_PK",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Professional Rent-a-Car Services`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
