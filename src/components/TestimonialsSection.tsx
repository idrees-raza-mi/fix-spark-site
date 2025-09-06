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
    <section id="testimonials" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our appliance repair services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg text-foreground">
                    {testimonial.name}
                  </h3>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
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