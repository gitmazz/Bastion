
import { useScrollProgress } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const scrollProgress = useScrollProgress();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CyberSec</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              size="sm" 
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
