import React, { useState, useEffect } from "react";
import TopNav from "../components/Navbar";
import { Link } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Button } from "react-bootstrap";


const Dashboard = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            const userDocRef = doc(db, "users", currentUser.uid);
            getDoc(userDocRef)
                .then((doc) => {
                    if (doc.exists()) {
                        const data = doc.data();
                        setFirstName(data.firstName);
                        setLastName(data.lastName);
                        setEmail(data.email);
                    } else {
                        console.log("User not found");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    return (
        <>
            <TopNav />
            <div className="container" id="main-content">
                <h1>Dashboard</h1>
                <p>Welcome! This is where vendors can view their info.</p>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Email:</strong> {email}</p>
                <Link to="/EditProfile">
                    <Button variant="primary" type="submit">Edit Profile</Button>
                </Link>
            </div>
        </>
    );
};

export default Dashboard;
