
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3Fz-iqnKMNY6hsnCVbaI1ydpl_pSvgz4",
  authDomain: "fir-authentication-839ea.firebaseapp.com",
  projectId: "fir-authentication-839ea",
  storageBucket: "fir-authentication-839ea.firebasestorage.app",
  messagingSenderId: "885871158869",
  appId: "1:885871158869:web:580cf02b1cc8653227d6dc",
  measurementId: "G-NDJB23B06H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log("Return data", auth);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
