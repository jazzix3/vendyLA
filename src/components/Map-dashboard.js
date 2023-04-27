import React from 'react'
import { GoogleMap, useJsApiLoader} from '@react-google-maps/api';


const containerStyle = {
    width: '200px',
    height: '200px' 
};

const center = {
    lat: 34.052235, 
    lng: -118.243683 
};

const options ={

    disableDefaultUI: true,
    styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        }
    ]
};

function MapDashboard() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={options}
        >
        <></>
        </GoogleMap>
    ) : <></>
    }

export default MapDashboard
