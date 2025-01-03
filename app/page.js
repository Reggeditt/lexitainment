import AboutSection from "./components/About";
import ContactSection from "./components/ContactForm";
import HeroBanner from "./components/HeroBanner";
import ServicesSection from "./components/Services";
import TestimonialsSection from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
