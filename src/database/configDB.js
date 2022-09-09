import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDsPRrZYCPf-_I5pcqhDA6uKbxReK61Plk",
    authDomain: "webpage-13ce7.firebaseapp.com",
    projectId: "webpage-13ce7",
    storageBucket: "webpage-13ce7.appspot.com",
    messagingSenderId: "466356265916",
    appId: "1:466356265916:web:2909d29e11d58c6a4001b9",
    measurementId: "G-BH7R8B5PG6"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
