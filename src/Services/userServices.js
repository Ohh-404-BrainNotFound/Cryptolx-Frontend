import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from './init';
import { getFileName, handleUpload } from "./utils"
import '@firebase/storage';
import '@firebase/database'
import "firebase/firestore";

initializeApp();

const db = firebase.firestore();

export const addItem = async (itemName, price, description, id, imageLocation) => {
  try {
    let fileName = getFileName();
    if (imageLocation) {
      console.log(imageLocation);
      await handleUpload(imageLocation, fileName, "itemimage");
  } 
  await db.collection('users').doc(id).collection("items").add({ name: itemName, price: price, description: description, image: fileName }).then((doc) => console.log(doc));
  } catch(err) {
    console.log("this is error ",err);
  }
};

export const getUserAddedItems = async (userid) => {
    try {
        let items = [];
        let itemsRef = await db.collection("users").doc(userid).collection("items").get();
        itemsRef.forEach(item => items.push({ data:item.data(), id:item.id}));
        return items;

    } catch(err) {
        console.log(err);
    }
}


