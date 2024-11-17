// Do not config on the client side (now temporary I do for learning)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtabOgcSj1GI6U-7JVdjSwpjiPRYX0A0A",
  authDomain: "simple-firebase-dc772.firebaseapp.com",
  projectId: "simple-firebase-dc772",
  storageBucket: "simple-firebase-dc772.firebasestorage.app",
  messagingSenderId: "681673785432",
  appId: "1:681673785432:web:db1e8830b0b7f1946e4a2d",
  measurementId: "G-J7L0Q0R36Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;