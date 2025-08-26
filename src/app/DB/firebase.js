// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore!

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ5AfBSs3fiFsecIpXSlOJAHfTrIXtsJ0",
  authDomain: "react-notesapp-74dbc.firebaseapp.com",
  projectId: "react-notesapp-74dbc",
  storageBucket: "react-notesapp-74dbc.firebasestorage.app",
  messagingSenderId: "984860086840",
  appId: "1:984860086840:web:470af90c66709b90c28ccd",
  measurementId: "G-RT93TE7KTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Get a reference to your Firestore database!