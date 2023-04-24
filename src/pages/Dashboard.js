import React from "react";
import TopNav from "../components/Navbar";
import { Link } from 'react-router-dom'



const Dashboard = () => {
    
    return (
        
        <>  
        
        <TopNav /> 
        <div className="container" id="main-content">
            <h1>Dashboard</h1>
            <p>Welcome! This is where vendors can view their info.</p>
            
            <Link to="/EditProfile">
                <button className="btn btn-primary"> Edit Profile</button>
            </Link>
            
            

        </div>
        </>


    )
}

export default Dashboard;