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
    <section id="services" className="bg-section-bg py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We repair all major appliance brands with certified technicians 
            and genuine parts. Fast, reliable service you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 border-0">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-white"
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