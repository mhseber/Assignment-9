// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb8tLEZvGjmx7UTPYaBOsI1C7GZQ-Td28",
    authDomain: "eco-travel-72b99.firebaseapp.com",
    projectId: "eco-travel-72b99",
    storageBucket: "eco-travel-72b99.firebasestorage.app",
    messagingSenderId: "44228846520",
    appId: "1:44228846520:web:a076e41eb1043fbe2ba54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
