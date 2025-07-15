import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Recycle, Building, Users, Laptop, Smartphone, Monitor, Gamepad2, ArrowRight, Shield, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();
  
  const mainServices = [
    {
      icon: DollarSign,
      title: "ITAD Asset Recovery: Free Refurbishment & Resale of Your Electronics for Maximum Payout",
      subtitle: "IT Asset Disposition & Refurbishment",
      description: "We refurbish and increase the value of your electronics. Whether you're a household or a business, we maximize the value of your working electronics from our refurbishing process then our specialized team will resell them and return most of the profits to you — with zero effort and maximum payout.",
      businessFeatures: ["Corporate equipment liquidation", "Data center decommissioning", "Office technology upgrades", "Fleet device management"],
      residentialFeatures: ["Individual device evaluation", "Home office equipment", "Consumer electronics", "Gaming systems"],
      cta: "Get Asset Valuation",
      borderColor: "border-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Recycle,
      title: "End-of-Life Recycling",
      subtitle: "Public Drop-off Network Operations",
      description: "Find the closest Communicycle bin to you and support your local collector and the environment by diverting all your electronic waste from reaching the landfill; Skip the landfill with Communicycle.",
      businessFeatures: ["Convenient neighborhood locations", "No appointment necessary", "All electronics accepted", "Certified destruction processes"],
      residentialFeatures: ["100% landfill diversion", "Responsible material recovery", "Certified data destruction", "Environmental compliance"],
      cta: "Find Drop-off Location",
      borderColor: "border-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

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
          {mainServices.map((service, index) => (
            <Card key={index} className={`p-10 bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-l-4 ${service.borderColor}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`h-16 w-16 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-primary font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Building className="h-5 w-5 text-primary mr-2" />
                    Business Solutions
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                    {service.businessFeatures.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-foreground flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    Residential Services
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                    {service.residentialFeatures.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={index === 0 ? "hero" : "eco"} 
                  className="w-full group"
                  onClick={() => index === 0 ? window.open('https://tally.so/r/w40aVO', '_blank') : navigate('/dropoff-locations')}
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
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