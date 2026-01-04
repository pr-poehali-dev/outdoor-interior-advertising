import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Calculator from "@/components/Calculator";
import ServicesSection from "@/components/ServicesSection";
import BottomSections from "@/components/BottomSections";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Calculator />
      <ServicesSection />
      <BottomSections />
    </div>
  );
};

export default Index;
