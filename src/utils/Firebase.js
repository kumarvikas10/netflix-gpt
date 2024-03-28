// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWVj49xQpOz3CBB9OEtjOTCtcaZTx_lyg",
  authDomain: "netflixgpt-8dbaa.firebaseapp.com",
  projectId: "netflixgpt-8dbaa",
  storageBucket: "netflixgpt-8dbaa.appspot.com",
  messagingSenderId: "918862031077",
  appId: "1:918862031077:web:5e0a177cf1b3fcbee04c0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();


