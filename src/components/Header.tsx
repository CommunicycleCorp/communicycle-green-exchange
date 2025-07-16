import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo section - clickable to navigate home */}
        <div 
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => navigate('/')}
        >
          <img 
            src="/lovable-uploads/a5794871-61ac-48eb-b0bf-669c4e654044.png" 
            alt="Communicycle Logo" 
            className="h-8 w-auto"
          />
          <div className="text-sm sm:text-base md:text-lg font-bold text-foreground">
            Communicycle
          </div>
        </div>
        
        {/* Right section - navigation + buttons */}
        <div className="flex items-center space-x-8">
          <nav className="flex items-center space-x-5 ml-12">
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="text-xs sm:text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-xs sm:text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-xs sm:text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
          
          {/* Contact info and buttons */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(365) 777-3058</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>laith@communicycle.ca</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex text-xs">
              Get Asset Valuation
            </Button>
            <Button variant="eco" size="sm" onClick={() => navigate('/dropoff-locations')} className="hidden sm:inline-flex text-xs">
              Find Drop-off Location
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}