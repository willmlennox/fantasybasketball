import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTS21pRfiupsR85Lplykc4i9mm3a598tk",
  authDomain: "fantasybasketballwebsite.firebaseapp.com",
  projectId: "fantasybasketballwebsite",
  storageBucket: "fantasybasketballwebsite.appspot.com",
  messagingSenderId: "181536986312",
  appId: "1:181536986312:web:9d84c71877f2f185a781fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const auth = getAuth(app);

export { auth, db }