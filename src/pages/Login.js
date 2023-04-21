import React, { useState } from "react";
import TopNav from "../components/Navbar/Navbar";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const [inputEmail, setEmail] = useState();
    const [inputPassword, setPassword] = useState();

    // https://firebase.google.com/docs/auth/web/start#sign_in_existing_users
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, inputEmail, inputPassword)
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
            <h1>Login</h1>

            <form onSubmit={login}>
                <div className="mb-3">
                    <input type="email" class="form-control" id ="email"
                        placeholder = "Enter your email address"
                        value={inputEmail} onChange = {(e)=> setEmail(e.target.value)}></input>

                </div>
                <div className="mb-3">
                    <input type="password" class="form-control" id="password" 
                        placeholder = "Enter your password"
                        value={inputPassword} onChange = {(e)=> setPassword(e.target.value)}></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>

        </div>


        </>


    )
}

export default Login;
