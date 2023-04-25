import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TopNav from "../components/Navbar";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const [inputFirstName, setFirstName] = useState("");
    const [inputLastName, setLastName] = useState("");
    const [inputEmail, setEmail] = useState("");
    const [inputPassword, setPassword] = useState("");
    const navigate = useNavigate();

    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                return setDoc(doc(db, "users", user.uid), {
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail,
            })
            .then(() => {
                return true; // return a promise that resolves to true
            });
            })
            .then((docCreated) => {
                if (docCreated) {
                    return signOut(auth).then(() => {
                    navigate("/Login?message=New account created successfully!");
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        };

    return (
        <>
        <TopNav />

        <div className="container" id="main-content">
            <h1>Sign Up</h1>
            <p> Already have an account?<span><Link to="/Login">Log in</Link></span></p>

            <Form onSubmit={signup}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={inputFirstName}  onChange={(e) => setFirstName(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={inputLastName} onChange={(e) => setLastName(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={inputEmail} onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={inputPassword} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
        </>
  );
};

export default Signup;
