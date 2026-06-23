"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_FORM_URL } from "@/data";

export default function CtaSection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a0f]/90" />
      
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Find Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Exceptional Property?
            </span>
          </h2>
          
          <p className="text-white/60 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Connect with our luxury advisors today. Share your requirements and let us curate a personalized selection of properties that match your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              id="cta-submit-btn"
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              size="lg"
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-10 py-7 rounded-xl text-lg shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:shadow-amber-400/40 hover:scale-105 group w-full sm:w-auto"
            >
              Submit Requirement
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <a
              href="mailto:concierge@luxestate.com"
              className="px-10 py-4 rounded-xl text-white font-semibold border border-white/20 hover:bg-white/5 transition-colors w-full sm:w-auto flex items-center justify-center"
            >
              Contact Concierge
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
