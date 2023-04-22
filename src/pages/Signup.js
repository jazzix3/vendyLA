import React, { useState } from "react";
import TopNav from "../components/Navbar";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    
    const [inputEmail, setEmail] = useState();
    const [inputPassword, setPassword] = useState();
    const navigate = useNavigate();

    // https://firebase.google.com/docs/auth/web/start
    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
        .then((userCredential) => {
            navigate("/Login?message= New account created successfully! ");
        })
        .catch((error) => {
            console.log(error)
        });
    }

    
    return (
        <>  
        <TopNav />

        <div className="container" id="main-content">
            <h1>Sign Up</h1>
            <p> Already have an account?<span> <Link to="/Login">Log in</Link></span></p>

            <form onSubmit={signup}>
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

export default Signup;
