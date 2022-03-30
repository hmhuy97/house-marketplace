// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfxg4GvYK8Em6M-MTy-eGHSuPvduPZeZk",
  authDomain: "house-marketplace-app-f98a9.firebaseapp.com",
  projectId: "house-marketplace-app-f98a9",
  storageBucket: "house-marketplace-app-f98a9.appspot.com",
  messagingSenderId: "429821451140",
  appId: "1:429821451140:web:40cd6c423a80dce0db9bd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
