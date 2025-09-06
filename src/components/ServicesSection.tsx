import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  WashingMachine, 
  Refrigerator, 
  Microwave, 
  Heater, 
  Droplets, 
  UtensilsCrossed 
} from "lucide-react";

const services = [
  {
    icon: WashingMachine,
    title: "Washing Machine",
    description: "Expert repair for all washing machine brands and models.",
  },
  {
    icon: Refrigerator,
    title: "Refrigerator",
    description: "Keep your food fresh with our refrigerator repair service.",
  },
  {
    icon: Microwave,
    title: "Oven & Microwave",
    description: "Professional oven and microwave repair and maintenance.",
  },
  {
    icon: Heater,
    title: "Heater",
    description: "Heating system repair to keep your home comfortable.",
  },
  {
    icon: Droplets,
    title: "Water Heater",
    description: "Hot water heater repair and replacement services.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dishwasher",
    description: "Dishwasher repair to get your kitchen running smoothly.",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-gradient-section py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We repair all major appliance brands with certified technicians 
            and genuine parts. Fast, reliable service you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card hover:shadow-large hover:scale-105 transition-all duration-500 border-0 rounded-2xl group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="bg-gradient-accent border-0 text-white hover:scale-105 hover:shadow-glow-accent transition-all duration-300 rounded-xl px-6 py-3 font-semibold"
                    onClick={scrollToContact}
                  >
                    Request Repair
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;