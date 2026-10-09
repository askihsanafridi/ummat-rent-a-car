"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DirectCallButton } from "@/components/DirectCallButton";

function ThreeDotsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="12" cy="19" r="2.2" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const appMenuLinks = [
  { label: "Home", href: "/", icon: "🏠", desc: "Main overview & fleet" },
  { label: "Our Fleet", href: "/fleet", icon: "🚗", desc: "18 luxury SUVs, sedans & vans" },
  { label: "Chauffeur Services", href: "/services", icon: "💼", desc: "Airport, weddings & outstation" },
  { label: "Rates & Pricing", href: "/pricing", icon: "🏷️", desc: "Updated live rates on WhatsApp" },
  { label: "Book a Car Online", href: "/booking", icon: "📝", desc: "Quick reservation form" },
  { label: "About Ummat", href: "/about", icon: "ℹ️", desc: "Our story & hygiene standards" },
  { label: "Frequently Asked Questions", href: "/faq", icon: "❓", desc: "Chauffeur policies, fuel & timings" },
  { label: "Contact & Location", href: "/contact", icon: "📍", desc: "G-10 Markaz Islamabad office" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu automatically on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Support custom toggle event from anywhere in the app
  useEffect(() => {
    const handler = () => setIsMenuOpen((prev) => !prev);
    window.addEventListener("toggle-mobile-menu", handler);
    return () => window.removeEventListener("toggle-mobile-menu", handler);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-2.5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between rounded-[16px] border border-[#e7ebf0]/80 bg-white/90 px-3.5 py-2 shadow-[0_8px_30px_rgba(7,17,31,0.06)] backdrop-blur-xl sm:px-6 sm:py-2.5">
            {/* App Brand Logo & Title */}
            <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[12px] border border-[#e2e8f0] bg-white p-0.5 shadow-sm sm:h-11 sm:w-11">
                <Image
                  src="/logo-square.png"
                  alt="Ummat Enterprises Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <span className="min-w-0">
                <span className="block text-sm font-extrabold leading-tight text-[#07111f] sm:text-[15px]">
                  Ummat Enterprises
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-[#d4a329] sm:text-[11px]">
                  <span>Rent-a-Car</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[9px] font-semibold text-[#64748b] sm:hidden">
                    Islamabad
                  </span>
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center rounded-[12px] border border-[#eceff3] bg-[#f7f8fa]/80 px-1.5 py-1.5 lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
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

            {/* Desktop Action Buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[#0284c7]/30 bg-[#f0f9ff] px-3.5 text-xs font-bold text-[#0369a1] shadow-sm transition hover:border-[#0284c7] hover:bg-[#e0f2fe] hover:text-[#0284c7]"
                title={`Call ${siteConfig.shortName} directly at ${siteConfig.phoneDisplay}`}
              >
                <svg
                  className="h-3.5 w-3.5 text-[#0284c7]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call: {siteConfig.phoneDisplay}</span>
              </a>
              <WhatsAppButton
                message="Hello Ummat Enterprises, I want to book a rent-a-car."
                className="min-h-10 px-5"
              />
            </div>

            {/* Mobile Header Quick Actions: Direct Call Button + Three Dots Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.phoneHref}
                aria-label={`Call directly: ${siteConfig.phoneDisplay}`}
                title={`Direct Call: ${siteConfig.phoneDisplay}`}
                className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-[#0284c7]/40 bg-[#f0f9ff] text-[#0284c7] shadow-sm transition active:scale-95"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>

              {/* Three Dots Button (⋮) in Header */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open application menu"
                aria-expanded={isMenuOpen}
                className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-[#d8dde5] bg-white text-[#07111f] shadow-sm transition hover:border-[#d4a329] hover:bg-[#fffdf5] active:scale-95"
                title="Menu options"
              >
                <ThreeDotsIcon className="h-5 w-5 text-[#07111f]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile App Full Drawer / Menu Sheet */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile application menu"
          className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-5 lg:hidden"
        >
          {/* Dimmed Backdrop */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Native App-Style Drawer Card */}
          <div className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-[24px] border border-white/20 bg-white p-5 shadow-[0_25px_60px_rgba(7,17,31,0.3)] animate-in fade-in zoom-in-95 duration-200">
            {/* Top Bar inside App Drawer */}
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[12px] border border-[#e2e8f0] bg-white p-0.5 shadow-sm">
                  <Image
                    src="/logo-square.png"
                    alt="Ummat Enterprises Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-base font-extrabold text-[#07111f]">
                    {siteConfig.name}
                  </p>
                  <p className="text-xs font-semibold text-[#d4a329]">
                    Islamabad • Chauffeur Service 24/7
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5f9] text-[#64748b] transition hover:bg-[#e2e8f0] hover:text-[#07111f] active:scale-95"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Quick Action Cards: Direct Call & WhatsApp */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <a
                href={siteConfig.phoneHref}
                className="flex flex-col rounded-[14px] border border-[#0284c7]/40 bg-[#f0f9ff] p-3 text-left transition active:scale-98 hover:border-[#0284c7]"
              >
                <div className="flex items-center gap-2 text-[#0284c7]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0284c7] text-white">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Direct Call
                  </span>
                </div>
                <p className="mt-2 text-xs font-black text-[#0369a1]">
                  {siteConfig.phoneDisplay}
                </p>
                <span className="mt-0.5 text-[9px] text-[#64748b]">
                  Tap to dial now
                </span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Ummat Enterprises, I want to book a rent-a-car in Islamabad. Please share availability and current rates."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-[14px] border border-[#25d366]/40 bg-[#f0fdf4] p-3 text-left transition active:scale-98 hover:border-[#25d366]"
              >
                <div className="flex items-center gap-2 text-[#16a34a]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25d366] text-white">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    WhatsApp Chat
                  </span>
                </div>
                <p className="mt-2 text-xs font-black text-[#15803d]">
                  Instant Reply
                </p>
                <span className="mt-0.5 text-[9px] text-[#64748b]">
                  Get latest rates
                </span>
              </a>
            </div>

            {/* Navigation Menu Links */}
            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
                Application Navigation
              </p>
              <nav className="mt-2 grid gap-1" aria-label="Mobile Application Menu">
                {appMenuLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between rounded-[12px] px-3.5 py-2.5 transition active:scale-98 ${
                        isActive
                          ? "bg-[#fff9e6] text-[#07111f] border border-[#d4a329]/40"
                          : "hover:bg-[#f8fafc] text-[#334155]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <p
                            className={`text-sm ${
                              isActive
                                ? "font-bold text-[#07111f]"
                                : "font-semibold text-[#1e293b]"
                            }`}
                          >
                            {item.label}
                          </p>
                          <p className="text-[11px] text-[#64748b]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#94a3b8]">
                        &rarr;
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Office Info & Guarantee Card */}
            <div className="mt-5 rounded-[14px] border border-[#e2e8f0] bg-[#f8fafc] p-3.5 text-xs text-[#64748b]">
              <p className="font-bold text-[#07111f]">
                📍 {siteConfig.address}
              </p>
              <p className="mt-1">
                Mon - Sat: 8:00 AM - 10:00 PM • Sun: 9:00 AM - 8:00 PM
              </p>
              <p className="mt-1 font-semibold text-emerald-600">
                ✈️ Islamabad Airport Transfers: 24/7 Available
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
