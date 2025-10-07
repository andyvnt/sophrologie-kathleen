import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvskH9IAntRkujshsZqjMucWKdiQamARg",
  authDomain: "sophro-kath.firebaseapp.com",
  projectId: "sophro-kath",
  storageBucket: "sophro-kath.appspot.com",
  messagingSenderId: "728288035587",
  appId: "1:728288035587:web:dc0995719f4377699f1f36"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.firebase = {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc
};