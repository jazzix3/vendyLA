import React from "react";
import TopNav from "../components/Navbar/Navbar";
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
                <div id="map-container">
          <Map isLoaded={ isLoaded } />
        </div>
        
        </>
        


    )
}

export default Home;
