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
        fullscreenControl: false
    };

    const testMarker = {
        lat: 34.2407,
        lng: -118.5300
    };


     return isLoaded && (
        <GoogleMap
            mapContainerStyle = {containerStyle}
            center = {center}
            zoom={12}
            options={options}>
        
            <Marker position = {testMarker} />
           
        </GoogleMap>
     )
};

export default Map;