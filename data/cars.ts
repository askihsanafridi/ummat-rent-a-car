export type CarPhoto = {
  src: string;
  alt: string;
};

export type CarCategorySlug =
  | "luxury-suv"
  | "wedding-luxury"
  | "crossover-family"
  | "executive-sedan"
  | "van-bus";

export type Car = {
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  gallery: CarPhoto[];
  bodyStyle: string;
  colors: string;
  driverAvailable: boolean;
  category: string;
  categorySlug: CarCategorySlug;
  description: string;
  bestFor: string[];
  seats: number;
  luggage: number;
  transmission: "Automatic" | "Manual";
  airConditioned: boolean;
  featuredBadge?: string;
  indicativeRate?: string;
};

export const fleetCategories = [
  { slug: "all", label: "All Vehicles" },
  { slug: "luxury-suv", label: "Luxury & VIP SUVs" },
  { slug: "wedding-luxury", label: "Wedding & Luxury" },
  { slug: "executive-sedan", label: "Executive Sedans" },
  { slug: "crossover-family", label: "SUVs & Pickups" },
  { slug: "van-bus", label: "Vans & Minibuses" },
] as const;

// Model families and visible features are based on the supplied images.
// Confirm exact model, year, trim, seating, transmission, and rates at booking.
// Luxury-first presentation order; rental rates are confirmed per booking.
export const cars: Car[] = [
  {
    name: "Toyota Land Cruiser 300",
    slug: "toyota-land-cruiser-300",
    image: "/images/fleet/toyota-land-cruiser-300-black-front.webp",
    imageAlt: "Black Land Cruiser 300, front view",
    gallery: [
      {
        src: "/images/fleet/toyota-land-cruiser-300-black-front.webp",
        alt: "Black Land Cruiser 300, front view",
      },
    ],
    bodyStyle: "SUV",
    colors: "Black",
    driverAvailable: true,
    category: "Luxury SUV",
    categorySlug: "luxury-suv",
    seats: 7,
    luggage: 5,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "VIP Protocol",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A black Land Cruiser with the distinctive wide grille of the 300 series. A commanding choice for executive travel, VIP arrivals, and special events.",
    bestFor: ["VIP arrivals", "Executive travel", "Special events"],
  },
  {
    name: "Lexus LX",
    slug: "lexus-lx",
    image: "/images/fleet/lexus-lx-black-front.webp",
    imageAlt: "Black Lexus LX, front view",
    gallery: [
      {
        src: "/images/fleet/lexus-lx-black-front.webp",
        alt: "Black Lexus LX, front view",
      },
      {
        src: "/images/fleet/lexus-lx-black-rear.webp",
        alt: "Black Lexus LX, rear three-quarter view",
      },
      {
        src: "/images/fleet/lexus-lx-tan-dashboard.webp",
        alt: "Lexus-badged tan dashboard and front cabin",
      },
    ],
    bodyStyle: "SUV",
    colors: "Black",
    driverAvailable: true,
    category: "Luxury SUV",
    categorySlug: "luxury-suv",
    seats: 7,
    luggage: 5,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Executive Luxury",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A black Lexus SUV with a spindle grille and a tan dashboard shown in the gallery. Suited to executive arrivals and premium occasions.",
    bestFor: ["Executive travel", "VIP transport", "Wedding transport"],
  },
  {
    name: "Toyota Land Cruiser 200",
    slug: "toyota-land-cruiser-200",
    image: "/images/fleet/toyota-land-cruiser-200-white-side.webp",
    imageAlt: "White Land Cruiser 200, front three-quarter view",
    gallery: [
      {
        src: "/images/fleet/toyota-land-cruiser-200-white-side.webp",
        alt: "White Land Cruiser 200, front three-quarter view",
      },
      {
        src: "/images/fleet/toyota-land-cruiser-200-white-front.webp",
        alt: "White Land Cruiser 200, front view",
      },
      {
        src: "/images/fleet/toyota-land-cruiser-200-black-front.webp",
        alt: "Black Land Cruiser 200, front view",
      },
      {
        src: "/images/fleet/toyota-land-cruiser-200-black-driveway.webp",
        alt: "Black Land Cruiser 200 in a driveway",
      },
      {
        src: "/images/fleet/toyota-land-cruiser-200-black-front-wide.webp",
        alt: "Black Land Cruiser 200, wide front view",
      },
      {
        src: "/images/fleet/toyota-land-cruiser-200-black-sunset.webp",
        alt: "Black Land Cruiser 200 at sunset",
      },
    ],
    bodyStyle: "SUV",
    colors: "White / Black",
    driverAvailable: true,
    category: "Luxury SUV",
    categorySlug: "luxury-suv",
    seats: 7,
    luggage: 4,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Presidential V8",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A full-size Land Cruiser with a broad chrome grille, shown in white and black. Explore the exterior views for executive arrivals and family travel.",
    bestFor: ["VIP transport", "Corporate travel", "Family trips"],
  },
  {
    name: "Toyota Prado",
    slug: "toyota-prado",
    image: "/images/fleet/toyota-prado-white-front-three-quarter.webp",
    imageAlt: "White Prado, front three-quarter view",
    gallery: [
      {
        src: "/images/fleet/toyota-prado-white-front-three-quarter.webp",
        alt: "White Prado, front three-quarter view",
      },
      {
        src: "/images/fleet/toyota-prado-black-front.webp",
        alt: "Black Prado, front view",
      },
      {
        src: "/images/fleet/toyota-prado-white-front.webp",
        alt: "White Prado, front view",
      },
      {
        src: "/images/fleet/toyota-prado-black-front-road.webp",
        alt: "Black Prado on the road",
      },
      {
        src: "/images/fleet/toyota-prado-beige-dashboard.webp",
        alt: "Prado-style beige dashboard and front cabin",
      },
      {
        src: "/images/fleet/toyota-prado-beige-rear-seats.webp",
        alt: "Prado-style beige rear bench",
      },
    ],
    bodyStyle: "SUV",
    colors: "White / Black",
    driverAvailable: true,
    category: "VIP SUV",
    categorySlug: "luxury-suv",
    seats: 7,
    luggage: 4,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Most Popular SUV",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A high-riding SUV shown in white and black, with beige cabin photos. A top choice for family journeys, events, and VIP travel.",
    bestFor: ["Family trips", "VIP transport", "Outstation travel"],
  },
  {
    name: "Mercedes-Benz Cabriolet",
    slug: "mercedes-benz-cabriolet",
    image: "/images/fleet/mercedes-benz-cabriolet-white-side.webp",
    imageAlt: "White Mercedes-Benz cabriolet, side view with roof down",
    gallery: [
      {
        src: "/images/fleet/mercedes-benz-cabriolet-white-side.webp",
        alt: "White Mercedes-Benz cabriolet, side view with roof down",
      },
      {
        src: "/images/fleet/mercedes-benz-cabriolet-white-front.webp",
        alt: "White Mercedes-Benz cabriolet, front view",
      },
    ],
    bodyStyle: "Convertible",
    colors: "White",
    driverAvailable: true,
    category: "Luxury Convertible",
    categorySlug: "wedding-luxury",
    seats: 4,
    luggage: 2,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Wedding Open-Top",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A white open-top Mercedes-Benz for wedding arrivals, celebrations, and photo sessions. Confirm the exact model and roof arrangement when booking.",
    bestFor: ["Wedding arrivals", "Celebrations", "Photo sessions"],
  },
  {
    name: "Mercedes-Benz Sedan",
    slug: "mercedes-benz-sedan",
    image: "/images/fleet/mercedes-benz-sedan-white-front.webp",
    imageAlt: "White Mercedes-Benz sedan, front view",
    gallery: [
      {
        src: "/images/fleet/mercedes-benz-sedan-white-front.webp",
        alt: "White Mercedes-Benz sedan, front view",
      },
      {
        src: "/images/fleet/mercedes-benz-sedan-wedding-ribbons.webp",
        alt: "White Mercedes-Benz wedding sedan with red ribbons",
      },
    ],
    bodyStyle: "Sedan",
    colors: "White",
    driverAvailable: true,
    category: "Luxury Sedan",
    categorySlug: "wedding-luxury",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Executive & Wedding",
    indicativeRate: "Rates on WhatsApp",
    description:
      "White Mercedes-Benz sedan options for executive journeys and weddings, including a ribbon-decorated example. Confirm your preferred model with our team.",
    bestFor: ["Executive journeys", "Wedding transport", "Special events"],
  },
  {
    name: "Audi A6",
    slug: "audi-a6",
    image: "/images/fleet/audi-a6-white-front.webp",
    imageAlt: "White Audi A6, front view",
    gallery: [
      {
        src: "/images/fleet/audi-a6-white-front.webp",
        alt: "White Audi A6, front view",
      },
      {
        src: "/images/fleet/audi-a6-wedding-heart-flowers.webp",
        alt: "Black Audi A6 with heart-shaped wedding flowers",
      },
    ],
    bodyStyle: "Sedan",
    colors: "White / Black",
    driverAvailable: true,
    category: "Luxury Sedan",
    categorySlug: "wedding-luxury",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Luxury Chauffeur",
    indicativeRate: "Rates on WhatsApp",
    description:
      "An Audi sedan shown in white and as a black wedding car with heart-shaped flowers. Choose it for corporate visits or a special arrival.",
    bestFor: ["Corporate visits", "Wedding arrivals", "Special occasions"],
  },
  {
    name: "Toyota Fortuner",
    slug: "toyota-fortuner",
    image: "/images/fleet/toyota-fortuner-white-front-three-quarter.webp",
    imageAlt: "White Fortuner, front three-quarter view",
    gallery: [
      {
        src: "/images/fleet/toyota-fortuner-white-front-three-quarter.webp",
        alt: "White Fortuner, front three-quarter view",
      },
      {
        src: "/images/fleet/toyota-fortuner-black-front.webp",
        alt: "Black Fortuner, front view",
      },
    ],
    bodyStyle: "SUV",
    colors: "White / Black",
    driverAvailable: true,
    category: "Family SUV",
    categorySlug: "crossover-family",
    seats: 7,
    luggage: 4,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Family 7-Seater",
    indicativeRate: "Rates on WhatsApp",
    description:
      "An SUV shown in white and black, with a tall stance and roof rails. Consider it for family outings, airport journeys, and outstation bookings.",
    bestFor: ["Family outings", "Airport transfers", "Outstation travel"],
  },
  {
    name: "Toyota Hilux",
    slug: "toyota-hilux",
    image: "/images/fleet/toyota-hilux-black-driveway.webp",
    imageAlt: "Black Hilux, front three-quarter view in a driveway",
    gallery: [
      {
        src: "/images/fleet/toyota-hilux-black-driveway.webp",
        alt: "Black Hilux, front three-quarter view in a driveway",
      },
      {
        src: "/images/fleet/toyota-hilux-white-front.webp",
        alt: "White Hilux with TOYOTA grille lettering",
      },
      {
        src: "/images/fleet/toyota-hilux-black-street.webp",
        alt: "Black Hilux, front three-quarter street view",
      },
    ],
    bodyStyle: "Pickup",
    colors: "White / Black",
    driverAvailable: true,
    category: "Double-cab Pickup",
    categorySlug: "crossover-family",
    seats: 5,
    luggage: 6,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "4x4 Work & Terrain",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A double-cab pickup with a separate load bed, shown in white and black. Discuss your luggage, route, and work-travel requirements when booking.",
    bestFor: ["Work travel", "Outstation trips", "Luggage transport"],
  },
  {
    name: "JAC T9",
    slug: "jac-t9",
    image: "/images/fleet/jac-t9-black-front-three-quarter.webp",
    imageAlt: "Black JAC T9 beside a lake",
    gallery: [
      {
        src: "/images/fleet/jac-t9-black-front-three-quarter.webp",
        alt: "Black JAC T9 beside a lake",
      },
    ],
    bodyStyle: "Pickup",
    colors: "Black",
    driverAvailable: true,
    category: "Double-cab Pickup",
    categorySlug: "crossover-family",
    seats: 5,
    luggage: 6,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Rugged Double-Cab",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A black JAC double-cab pickup with an open load bed and bold grille. An option for work trips and journeys with extra luggage requirements.",
    bestFor: ["Work trips", "Outstation travel", "Luggage transport"],
  },
  {
    name: "Changan Oshan X7",
    slug: "changan-oshan-x7",
    image: "/images/fleet/changan-oshan-x7-white-side.webp",
    imageAlt: "White Oshan X7 with red lower-body accents",
    gallery: [
      {
        src: "/images/fleet/changan-oshan-x7-white-side.webp",
        alt: "White Oshan X7 with red lower-body accents",
      },
    ],
    bodyStyle: "SUV",
    colors: "White",
    driverAvailable: true,
    category: "Family SUV",
    categorySlug: "crossover-family",
    seats: 7,
    luggage: 3,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Comfort 7-Seater",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A white SUV with a large mesh grille, roof rails, and red lower-body accents. Ask our team to confirm the seating layout for your family or group.",
    bestFor: ["Family trips", "Group outings", "Outstation travel"],
  },
  {
    name: "MG HS",
    slug: "mg-hs",
    image: "/images/fleet/mg-hs-white-front.webp",
    imageAlt: "White MG HS, front view",
    gallery: [
      {
        src: "/images/fleet/mg-hs-white-front.webp",
        alt: "White MG HS, front view",
      },
    ],
    bodyStyle: "Crossover",
    colors: "White",
    driverAvailable: true,
    category: "Premium Crossover",
    categorySlug: "crossover-family",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Modern Crossover",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A white MG crossover with a prominent MG grille badge. A smart option for business appointments, city journeys, and family outings.",
    bestFor: ["Business appointments", "City journeys", "Family outings"],
  },
  {
    name: "Toyota Corolla Cross",
    slug: "toyota-corolla-cross",
    image: "/images/fleet/toyota-corolla-cross-white-showroom.webp",
    imageAlt: "White Corolla Cross in a showroom",
    gallery: [
      {
        src: "/images/fleet/toyota-corolla-cross-white-showroom.webp",
        alt: "White Corolla Cross in a showroom",
      },
      {
        src: "/images/fleet/toyota-corolla-cross-white-front.webp",
        alt: "White Corolla Cross, front view",
      },
    ],
    bodyStyle: "Crossover",
    colors: "White",
    driverAvailable: true,
    category: "Crossover SUV",
    categorySlug: "crossover-family",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Compact Hybrid SUV",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A white crossover with a raised driving position and compact SUV shape, suited to city travel and family airport bookings.",
    bestFor: ["City travel", "Family outings", "Airport transfers"],
  },
  {
    name: "Honda Civic",
    slug: "honda-civic",
    image: "/images/fleet/honda-civic-white-front-three-quarter.webp",
    imageAlt: "White Civic, front three-quarter view",
    gallery: [
      {
        src: "/images/fleet/honda-civic-white-front-three-quarter.webp",
        alt: "White Civic, front three-quarter view",
      },
      {
        src: "/images/fleet/honda-civic-white-front.webp",
        alt: "White Civic, front view",
      },
      {
        src: "/images/fleet/honda-civic-wedding-red-flowers.webp",
        alt: "Civic with red and white wedding flowers",
      },
      {
        src: "/images/fleet/honda-civic-wedding-rose-garlands.webp",
        alt: "Civic with rose garlands for a wedding",
      },
    ],
    bodyStyle: "Sedan",
    colors: "White",
    driverAvailable: true,
    category: "Premium Sedan",
    categorySlug: "executive-sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Premium Sedan",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A sleek white sedan for corporate travel and special occasions. The gallery includes floral wedding decoration options.",
    bestFor: ["Corporate travel", "Wedding transport", "Airport transfers"],
  },
  {
    name: "Toyota Corolla",
    slug: "toyota-corolla",
    image: "/images/fleet/toyota-corolla-white-front-three-quarter.webp",
    imageAlt: "White Corolla, front three-quarter view",
    gallery: [
      {
        src: "/images/fleet/toyota-corolla-white-front-three-quarter.webp",
        alt: "White Corolla, front three-quarter view",
      },
    ],
    bodyStyle: "Sedan",
    colors: "White",
    driverAvailable: true,
    category: "Executive Sedan",
    categorySlug: "executive-sedan",
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Most Popular Sedan",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A white sedan with a separate boot for everyday city bookings, airport transfers, and business travel.",
    bestFor: ["Airport transfers", "Business travel", "City rides"],
  },
  {
    name: "Toyota Coaster",
    slug: "toyota-coaster",
    image: "/images/fleet/toyota-coaster-white-mountain-road.webp",
    imageAlt: "White and silver Toyota Coaster on a mountain road",
    gallery: [
      {
        src: "/images/fleet/toyota-coaster-white-mountain-road.webp",
        alt: "White and silver Toyota Coaster on a mountain road",
      },
    ],
    bodyStyle: "Minibus",
    colors: "White / Silver",
    driverAvailable: true,
    category: "Group Minibus",
    categorySlug: "van-bus",
    seats: 29,
    luggage: 15,
    transmission: "Manual",
    airConditioned: true,
    featuredBadge: "29-Seater Tour Bus",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A Coaster minibus for larger groups, wedding guests, and tour parties. Send your headcount and route for a suitable seating arrangement and quote.",
    bestFor: ["Group tours", "Wedding guests", "Team travel"],
  },
  {
    name: "Toyota Hiace",
    slug: "toyota-hiace",
    image: "/images/fleet/toyota-hiace-silver-front-three-quarter.webp",
    imageAlt: "Silver high-roof Hiace, front three-quarter view",
    gallery: [
      {
        src: "/images/fleet/toyota-hiace-silver-front-three-quarter.webp",
        alt: "Silver high-roof Hiace, front three-quarter view",
      },
    ],
    bodyStyle: "Van",
    colors: "Silver",
    driverAvailable: true,
    category: "Group Van",
    categorySlug: "van-bus",
    seats: 14,
    luggage: 8,
    transmission: "Manual",
    airConditioned: true,
    featuredBadge: "14-Seater Family Van",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A silver high-roof van for family groups, airport runs, and tours. Seating configurations vary; confirm passenger and luggage capacity with our team.",
    bestFor: ["Group transfers", "Family tours", "Airport runs"],
  },
  {
    name: "Toyota Aqua",
    slug: "toyota-aqua",
    image: "/images/fleet/toyota-aqua-blue-front.webp",
    imageAlt: "Blue Toyota Aqua, front view",
    gallery: [
      {
        src: "/images/fleet/toyota-aqua-blue-front.webp",
        alt: "Blue Toyota Aqua, front view",
      },
    ],
    bodyStyle: "Hatchback",
    colors: "Blue",
    driverAvailable: true,
    category: "Compact Hatchback",
    categorySlug: "executive-sedan",
    seats: 4,
    luggage: 2,
    transmission: "Automatic",
    airConditioned: true,
    featuredBadge: "Economical Hybrid",
    indicativeRate: "Rates on WhatsApp",
    description:
      "A compact blue hatchback for city pickups, daily travel, and smaller parties. Share your luggage needs so we can confirm the right fit.",
    bestFor: ["City pickups", "Daily travel", "Short trips"],
  },
];

export const cabinPhotos: CarPhoto[] = [
  {
    src: "/images/fleet/toyota-land-cruiser-beige-front-seats.webp",
    alt: "Beige SUV front seats and centre console",
  },
  {
    src: "/images/fleet/toyota-land-cruiser-beige-rear-seats.webp",
    alt: "Beige SUV rear seats with a fold-down armrest",
  },
];
