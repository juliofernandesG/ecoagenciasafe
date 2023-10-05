// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBAvQkM9ikmuVNKaq-qw07FfRb7z2-vEqY",
  authDomain: "ecoagenciasafe.firebaseapp.com",
  projectId: "ecoagenciasafe",
  storageBucket: "ecoagenciasafe.appspot.com",
  messagingSenderId: "26147628791",
  appId: "1:26147628791:web:80ba175dbf1887f75d95f2",
  measurementId: "G-BH8HQ7HP7R"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Analytics
const analytics = getAnalytics(app);

// Inicializar Auth
const auth = getAuth(app);

// Inicializar Firestore
const db = getFirestore(app);

export { app, analytics, auth, db };
