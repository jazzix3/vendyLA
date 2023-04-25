import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TopNav from "../components/Navbar";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate, Link } from "react-router-dom";

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

    // simple sign in using gmail
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/Dashboard")
            })
            .catch((error) => {
                console.log(error)
            });
    };



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

                {/* button that handles the sign in  */}
                <div className="mt-4">
                    <Button variant="outline-secondary" onClick={googleSignIn}>
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="me-2" alt="Google Logo" />
                        Sign in with your Google account
                    </Button>

                </div>
            </div>


        </>
    )
}

export default Login;
