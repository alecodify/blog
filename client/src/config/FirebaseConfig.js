// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLMDJ6xi9M34VIYvfpz4SQA-eqU08xPuo",
  authDomain: "blog-188c8.firebaseapp.com",
  projectId: "blog-188c8",
  storageBucket: "blog-188c8.firebasestorage.app",
  messagingSenderId: "1022114154622",
  appId: "1:1022114154622:web:23bbf1e3e8f4251efd302f",
  measurementId: "G-QCPVDQR6C3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);