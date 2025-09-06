import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroTechnician from "@/assets/hero-technician.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const callNow = () => {
    window.location.href = 'tel:(555)123-4567';
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTechnician})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Fast & Reliable</span>
            <br />
            <span className="text-primary">Appliance Repair</span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional technicians ready to fix your appliances quickly and efficiently. 
            Same-day service available with a satisfaction guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-10 py-4 text-lg font-semibold"
              onClick={scrollToContact}
            >
              Book a Service
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg font-semibold"
              onClick={callNow}
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;