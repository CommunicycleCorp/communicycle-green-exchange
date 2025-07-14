import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Search, Navigation } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function DropoffLocations() {
  const [searchInput, setSearchInput] = useState("");
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [sortedLocations, setSortedLocations] = useState<any[]>([]);
  const { toast } = useToast();
  const locations = [
    {
      id: 1,
      name: "Oakville Electronics Depot",
      address: "123 Main Street, Oakville, ON L6K 2M3",
      phone: "(905) 555-0123",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      acceptedItems: ["Laptops", "Smartphones", "Tablets", "Desktop Computers", "Monitors"],
      distance: "2.1 km",
      type: "Primary Location",
      lat: 43.4675,
      lng: -79.6877
    },
    {
      id: 2,
      name: "Burlington Tech Recycling",
      address: "456 Industrial Ave, Burlington, ON L7P 1A1",
      phone: "(905) 555-0456", 
      hours: "Mon-Sat: 9AM-5PM",
      acceptedItems: ["All Electronics", "Batteries", "Cables", "Printers"],
      distance: "8.5 km",
      type: "Partner Location",
      lat: 43.3255,
      lng: -79.7990
    },
    {
      id: 3,
      name: "Milton Green Electronics",
      address: "789 Environmental Way, Milton, ON L9T 2K5",
      phone: "(905) 555-0789",
      hours: "Tue-Sat: 10AM-6PM",
      acceptedItems: ["Consumer Electronics", "Small Appliances", "Gaming Consoles"],
      distance: "12.3 km", 
      type: "Partner Location",
      lat: 43.5183,
      lng: -79.8774
    },
    {
      id: 4,
      name: "Mississauga E-Waste Center",
      address: "321 Recycling Blvd, Mississauga, ON L5B 3M2",
      phone: "(905) 555-0321",
      hours: "Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-5PM",
      acceptedItems: ["All Electronics", "Data Destruction", "Bulk Commercial"],
      distance: "15.7 km",
      type: "Certified Partner",
      lat: 43.5890,
      lng: -79.6441
    }
  ];

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Get user's current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        
        // Calculate distances and sort locations
        const locationsWithDistance = locations.map(location => {
          const distance = calculateDistance(latitude, longitude, location.lat, location.lng);
          return {
            ...location,
            calculatedDistance: distance,
            distance: `${distance.toFixed(1)} km`
          };
        }).sort((a, b) => a.calculatedDistance - b.calculatedDistance);
        
        setSortedLocations(locationsWithDistance);
        
        toast({
          title: "Location found!",
          description: `Found ${locationsWithDistance.length} locations near you. Closest is ${locationsWithDistance[0].name} (${locationsWithDistance[0].distance}).`,
        });
      },
      (error) => {
        let errorMessage = "Unable to get your location.";
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location permissions.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
        }
        toast({
          title: "Location error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    );
  };

  // Search by postal code or address (simplified version)
  const searchByAddress = async () => {
    if (!searchInput.trim()) {
      getCurrentLocation();
      return;
    }

    toast({
      title: "Searching...",
      description: "Looking for locations near your address.",
    });

    // In a real app, you'd use a geocoding service here
    // For now, we'll simulate a search
    setTimeout(() => {
      toast({
        title: "Search completed",
        description: "Showing all available locations. Use 'Find Nearby' with location access for precise results.",
      });
    }, 1000);
  };

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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && searchByAddress()}
              />
            </div>
            <Button 
              variant="hero" 
              size="default" 
              className="flex items-center gap-2"
              onClick={searchByAddress}
            >
              <Navigation className="h-4 w-4" />
              Find Nearby
            </Button>
          </div>
        </div>

        {/* Embedded Google My Maps */}
        <div className="max-w-6xl mx-auto">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=19VkdGhFA0Z9kZwx34QwfSARDNiug7sE&ehbc=2E312F" 
              width="100%" 
              height="500"
              className="border-0"
              loading="lazy"
              title="Electronic Waste Drop-off Locations"
            />
          </div>
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
      <Toaster />
    </div>
  );
}