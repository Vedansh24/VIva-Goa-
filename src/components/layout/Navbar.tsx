"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { navLinks, GOOGLE_FORM_URL } from "@/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/25">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-foreground font-bold text-xl tracking-tight">
                Viva<span className="text-amber-400">Goa Realty</span>
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground/70 hover:text-foreground px-4 py-2 text-sm font-medium rounded-lg hover:bg-foreground/5 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 lg:gap-4">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-foreground p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav className="absolute top-0 right-0 bottom-0 w-72 bg-background border-l border-border flex flex-col pt-24 px-6 pb-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground/70 hover:text-foreground text-left px-4 py-3 text-base font-medium rounded-xl hover:bg-foreground/5 transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants(), "w-full bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl py-3 flex justify-center")}
                >
                  Enquire Now
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
