import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD9nqz0tx1TORapCX9QFixx7MAs7Fp65gc",
  authDomain: "fantasybasketball-32e80.firebaseapp.com",
  projectId: "fantasybasketball-32e80",
  storageBucket: "fantasybasketball-32e80.appspot.com",
  messagingSenderId: "700583779178",
  appId: "1:700583779178:web:51dbe732fefbaa51e46313",
  measurementId: "G-NNF8X2D6GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth }