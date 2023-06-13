// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAyreUstk4VhM-hTxgaoKpeu4e9-kXRKeg",
  authDomain: "netflix-553ba.firebaseapp.com",
  projectId: "netflix-553ba",
  storageBucket: "netflix-553ba.appspot.com",
  messagingSenderId: "480470248652",
  appId: "1:480470248652:web:91b16fb0d9631106272669",
  measurementId: "G-ZJXH74PRPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);