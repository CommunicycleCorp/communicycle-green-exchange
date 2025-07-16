import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, Recycle, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-xl font-bold">Communicycle</div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Professional electronics resale and recycling services with secure data protection. 
              Turning your old electronics into cash while protecting the environment.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Electronics Resale</li>
              <li>Secure Data Destruction</li>
              <li>Business Electronics Disposal</li>
              <li>Residential Recycling</li>
              <li>Bulk Device Processing</li>
              <li>Public Drop-off Locations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(365) 777-3058</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>laith@communicycle.ca</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Oakville, ON</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get Started Today</h3>
            <p className="text-sm text-background/80">
              Ready to turn your electronics into cash or recycle responsibly?
            </p>
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => window.open('https://tally.so/r/w40aVO', '_blank')}
              >
                <DollarSign className="mr-2 h-4 w-4" />
                ITAD Asset Recovery
              </Button>
              <Button variant="outline" className="w-full bg-transparent border-background/20 text-background hover:bg-background/10" onClick={() => {
                navigate('/dropoff-locations');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}>
                <Recycle className="mr-2 h-4 w-4" />
                Find Drop-off Location
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-background/60">
            © 2025, Communicycle Corp.
          </div>
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Environmental Impact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}