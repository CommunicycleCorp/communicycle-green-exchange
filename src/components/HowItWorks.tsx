import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Search, DollarSign, Recycle, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Package,
      title: "Drop Off or Schedule Pickup",
      description: "Bring your electronics to one of our public drop-off locations or schedule a convenient pickup for bulk items."
    },
    {
      icon: Search,
      title: "Professional Evaluation",
      description: "Our certified technicians assess your devices for resale value and provide secure data destruction when needed."
    },
    {
      icon: DollarSign,
      title: "Get Paid or Certificate",
      description: "Receive competitive cash payments for resalable items or recycling certificates for responsibly processed electronics."
    },
    {
      icon: Recycle,
      title: "Environmental Impact",
      description: "Your electronics are either refurbished for reuse or responsibly recycled, keeping them out of landfills forever."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and sustainable electronics processing in four easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-background shadow-card hover:shadow-hero transition-all duration-300 border-0 h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-3 -left-3 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Arrow between steps (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-accent/40 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who have turned their old electronics into cash while protecting the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <DollarSign className="mr-2 h-5 w-5" />
                Get Your Quote Now
              </Button>
              <Button variant="eco" size="lg">
                <Package className="mr-2 h-5 w-5" />
                Find Drop-off Location
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}