
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, DollarSign, Recycle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (action: () => void) => {
    action();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col space-y-6 mt-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4120fd5f-5689-4777-9715-8fbe53220acd.png" 
              alt="Communicycle Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavigation(() => {
                navigate('/');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              })}
              className="text-left text-lg text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation(() => {
                navigate('/about');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              })}
              className="text-left text-lg text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation(() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              })}
              className="text-left text-lg text-foreground hover:text-primary transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => handleNavigation(() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              })}
              className="text-left text-lg text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="space-y-3 pt-6 border-t">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(365) 777-3058</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>laith@communicycle.ca</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6">
            <Button 
              variant="hero" 
              className="w-full"
              onClick={() => handleNavigation(() => window.open('https://tally.so/r/w40aVO', '_blank'))}
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Get Asset Valuation
            </Button>
            <Button 
              variant="eco" 
              className="w-full"
              onClick={() => handleNavigation(() => {
                navigate('/dropoff-locations');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              })}
            >
              <Recycle className="mr-2 h-4 w-4" />
              Find Drop-off Location
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
