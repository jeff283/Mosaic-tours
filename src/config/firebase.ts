// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBe15VsHrafHLgalcbbCusyv3jrx5pnfXo",
  authDomain: "roomio-hmis.firebaseapp.com",
  projectId: "roomio-hmis",
  storageBucket: "roomio-hmis.appspot.com",
  messagingSenderId: "527493028321",
  appId: "1:527493028321:web:2a3a508d6f22e758901aa0",
  measurementId: "G-PD7346281F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db =  getFirestore(app);
