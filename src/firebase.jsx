
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQOnVqUc0ia_37BRMqlMIpZ3vvcG_PrWo",
  authDomain: "login-ac74c.firebaseapp.com",
  projectId: "login-ac74c",
  storageBucket: "login-ac74c.firebasestorage.app",
  messagingSenderId: "599714952123",
  appId: "1:599714952123:web:d2a8dfd369f98e7cd90a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);

export default app;