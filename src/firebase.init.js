// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIUpUJpRo3EJnjUcaFq8hcD23EhMIC4pI",
  authDomain: "red-onion-cc618.firebaseapp.com",
  projectId: "red-onion-cc618",
  storageBucket: "red-onion-cc618.appspot.com",
  messagingSenderId: "513634140922",
  appId: "1:513634140922:web:3b2fa8c456c6ce8565bf43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;