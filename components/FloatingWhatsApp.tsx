import { createWhatsAppUrl, siteConfig } from "@/data/site";

const message =
  "Hello Ummat Enterprises Rent-a-Car, I want to book a car with driver in Islamabad. Please share availability and rates.";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-2.5">
      {/* Direct Call Button with Live Phone Number */}
      <a
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.name} directly at ${siteConfig.phoneDisplay}`}
        className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-[#0284c7]/40 bg-[#07111f] px-4 text-xs font-bold text-white shadow-[0_16px_35px_rgba(7,17,31,0.35)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-[#38bdf8] hover:bg-[#0c1c31] hover:shadow-[0_20px_45px_rgba(2,132,199,0.35)] focus:outline-none focus:ring-4 focus:ring-[#0284c7]/40 sm:min-h-13 sm:px-4.5"
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#0284c7] text-white shadow-sm transition group-hover:scale-110">
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
        <div className="text-left">
          <span className="block text-[9px] font-semibold uppercase tracking-wider text-[#93c5fd]">
            Direct Call · 24/7
          </span>
          <span className="block font-extrabold text-white tracking-wide">
            {siteConfig.phoneDisplay}
          </span>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.shortName} on WhatsApp`}
        className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#25d366] px-4 text-xs font-bold text-[#07111f] shadow-[0_16px_35px_rgba(37,211,102,0.36)] ring-1 ring-[#1fb457]/40 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-[0_20px_45px_rgba(37,211,102,0.48)] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 sm:min-h-13 sm:px-4.5"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1da851] text-white shadow-sm transition group-hover:scale-110">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </span>
        <div className="text-left">
          <span className="block text-[9px] font-semibold uppercase tracking-wider text-[#166534]">
            Instant Reply
          </span>
          <span className="block font-extrabold text-[#07111f]">
            WhatsApp Chat
          </span>
        </div>
      </a>
    </div>
  );
}
