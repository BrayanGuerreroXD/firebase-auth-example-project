// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-Rf7vVivnJRo5Ck48IH07ISfWOsrHPCE",
    authDomain: "fir-app-auth-83130.firebaseapp.com",
    projectId: "fir-app-auth-83130",
    storageBucket: "fir-app-auth-83130.appspot.com",
    messagingSenderId: "683891787332",
    appId: "1:683891787332:web:209e5e9a241cdbdc17de11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);