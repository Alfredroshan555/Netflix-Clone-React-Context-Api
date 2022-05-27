// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpnF0m8fwF0VhrZLnDiNDMD7WD0V-qx-Y",
  authDomain: "netflix-clone-react-45faa.firebaseapp.com",
  projectId: "netflix-clone-react-45faa",
  storageBucket: "netflix-clone-react-45faa.appspot.com",
  messagingSenderId: "1073521183444",
  appId: "1:1073521183444:web:5b82ada03f0695710e8941"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)