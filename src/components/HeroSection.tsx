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
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Dynamic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${heroTechnician})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="text-white drop-shadow-lg">Fast & Reliable</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">Appliance Repair</span>
            <br />
            <span className="text-white drop-shadow-lg">Services</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in drop-shadow-md" style={{ animationDelay: '0.3s' }}>
            Professional technicians ready to fix your appliances quickly and efficiently. 
            Same-day service available with a satisfaction guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:scale-105 hover:shadow-glow-accent transition-all duration-300 text-white px-12 py-5 text-lg font-semibold rounded-xl shadow-large border-0"
              onClick={scrollToContact}
            >
              Book a Service
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 hover:shadow-glow-primary transition-all duration-300 text-white px-12 py-5 text-lg font-semibold rounded-xl shadow-large border-0"
              onClick={callNow}
            >
              <Phone className="mr-3 h-6 w-6 animate-float" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;