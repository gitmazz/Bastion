
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !description) return;

    setIsSubmitting(true);

    // Simulate sending email to hello@companyname.com
    try {
      // In a real implementation, this would send to your backend
      console.log("Sending email to hello@companyname.com:", { email, description });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setEmail("");
      setDescription("");
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to</span>
                <br />
                <span className="text-gradient">Get Started?</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Tell us about your SOC 2 compliance needs and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="glassmorphism p-8 rounded-2xl shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 glassmorphism border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-foreground font-medium">
                      Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your current security posture, timeline, and any specific requirements..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-2 glassmorphism border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !email || !description}
                    className="w-full space-gradient hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>

            {/* Additional info */}
            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>Your information is secure and will only be used to contact you about our services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
