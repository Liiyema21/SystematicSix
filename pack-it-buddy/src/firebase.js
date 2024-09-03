import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyCEIE0EYcH0yjGGSQCD6_f7j9HwZPT_RhY",
  authDomain: "packitbuddy-9f82f.firebaseapp.com",
  projectId: "packitbuddy-9f82f",
  storageBucket: "packitbuddy-9f82f.appspot.com",
  messagingSenderId: "968856216438",
  appId: "1:968856216438:web:13c8f852652114009a9057",
  measurementId: "G-3YYXGNF4XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);