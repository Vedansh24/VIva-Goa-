import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
// import PropertiesSection from "@/components/sections/PropertiesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
// import AboutSection from "@/components/sections/AboutSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import { GOOGLE_FORM_URL } from "@/data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Primary Lead Gen CTA */}
      <div className="bg-background pt-12 sm:pt-12 pb-6 px-4 flex justify-center relative z-20">
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[450px] h-[50px] bg-amber-400 hover:bg-amber-500 text-black font-bold py-5 px-8 rounded-2xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 transition-all hover:scale-[1.02] flex items-center justify-center text-lg sm:text-xl tracking-tight group"
        >
          Enquire Now
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
       {/* WhatsApp Contact */}
      <div className="bg-background pt-1 pb-1 px-4 flex justify-center relative z-20">
        <a
          href="https://wa.me/917000608762"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[450px] h-[50px] bg-amber-400 hover:bg-amber-500 text-black font-bold py-5 px-8 rounded-2xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 transition-all hover:scale-[1.02] flex items-center justify-center text-lg sm:text-xl tracking-tight group"
        >
          WhatsApp Contact
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      

      {/* <PropertiesSection /> */}
      <WhyUsSection />
      {/* <AboutSection /> */}
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <Footer />
    </main>
  );
}
