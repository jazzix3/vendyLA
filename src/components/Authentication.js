import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Nav } from "react-bootstrap";


const Authentication = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const authListener = onAuthStateChanged(auth, (user) =>{
            if (user) {
                setAuthUser(user)
            }
            else {
                setAuthUser(null)
            }
        })

        return () => {
            authListener();
        }
    }, [])

    const logOutListener = () => {
        signOut(auth).then(()=> {
            console.log("Signed out successfully")
        }).catch(error => console.log(error))
        }

        return (
            <>
              {authUser === null ? (
                <>
                  <Nav className="ms-auto" style={{ display: "flex", alignItems: "center" }}>
                    <a className="btn btn-primary" href="/login" role="button">Log In</a>
                  </Nav>
                </>
              ) : (
                <>
                  <Nav className="ms-auto" style={{ display: "flex", alignItems: "center" }}>
                    <span>Logged in as {authUser.email}</span>
                    <a className="btn btn-primary" href="/" role="button" 
                        style={{marginLeft: "15px"}}  onClick={logOutListener}>Log Out</a>
                  </Nav>
                </>
              )}
            </>
          );


    


}

export default Authentication;