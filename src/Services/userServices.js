import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "./init";
import { getFileName, handleUpload } from "./utils";
import "@firebase/storage";
import "@firebase/database";
import "firebase/firestore";

initializeApp();

const db = firebase.firestore();

export const addItem = async (
  itemName,
  price,
  description,
  id,
  imageLocation
) => {
  try {
    let fileName = getFileName();
    if (imageLocation) {
      console.log(imageLocation);
      await handleUpload(imageLocation, fileName, "itemimage");
    }
    await db
      .collection("users")
      .doc(id)
      .collection("items")
      .add({
        name: itemName,
        price: price,
        description: description,
        image: fileName,
        userid: id,
      })
      .then((doc) => console.log(doc));
  } catch (err) {
    console.log("this is error ", err);
  }
};

export const getUserAddedItems = async (userid) => {
  try {
    let items = [];
    let itemsRef = await db
      .collection("users")
      .doc(userid)
      .collection("items")
      .get();
    itemsRef.forEach((item) => items.push({ data: item.data(), id: item.id }));
    return items;
  } catch (err) {
    console.log(err);
  }
};

export const deleteItem = async (userid, itemid) => {
  try {
    console.log("this is called " + itemid + " " + userid);
    await db
      .collection("users")
      .doc(userid)
      .collection("items")
      .doc(itemid)
      .delete();
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

export const saveEditedItem = async (details, userid) => {
  try {
    console.log(userid + " ");
    console.log(details);
    await db
      .collection("users")
      .doc(userid)
      .collection("items")
      .doc(details.id)
      .update({
        name: details.name,
        price: details.price,
        description: details.description,
      });
  } catch (err) {
    console.log(err);
  }
};

export const addItemToCart = async (userid, itemid, itemName, itemPrice) => {
  try {
    await db
      .collection("users")
      .doc(userid)
      .collection("cart")
      .add({
        itemId: itemid,
        name: itemName,
        price: itemPrice,
        userId: userid,
      });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const currentCartItems = async (userid) => {
  try {
    let itemid = [];
    let userItemRef = await db
      .collection("users")
      .doc(userid)
      .collection("cart")
      .get();
    console.log("CART ITEMS", userItemRef);
    userItemRef.forEach((product) =>
      itemid.push({
        id: product.data().itemId,
        price: product.data().price,
        name: product.data().name,
        userId: product.data().userId,
      })
    );
    console.log(itemid);
    return itemid;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteItemFromCart = async (userid, itemid) => {
  try {
    console.log("this is called " + itemid + " " + userid);
    await db
      .collection("users")
      .doc(userid)
      .collection("cart")
      .doc(itemid)
      .delete();
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
