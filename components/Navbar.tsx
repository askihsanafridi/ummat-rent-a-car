import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5 group-open:hidden"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="hidden h-5 w-5 group-open:block"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9edf3] bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#07111f] text-sm font-bold text-[#f5b301]">
            UE
          </span>
          <span className="min-w-0">
            <span className="block text-base font-semibold leading-5 text-[#07111f]">
              Ummat Enterprises
            </span>
            <span className="block text-xs font-medium text-[#697586]">
              Rent-a-Car
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#253041] transition hover:text-[#c89400]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-semibold text-[#07111f] transition hover:text-[#c89400]"
          >
            {siteConfig.phoneDisplay}
          </a>
          <WhatsAppButton
            message="Hello Ummat Enterprises, I want to book a rent-a-car."
            className="min-h-11 px-5"
          />
        </div>

        <details className="group lg:hidden">
          <summary
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[8px] border border-[#d8dde5] text-[#07111f] [&::-webkit-details-marker]:hidden"
          >
            <MenuIcon />
            <CloseIcon />
          </summary>

          <div className="absolute left-0 right-0 top-full border-t border-[#e9edf3] bg-white px-4 pb-5 pt-2 shadow-[0_18px_38px_rgba(7,17,31,0.08)]">
            <nav className="grid gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[8px] px-3 py-3 text-sm font-semibold text-[#253041] hover:bg-[#f7f9fc]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 grid gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="rounded-[8px] border border-[#d8dde5] px-4 py-3 text-center text-sm font-semibold text-[#07111f]"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <WhatsAppButton
                  message="Hello Ummat Enterprises, I want to book a rent-a-car."
                  className="w-full"
                />
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
