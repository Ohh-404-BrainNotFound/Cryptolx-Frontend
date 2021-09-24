import dotenv from "dotenv";
import "firebase/auth";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "@firebase/database";
import "firebase/compat/firestore";
dotenv.config();

export const initializeApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
    });
  }
};