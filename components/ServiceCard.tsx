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
  return (
    <article className="rounded-[8px] border border-[#e7ebf0] bg-white p-6 shadow-[0_16px_44px_rgba(7,17,31,0.06)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#fff4cf] text-[#b88300]">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#07111f]">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#5f6b7a]">
        {service.description}
      </p>
    </article>
  );
}
