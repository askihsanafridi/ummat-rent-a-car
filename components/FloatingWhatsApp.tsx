import { createWhatsAppUrl, siteConfig } from "@/data/site";

const message =
  "Hello Ummat Enterprises Rent-a-Car, I want to book a car. Please share availability and charges.";

export function FloatingWhatsApp() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-3 sm:bottom-6 sm:right-6">
      <div className="hidden rounded-[8px] border border-[#e7ebf0] bg-white px-4 py-3 shadow-[0_18px_45px_rgba(7,17,31,0.16)] sm:block">
        <p className="text-sm font-semibold text-[#07111f]">Need a car?</p>
        <p className="mt-0.5 text-xs font-medium text-[#6b7280]">
          Chat with us on WhatsApp
        </p>
      </div>

      <a
        href={createWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.shortName} on WhatsApp`}
        className="pointer-events-auto inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 text-sm font-bold text-[#07111f] shadow-[0_18px_45px_rgba(37,211,102,0.36)] ring-1 ring-[#1fb457]/40 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 sm:px-5"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5.4 19.2 6.5 15A7.4 7.4 0 1 1 9 17.3l-3.6 1.9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.3 8.7c.3-.3.6-.3.9 0l.8 1c.2.3.2.6 0 .9l-.4.5c.5 1 1.3 1.7 2.4 2.2l.5-.5c.3-.2.6-.2.9 0l1 .8c.3.2.3.6.1.9-.5.7-1.1 1-1.9.9-2.7-.3-5.1-2.7-5.4-5.4-.1-.6.3-1.1 1.1-1.3Z"
            fill="currentColor"
          />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
