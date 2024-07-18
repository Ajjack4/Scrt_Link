// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDb8UUS2B-mgDenPL8DH1L8TKvXiESisuA",
  authDomain: "srct-link.firebaseapp.com",
  projectId: "srct-link",
  storageBucket: "srct-link.appspot.com",
  messagingSenderId: "238395094241",
  appId: "1:238395094241:web:8efa1de1b4341e540673a0",
  measurementId: "G-6XG4P1030R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, serverTimestamp };
