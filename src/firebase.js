import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBdc_LrXFbWgB30s22MAy00cGa3t5aVsvQ",
  authDomain: "netflix-clone-a7b1a.firebaseapp.com",
  projectId: "netflix-clone-a7b1a",
  storageBucket: "netflix-clone-a7b1a.firebasestorage.app",
  messagingSenderId: "809316972606",
  appId: "1:809316972606:web:84fad67924a0b64a39f96f",
  measurementId: "G-8G1Q6F7Y9Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Renamed from sigup to signup
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authprovider: "local",
      email,
    });
    toast.success("Signup successful!");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
  } catch (error) {
    console.log( "error",error);
    
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout }; // ✅ now exports "signup"
