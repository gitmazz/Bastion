import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <ComparisonSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default Index;
