import "firebase/auth";
import { initializeApp } from "./init";
import firebase from "firebase/app";
import "@firebase/database";
import "firebase/firestore";

initializeApp();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
var user;
const db = firebase.firestore();

const saveUser = async ({ email, uid, displayName }) => {
  await db.collection("users").doc(uid).set({
    displayName,
    email,
  });
};

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      // var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // The signed-in user info.
      if (result.additionalUserInfo.isNewUser) {
        user = result.user;
        saveUser(user);
      }

      return true;
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

export const isUser = async (id) => {
  const userRef = await db.collection("user").doc(id).get();
  return userRef.exists;
};

export const signOut = () => {
  initializeApp();
  firebase
    .auth()
    .signOut()
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error.message);
      return false;
    });
};
