"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-[#07111f]">Something went wrong</h1>
        <p className="mt-4 text-base text-[#5f6b7a]">
          An error occurred while loading this page.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#07111f] px-6 text-sm font-semibold text-white transition hover:bg-[#132033]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dde5] bg-white px-6 text-sm font-semibold text-[#07111f] transition hover:border-[#c89400]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
