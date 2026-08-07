import type { MetadataRoute } from "next";

const baseUrl = "https://ummatenterprises.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/fleet", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/booking", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // Add individual car pages
  const carSlugs = [
    "toyota-corolla",
    "honda-civic",
    "toyota-yaris",
    "suzuki-alto",
    "toyota-hiace",
    "toyota-prado",
  ];

  const carRoutes = carSlugs.map((slug) => ({
    url: `/fleet/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...carRoutes].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
