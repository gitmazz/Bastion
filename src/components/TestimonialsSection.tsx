
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "CyberSec made our SOC 2 compliance journey incredibly smooth. What could have taken months was completed in just 30 days. Their expertise and guidance were invaluable.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    rating: 5,
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    content: "Outstanding service! The team's deep knowledge of SOC 2 requirements and practical approach helped us pass our audit on the first try. Highly recommend their services.",
    author: "Mike Rodriguez",
    role: "Head of Security",
    company: "DataVault Systems",
    rating: 5,
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    content: "Professional, efficient, and results-driven. CyberSec transformed our security posture and made compliance feel achievable. The ROI was immediate and substantial.",
    author: "Emily Watson",
    role: "CEO",
    company: "CloudFirst Solutions",
    rating: 5,
    avatar: "/placeholder.svg?height=64&width=64"
  }
];

const clientLogos = [
  { name: "TechFlow", logo: "TF" },
  { name: "DataVault", logo: "DV" },
  { name: "CloudFirst", logo: "CF" },
  { name: "SecureBase", logo: "SB" },
  { name: "NetGuard", logo: "NG" },
  { name: "CyberShield", logo: "CS" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8 text-lg">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <div 
                key={client.name}
                className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-mono font-bold text-primary hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">What Our</span> <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about their compliance journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/60" />
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyber-orange text-cyber-orange" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
