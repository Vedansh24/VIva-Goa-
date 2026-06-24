"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { featuredProperties } from "@/data";
import type { Property } from "@/types";

const tagColors: Record<string, string> = {
  Featured: "bg-amber-400/15 text-amber-400 border-amber-400/20",
  Exclusive: "bg-purple-400/15 text-purple-400 border-purple-400/20",
  New: "bg-emerald-400/15 text-emerald-400 border-emerald-400/20",
};

function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden bg-card border-border hover:border-amber-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 rounded-2xl cursor-pointer">
        {/* Image */}
        <div className="relative overflow-hidden h-60">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Tag */}
          {property.tag && (
            <div className="absolute top-4 left-4">
              <Badge
                className={`${tagColors[property.tag]} border font-semibold text-xs px-2.5 py-1 rounded-full`}
              >
                {property.tag}
              </Badge>
            </div>
          )}

          {/* Type badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-black/60 backdrop-blur-sm text-white/80 text-xs font-medium px-2.5 py-1 rounded-full border border-white/10">
              {property.type}
            </span>
          </div>

          {/* Price overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/60 text-xs">{property.priceLabel}</p>
            <p className="text-white font-bold text-2xl tracking-tight">
              {property.price}
            </p>
          </div>
        </div>

        <CardContent className="p-5">
          <h3 className="text-foreground font-semibold text-lg mb-1 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{property.location}</span>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Bed className="w-4 h-4" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Bath className="w-4 h-4" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm ml-auto">
              <Square className="w-4 h-4" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PropertiesSection() {
  return (
    <section id="properties" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-amber-500 dark:text-amber-300 text-xs font-semibold tracking-widest uppercase">
              Curated Listings
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Handpicked ultra-luxury properties that define the pinnacle of contemporary living.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProperties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm border border-amber-400/20 hover:border-amber-400/40 px-6 py-3 rounded-xl transition-all duration-200 hover:bg-amber-400/5">
            View All Properties
            <span className="text-xs bg-amber-400/15 text-amber-400 px-2 py-0.5 rounded-full">
              2,500+
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
