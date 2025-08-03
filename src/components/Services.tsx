import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Recycle, Building, Users, Laptop, Smartphone, Monitor, Gamepad2, ArrowRight, Shield, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();
  
  const devices = [
    { icon: Laptop, name: "Laptops & Computers" },
    { icon: Smartphone, name: "Phones & Tablets" },
    { icon: Monitor, name: "TVs & Monitors" },
    { icon: Gamepad2, name: "Gaming Consoles" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        {/* Services Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Two Specialized Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive electronic lifecycle management from working equipment resale to end-of-life recycling
          </p>
        </div>

        {/* Main Service Divisions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* ITAD Asset Recovery Service */}
          <Card className="p-4 sm:p-6 lg:p-10 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-l-4 border-primary">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">ITAD Asset Recovery: Maximum Payout for Electronics</h3>
                  <p className="text-primary font-medium">IT Asset Disposition & Refurbishment</p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg">
                We refurbish and increase the value of your electronics. Whether you're a household or a business, we maximize the value of your working electronics from our refurbishing process then our specialized team will resell them and return most of the profits to you — with zero effort and maximum payout.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" />
                  Solutions
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                  <li>• Corporate equipment liquidation</li>
                  <li>• Data center decommissioning</li>
                  <li>• Office technology upgrades</li>
                  <li>• Fleet device management</li>
                </ul>

                <h4 className="font-semibold text-foreground flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  Device Management
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                  <li>• Individual device evaluation</li>
                  <li>• Laptop, Tablet, Phone, Computer etc</li>
                  <li>• Consumer electronics</li>
                  <li>• Office Equipment</li>
                </ul>
              </div>

              <Button 
                variant="hero" 
                className="w-full group"
                onClick={() => window.open('https://tally.so/r/w40aVO', '_blank')}
              >
                Get Paid Big Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* End-of-Life Recycling Service */}
          <Card className="p-4 sm:p-6 lg:p-10 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-l-4 border-secondary">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">End-of-Life Recycling</h3>
                  <p className="text-primary font-medium">Public Drop-off Network Operations</p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg">
                Find the closest Communicycle bin to you and support your local collector and the environment by diverting all your electronic waste from reaching the landfill; Skip the landfill with Communicycle.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" />
                  Solutions
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                  <li>• Convenient neighborhood locations</li>
                  <li>• No appointment necessary</li>
                  <li>• All electronics accepted</li>
                  <li>• Certified destruction processes</li>
                </ul>

                <h4 className="font-semibold text-foreground flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  Device Management
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                  <li>• 100% landfill diversion</li>
                  <li>• Responsible material recovery</li>
                  <li>• Certified data destruction</li>
                  <li>• Environmental compliance</li>
                </ul>
              </div>

              <Button 
                variant="eco" 
                className="w-full group"
                onClick={() => {
                  navigate('/dropoff-locations');
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
              >
                Find Drop-off Location
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Accepted Devices */}
        <div className="bg-accent/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">We Accept All Electronics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <device.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{device.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            And many more! Contact us for devices not listed above.
          </p>
        </div>
      </div>
    </section>
  );
}
