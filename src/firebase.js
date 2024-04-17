import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPgR6nnT_P-da0TK6HECL6rw_pLtD-yxs",
  authDomain: "refaccionaria-87fda.firebaseapp.com",
  projectId: "refaccionaria-87fda",
  storageBucket: "refaccionaria-87fda.appspot.com",
  messagingSenderId: "21214671235",
  appId: "1:21214671235:web:34e0b6dec8bd09305306b6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };