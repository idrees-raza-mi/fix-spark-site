import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, phone, and email are required.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll contact you within 24 hours to schedule your service.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-gradient-section py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to get your appliances fixed? Contact us today for a free estimate 
            and schedule your repair service.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto animate-scale-in">
          <Card className="bg-gradient-card border-0 shadow-large rounded-2xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold text-foreground animate-fade-in">
                Schedule Your Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/80 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl h-12 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/80 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl h-12 transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/80 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl h-12 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Describe Your Appliance Issue
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/80 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                    placeholder="Tell us about the problem with your appliance..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-accent hover:scale-105 hover:shadow-glow-accent transition-all duration-300 text-white font-semibold py-4 rounded-xl animate-fade-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  Request Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;