"use client";

import { useState } from "react";
import Image from "next/image";
import type { CarPhoto } from "@/data/cars";

export function CarGallery({ photos, name }: { photos: CarPhoto[]; name: string }) {
  const [selected, setSelected] = useState(0);
  const photo = photos[selected];

  return (
    <div aria-label={`${name} photo gallery`}>
      <div className="relative aspect-[3/2] overflow-hidden rounded-[8px] bg-[#f6f8fb]">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
          className="gallery-photo object-contain"
          loading="eager"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-4 text-sm text-[#5f6b7a]">
        <p aria-live="polite">{photo.alt} · {selected + 1} / {photos.length}</p>
        <a href={photo.src} target="_blank" rel="noopener noreferrer" className="shrink-0 font-semibold text-[#9a7100] underline underline-offset-4">
          Full size
        </a>
      </div>
      {photos.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {photos.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Show photo ${index + 1}: ${item.alt}`}
              aria-pressed={selected === index}
              className={`relative aspect-[3/2] overflow-hidden rounded-[8px] border-2 bg-[#f6f8fb] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a7100] ${selected === index ? "border-[#c89400]" : "border-transparent hover:border-[#d8dde5]"}`}
            >
              <Image src={item.src} alt="" fill sizes="(min-width: 1024px) 150px, 25vw" className="object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
