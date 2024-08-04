// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth";  // Import Firebase Authentication
import { getAnalytics, isSupported } from "firebase/analytics"; // Import Analytics

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyD0RWluw6KHiizHNslUIOYtYbgLMdlvWbM",
  authDomain: "pantryapp1.firebaseapp.com",
  projectId: "pantryapp1",
  storageBucket: "pantryapp1.appspot.com",
  messagingSenderId: "684003903694",
  appId: "1:684003903694:web:ddda6941183af5e086689f",
  measurementId: "G-8XLX5F6QSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app); // Renamed to 'db' for consistency
const auth = getAuth(app);  

// Initialize Analytics if supported
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
    console.log('Firebase Analytics initialized');
  } else {
    console.warn('Firebase Analytics is not supported in this environment.');
  }
});

// Export the initialized services
export { app, db, analytics, auth };  
