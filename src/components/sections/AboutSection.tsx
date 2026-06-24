"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2 } from "lucide-react";

const milestones = [
  { year: "2009", event: "Founded in Manhattan with a vision to redefine luxury real estate." },
  { year: "2013", event: "Expanded to Los Angeles, closing $500M in luxury transactions." },
  { year: "2017", event: "Launched global operations across 15 international markets." },
  { year: "2021", event: "Surpassed $3 billion in annual sales. Named Forbes #1 Luxury Firm." },
  { year: "2024", event: "Opened our 40th office globally. $4.2B+ in total transactions." },
];

const values = [
  "Absolute discretion and privacy for every client",
  "Transparent transactions with zero hidden costs",
  "Expert advisors with 10+ years of experience each",
  "Curated off-market listings unavailable elsewhere",
  "24/7 dedicated concierge support",
  "Post-purchase property management services",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden h-96 lg:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="LuxEstate headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-card border border-border rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-400/15 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-2xl leading-none">15+</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Years of Excellence</p>
                </div>
              </div>
              <div className="h-px bg-border mb-3" />
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                ))}
                <span className="text-muted-foreground text-xs ml-1">Forbes #1 Ranked</span>
              </div>
            </motion.div>

            {/* Second floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-card border border-border rounded-2xl p-4 shadow-xl"
            >
              <p className="text-muted-foreground text-xs mb-1">Total Portfolio Value</p>
              <p className="text-amber-400 font-bold text-xl">$4.2 Billion+</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-500 dark:text-amber-300 text-xs font-semibold tracking-widest uppercase">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Redefining Luxury{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500">
                Since 2009
              </span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Born from a belief that luxury real estate should be a seamless, sophisticated, and deeply personal experience, LuxEstate has spent 15 years perfecting the art of connecting extraordinary people with extraordinary places.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              From our flagship office in Manhattan to 40 locations across 4 continents, we&apos;ve built a legacy on trust, discretion, and unparalleled market expertise.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((val) => (
                <div key={val} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{val}</span>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.slice(-3).map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-amber-400/15 border border-amber-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 dark:text-amber-400 text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                    {i < 2 && <div className="w-px h-6 bg-border mt-1" />}
                  </div>
                  <div className="pb-1">
                    <span className="text-amber-600 dark:text-amber-400 text-xs font-semibold">{m.year}</span>
                    <p className="text-muted-foreground text-sm mt-0.5">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
