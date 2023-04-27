import React from 'react'
import { GoogleMap, useLoadScript} from '@react-google-maps/api';



const libraries = ["places"];

const containerStyle = { width: '400px', height: '400px' };

const center = { lat: 34.052235, lng: -118.243683 };

const options ={
    styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        }
    ]
};

function MapDashboard(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
      });
    
    if (!isLoaded) return <div>Loading</div>;
    
    
    return (
        <>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={options}
        >
        <></>
        </GoogleMap>
        </>
    );
}

export default MapDashboard




