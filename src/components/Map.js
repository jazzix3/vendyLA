import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";


const Map = (props) => {
    const { isLoaded } = props;
    const containerStyle = {
        width: '90vw',
        height: '75vh' 
    };

    const center = {
        lat: 34.052235, 
        lng: -118.243683 
    };

    const options ={
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        styles: [
            {
              featureType: "poi",
              stylers: [{ visibility: "off" }]
            }
        ]
    };

    const testMarker = {
        lat: 34.2407,
        lng: -118.5300
    };


     return isLoaded && (
        <GoogleMap
            mapContainerStyle = {containerStyle}
            center = {center}
            zoom={11}
            options={options}
            mapid= 'a2d9d8333221dcb3'
            >
        
            <Marker position = {testMarker} />
           
        </GoogleMap>
     )
};

export default Map;