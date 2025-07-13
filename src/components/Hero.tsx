import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Shield, Recycle, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Your Old Electronics
                <span className="block text-primary">Into Cash</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Free professional electronic resale services for businesses and residential customers. 
                We handle TVs, laptops, desktops, phones and more, plus electronics recycling with 
                secure data protection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1 sm:flex-none">
                <DollarSign className="mr-2 h-5 w-5" />
                Get Cash Quote
              </Button>
              <Button variant="eco" size="xl" className="flex-1 sm:flex-none">
                <Recycle className="mr-2 h-5 w-5" />
                Recycle Electronics
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
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">$2M+</h3>
                  <p className="text-sm text-muted-foreground">Paid to Customers</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">50k+</h3>
                  <p className="text-sm text-muted-foreground">Devices Recycled</p>
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

            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">1000+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}