import { initializeApp } from "firebase/app";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";



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

// Sekarang di sini kita akan membuat seluruh fungsi yang digunakan untuk melakukan Register / Login

// Inisialisasi Firebase dan menggunakan Authentcation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
  await createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    const navigate = useNavigate();
    navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;

    if (errorCode === "auth/wrong-password") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "wrong password!",
      });
    }
    if (errorCode === "auth/user-not-found") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "user not found!",
      });
    }
  });
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const loginDenganEmailDanPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "user not found!",
        });
      }
    });
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
  // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
  await sendPasswordResetEmail(auth, email)
    .then((res) => console.log(res))
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

// Fungsi untuk sign out
const keluarDariApps = async () => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
  await signOut(auth)
    .then((res) => {
      console.log("success logout", res);
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

// Export seluruh fungsi yang dibuat + auth
export {
  auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  keluarDariApps,
};
