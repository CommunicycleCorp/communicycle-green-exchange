import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Shield, Recycle, Users, MapPin, Award, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Complete Electronic
                <span className="block text-primary">Lifecycle Management</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong>ITAD Asset Recovery: Free Refurbishment & Resale of Your Electronics</strong><br/>
                We pick up, refurbish, and resell your TVs, laptops, computers, and phones — all at no cost to you. Whether you're a household or a business, we maximize the value of your working electronics and return the profits to you — with zero effort and maximum payout.<br/><br/>
                <strong>End-of-Life Recycling:</strong> Public drop-off End-of-Life electronic recycling network ensuring zero electronic waste reaches landfills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="flex-1 sm:flex-none"
                onClick={() => window.open('https://tally.so/r/w40aVO', '_blank')}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                ITAD Asset Recovery
              </Button>
              <Button variant="eco" size="xl" className="flex-1 sm:flex-none" onClick={() => navigate('/dropoff-locations')}>
                <Recycle className="mr-2 h-5 w-5" />
                Find Drop-off Location
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure Data Destruction</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Business & Residential</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Recycle className="h-5 w-5 text-primary" />
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
                  <h3 className="text-2xl font-bold text-foreground">Sustainable.</h3>
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
                  <h3 className="text-2xl font-bold text-foreground">100%</h3>
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
                  <h3 className="text-2xl font-bold text-foreground">100%</h3>
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
                  <h3 className="text-2xl font-bold text-foreground">100%</h3>
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