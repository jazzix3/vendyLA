import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/Navbar';
import MapContainer from './MapContainer';


function App() {
  return (
    <div className="App">
        <TopNav/>
        <MapContainer/>
        
    </div>
  );
}

export default App;
