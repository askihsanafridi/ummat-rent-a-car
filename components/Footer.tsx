import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DirectCallButton } from "@/components/DirectCallButton";

export function Footer() {
  const serviceLinks = [
    { label: "Airport Transfer (ISB)", href: "/services/airport-transfer-islamabad" },
    { label: "Wedding Car Rental", href: "/services/wedding-car-rental-islamabad" },
    { label: "Rent a Car with Driver", href: "/services/rent-a-car-with-driver-islamabad" },
    { label: "Outstation & Northern Tours", href: "/services/outstation-travel-islamabad" },
    { label: "All Services & Packages", href: "/services" },
  ];

  const fleetLinks = [
    { label: "Toyota Land Cruiser 300", href: "/fleet/toyota-land-cruiser-300" },
    { label: "Toyota Prado TX/TZ", href: "/fleet/toyota-prado" },
    { label: "Mercedes Cabriolet (Open-Top)", href: "/fleet/mercedes-benz-cabriolet" },
    { label: "Audi A6 Luxury Sedan", href: "/fleet/audi-a6" },
    { label: "Toyota Hiace Grand Cabin", href: "/fleet/toyota-hiace" },
    { label: "Complete Fleet Catalog", href: "/fleet" },
  ];

  return (
    <footer className="border-t border-[#e9edf3] bg-[#07111f] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Col 1: Brand & Bio */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[12px] border border-white/20 bg-white p-0.5 shadow-sm">
              <Image
                src="/logo-square.png"
                alt="Ummat Enterprises Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-base">{siteConfig.name}</p>
              <p className="text-xs text-[#b8c2d0]">
                Clean Cars • Professional Chauffeurs
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#b8c2d0]">
            Premier chauffeur-driven car rental in Islamabad and Rawalpindi. Specializing in 24/7 airport transfers, luxury weddings, executive corporate protocol, and Northern Pakistan tours.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
            <DirectCallButton
              variant="primary"
              className="text-xs font-bold w-full sm:w-auto min-h-10 px-4"
            />
            <WhatsAppButton
              message="Hello Ummat Enterprises, I need car rental details."
              className="text-xs font-bold w-full sm:w-auto min-h-10 px-4"
            />
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#f5b301]">
            Chauffeur Services
          </h2>
          <nav className="mt-4 grid gap-2.5" aria-label="Services Navigation">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#d6dde8] transition hover:text-[#f5b301]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Fleet */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#f5b301]">
            Popular Vehicles
          </h2>
          <nav className="mt-4 grid gap-2.5" aria-label="Fleet Navigation">
            {fleetLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#d6dde8] transition hover:text-[#f5b301]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 4: Contact & Hours */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#f5b301]">
            Office & Contact
          </h2>
          <div className="mt-4 grid gap-2.5 text-xs text-[#d6dde8]">
            <a
              href={siteConfig.phoneHref}
              className="font-bold text-white transition hover:text-[#f5b301]"
            >
              📞 {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-[#f5b301]"
            >
              ✉️ {siteConfig.email}
            </a>
            <p className="leading-relaxed">
              📍 {siteConfig.address}
            </p>
            <div className="mt-2 rounded-[8px] bg-white/5 p-3 text-[11px] leading-relaxed text-[#cbd5e1] border border-white/10">
              <p className="font-bold text-[#f5b301]">Business Hours:</p>
              <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
              <p>Sun: 9:00 AM - 8:00 PM</p>
              <p className="text-emerald-400 font-semibold mt-1">
                ✈️ Airport Transfers: 24/7 on request
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 text-xs text-[#aeb9c8] sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. Registered in Islamabad, Pakistan.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/pricing" className="hover:text-[#f5b301]">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-[#f5b301]">
              FAQ
            </Link>
            <Link href="/terms" className="hover:text-[#f5b301]">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[#f5b301]">
              Privacy
            </Link>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#f5b301]"
              title="LLM & AI Bot Knowledge File"
            >
              llms.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
