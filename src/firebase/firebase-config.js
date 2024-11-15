// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import for Firebase Authentication
import { getFirestore } from "firebase/firestore";  // Import for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATxIbhHmHzFvxKCEMQ5979xxtrWbbqAo",
  authDomain: "loyalty-portal-5630e.firebaseapp.com",
  projectId: "loyalty-portal-5630e",
  storageBucket: "loyalty-portal-5630e.firebasestorage.app",
  messagingSenderId: "1080511187669",
  appId: "1:1080511187669:web:1bee924bd354db691c305c",
  measurementId: "G-9SXYN9SD26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);  // Analytics (optional, based on your needs)
const auth = getAuth(app);  // Firebase Authentication
const db = getFirestore(app);  // Firestore Database

// Export the initialized services so you can use them in other parts of your app
export { auth, db };




