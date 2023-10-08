// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtTbRP8TQfsoveAg-bZyPLyxLKajYY7BI",
    authDomain: "training-workshop-4a301.firebaseapp.com",
    projectId: "training-workshop-4a301",
    storageBucket: "training-workshop-4a301.appspot.com",
    messagingSenderId: "945160202288",
    appId: "1:945160202288:web:f6e4195a7b5c8d46eee5f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;