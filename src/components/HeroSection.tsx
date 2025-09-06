import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroTechnician from "@/assets/hero-technician.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Fast & Reliable
              <span className="block text-primary">Appliance Repair</span>
              <span className="block">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Professional technicians ready to fix your appliances quickly and efficiently. 
              Same-day service available with a satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
                onClick={scrollToContact}
              >
                Book a Service
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
          <div className="flex-1 max-w-md lg:max-w-none">
            <img 
              src={heroTechnician} 
              alt="Professional appliance repair technician" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;