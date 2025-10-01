// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "ai-travel-planner-b999b.firebaseapp.com",
  projectId: "ai-travel-planner-b999b",
  storageBucket: "ai-travel-planner-b999b.firebasestorage.app",
  messagingSenderId: "865796548192",
  appId: "1:865796548192:web:398630688d2632a3ce4505",
  measurementId: "G-S7WDEBPRG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);