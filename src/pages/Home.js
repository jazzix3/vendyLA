import React from "react";
import TopNav from "../components/Navbar";
import { useJsApiLoader } from '@react-google-maps/api';
import Map from "../components/Map/Map";
import { mapOptions } from '../components/Map/MapConfiguration';


const Home = () => {
    const { isLoaded } = useJsApiLoader({
        id:mapOptions.googleMapApiKey,
        googleMapApiKey: mapOptions.googleMapApiKey
      })


    return (

        <>  
        <TopNav />
        
        <div className="container" id="main-content">
            <div id="map-container">
                <Map isLoaded={ isLoaded } />
            </div>

        </div>
        
        </>
        


    )
}

export default Home;
