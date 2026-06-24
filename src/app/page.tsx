import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
// import PropertiesSection from "@/components/sections/PropertiesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AboutSection from "@/components/sections/AboutSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      {/* <PropertiesSection /> */}
      <WhyUsSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <Footer />
    </main>
  );
}
