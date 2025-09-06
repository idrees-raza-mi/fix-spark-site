import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RepairPro</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for fast, reliable appliance repair services. 
              Professional technicians, quality parts, guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span>info@repairpro.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span>123 Service St, Your City, ST 12345</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Service Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>Monday - Friday: 8:00 AM - 8:00 PM</div>
              <div>Saturday: 9:00 AM - 6:00 PM</div>
              <div>Sunday: 10:00 AM - 4:00 PM</div>
              <div className="mt-4 text-accent font-semibold">
                Emergency Service Available 24/7
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 RepairPro. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;