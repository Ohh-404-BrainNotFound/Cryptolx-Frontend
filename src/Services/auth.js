import dotenv from "dotenv";
import firebase from "firebase/app";
import "@firebase/database";
import "firebase/firestore";
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

initializeApp();
const db = firebase.firestore();

import firebase from "firebase/app";
import { initializeApp } from '../Utils';
import "firebase/auth";
import '@firebase/database'
import "firebase/firestore";

initializeApp();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
var user;
const db = firebase.firestore();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      // var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // The signed-in user info.
      if(result.additionalUserInfo.isNewUser){
        user = result.user;
        const {email,uid,displayName} = user;
        db.collection("consumer").doc(uid).set({
          displayName,
          email
        })
      }
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      console.log(errorMessage);
    });
};

export const isUser = async(id)=>{
  const userRef = await db.collection("user").doc(id).get();
  return userRef.exists;
}

export const signOut = () => {
  initializeApp();
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Sign out successfully");
      return true;
    })
    .catch((error) => {
      console.log("Error Occured While signing out!!");
      console.log(error.message);
      return false;
    });
};
