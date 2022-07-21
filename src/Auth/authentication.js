// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAohg4JhtAvxWp-QAcPC2u60JiEhJ2-Huk",
    authDomain: "dts-project-25f4c.firebaseapp.com",
    projectId: "dts-project-25f4c",
    storageBucket: "dts-project-25f4c.appspot.com",
    messagingSenderId: "304725521836",
    appId: "1:304725521836:web:5d82df3b008d2e8abcf609",
    measurementId: "G-XMG5BZTHWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const register = async (email, password) => {
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
          text: "Wrong Password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found!",
        });
      }
    });
};

// Fungsi untuk Login
const login = async (email, password) => {
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
          text: "Wrong Password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found!",
        });
      }
    });
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
    // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
    // try {
    //     await sendPasswordResetEmail(auth, email);

    //     console.log("Password reset sudah dikirimkan");
    // } catch (err) {
    //     console.log(err);
    // }

    await sendPasswordResetEmail(auth, email)
    .then((res) => console.log(res))
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: errorMessage,
      });
    });
};

// Fungsi untuk sign out
const logout = async () => {
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

// Export function
export {
    auth,
    register,
    login,
    resetPassword,
    logout,
};
