// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCjr09Xss6hOQiqgUsAsC0sZojPa-fEy1E",
  authDomain: "react-crud-faef2.firebaseapp.com",
  projectId: "react-crud-faef2",
  storageBucket: "react-crud-faef2.appspot.com",
  messagingSenderId: "864360147867",
  appId: "1:864360147867:web:ff905e40c2901d53090f3e",
  measurementId: "G-SJKFB7MZWN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)