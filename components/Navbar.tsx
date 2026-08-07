"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-[16px] border border-[#e7ebf0]/80 bg-white/80 px-4 py-2.5 shadow-[0_8px_30px_rgba(7,17,31,0.06)] backdrop-blur-xl sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#07111f] text-sm font-bold text-[#f5b301]">
              UE
            </span>
            <span className="min-w-0">
              <span className="block text-[15px] font-semibold leading-4 text-[#07111f]">
                Ummat Enterprises
              </span>
              <span className="block text-[11px] font-medium tracking-wide text-[#8b95a3]">
                Rent-a-Car
              </span>
            </span>
          </Link>

          <nav className="hidden items-center rounded-[12px] border border-[#eceff3] bg-[#f7f8fa]/80 px-1.5 py-1.5 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-[8px] px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-[#07111f] shadow-[0_1px_4px_rgba(7,17,31,0.08)]"
                      : "text-[#6b7787] hover:text-[#07111f]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className="text-sm font-medium text-[#6b7787] transition hover:text-[#07111f]"
            >
              {siteConfig.phoneDisplay}
            </a>
            <WhatsAppButton
              message="Hello Ummat Enterprises, I want to book a rent-a-car."
              className="min-h-10 px-5"
            />
          </div>

          <details className="group lg:hidden">
            <summary
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[10px] border border-[#d8dde5] text-[#07111f] [&::-webkit-details-marker]:hidden"
            >
              <MenuIcon />
              <CloseIcon />
            </summary>

            <div className="absolute left-4 right-4 top-[72px] rounded-[16px] border border-[#e7ebf0]/80 bg-white px-4 pb-4 pt-3 shadow-[0_20px_50px_rgba(7,17,31,0.12)]">
              <nav className="grid gap-0.5" aria-label="Mobile">
                {navLinks.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-[8px] px-3 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-[#f7f8fa] text-[#07111f]"
                          : "text-[#6b7787] hover:bg-[#f7f8fa] hover:text-[#07111f]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-3 grid gap-3 border-t border-[#eceff3] pt-3">
                <a
                  href={siteConfig.phoneHref}
                  className="rounded-[10px] border border-[#d8dde5] px-4 py-2.5 text-center text-sm font-semibold text-[#07111f]"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <WhatsAppButton
                  message="Hello Ummat Enterprises, I want to book a rent-a-car."
                  className="w-full"
                />
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
