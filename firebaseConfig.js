import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeIO8Stsa7zPrOWDF_0Tm3wRAtKMlyCI8",
  authDomain: "g-learning-network.firebaseapp.com",
  projectId: "g-learning-network",
  storageBucket: "g-learning-network.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "817412859467",
  appId: "1:817412859467:web:b60dfc3f25225f001b0fce",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
