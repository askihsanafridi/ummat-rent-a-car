import { siteConfig } from "@/data/site";

type DirectCallButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "outline" | "gold";
  showNumber?: boolean;
};

const variants = {
  primary:
    "bg-[#0284c7] text-white shadow-[0_14px_35px_rgba(2,132,199,0.28)] hover:bg-[#0369a1] hover:shadow-[0_18px_40px_rgba(2,132,199,0.38)] focus:ring-[#0284c7]/40",
  dark: "bg-[#07111f] text-white shadow-[0_14px_35px_rgba(7,17,31,0.24)] hover:bg-[#132033] hover:border-[#38bdf8]/40 border border-white/10 focus:ring-white/20",
  outline:
    "border border-[#0284c7]/30 bg-white text-[#0369a1] shadow-sm hover:border-[#0284c7] hover:bg-[#f0f9ff] focus:ring-[#0284c7]/30",
  gold: "bg-[#d4a329] text-[#07111f] shadow-[0_14px_35px_rgba(212,163,41,0.3)] hover:bg-[#c39220] focus:ring-[#d4a329]/40",
};

export function DirectCallButton({
  children,
  className = "",
  variant = "primary",
  showNumber = true,
}: DirectCallButtonProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      aria-label={`Call ${siteConfig.name} directly at ${siteConfig.phoneDisplay}`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-4 ${variants[variant]} ${className}`}
    >
      <svg
        className="h-4 w-4 shrink-0"
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
      <span>
        {children || (showNumber ? `Call: ${siteConfig.phoneDisplay}` : "Direct Call")}
      </span>
    </a>
  );
}
