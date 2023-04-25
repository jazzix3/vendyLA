import React, { useState } from "react";
import TopNav from '../components/Navbar';
import { Form, Button } from "react-bootstrap";

const EditProfile = () => {
    const [inputBusinessName, setBusinessName] = useState("");
    
    const saveProfile = (e) => {
        e.preventDefault();
    }

    return (
        
        <>  
        
        <TopNav /> 

        <div className="container" id="main-content">
            <h1>Edit Profile</h1>
            <p>This is where vendors can edit their information (write to db)</p>

        {/* Not functional yet*/}
            <Form onSubmit={saveProfile}>
                <Form.Group className="mb-3" controlId="businessName">
                    <Form.Label>Name of Business</Form.Label>
                    <Form.Control type="text" value={inputBusinessName} onChange={(e) => setBusinessName(e.target.value)} required/>
                </Form.Group>

                <Button variant="primary" type="submit">Save Profile</Button>
            </Form>
        </div>
        </>
    )
}

export default EditProfile;
