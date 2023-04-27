import React, { useState } from "react";
import TopNav from '../components/Navbar';
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const EditProfile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    
    const [inputFirstName, setFirstName] = useState("");
    const [inputLastName, setLastName] = useState("");
    
    
  
    const saveProfile = (e) => {
      e.preventDefault();
  
      const userDocRef = doc(db, "users", userId);
      updateDoc(userDocRef, {
        firstName: inputFirstName,
        lastName: inputLastName,
      })
        .then(() => {
          navigate("/Dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    };


  return (
    <>
      <TopNav />
      <div className="container" id="main-content">
        <h1>Edit Profile</h1>

        <Form onSubmit={saveProfile}>
          <Form.Group className="mb-3" controlId="FirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value={inputFirstName} onChange={(e) => setFirstName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value={inputLastName} onChange={(e) => setLastName(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Profile
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditProfile;
