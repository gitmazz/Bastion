import { Card } from "@/components/ui/card";
import { Search, FileText, Shield, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "Gap Assessment",
    description:
      "Comprehensive analysis of your current security posture against SOC 2 requirements. We identify gaps and create a roadmap for compliance.",
    color: "primary",
    delay: "0s",
  },
  {
    icon: FileText,
    title: "Policy Development",
    description:
      "Custom security policies and procedures tailored to your business. We create documentation that auditors love and employees can follow.",
    color: "secondary",
    delay: "0.2s",
  },
  {
    icon: Shield,
    title: "Audit Readiness",
    description:
      "Complete preparation for your SOC 2 audit. We ensure you're fully prepared with evidence collection and remediation support.",
    color: "accent",
    delay: "0.4s",
  },
  {
    icon: Monitor,
    title: "Continuous Monitoring",
    description:
      "Ongoing compliance monitoring and maintenance. Stay audit-ready year-round with our automated compliance tracking platform.",
    color: "destructive",
    delay: "0.6s",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="services" className="py-40 relative">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-2">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end SOC 2 compliance solutions designed to get you certified
            fast and keep you compliant forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-6 bg-card/30 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-105 shadow-lg hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: service.delay,
                transitionDelay: isVisible ? `${index * 0.1}s` : "0s",
              }}
            >
              <div className="space-y-4">
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${service.color}/20 to-${service.color}/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
