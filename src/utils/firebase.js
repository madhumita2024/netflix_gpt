// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOSHmgAi1vGdjJvX3No4tXHwgj7_scB8w",
  authDomain: "netflix-gpt-d46ba.firebaseapp.com",
  projectId: "netflix-gpt-d46ba",
  storageBucket: "netflix-gpt-d46ba.appspot.com",
  messagingSenderId: "10730268841",
  appId: "1:10730268841:web:deb23ff1076b5c052421b8",
  measurementId: "G-BD4RD207NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();

