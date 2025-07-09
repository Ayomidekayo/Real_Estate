// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-aef39.firebaseapp.com",
  projectId: "real-estate-aef39",
  storageBucket: "real-estate-aef39.firebasestorage.app",
  messagingSenderId: "1079584276323",
  appId: "1:1079584276323:web:33c23c39dcb09138791d56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);