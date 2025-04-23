import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4rlpP2YRv636AZXfwt5L6MJWNe6IWFo0",
  authDomain: "budget-tracker-ccc73.firebaseapp.com",
  databaseURL: "https://budget-tracker-ccc73-default-rtdb.firebaseio.com",
  projectId: "budget-tracker-ccc73",
  storageBucket: "budget-tracker-ccc73.firebasestorage.app",
  messagingSenderId: "218529118920",
  appId: "1:218529118920:web:cd4d9bcea7697e0dd283fd",
  measurementId: "G-M5ENZ2WZXD",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
