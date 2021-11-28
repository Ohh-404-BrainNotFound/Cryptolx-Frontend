import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "./init";
import "@firebase/storage";
import "@firebase/database";
import "firebase/firestore";
import { getImageUrl } from "../Services/utils";

initializeApp();

const db = firebase.firestore();

export const getAllItems = async () => {
  try {
    let items = [];
    let creatorsId = [];

    let creatorsRef = await db.collection("users").get();

    creatorsRef.forEach(async (creator) => {
      creatorsId.push(creator.id);
    });

    for (let i = 0; i < creatorsId.length; i++) {
      let id = creatorsId[i];

      let dbRef = await db
        .collection("users")
        .doc(id)
        .collection("items")
        .get();
      dbRef.forEach(async (item) => {
        items.push({ data: item.data(), id: item.id });
      
      });
    }

    
    return items;
  } catch (err) {
    console.log(err);
  }
};
