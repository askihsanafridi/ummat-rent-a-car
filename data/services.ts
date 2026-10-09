export type Service = {
  title: string;
  description: string;
  icon: string;
  href?: string;
  badge?: string;
};

export const services: Service[] = [
  {
    title: "Airport pickup and drop-off",
    description:
      "24/7 flight-tracked airport transfers between Islamabad International Airport (ISB) and all sectors of Islamabad & Rawalpindi.",
    icon: "flight",
    href: "/services/airport-transfer-islamabad",
    badge: "24/7 Flight Tracking",
  },
  {
    title: "Rent a car with driver",
    description:
      "Professional chauffeur-driven cars for daily city travel, business meetings, diplomatic movement, and executive appointments.",
    icon: "driver",
    href: "/services/rent-a-car-with-driver-islamabad",
    badge: "Vetted Chauffeurs",
  },
  {
    title: "Wedding car rental",
    description:
      "Decorated luxury cars, bridal entries, and barath convoys featuring Mercedes Cabriolet, Audi A6, and Toyota Prado.",
    icon: "wedding",
    href: "/services/wedding-car-rental-islamabad",
    badge: "Decor Packages",
  },
  {
    title: "Outstation travel",
    description:
      "Comfortable long-route journeys to Murree, Swat, Naran, Kaghan, Lahore, and Northern Pakistan with experienced drivers.",
    icon: "route",
    href: "/services/outstation-travel-islamabad",
    badge: "Intercity Specialists",
  },
  {
    title: "Family trips",
    description:
      "Safe and relaxed family travel with spacious sedans, 7-seater SUVs, and 14-seater Hiace vans for all group sizes.",
    icon: "family",
  },
  {
    title: "Corporate car rental",
    description:
      "Reliable transport support for multinational companies, embassies, executive delegations, and corporate conferences.",
    icon: "corporate",
  },
  {
    title: "Monthly rental",
    description:
      "Cost-effective monthly rental agreements with dedicated chauffeurs and replacement car assurance for organizations.",
    icon: "calendar",
  },
  {
    title: "VIP car rental",
    description:
      "Commanding luxury SUVs (Land Cruiser 300/200, Prado, Lexus LX) for high-level protocol, delegations, and VIP guests.",
    icon: "vip",
  },
];

export const homeServices = services.slice(0, 4);
