import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhHGl-vdKYF5L68ONm7I-bdIZdhDUMjq0",
  authDomain: "game-store-709de.firebaseapp.com",
  projectId: "game-store-709de",
  storageBucket: "game-store-709de.appspot.com",
  messagingSenderId: "692281741226",
  appId: "1:692281741226:web:c5ed8a975441f6198be5d3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
