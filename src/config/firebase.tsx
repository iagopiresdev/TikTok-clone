import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFg2QHzovBr1ULa7hYhxBv4Pk30cxVBQQ",
  authDomain: "tiktokclone-cec3f.firebaseapp.com",
  projectId: "tiktokclone-cec3f",
  storageBucket: "tiktokclone-cec3f.appspot.com",
  messagingSenderId: "188706651787",
  appId: "1:188706651787:web:f052e0d640ced7758cde8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;