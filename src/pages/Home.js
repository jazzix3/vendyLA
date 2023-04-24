import React from "react";
import TopNav from "../components/Navbar";
import { useLoadScript } from '@react-google-maps/api';
import Map from "../components/Map";


const Home = () => {
    const { isLoaded } = useLoadScript({
        googleMapApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
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
