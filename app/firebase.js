import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaQJwb9tWHYovo0pD7OjadggvnJmMdyPo",
    authDomain: "slizepuzzle.firebaseapp.com",
    projectId: "slizepuzzle",
    storageBucket: "slizepuzzle.firebasestorage.app",
    messagingSenderId: "198695438041",
    appId: "1:198695438041:web:fe3d1b1404f2c507f4e0c8",
    measurementId: "G-CWXM243MRZ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) getAnalytics(app);
  });
}

export { db };
