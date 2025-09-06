import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Diagnostic",
    price: "$49",
    description: "Professional appliance diagnosis",
    features: [
      "Complete appliance inspection",
      "Problem identification",
      "Repair estimate",
      "No obligation quote",
    ],
    popular: false,
  },
  {
    title: "Standard Repair",
    price: "$99",
    description: "Most common appliance repairs",
    features: [
      "Expert technician service",
      "Quality replacement parts",
      "90-day warranty",
      "Same-day service available",
      "Free diagnostic included",
    ],
    popular: true,
  },
  {
    title: "Premium Service",
    price: "$199",
    description: "Comprehensive repair & maintenance",
    features: [
      "Priority scheduling",
      "Extended 1-year warranty",
      "Premium parts guarantee",
      "Follow-up maintenance",
      "Emergency call-out service",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-section-bg py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fair, upfront pricing with no hidden fees. Choose the service level 
            that's right for your appliance repair needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-card border-0 shadow-lg relative ${
                plan.popular ? 'ring-2 ring-accent transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.title}
                </CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground font-normal">
                    + parts
                  </span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-accent hover:bg-accent/90 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;