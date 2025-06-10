
import { Button } from "@/components/ui/button";
import { Shield, Lock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 grid-pattern opacity-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      {/* Floating security icons with parallax */}
      <div 
        className="absolute top-20 left-10 animate-float"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Shield className="w-8 h-8 text-primary opacity-40" />
      </div>
      <div 
        className="absolute top-40 right-20 animate-float" 
        style={{ 
          animationDelay: '1s',
          transform: `translateY(${scrollY * 0.4}px)` 
        }}
      >
        <Lock className="w-6 h-6 text-secondary opacity-40" />
      </div>
      <div 
        className="absolute bottom-40 left-20 animate-float" 
        style={{ 
          animationDelay: '2s',
          transform: `translateY(${scrollY * 0.2}px)` 
        }}
      >
        <CheckCircle className="w-7 h-7 text-accent opacity-40" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Cybersecurity Compliance Experts
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">SOC 2 Compliance,</span>
            <br />
            <span className="text-white">Simplified</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fast-track your SOC 2 certification with our expert team. 
            We handle the complexity, you focus on growing your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Book a Free Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-primary/50 text-primary hover:bg-primary/10 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>100+ Successful Audits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>30-Day Average Timeline</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>99% Pass Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
