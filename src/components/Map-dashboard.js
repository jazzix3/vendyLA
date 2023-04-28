import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ["places"];
const containerStyle = { width: '250px', height: '250px' };
const options = {
    disableDefaultUI: true,
    styles: [
        {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
        }
    ]
};

function MapDashboard({ lat, lng }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
    });

    const center = { lat: parseFloat(lat), lng: parseFloat(lng) };

    if (!isLoaded) return <div>Loading</div>;

    return (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={options}
            >
            <Marker position={center} />
            </GoogleMap>
        </>
    );
}

export default MapDashboard;
