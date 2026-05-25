export type Car = {
  name: string;
  slug: string;
  image: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  ac: boolean;
  driverAvailable: boolean;
  category: string;
  description: string;
};

export const cars: Car[] = [
  {
    name: "Toyota Corolla",
    slug: "toyota-corolla",
    image: "/images/fleet/toyota-corolla.svg",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    driverAvailable: true,
    category: "Executive Sedan",
    description:
      "A comfortable sedan for airport transfers, office travel, and family city rides.",
  },
  {
    name: "Honda Civic",
    slug: "honda-civic",
    image: "/images/fleet/honda-civic.svg",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    driverAvailable: true,
    category: "Premium Sedan",
    description:
      "Premium styling and a smooth ride for business meetings, events, and VIP movement.",
  },
  {
    name: "Toyota Yaris",
    slug: "toyota-yaris",
    image: "/images/fleet/toyota-yaris.svg",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    driverAvailable: true,
    category: "Compact Sedan",
    description:
      "Efficient and tidy for daily bookings, quick pickups, and family errands.",
  },
  {
    name: "Suzuki Alto",
    slug: "suzuki-alto",
    image: "/images/fleet/suzuki-alto.svg",
    seats: 4,
    transmission: "Manual",
    ac: true,
    driverAvailable: true,
    category: "Economy Hatchback",
    description:
      "Budget-friendly city transport with clean interiors and easy mobility.",
  },
  {
    name: "Toyota Hiace",
    slug: "toyota-hiace",
    image: "/images/fleet/toyota-hiace.svg",
    seats: 14,
    transmission: "Manual",
    ac: true,
    driverAvailable: true,
    category: "Family Van",
    description:
      "Spacious group travel for weddings, airport runs, tours, and outstation trips.",
  },
  {
    name: "Toyota Prado",
    slug: "toyota-prado",
    image: "/images/fleet/toyota-prado.svg",
    seats: 7,
    transmission: "Automatic",
    ac: true,
    driverAvailable: true,
    category: "VIP SUV",
    description:
      "Luxury SUV option for VIP movement, protocol travel, and premium occasions.",
  },
];

export const featuredCars = cars.slice(0, 3);
