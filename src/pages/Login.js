import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TopNav from "../components/Navbar";
import { auth } from "../firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useLocation, useNavigate, Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignUp";
//import { doc, getDoc, setDoc } from "firebase/firestore";
//import { auth, db } from "../firebase";

const Login = () => {

    const [inputEmail, setEmail] = useState("");
    const [inputPassword, setPassword] = useState("");

    const location = useLocation();
    const message = new URLSearchParams(location.search).get("message");

    const navigate = useNavigate();

    // https://firebase.google.com/docs/auth/web/start#sign_in_existing_users
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((userCredential) => {
                navigate("/Dashboard")
            })
            .catch((error) => {
                console.log(error)
            });
    }

        /* Need to check if user exists in database, if not, create users doc
        // Not functional yet-- no resolve if no firstname
        .then((userCredential) => {
            const user = userCredential.user;
            const profile = user.providerData[0];
            const firstName = profile.given_name;
            const lastName = profile.family_name;
            const email = user.email;
            if (firstName || lastName) {
                const userDocRef = doc(db, "users", user.uid);
                getDoc(userDocRef)
                  .then((doc) => {
                    if (doc.exists()) {
                      navigate("/Dashboard");
                    } else {
                      setDoc(userDocRef, {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                      })
                        .then(() => {
                          navigate("/Dashboard");
                        });
                    }
                  })*/
                  



    return (
        <>
            <TopNav />

            <div className="container" id="main-content">
                {message && <div className="alert alert-success">{message}</div>}
                <h1>Log In</h1>
                <p> New User?<span> <Link to="/Signup">Sign up for an account</Link></span></p>

                <Form onSubmit={login}>
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

                <div>
                    <GoogleSignIn />
                </div>
            </div>


        </>
    )
}

export default Login;
