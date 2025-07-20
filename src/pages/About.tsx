
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Recycle, Users, Award, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every device receives certified data destruction using industry-standard protocols, ensuring complete data protection."
    },
    {
      icon: Recycle,
      title: "Environmental Responsibility",
      description: "100% landfill diversion with ethical recycling practices that maximize material recovery and minimize environmental impact."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local collectors and communities while providing convenient, accessible electronic lifecycle services."
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "R2 certified with full compliance to provincial e-waste regulations and environmental standards."
    }
  ];

  const stats = [
    { number: "100%", label: "Canadian Owned & Operated" },
    { number: "100%", label: "Secure Data Destruction" },
    { number: "100%", label: "Landfill Diversion Rate" },
    { number: "24/7", label: "Drop-off Availability" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About Communicycle
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're Canada's trusted partner for complete electronic lifecycle management, 
              turning old electronics into cash through ITAD asset recovery while ensuring 
              responsible end-of-life recycling for all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Communicycle was founded to solve the growing problem of electronic waste 
                while maximizing value recovery for device owners. We believe that working 
                electronics shouldn't end up in landfills when they can be refurbished and 
                given new life, creating value for owners and reducing environmental impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our dual-path approach ensures every device finds its optimal destination: 
                working electronics are refurbished and resold through our ITAD asset recovery 
                program, while end-of-life devices are responsibly recycled with zero landfill impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card shadow-card">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything we do is guided by our commitment to security, sustainability, and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Ready to turn your electronics into cash or recycle responsibly? Contact us today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center bg-gradient-card shadow-card">
                <div className="space-y-4">
                  <Phone className="h-8 w-8 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">(365) 777-3058</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 text-center bg-gradient-card shadow-card">
                <div className="space-y-4">
                  <Mail className="h-8 w-8 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">laith@communicycle.ca</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 text-center bg-gradient-card shadow-card">
                <div className="space-y-4">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Oakville, ON</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://tally.so/r/w40aVO', '_blank')}
                >
                  Get Asset Valuation
                </Button>
                <Button 
                  variant="eco" 
                  size="lg" 
                  onClick={() => {
                    navigate('/dropoff-locations');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                >
                  Find Drop-off Location
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
