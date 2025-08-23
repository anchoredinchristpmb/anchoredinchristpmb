// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXMxwqTf-0eAGbSRsOIx-JbcplfC5EbTw",
  authDomain: "anchoredinchrist-bd5ff.firebaseapp.com",
  projectId: "anchoredinchrist-bd5ff",
  storageBucket: "anchoredinchrist-bd5ff.firebasestorage.app",
  messagingSenderId: "864836241943",
  appId: "1:864836241943:web:4c334bf6aa90b6afacaa52",
  measurementId: "G-5Q76SJLWXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (optional - can be used later)
export const analytics = getAnalytics(app);

export default app;
