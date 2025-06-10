
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section ref={ref} id="contact" className="py-20 relative overflow-hidden star-field">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary backdrop-blur-sm shadow-md">
            <Shield className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </Badge>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Start Your</span>
            <br />
            <span className="text-gradient">SOC 2 Journey Today</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 100+ companies that have successfully achieved SOC 2 compliance with our expert guidance. 
            Your free assessment is just one click away.
          </p>

          {/* Contact CTA button */}
          <div className="mb-12">
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="px-12 py-6 text-lg space-gradient hover:opacity-90 text-white shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us to Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Alternative contact methods */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>hello@cybersec.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Calendar className="w-5 h-5" />
              <span>Schedule a Call</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Free consultation included</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default CTASection;
