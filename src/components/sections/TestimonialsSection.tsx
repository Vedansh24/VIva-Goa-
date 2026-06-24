"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-amber-500 dark:text-amber-300 text-xs font-semibold tracking-widest uppercase">
              Client Experiences
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Words From Our Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Discover why the world&apos;s most discerning buyers and sellers trust LuxEstate.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-20">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card hover:bg-amber-400 hover:text-black border border-border text-foreground flex items-center justify-center transition-all shadow-lg hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 z-20">
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card hover:bg-amber-400 hover:text-black border border-border text-foreground flex items-center justify-center transition-all shadow-lg hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-20 h-20 text-foreground/5 rotate-180" />
            
            <div className="relative min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground text-xl sm:text-2xl leading-relaxed text-center font-medium italic mb-10">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                      <span className="text-amber-500 dark:text-amber-400 font-bold text-sm">
                        {testimonials[currentIndex].avatar}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-foreground font-semibold">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-amber-400 w-8" : "bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
