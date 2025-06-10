
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Chief Security Officer",
    experience: "12+ years",
    certifications: ["CISSP", "CISA", "SOC 2 Lead Auditor"],
    bio: "Former cybersecurity consultant at Big Four firm with extensive experience in SOC 2 Type II audits for Fortune 500 companies.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Sarah Rodriguez",
    role: "Senior Compliance Manager",
    experience: "8+ years",
    certifications: ["CISM", "ISO 27001 Lead Auditor", "PCI DSS QSA"],
    bio: "Specialized in risk assessment and control implementation across various industry verticals including fintech and healthcare.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Michael Thompson",
    role: "Security Architect",
    experience: "10+ years",
    certifications: ["CISSP", "SABSA", "TOGAF"],
    bio: "Expert in designing and implementing security frameworks that align with business objectives and regulatory requirements.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Emily Wang",
    role: "GRC Specialist",
    experience: "6+ years",
    certifications: ["CRISC", "CGEIT", "SOC 2 Practitioner"],
    bio: "Focused on governance, risk, and compliance strategies that streamline audit processes and reduce organizational overhead.",
    image: "/placeholder.svg?height=200&width=200"
  }
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background star-field">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary backdrop-blur-sm">
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span> <span className="text-gradient">Security Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the certified professionals who will guide your organization through SOC 2 compliance with expertise and precision.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="glassmorphism p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105 shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Profile */}
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 rounded-full space-gradient flex items-center justify-center shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.experience} experience</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Certifications */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Award className="w-4 h-4 text-accent mr-2" />
                      <span className="text-sm font-medium text-foreground">Certifications</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert) => (
                        <Badge
                          key={cert}
                          variant="outline"
                          className="border-primary/30 text-primary backdrop-blur-sm text-xs"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Ready to work with</span>
                <br />
                <span className="text-gradient">our expert team?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our security experts to discuss your SOC 2 compliance journey.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="space-gradient hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
