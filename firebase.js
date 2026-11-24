// Ganti placeholder dengan konfigurasi aplikasi Web dari Firebase Console.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAdzy66kWZwqM5NO1Sp6BqopBqHi1TbvfA",
  authDomain: "jastipbynath-tracking.firebaseapp.com",
  projectId: "jastipbynath-tracking",
  storageBucket: "jastipbynath-tracking.firebasestorage.app",
  messagingSenderId: "932747050566",
  appId: "1:932747050566:web:740b68d723c2afa5b25447",
  measurementId: "G-M91CSB25TD"
};
const app=initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
