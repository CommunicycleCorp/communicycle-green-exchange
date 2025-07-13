import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Search, DollarSign, Recycle, ArrowRight, Shield, RotateCcw, Phone, Truck, CheckCircle, FileText, Mail } from "lucide-react";

export function HowItWorks() {
  const itadSteps = [
    {
      icon: FileText,
      title: "ITAD Intake Form",
      description: "Fill our form so we can ensure the best process and evaluation for your device to maximize value."
    },
    {
      icon: Mail,
      title: "Pickup or Mail Service",
      description: "Convenient pickup scheduling or secure shipping labels for your equipment delivery"
    },
    {
      icon: RotateCcw,
      title: "Refurbishment",
      description: "Certified data wiping, repairs, and refurbishment process to restore devices to like-new condition"
    },
    {
      icon: DollarSign,
      title: "Payment",
      description: "Fast payment for resaleable equipment at fair market value with transparent pricing"
    }
  ];

  const recyclingSteps = [
    {
      icon: Truck,
      title: "Drop-off",
      description: "Bring items to any public drop-off network location - no appointment necessary"
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "Certified data destruction and component separation using industry-standard protocols"
    },
    {
      icon: Recycle,
      title: "Material Recovery",
      description: "Responsible recycling with zero landfill guarantee and maximum material recovery"
    },
    {
      icon: CheckCircle,
      title: "Certification",
      description: "Environmental compliance documentation and recycling certificates provided on request"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Dual-Path Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every device is evaluated to determine the optimal path: refurbishment for maximum value recovery or responsible end-of-life recycling
          </p>
        </div>

        {/* ITAD Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">ITAD Asset Recovery Process</h3>
            <p className="text-muted-foreground">For working IT equipment with resale value</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itadSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 h-full border-l-4 border-primary">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-3 -left-3 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                      {step.title === "ITAD Intake Form" && (
                        <Button variant="outline" size="sm" className="mt-3">
                          Fill Our Form
                        </Button>
                      )}
                    </div>
                  </Card>
                  
                  {index < itadSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recycling Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">End-of-Life Recycling Process</h3>
            <p className="text-muted-foreground">For non-working or obsolete electronic devices</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recyclingSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 h-full border-l-4 border-primary">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-3 -left-3 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                  
                  {index < recyclingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground mb-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>R2 Certified Facility</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>NIST Data Destruction</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>EPA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Zero Landfill Guarantee</span>
            </div>
          </div>

          <div className="bg-accent/40 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you need asset recovery or end-of-life recycling, we have the expertise and infrastructure to handle your electronics responsibly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <DollarSign className="mr-2 h-5 w-5" />
                Get Asset Valuation
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