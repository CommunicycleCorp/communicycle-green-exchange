import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Shield, Recycle, Users, MapPin, Award, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/81c17b36-34f9-4958-ba7e-4cbcfaecefd5.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-8">
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Complete Electronic
                <span className="block text-primary">Lifecycle Management</span>
              </h1>
              <p className="text-base md:text-xl text-white/90 leading-relaxed">
                <strong className="text-white">ITAD Asset Recovery - Free Refurbishment & Resale of Your Electronics for Maximum Payout:</strong> We refurbish and increase the value of your electronics. Whether you're a household or a business, we maximize the value of your working electronics from our refurbishing process then our specialized team will resell them and return most of the profits to you — with zero effort and maximum payout.
              </p>

              {/* Mobile-only ITAD button positioned between paragraphs */}
              <Button 
                variant="hero" 
                size="xl" 
                className="sm:hidden"
                onClick={() => window.open('https://tally.so/r/w40aVO', '_blank')}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                ITAD Asset Recovery
              </Button>

              <p className="text-base md:text-xl text-white/90 leading-relaxed">
                <strong className="text-white">End-of-Life Electronic Recycling:</strong> Find the closest Communicycle bin to you and support your local collector and the environment by diverting all your electronic waste from reaching the landfill; Skip the landfill with Communicycle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="hidden sm:flex flex-1 sm:flex-none"
                onClick={() => window.open('https://tally.so/r/w40aVO', '_blank')}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                ITAD Asset Recovery
              </Button>
              <Button variant="eco" size="xl" className="flex-1 sm:flex-none" onClick={() => {
                navigate('/dropoff-locations');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}>
                <Recycle className="mr-2 h-5 w-5" />
                Find Drop-off Location
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
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
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">Sustainable.</h3>
                  <p className="text-sm text-muted-foreground">Transparent. Rewarding.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">100%</h3>
                  <p className="text-sm text-muted-foreground">Ethically Recycled</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">100%</h3>
                  <p className="text-sm text-muted-foreground">Canadian Owned & Recycled</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">100%</h3>
                  <p className="text-sm text-muted-foreground">Data Security</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}