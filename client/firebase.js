// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-98d10.firebaseapp.com",
  projectId: "genwebai-98d10",
  storageBucket: "genwebai-98d10.firebasestorage.app",
  messagingSenderId: "186821130879",
  appId: "1:186821130879:web:ee228e3ab3cfd3b26e5d4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //This connects your React app to your Firebase project

const auth = getAuth(app); //This initializes the Firebase Authentication service, allowing you to manage user authentication in your app

const provider = new GoogleAuthProvider(); //This creates a new instance of the GoogleAuthProvider, which is used to enable Google Sign-In authentication in your app

export { auth, provider };
