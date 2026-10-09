import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ummat Enterprises Rent-a-Car Islamabad",
    short_name: "Ummat Rent-a-Car",
    description:
      "Chauffeur-driven car rental in Islamabad, airport transfers, luxury SUVs, wedding cars, and outstation travel across Pakistan.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo-square.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
