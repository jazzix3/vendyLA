import { initializeApp } from 'firebase/app';
import {getAuth } from 'firebase/auth';

const firebaseConfig =({
    apiKey: "AIzaSyDI03QBupHJvGDZCOalEGCNVtVjDRhoEAs",
    authDomain: "vendyla-384123.firebaseapp.com",
    projectId: "vendyla-384123",
    storageBucket: "vendyla-384123.appspot.com",
    messagingSenderId: "671191756543",
    appId: "1:671191756543:web:5523891079d16e40a266ca"
})

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth }

