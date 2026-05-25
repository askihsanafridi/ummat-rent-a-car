import { createWhatsAppUrl } from "@/data/site";

type WhatsAppButtonProps = {
  message: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "outline";
};

const variants = {
  primary:
    "bg-[#25d366] text-[#07111f] shadow-[0_18px_40px_rgba(37,211,102,0.22)] hover:bg-[#20bd5a]",
  dark: "bg-[#07111f] text-white shadow-[0_18px_40px_rgba(7,17,31,0.18)] hover:bg-[#132033]",
  outline:
    "border border-[#d8dde5] bg-white text-[#07111f] hover:border-[#c89400] hover:bg-[#fff8e1]",
};

export function WhatsAppButton({
  message,
  children = "Book on WhatsApp",
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      <svg
        className="mr-2 h-4 w-4"
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
      {children}
    </a>
  );
}
