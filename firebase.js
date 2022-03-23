// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEVYMZDl8Y4DOXArkVV4s3t_hum6_0r0",
  authDomain: "mytodoapp-941eb.firebaseapp.com",
  projectId: "mytodoapp-941eb",
  storageBucket: "mytodoapp-941eb.appspot.com",
  messagingSenderId: "78950051968",
  appId: "1:78950051968:web:0c5cbcf1c4c9e42119f665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);