"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Key,
  TrendingUp,
  HeartHandshake,
  Globe,
  Award,
  CheckCircle2,
} from "lucide-react";
import { stats } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Key,
  TrendingUp,
  HeartHandshake,
  Globe,
  Award,
};

const featuresList = [
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

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-[#07070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 text-xs font-semibold tracking-widest uppercase">
              Our Advantage
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Choose VivaGoa Realty ?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We don&apos;t just sell properties — we craft life-defining experiences for those who demand the extraordinary.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-[#07070d] flex flex-col items-center justify-center py-8 px-6 text-center group hover:bg-amber-400/5 transition-colors duration-300"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2"
              >
                {stat.value}
                {stat.suffix}
              </motion.span>
              <span className="text-white/50 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white/[0.02] hover:bg-white/[0.05] border border-white/8 hover:border-amber-400/20 rounded-2xl p-6 transition-all duration-400 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="w-12 h-12 bg-amber-400/10 group-hover:bg-amber-400/20 border border-amber-400/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                  {Icon && <Icon className="w-6 h-6 text-amber-400" />}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
