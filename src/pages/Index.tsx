
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsCalendar from "@/components/EventsCalendar";
import GallerySection from "@/components/GallerySection";
import InteractiveModel from "@/components/InteractiveModel";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white">
      <StarBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EventsCalendar />
      <InteractiveModel />
      <GallerySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
