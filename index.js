// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { html, render } from "lit-html";

const firebaseConfig = {
  apiKey: "AIzaSyB5UX2SHZ4Mzc1XvF5UgDvTGd4WLwBOsQc",
  authDomain: "job-search-website-vz.firebaseapp.com",
  databaseURL: "https://job-search-website-vz-default-rtdb.firebaseio.com",
  projectId: "job-search-website-vz",
  storageBucket: "job-search-website-vz.appspot.com",
  messagingSenderId: "885937389036",
  appId: "1:885937389036:web:4321a4b35e152aab6554c9",
  measurementId: "G-4NSDHCC0QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);