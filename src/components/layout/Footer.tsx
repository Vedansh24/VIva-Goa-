"use client";

import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#05050a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                Lux<span className="text-amber-400">Estate</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The premier destination for luxury real estate. Connect with us to discover properties that redefine elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Properties", href: "#properties" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "About Us", href: "#about" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/50 hover:text-amber-400 text-sm transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact Details
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
                <span className="text-white/50 text-sm">432 Park Avenue, 80th Floor,<br/>New York, NY 10022</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+12125550190" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  +1 (212) 555-0190
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:concierge@luxestate.com" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  concierge@luxestate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm w-full">
            © {new Date().getFullYear()} LuxEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
