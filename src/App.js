import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reviews from "./pages/Reviews";
import Dashboard from "./pages/Dashboard";


function App() {

  return (
    <div className="App">
       

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Reviews" element={<Reviews/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>


        
    </div>
  );
}

export default App;
