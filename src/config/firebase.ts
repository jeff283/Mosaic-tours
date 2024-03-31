// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC49gWK21_UjOFPiktuQQbpvPbumYfbg28",
  authDomain: "fire-apps-group.firebaseapp.com",
  projectId: "fire-apps-group",
  storageBucket: "fire-apps-group.appspot.com",
  messagingSenderId: "210160794888",
  appId: "1:210160794888:web:04e89c6346cca3a8ef00bd",
  measurementId: "G-X2Y3T3KSQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
