import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


const MapContainer = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ProcessingInstruction.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      });
    
      if (!isLoaded)
        return <div> Loading...</div>;
    
      return <Map />
    }
    
    
    
    
    function Map() {
      const center = useMemo(()=> ({ lat: 44, lng: -80 }), []);
    
      return(
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
          <Marker position={center} />
        </GoogleMap>
      );
    }

export default MapContainer;