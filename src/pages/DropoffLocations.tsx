import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Search, Navigation } from "lucide-react";

export default function DropoffLocations() {
  const locations = [
    {
      id: 1,
      name: "Oakville Electronics Depot",
      address: "123 Main Street, Oakville, ON L6K 2M3",
      phone: "(905) 555-0123",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      acceptedItems: ["Laptops", "Smartphones", "Tablets", "Desktop Computers", "Monitors"],
      distance: "2.1 km",
      type: "Primary Location"
    },
    {
      id: 2,
      name: "Burlington Tech Recycling",
      address: "456 Industrial Ave, Burlington, ON L7P 1A1",
      phone: "(905) 555-0456", 
      hours: "Mon-Sat: 9AM-5PM",
      acceptedItems: ["All Electronics", "Batteries", "Cables", "Printers"],
      distance: "8.5 km",
      type: "Partner Location"
    },
    {
      id: 3,
      name: "Milton Green Electronics",
      address: "789 Environmental Way, Milton, ON L9T 2K5",
      phone: "(905) 555-0789",
      hours: "Tue-Sat: 10AM-6PM",
      acceptedItems: ["Consumer Electronics", "Small Appliances", "Gaming Consoles"],
      distance: "12.3 km", 
      type: "Partner Location"
    },
    {
      id: 4,
      name: "Mississauga E-Waste Center",
      address: "321 Recycling Blvd, Mississauga, ON L5B 3M2",
      phone: "(905) 555-0321",
      hours: "Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-5PM",
      acceptedItems: ["All Electronics", "Data Destruction", "Bulk Commercial"],
      distance: "15.7 km",
      type: "Certified Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Electronic Waste Drop-off Locations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Find convenient locations near you to safely dispose of your electronic devices. 
            All locations follow certified e-waste recycling protocols.
          </p>
          
          {/* Search Bar */}
          <div className="flex gap-4 max-w-md mx-auto mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Enter your postal code or address"
                className="pl-10"
              />
            </div>
            <Button variant="hero" size="default" className="flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              Find Nearby
            </Button>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 max-w-6xl mx-auto">
          {locations.map((location) => (
            <Card key={location.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                  <Badge variant={location.type === "Primary Location" ? "default" : "secondary"}>
                    {location.type}
                  </Badge>
                </div>
                <CardDescription className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{location.address}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{location.hours}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{location.phone}</span>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-sm">Accepted Items:</h4>
                  <div className="flex flex-wrap gap-1">
                    {location.acceptedItems.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm font-medium text-primary">{location.distance} away</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Get Directions
                    </Button>
                    <Button variant="eco" size="sm">
                      Call Location
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Before You Visit</CardTitle>
              <CardDescription>
                Important information to ensure a smooth drop-off experience
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium mb-3">What to Bring:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Valid government-issued ID</li>
                  <li>• Proof of ownership for valuable items</li>
                  <li>• Remove all personal data beforehand</li>
                  <li>• Separate batteries from devices when possible</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">What We Accept:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Computers, laptops, and tablets</li>
                  <li>• Smartphones and mobile devices</li>
                  <li>• Monitors and TVs</li>
                  <li>• Printers and peripherals</li>
                  <li>• Gaming consoles and accessories</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Need Help Finding the Right Location?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our team for personalized assistance with your e-waste disposal needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="hero" size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Schedule Pickup
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}