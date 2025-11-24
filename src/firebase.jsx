// src/firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBiJFjrVG0O-p93hbSWRPihq67Lt1iM2vs",
  authDomain: "fashion-81fdf.firebaseapp.com",
  projectId: "fashion-81fdf",
  storageBucket: "fashion-81fdf.appspot.com",
  messagingSenderId: "398980690074",
  appId: "1:398980690074:web:644cba97b55b4a1872ef23",
  measurementId: "G-X25NJRHVPG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
