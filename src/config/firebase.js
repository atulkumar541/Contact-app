// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGPZbxyk1wWD6MuPTCGK7n0hOSITybMK0",
  authDomain: "vite-contact-b8c38.firebaseapp.com",
  projectId: "vite-contact-b8c38",
  storageBucket: "vite-contact-b8c38.appspot.com",
  messagingSenderId: "98664781285",
  appId: "1:98664781285:web:b93e7a5b1a5f7d2a750b0c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
