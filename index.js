// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, addDoc, getDocs } from "firebase/firestore";
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
const userCollection = collection(db, "user");

document.getElementById("login-btn").addEventListener("click", async () => {
    let usernameInput = document.getElementById("username").value;
    console.log(typeof(usernameInput));

    try {
        const userQuery = query(userCollection, where("username", "==", usernameInput));
        const userQueryResult = await getDocs(userQuery);
        const username = userQueryResult.docs[0].data()["username"];
        const jobs = userQueryResult.docs[0].data()["jobs"];
        document.getElementById("loggedin-username").textContent = "Welcome! " + username;
    } catch (e) {
        console.log("error on login/sign up:", e);
    }
    console.log(usernameInput);
})

document.getElementById("add-job-btn").addEventListener("click", () => {
    console.log(111);
})