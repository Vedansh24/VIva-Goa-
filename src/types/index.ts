export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceLabel: string;
  type: "Villa" | "Apartment" | "Penthouse" | "Estate";
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  tag?: "Featured" | "New" | "Exclusive";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  location: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
