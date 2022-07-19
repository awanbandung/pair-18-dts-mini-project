import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMBk67yfTEQ5l3pRcgYZaafaYDkiZNirc",
  authDomain: "pair-18-dts-mini-project.firebaseapp.com",
  projectId: "pair-18-dts-mini-project",
  storageBucket: "pair-18-dts-mini-project.appspot.com",
  messagingSenderId: "668080890684",
  appId: "1:668080890684:web:37401ba299815d14fcf439",
  // measurementId: "G-RBLTRJF3EQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register
const registerEmailPassword = async (email, password) => {
  try {
    const response = await registerWithEmailPassword(auth, email, password);

    console.log("User Login and registered check", response.user);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// SignIn use Async Await
const signInEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailPassword(auth, email, password);

    console.log("User login check", userCredential.user);
  } catch (err) {
    console.log(err);

    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Reset Pass
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sent");
  } catch (err) {
    console.log(err);
  }
};

// Signout
const signoutEmailPassword = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Export Function + Auth
export {
  auth,
  registerEmailPassword,
  signInEmailPassword,
  resetPassword,
  signoutEmailPassword,
};
