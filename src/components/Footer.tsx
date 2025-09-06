import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/5 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Appliance Fix
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Your trusted partner for fast, reliable appliance repair services. 
              Professional technicians, quality parts, guaranteed satisfaction.
            </p>
            <div className="flex space-x-6">
              <Facebook className="h-6 w-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full hover:bg-white/10" />
              <Twitter className="h-6 w-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full hover:bg-white/10" />
              <Instagram className="h-6 w-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full hover:bg-white/10" />
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-2xl font-bold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center group hover:text-accent transition-colors duration-300">
                <Phone className="h-6 w-6 mr-4 text-accent group-hover:animate-float" />
                <span className="text-lg">(555) 123-4567</span>
              </div>
              <div className="flex items-center group hover:text-accent transition-colors duration-300">
                <Mail className="h-6 w-6 mr-4 text-accent group-hover:animate-float" />
                <span>info@appliancefix.com</span>
              </div>
              <div className="flex items-center group hover:text-accent transition-colors duration-300">
                <MapPin className="h-6 w-6 mr-4 text-accent group-hover:animate-float" />
                <span>123 Service St, Your City, ST 12345</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-2xl font-bold mb-6 text-white">Service Hours</h4>
            <div className="space-y-3 text-white/90">
              <div className="hover:text-accent transition-colors duration-300">Monday - Friday: 8:00 AM - 8:00 PM</div>
              <div className="hover:text-accent transition-colors duration-300">Saturday: 9:00 AM - 6:00 PM</div>
              <div className="hover:text-accent transition-colors duration-300">Sunday: 10:00 AM - 4:00 PM</div>
              <div className="mt-6 bg-gradient-accent bg-clip-text text-transparent font-bold text-lg animate-glow">
                Emergency Service Available 24/7
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg">
            © 2024 Appliance Fix. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;