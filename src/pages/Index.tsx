import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import StatsBanner from "@/components/landing/StatsBanner";
import ProductShowcase from "@/components/landing/ProductShowcase";
import VideoSection from "@/components/landing/VideoSection";
import LogoCarousel from "@/components/landing/LogoCarousel";
import AwardsSection from "@/components/landing/AwardsSection";
import NewsGrid from "@/components/landing/NewsGrid";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsBanner />
      <ProductShowcase />
      <VideoSection />
      <LogoCarousel />
      <AwardsSection />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default Index;
