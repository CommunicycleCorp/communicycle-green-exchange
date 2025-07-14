import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  acceptedItems: string[];
  distance: string;
  type: string;
  lat?: number;
  lng?: number;
}

interface GoogleMapProps {
  locations: Location[];
}

export function GoogleMap({ locations }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Mock coordinates for the locations (in a real app, you'd geocode these)
  const locationsWithCoords: Location[] = [
    { ...locations[0], lat: 43.4675, lng: -79.6877 }, // Oakville
    { ...locations[1], lat: 43.3255, lng: -79.7990 }, // Burlington
    { ...locations[2], lat: 43.5183, lng: -79.8774 }, // Milton
    { ...locations[3], lat: 43.5890, lng: -79.6441 }, // Mississauga
  ];

  const initializeMap = async () => {
    if (!apiKey || !mapRef.current) return;

    try {
      const loader = new Loader({
        apiKey: apiKey,
        version: 'weekly',
        libraries: ['places']
      });

      await loader.load();

      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: 43.4675, lng: -79.6877 }, // Centered on Oakville
        zoom: 11,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      setMap(mapInstance);

      // Add markers for each location
      locationsWithCoords.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat!, lng: location.lng! },
          map: mapInstance,
          title: location.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#10b981" stroke="#059669" stroke-width="2"/>
                <circle cx="12" cy="9" r="3" fill="white"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 32),
            anchor: new google.maps.Point(16, 32)
          }
        });

        marker.addListener('click', () => {
          setSelectedLocation(location);
        });
      });

      setIsMapLoaded(true);
    } catch (error) {
      console.error('Error loading Google Maps:', error);
    }
  };

  useEffect(() => {
    if (apiKey) {
      initializeMap();
    }
  }, [apiKey]);

  const handleGetDirections = (location: Location) => {
    if (location.lat && location.lng) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
      window.open(url, '_blank');
    }
  };

  const handleCallLocation = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  if (!apiKey) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Enter Google Maps API Key</h3>
          <p className="text-sm text-muted-foreground mb-4">
            To display the interactive map, please enter your Google Maps API key. 
            You can get one from the{' '}
            <a 
              href="https://console.cloud.google.com/google/maps-apis/credentials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Cloud Console
            </a>
            .
          </p>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter your Google Maps API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <Button 
              onClick={() => initializeMap()} 
              disabled={!apiKey}
              className="w-full"
            >
              Load Map
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div
          ref={mapRef}
          className="w-full h-[500px] rounded-lg border shadow-lg"
        />
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      {selectedLocation && (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{selectedLocation.name}</h3>
              <Badge variant={selectedLocation.type === "Primary Location" ? "default" : "secondary"}>
                {selectedLocation.type}
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>{selectedLocation.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{selectedLocation.hours}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{selectedLocation.phone}</span>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 text-sm">Accepted Items:</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedLocation.acceptedItems.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-sm font-medium text-primary">{selectedLocation.distance} away</span>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleGetDirections(selectedLocation)}
                  >
                    <Navigation className="h-4 w-4 mr-1" />
                    Get Directions
                  </Button>
                  <Button 
                    variant="eco" 
                    size="sm"
                    onClick={() => handleCallLocation(selectedLocation.phone)}
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call Location
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}