export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Airport pickup and drop-off",
    description:
      "Timely airport transfers with clean cars, luggage space, and professional drivers.",
    icon: "flight",
  },
  {
    title: "Rent a car with driver",
    description:
      "Comfortable chauffeur-driven cars for daily city travel, meetings, and appointments.",
    icon: "driver",
  },
  {
    title: "Wedding car rental",
    description:
      "Elegant vehicles for bridal entries, family movement, and guest transport.",
    icon: "wedding",
  },
  {
    title: "Family trips",
    description:
      "Safe and relaxed family travel with sedans, SUVs, and vans for every group size.",
    icon: "family",
  },
  {
    title: "Corporate car rental",
    description:
      "Reliable transport support for offices, executives, delegations, and events.",
    icon: "corporate",
  },
  {
    title: "Outstation travel",
    description:
      "Comfortable long-route bookings for intercity travel with experienced drivers.",
    icon: "route",
  },
  {
    title: "Monthly rental",
    description:
      "Flexible monthly rental plans for businesses, families, and regular commuters.",
    icon: "calendar",
  },
  {
    title: "VIP car rental",
    description:
      "Premium SUVs and executive sedans for protocol, hospitality, and special occasions.",
    icon: "vip",
  },
];

export const homeServices = services.slice(0, 4);
