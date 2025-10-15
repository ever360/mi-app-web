import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbmehjJWvvVyCR4z9Okswki9vzujOpL3I",
  authDomain: "kapital-ptv.firebaseapp.com",
  projectId: "kapital-ptv",
  storageBucket: "kapital-ptv.firebasestorage.app",
  messagingSenderId: "189823184230",
  appId: "1:189823184230:web:c2d0642a20d3ad8d6eeca7",
  measurementId: "G-H22HK94MXZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

