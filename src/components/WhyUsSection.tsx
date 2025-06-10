import { Badge } from "@/components/ui/badge";
import { Users, Zap, DollarSign, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const differentiators = [
  {
    icon: Users,
    title: "Security Experts",
    description: "Our team consists of certified security professionals with 10+ years of experience in SOC 2 audits.",
    stat: "10+",
    statLabel: "Years Experience"
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Average 30-day timeline from start to audit-ready. We move fast without compromising quality.",
    stat: "30",
    statLabel: "Days Average"
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent, fixed pricing with no hidden fees. Get enterprise-level compliance at startup-friendly rates.",
    stat: "50%",
    statLabel: "Cost Savings"
  },
  {
    icon: Award,
    title: "Proven Frameworks",
    description: "Battle-tested methodologies and frameworks that have helped 100+ companies achieve SOC 2 compliance.",
    stat: "99%",
    statLabel: "Success Rate"
  }
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="why-us" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary backdrop-blur-sm">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">The</span> <span className="text-gradient">CyberSec</span> <span className="text-white">Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've revolutionized the SOC 2 compliance process to be faster, cheaper, and more reliable than traditional consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div 
              key={item.title}
              className={`group relative p-8 rounded-2xl bg-card/20 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 0.1}s` : '0s' }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Stat badge */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">{item.stat}</div>
                    <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30 text-primary shadow-md">
            <Award className="w-5 h-5 mr-2" />
            <span className="font-medium">Trusted by 100+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
