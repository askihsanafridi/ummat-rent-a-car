import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const common = "h-6 w-6";

  if (icon === "flight") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 12.5 21 4l-4.8 16-4.3-6.8L5.7 17 3 12.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "calendar") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3v3M17 3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "route") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 18c3.5-7 8.5-5 12-12M6 18h4M6 18v-4M18 6h-4M18 6v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "vip") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m4 8 4.4 3.8L12 5l3.6 6.8L20 8l-2 10H6L4 8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 16h14l-1.2-5.1A3 3 0 0 0 14.9 8H9.1a3 3 0 0 0-2.9 2.9L5 16ZM7 16v2M17 16v2M8 18h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceCard({ service }: ServiceCardProps) {
  const content = (
    <article className="group flex flex-col justify-between rounded-[16px] border border-[#e2e8f0] bg-white p-6 shadow-[0_10px_30px_rgba(7,17,31,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d4a329]/50 hover:shadow-[0_20px_45px_rgba(7,17,31,0.12)]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#fff4cf] text-[#9a7100]">
            <ServiceIcon icon={service.icon} />
          </div>
          {service.badge && (
            <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 text-[11px] font-bold text-[#64748b]">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="mt-5 text-xl font-bold text-[#07111f] transition group-hover:text-[#d4a329]">
          {service.title}
        </h3>

        <p className="mt-2.5 text-xs leading-relaxed text-[#5f6b7a] sm:text-sm">
          {service.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-bold text-[#07111f] group-hover:text-[#d4a329]">
        <span>{service.href ? "View Details & Fleet" : "Inquire on WhatsApp"}</span>
        <span>&rarr;</span>
      </div>
    </article>
  );

  if (service.href) {
    return (
      <Link href={service.href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
