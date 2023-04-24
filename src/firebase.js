import { initializeApp } from 'firebase/app';
import {getAuth } from 'firebase/auth';

const firebaseConfig =({
    apiKey: "AIzaSyDIBvUuJWTCExHsd4WcMbWGL-mjCvi-Y-A",
    authDomain: "vendyla-1266c.firebaseapp.com",
    projectId: "vendyla-1266c",
    storageBucket: "vendyla-1266c.appspot.com",
    messagingSenderId: "607802886951",
    appId: "1:607802886951:web:ef02379e346562290ef702"
})

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth }

