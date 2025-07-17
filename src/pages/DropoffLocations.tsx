import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Search, Navigation } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Declare StoreRocket global type
declare global {
  interface Window {
    StoreRocket?: {
      init: (config: { selector: string; account: string }) => void;
    };
  }
}

export default function DropoffLocations() {
  const [searchInput, setSearchInput] = useState("");
  const [isWidgetLoading, setIsWidgetLoading] = useState(true);
  const { toast } = useToast();

  // Initialize StoreRocket widget
  useEffect(() => {
    const loadStoreRocketWidget = () => {
      // Check if script is already loaded
      if (window.StoreRocket) {
        // Initialize the widget
        window.StoreRocket.init({
          selector: ".storerocket-store-locator",
          account: "5Z4wWDz4Pd"
        });
        setIsWidgetLoading(false);
        return;
      }

      // Load the StoreRocket script
      const script = document.createElement('script');
      script.src = '//cdn.storerocket.io/widget.js';
      script.async = true;
      
      script.onload = () => {
        // Initialize the widget after script loads
        if (window.StoreRocket) {
          window.StoreRocket.init({
            selector: ".storerocket-store-locator",
            account: "5Z4wWDz4Pd"
          });
          setIsWidgetLoading(false);
        }
      };

      script.onerror = () => {
        console.error('Failed to load StoreRocket widget');
        setIsWidgetLoading(false);
      };

      document.head.appendChild(script);
    };

    loadStoreRocketWidget();
  }, []);

  // Simple function to scroll to map
  const scrollToMap = () => {
    const mapElement = document.getElementById('locations-map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Map locations",
        description: "View all drop-off locations on the map below."
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-2 sm:px-6 py-4 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Drop-off Locations
          </h1>
          <p className="text-sm sm:text-xl text-muted-foreground mb-4 sm:mb-8 max-w-2xl mx-auto px-4">
            <span className="sm:hidden">Find your local Communicycle bin - e-waste drop-off locations. </span>
            <span className="hidden sm:inline">Find your local Communicycle bin to safely, ethically, and securely dispose of your electronics. All locations follow certified e-waste recycling protocols to protect your data and the environment. Our pricing model is standard—please reach out to support for details or assistance.</span>
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-8 px-4 sm:px-0">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Enter postal code or address"
                className="pl-10 w-full"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && scrollToMap()}
              />
            </div>
            <Button
              variant="hero"
              size="default"
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
              onClick={scrollToMap}
            >
              <Navigation className="h-4 w-4" />
              <span className="sm:hidden">Find</span>
              <span className="hidden sm:inline">Find Nearby</span>
            </Button>
          </div>
        </div>

        {/* StoreRocket Store Locator */}
        <div id="locations-map" className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="w-full rounded-lg overflow-hidden shadow-lg bg-background p-4 min-h-[400px]">
            <div className="storerocket-store-locator" style={{width: '100%', minHeight: '350px'}}>
              {isWidgetLoading && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-sm text-muted-foreground">Loading store locator...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl">Before You Visit</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Important information to ensure a smooth drop-off experience
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left p-4 sm:p-6 pt-0">
              <div>
                <h4 className="font-medium mb-3 text-sm sm:text-base">Before Coming:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>• Remove all personal data beforehand</li>
                  <li>• Separate batteries from devices when possible</li>
                  <li>• Check location hours before visiting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-sm sm:text-base">Accepted Items:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>• Computers, laptops, and tablets</li>
                  <li>• Smartphones and mobile devices</li>
                  <li>• Monitors and TVs</li>
                  <li>• Printers and peripherals</li>
                  <li>• Gaming consoles and accessories</li>
                </ul>
              </div>
              <div className="sm:col-span-2 mt-4 pt-4 border-t">
                <h4 className="font-medium mb-3 text-sm sm:text-base">Pricing Information:</h4>
                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm text-muted-foreground">
                  <div>• $5 - Small Drop-off<br />Under 10lbs (1-3 small items)</div>
                  <div>• $15 - Medium Drop-off<br />Over 10lbs (1-3 medium items)</div>
                  <div>• $25 - Large Drop-off<br />Over 20lbs (bulk items)</div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
                  All locations follow certified e-waste protocols to protect your data and the environment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}