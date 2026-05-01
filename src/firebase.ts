import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAd9U6LoC8g2oYnXGm9jo5ESGHz2TVJuxY",
  authDomain: "pro-bowl-app.firebaseapp.com",
  projectId: "pro-bowl-app",
  storageBucket: "pro-bowl-app.firebasestorage.app",
  messagingSenderId: "903312062399",
  appId: "1:903312062399:web:57c89e6972cc9c5c32d30a",
  measurementId: "G-E837Z2GC7C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); 