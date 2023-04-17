import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/Navbar';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from "./components/Map";
import { mapOptions } from './components/MapConfiguration';



function App() {
  const { isLoaded } = useJsApiLoader({
    id:mapOptions.googleMapApiKey,
    googleMapApiKey: mapOptions.googleMapApiKey
  })

  return (
    <div className="App">
        <TopNav/>

        <div id="map-container">
          <Map isLoaded={ isLoaded } />
        </div>

        
    </div>
  );
}

export default App;
