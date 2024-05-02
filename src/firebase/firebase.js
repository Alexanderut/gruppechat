


// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
//import { getStorage} from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp1uRdCSdccahJlPFmymJs4mDiQ14ipvE",
  authDomain: "gruppechat3101.firebaseapp.com",
  projectId: "gruppechat3101",
  storageBucket: "gruppechat3101.appspot.com",
  messagingSenderId: "984454340838",
  appId: "1:984454340838:web:cc830799d532034323db27",
  measurementId: "G-RRGCCR19FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app)