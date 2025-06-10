
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
