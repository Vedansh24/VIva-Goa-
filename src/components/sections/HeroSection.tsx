"use client";

import { motion } from "framer-motion";
import SearchSection from "@/components/sections/SearchSection";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-visible md:overflow-hidden bg-background h-[550px]"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4 drop-shadow-lg"
        >
          Discover Your Dream Home
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground/90 text-lg sm:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md"
        >
          The premier platform for luxury real estate across the globe.
        </motion.p>

        {/* Search inside hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <SearchSection />
        </motion.div>
      </div>
    </section>
  );
}
