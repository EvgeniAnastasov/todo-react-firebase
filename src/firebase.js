// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOW2wscf9rxUgt__XChSSvLA1E4U74eLg",
  authDomain: "doto-app-c8ad1.firebaseapp.com",
  projectId: "doto-app-c8ad1",
  storageBucket: "doto-app-c8ad1.appspot.com",
  messagingSenderId: "471340838814",
  appId: "1:471340838814:web:86cfe2fb4b38c9f105308f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);