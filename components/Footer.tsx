import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-[#e9edf3] bg-[#07111f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#f5b301] text-sm font-bold text-[#07111f]">
              UE
            </span>
            <div>
              <p className="font-semibold">{siteConfig.name}</p>
              <p className="text-sm text-[#b8c2d0]">
                Clean cars. Professional drivers.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#b8c2d0]">
            Reliable rent-a-car services for city rides, airport transfers,
            weddings, family trips, corporate movement, and outstation travel.
          </p>
          <WhatsAppButton
            message="Hello Ummat Enterprises, I need rent-a-car details."
            className="mt-6"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#f5b301]">Pages</h2>
          <nav className="mt-4 grid gap-3" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#d6dde8] transition hover:text-[#f5b301]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#f5b301]">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-[#d6dde8]">
            <a href={siteConfig.phoneHref} className="hover:text-[#f5b301]">
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-[#f5b301]">
              {siteConfig.email}
            </a>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5">
        <p className="mx-auto max-w-7xl text-sm text-[#aeb9c8]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
