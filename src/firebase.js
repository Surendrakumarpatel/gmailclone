import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCxklo4ehV_I5NwZWRkDReg46I-3Rpo5A",
  authDomain: "clone-6dd4f.firebaseapp.com",
  projectId: "clone-6dd4f",
  storageBucket: "clone-6dd4f.appspot.com",
  messagingSenderId: "781876226205",
  appId: "1:781876226205:web:0d4463c344d70c0994cc74",
  measurementId: "G-ZT3MWT0RX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();