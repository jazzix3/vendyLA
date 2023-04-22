import React, { useState } from "react";
import TopNav from "../components/Navbar";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

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

    
    return (
        <>  
        <TopNav />

        <div className="container" id="main-content">
            {message && <div className="alert alert-success">{message}</div>}
            <h1>Log In</h1>
            <p> New User?<span> <a href="/Signup">Sign up for an account</a></span></p>

            <form onSubmit={login}>
                <div className="mb-3">
                    <input type="email" className="form-control" id ="email"
                        placeholder = "Enter your email address"
                        value={inputEmail} onChange = {(e)=> setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" 
                        placeholder = "Enter your password"
                        value={inputPassword} onChange = {(e)=> setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        </>
    )
}

export default Login;
