"use client";

import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border pt-20 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 border border-white/10 dark:border-white/10">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-foreground font-bold text-2xl tracking-tight">
                VivaGoa <span className="text-amber-400">Realty</span>
              </span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              The premier destination for luxury real estate. Connect with us to discover properties that redefine elegance.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col">
            <h3 className="text-foreground/90 font-semibold text-sm uppercase tracking-widest mb-6">
              Contact Details
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-foreground/[0.03] flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/10 transition-colors border border-border group-hover:border-amber-400/30">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed mt-2.5">
                  A3, Solsons Abode, Govekar Nagar, Pilern, Goa 403521, India
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-foreground/[0.03] flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/10 transition-colors border border-border group-hover:border-amber-400/30">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <a href="tel:+917000608762" className="text-muted-foreground hover:text-amber-400 text-sm transition-colors mt-0.5">
                  +91 7000608762
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-foreground/[0.03] flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/10 transition-colors border border-border group-hover:border-amber-400/30">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <a href="mailto:vivagoarealty@gmail.com" className="text-muted-foreground hover:text-amber-400 text-sm transition-colors mt-0.5">
                  vivagoarealty@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col h-full min-h-[280px]">
            <h3 className="text-foreground/90 font-semibold text-sm uppercase tracking-widest mb-6">
              Visit us at our office in Goa!
            </h3>
            <div className="w-full flex-1 rounded-2xl overflow-hidden border border-border relative group bg-foreground/5">
              {/* Subtle overlay to reduce map dominance, lifted on hover */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.7318744824397!2d73.82403330923509!3d15.531279093300919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88be14cf650ffaa5%3A0xd1aa9d6c13840c73!2sViva%20Goa%20Realty!5e0!3m2!1sen!2sin!4v1782269481997!5m2!1sen!2sin"
                className="w-full h-full absolute inset-0 grayscale-[50%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col items-center justify-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} VivaGoa Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
