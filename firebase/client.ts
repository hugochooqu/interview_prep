// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmVCA0rMwqHz-039ri_ckp45eP7Hzb1mo",
  authDomain: "interview-prep-4ef77.firebaseapp.com",
  projectId: "interview-prep-4ef77",
  storageBucket: "interview-prep-4ef77.firebasestorage.app",
  messagingSenderId: "361982338489",
  appId: "1:361982338489:web:20aa86372da48bb59b0268",
  measurementId: "G-FS0VTMKS68"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
