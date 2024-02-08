import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbD8mQ1005mTY321Wc7ZTbKYWhGVUJxxY",
  authDomain: "team-9079e.firebaseapp.com",
  projectId: "team-9079e",
  storageBucket: "team-9079e.appspot.com",
  messagingSenderId: "176485315645",
  appId: "1:176485315645:web:674fd9b8beeb5b8cf0a654",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
