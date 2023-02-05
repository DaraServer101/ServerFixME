import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBv5R0xtNpvrJMSkF3l0zDGBG3o_pTQq4g",
    authDomain: "fixme-database.firebaseapp.com",
    databaseURL: "https://fixme-database-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fixme-database",
    storageBucket: "fixme-database.appspot.com",
    messagingSenderId: "386109259117",
    appId: "1:386109259117:web:e440ce48df9e906e526e64",
    measurementId: "G-0R4QPE3RQ5"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth();
export const db = getFirestore(app)