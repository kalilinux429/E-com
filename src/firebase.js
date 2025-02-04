import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyrFTNgeIs-0bLc_Yv7_Aw92sppxasrOw",
  authDomain: "econ-ass.firebaseapp.com",
  projectId: "econ-ass",
  storageBucket: "econ-ass.firebasestorage.app",
  messagingSenderId: "569090510641",
  appId: "1:569090510641:web:6954eb74e5ae380af9ea10",
  measurementId: "G-3XXRT5DBX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
