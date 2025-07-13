import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Recycle, Building, Users, Laptop, Smartphone, Monitor, Gamepad2 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: DollarSign,
      title: "Electronic Resale",
      description: "Get cash for your working electronics. We evaluate, refurbish, and resell your devices at maximum value.",
      features: ["Free evaluation", "Competitive pricing", "Quick payment", "Professional handling"],
      cta: "Get Cash Quote"
    },
    {
      icon: Recycle,
      title: "Electronics Recycling",
      description: "Responsible recycling for all electronic devices with certified data destruction and zero landfill policy.",
      features: ["Secure data destruction", "Environmental compliance", "Certificate of recycling", "Public drop-off locations"],
      cta: "Schedule Pickup"
    }
  ];

  const customers = [
    {
      icon: Building,
      title: "Business Services",
      description: "Corporate electronics disposal and resale services for offices, schools, and organizations.",
      items: ["Bulk device processing", "Data security compliance", "Asset recovery", "Scheduled pickups"]
    },
    {
      icon: Users,
      title: "Residential Services",
      description: "Individual and family electronics recycling and resale with convenient drop-off locations.",
      items: ["Home pickup available", "Individual device quotes", "Family-friendly locations", "Educational resources"]
    }
  ];

  const devices = [
    { icon: Laptop, name: "Laptops & Computers" },
    { icon: Smartphone, name: "Phones & Tablets" },
    { icon: Monitor, name: "TVs & Monitors" },
    { icon: Gamepad2, name: "Gaming Consoles" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Services Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The first electronic recycling system operated by public dropoff operators to divert every electronic from landfill
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-0">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="w-full">
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {customers.map((customer, index) => (
            <Card key={index} className="bg-secondary/50 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <customer.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{customer.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {customer.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {customer.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
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