import dotenv from 'dotenv';
import 'firebase/auth';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import '@firebase/database';
import 'firebase/compat/firestore';
dotenv.config();

export const initializeApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
  apiKey: "AIzaSyBszLMoO_V7ry9jakwyOmky74hf173Sq_k",
  authDomain: "crypto-76324.firebaseapp.com",
  projectId: "crypto-76324",
  storageBucket: "crypto-76324.appspot.com",
  messagingSenderId: "900368573218",
  appId: "1:900368573218:web:aa810884e45e47abcc3b7b"
    });
  }
};
