import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: customer1,
    text: "Excellent service! My washing machine was fixed the same day I called. The technician was professional and the price was fair.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    image: customer2,
    text: "RepairPro saved me from buying a new refrigerator. Quick diagnosis and repair. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Emma Davis",
    image: customer3,
    text: "Outstanding customer service and technical expertise. They explained everything clearly and fixed my dishwasher perfectly.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our appliance repair services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-large hover:shadow-glow-primary hover:scale-105 transition-all duration-500 rounded-2xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className="relative inline-block mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-medium group-hover:shadow-glow-primary transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                </div>
                
                <div className="flex justify-center mb-6 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-6 w-6 fill-yellow-400 text-yellow-400 group-hover:animate-float transition-all duration-300" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;