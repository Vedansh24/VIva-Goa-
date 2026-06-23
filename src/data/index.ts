import type { Property, Testimonial, Stat, Feature, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const GOOGLE_FORM_URL = "https://forms.google.com";

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Azure Sky Penthouse",
    location: "Downtown Manhattan, New York",
    price: "$4,850,000",
    priceLabel: "Starting from",
    type: "Penthouse",
    beds: 4,
    baths: 5,
    sqft: 4200,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    tag: "Featured",
  },
  {
    id: "2",
    title: "Malibu Coastal Estate",
    location: "Malibu, California",
    price: "$7,200,000",
    priceLabel: "Starting from",
    type: "Estate",
    beds: 6,
    baths: 7,
    sqft: 8500,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    tag: "Exclusive",
  },
  {
    id: "3",
    title: "The Grand Villa Tuscany",
    location: "Beverly Hills, California",
    price: "$3,100,000",
    priceLabel: "Starting from",
    type: "Villa",
    beds: 5,
    baths: 4,
    sqft: 5800,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tag: "New",
  },
  {
    id: "4",
    title: "Harbor View Residences",
    location: "Miami Beach, Florida",
    price: "$2,400,000",
    priceLabel: "Starting from",
    type: "Apartment",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tag: "Featured",
  },
  {
    id: "5",
    title: "Skyline Crown Tower",
    location: "Chicago, Illinois",
    price: "$5,600,000",
    priceLabel: "Starting from",
    type: "Penthouse",
    beds: 5,
    baths: 6,
    sqft: 6100,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    tag: "Exclusive",
  },
  {
    id: "6",
    title: "Lakeside Private Manor",
    location: "Lake Tahoe, Nevada",
    price: "$9,800,000",
    priceLabel: "Starting from",
    type: "Estate",
    beds: 8,
    baths: 9,
    sqft: 12000,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    tag: "Exclusive",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alexandra Whitmore",
    role: "CEO, Whitmore Capital",
    avatar: "AW",
    rating: 5,
    content:
      "LuxEstate exceeded every expectation. Their concierge-level service and deep market knowledge helped me secure my dream penthouse in Manhattan at the best possible terms. Truly a white-glove experience.",
    location: "New York, NY",
  },
  {
    id: "2",
    name: "Marcus Delgado",
    role: "Founder, Apex Ventures",
    avatar: "MD",
    rating: 5,
    content:
      "From the initial consultation to the final handover, the LuxEstate team was professional, responsive, and genuinely invested in finding us the perfect Malibu estate. Exceptional service, unmatched results.",
    location: "Los Angeles, CA",
  },
  {
    id: "3",
    name: "Sophia Chen",
    role: "International Art Collector",
    avatar: "SC",
    rating: 5,
    content:
      "I've worked with luxury real estate firms across three continents, and LuxEstate stands in a class of its own. They understood exactly what I was looking for and delivered beyond what I imagined possible.",
    location: "Beverly Hills, CA",
  },
  {
    id: "4",
    name: "James Hartley",
    role: "Private Equity Partner",
    avatar: "JH",
    rating: 5,
    content:
      "The investment insight, discretion, and attention to detail that LuxEstate brings to every transaction is remarkable. They've helped me build a portfolio of premium properties with confidence.",
    location: "Chicago, IL",
  },
];

export const stats: Stat[] = [
  { value: "2,500", label: "Premium Properties Sold", suffix: "+" },
  { value: "98", label: "Client Satisfaction Rate", suffix: "%" },
  { value: "15", label: "Years of Excellence", suffix: "+" },
  { value: "$4.2", label: "Billion in Transactions", suffix: "B+" },
];

export const features: Feature[] = [
  {
    icon: "Shield",
    title: "Verified Premium Listings",
    description:
      "Every property undergoes rigorous verification. We ensure complete legal clarity, structural integrity, and premium standards before listing.",
  },
  {
    icon: "Key",
    title: "Concierge Property Services",
    description:
      "From private viewings to post-purchase support, our dedicated concierge team handles every detail with white-glove care.",
  },
  {
    icon: "TrendingUp",
    title: "Expert Market Intelligence",
    description:
      "Backed by deep market research and 15+ years of data, we deliver investment insights that maximize your returns.",
  },
  {
    icon: "HeartHandshake",
    title: "Personalized Client Journey",
    description:
      "Your needs are unique. Our advisors tailor every aspect of your property search, negotiation, and acquisition journey.",
  },
  {
    icon: "Globe",
    title: "Global Network Access",
    description:
      "Tap into our exclusive global network of buyers, sellers, and off-market properties across 40+ premium markets worldwide.",
  },
  {
    icon: "Award",
    title: "Award-Winning Excellence",
    description:
      "Recognized as the #1 luxury real estate firm for 7 consecutive years by Forbes, earning trust through consistent excellence.",
  },
];

export const propertyTypes = [
  { value: "all", label: "All Types" },
  { value: "villa", label: "Villa" },
  { value: "apartment", label: "Apartment" },
  { value: "penthouse", label: "Penthouse" },
  { value: "estate", label: "Estate" },
];

export const priceRanges = [
  { value: "all", label: "Any Price" },
  { value: "0-2m", label: "Up to $2M" },
  { value: "2m-5m", label: "$2M – $5M" },
  { value: "5m-10m", label: "$5M – $10M" },
  { value: "10m+", label: "$10M+" },
];

export const locations = [
  { value: "all", label: "All Locations" },
  { value: "new-york", label: "New York" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "miami", label: "Miami" },
  { value: "chicago", label: "Chicago" },
  { value: "las-vegas", label: "Las Vegas" },
];
