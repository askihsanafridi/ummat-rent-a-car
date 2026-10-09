"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, createWhatsAppUrl } from "@/data/site";

export function MobileStickyBar() {
  const pathname = usePathname();
  const defaultWhatsAppMsg =
    "Hello Ummat Enterprises, I want to book a rent-a-car with driver in Islamabad. Please share availability and current rates.";

  const isHome = pathname === "/";
  const isFleet = pathname.startsWith("/fleet");
  const isServices = pathname.startsWith("/services");

  return (
    <aside
      aria-label="Mobile application bottom navigation"
      className="fixed bottom-0 left-0 right-0 z-40 block border-t border-[#e2e8f0]/90 bg-white/95 px-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-10px_30px_rgba(7,17,31,0.08)] backdrop-blur-xl md:hidden"
    >
      <nav
        className="mx-auto grid max-w-md grid-cols-5 items-center gap-1 text-center"
        aria-label="Mobile App Tabs"
      >
        {/* Tab 1: Home */}
        <Link
          href="/"
          aria-current={isHome ? "page" : undefined}
          className={`flex flex-col items-center justify-center rounded-[12px] py-1 transition-all active:scale-95 ${
            isHome
              ? "text-[#d4a329]"
              : "text-[#64748b] hover:text-[#07111f]"
          }`}
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill={isHome ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {isHome && (
              <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#d4a329]" />
            )}
          </span>
          <span
            className={`mt-1 text-[10px] tracking-tight ${
              isHome ? "font-extrabold text-[#07111f]" : "font-medium"
            }`}
          >
            Home
          </span>
        </Link>

        {/* Tab 2: Fleet */}
        <Link
          href="/fleet"
          aria-current={isFleet ? "page" : undefined}
          className={`flex flex-col items-center justify-center rounded-[12px] py-1 transition-all active:scale-95 ${
            isFleet
              ? "text-[#d4a329]"
              : "text-[#64748b] hover:text-[#07111f]"
          }`}
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={isFleet ? "2.4" : "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            {isFleet && (
              <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#d4a329]" />
            )}
          </span>
          <span
            className={`mt-1 text-[10px] tracking-tight ${
              isFleet ? "font-extrabold text-[#07111f]" : "font-medium"
            }`}
          >
            Fleet
          </span>
        </Link>

        {/* Tab 3: Services */}
        <Link
          href="/services"
          aria-current={isServices ? "page" : undefined}
          className={`flex flex-col items-center justify-center rounded-[12px] py-1 transition-all active:scale-95 ${
            isServices
              ? "text-[#d4a329]"
              : "text-[#64748b] hover:text-[#07111f]"
          }`}
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={isServices ? "2.4" : "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="m9 8 6 4-6 4Z" />
            </svg>
            {isServices && (
              <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#d4a329]" />
            )}
          </span>
          <span
            className={`mt-1 text-[10px] tracking-tight ${
              isServices ? "font-extrabold text-[#07111f]" : "font-medium"
            }`}
          >
            Services
          </span>
        </Link>

        {/* Tab 4: Direct Call with Visible Phone Number */}
        <a
          href={siteConfig.phoneHref}
          aria-label={`Call directly: ${siteConfig.phoneDisplay}`}
          className="group flex flex-col items-center justify-center rounded-[12px] py-0.5 transition-all active:scale-95"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#0284c7] text-white shadow-[0_4px_12px_rgba(2,132,199,0.35)] transition group-hover:scale-105">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-35" />
            <svg
              className="relative h-3.5 w-3.5"
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
          </span>
          <span className="mt-0.5 text-[10px] font-extrabold text-[#0284c7] leading-none">
            Call
          </span>
          <span className="text-[8px] font-bold text-[#0369a1] tracking-tight leading-none mt-0.5">
            0335-6868001
          </span>
        </a>

        {/* Tab 5: WhatsApp Chat */}
        <a
          href={createWhatsAppUrl(defaultWhatsAppMsg)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex flex-col items-center justify-center rounded-[12px] py-0.5 transition-all active:scale-95"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.35)] transition group-hover:scale-105">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </span>
          <span className="mt-0.5 text-[10px] font-extrabold text-[#16a34a] leading-none">
            WhatsApp
          </span>
          <span className="text-[8px] font-bold text-[#15803d] tracking-tight leading-none mt-0.5">
            Instant Chat
          </span>
        </a>
      </nav>
    </aside>
  );
}
