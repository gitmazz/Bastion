
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 24 hours to schedule your free assessment.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary animate-pulse-glow">
            <Shield className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </Badge>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Start Your</span>
            <br />
            <span className="text-gradient glow-text">SOC 2 Journey Today</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 100+ companies that have successfully achieved SOC 2 compliance with our expert guidance. 
            Your free assessment is just one click away.
          </p>

          {/* Email capture form */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button 
                type="submit"
                size="lg"
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>

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
              <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></div>
              <span>Free consultation included</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse"></div>
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse"></div>
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
