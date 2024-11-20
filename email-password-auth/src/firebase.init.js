// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// DO NOT SHARE CONFIG IN PUBLIC

const firebaseConfig = {
  apiKey: "AIzaSyAwtLEYJNKr0s4prjUBNjezdmD_LfTg4jE",
  authDomain: "email-password-auth-70ed7.firebaseapp.com",
  projectId: "email-password-auth-70ed7",
  storageBucket: "email-password-auth-70ed7.firebasestorage.app",
  messagingSenderId: "24722698945",
  appId: "1:24722698945:web:46639fa1975b431b395a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);