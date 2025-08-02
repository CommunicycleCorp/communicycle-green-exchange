
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Shield, Recycle, Users, MapPin, Award, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] sm:min-h-[55vh] lg:min-h-[65vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/81c17b36-34f9-4958-ba7e-4cbcfaecefd5.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="container mx-auto px-4 md:px-5 py-2 md:py-7 lg:py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-1 lg:space-y-4">
            <div className="space-y-6 lg:space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight md:-mt-3 md:-ml-2 lg:-mt-4 lg:-ml-3">
                Complete Electronic
                <span className="block text-primary">Lifecycle Management</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-tight mt-4 md:mt-0 drop-shadow-lg">
                <span className="hidden md:inline">Get Paid Big for Your Electronics - </span>Get Paid Big for Your Laptop, Computer, or Phone — Fast, Secure, and Guaranteed in 14 Days or Less, or We Pay You $100.
              </p>

              <div className="mb-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="text-lg"
                  onClick={() => window.open('https://tally.so/r/w40aVO', '_blank')}
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  Get Paid Big Now
                </Button>
              </div>

              <p className="text-base md:text-xl lg:text-2xl text-white/95 leading-relaxed font-semibold">
                <strong className="text-white text-xl md:text-2xl lg:text-3xl font-bold">End-of-Life Electronic Recycling:</strong> Find the nearest Communicycle bin. Recycle your end-of-life electronics responsibly and securely.
              </p>

              <div className="mb-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={() => {
                    navigate('/dropoff-locations');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                >
                  <Recycle className="mr-2 h-5 w-5" />
                  Find Drop-off Location
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="hidden md:flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-1">
              <div className="flex items-center space-x-2 text-xs md:text-sm text-white/80">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span>Secure Data Destruction</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-white/80">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span>Business & Residential</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-white/80">
                <Recycle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span>Zero Landfill Policy</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <Card className="p-3 lg:p-4 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-2 lg:space-y-3">
                <div className="h-10 w-10 lg:h-11 lg:w-11 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground">Sustainable.</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">Transparent. Rewarding.</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 lg:p-4 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-2 lg:space-y-3">
                <div className="h-10 w-10 lg:h-11 lg:w-11 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Recycle className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground">100%</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">Ethically Recycled</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 lg:p-4 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-2 lg:space-y-3">
                <div className="h-10 w-10 lg:h-11 lg:w-11 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground">100%</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">Canadian Owned & Recycled</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 lg:p-4 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-2 lg:space-y-3">
                <div className="h-10 w-10 lg:h-11 lg:w-11 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground">100%</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">Data Security</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
