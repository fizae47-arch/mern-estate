// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d02b8.firebaseapp.com",
  projectId: "mern-estate-d02b8",
  storageBucket: "mern-estate-d02b8.firebasestorage.app",
  messagingSenderId: "78532500945",
  appId: "1:78532500945:web:d8d9d55b28037df74c14f0",
  measurementId: "G-J5FYMHM9T7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
