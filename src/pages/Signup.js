import React, { useState } from "react";
import TopNav from "../components/Navbar/Navbar";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    
    const [inputEmail, setEmail] = useState();
    const [inputPassword, setPassword] = useState();

    // https://firebase.google.com/docs/auth/web/start
    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    
    return (
        <>  
        <TopNav />

        <div className="container">
            <h1>Sign Up</h1>
            <p> Already have an account?<span> <a href="/Login">Log in</a></span></p>

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
