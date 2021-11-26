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
  imageLocation,
  address
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
        address: address,
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

export const saveEditedItem = async (details, userid, description) => {
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
        description: description,
      });
  } catch (err) {
    console.log(err);
  }
};

export const addItemToCart = async (
  userid,
  itemid,
  itemName,
  itemPrice,
  address,
  description,
  imgSrc
) => {
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
        address: address,
        description: description,
        imgSrc: imgSrc,
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
    userItemRef.forEach((product) => {
      console.log(product.data());
      itemid.push({
        id: product.data().itemId,
        price: product.data().price,
        name: product.data().name,
        userId: product.data().userId,
        productDocId: product.id,
        address: product.data().address,
        description: product.data().description,
        image: product.data().imgSrc,
      });
    });
    console.log(itemid);
    return itemid;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteItemFromCart = async (userid, itemid) => {
  try {
    // console.log("this is called " + itemid + " " + userid)
    console.log("this is a userid", userid);
    console.log("this is a doc id", itemid);
    let delRef = await db
      .collection("users")
      .doc(userid)
      .collection("cart")
      .doc(itemid)
      .delete()
      .then((doc) => console.log("ITEM DETELED", doc));
    console.log("this is delRef", delRef);
  } catch (err) {
    console.log("error from del cart", err.message);
    return err.message;
  }
};

export const addLabelToItem = async (userId, itemId) => {
  try {
    console.log("this is label", itemId);
    await db
      .collection("users")
      .doc(userId)
      .collection("items")
      .doc(itemId)
      .update({
        label: true,
      });
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const addItemToUserOrder = async (
  itemName,
  price,
  userId,
  address,
  description,
  image
) => {
  console.log(
    "this is called",
    itemName,
    price,
    userId,
    address,
    description,
    image
  );
  try {
    let fileName = getFileName();
    await db
      .collection("users")
      .doc(userId)
      .collection("orders")
      .add({
        name: itemName,
        price: price,
        userid: userId,
        address: address,
        description: description,
        image: image,
      })
      .then((doc) => console.log(doc));
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const getUserOrderItems = async (userId) => {
  try {
    let items = [];
    let itemsRef = await db
      .collection("users")
      .doc(userId)
      .collection("orders")
      .get();

    itemsRef.forEach((item) => items.push({ data: item.data(), id: item.id }));
    console.log("ITEMSREF", items);
    return items;
  } catch (err) {
    console.log(err);
  }
};

export const addItemToSoldItems = async (
  itemName,
  price,
  userId,
  address,
  description,
  image
) => {
  try {
    await db
      .collection("users")
      .doc(userId)
      .collection("sold")
      .add({
        name: itemName,
        price: price,
        userid: userId,
        address: address,
        description: description,
        image: image,
      });
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const getSoldItems = async (userId) => {
  try {
    let items = [];
    let itemsRef = await db
      .collection("users")
      .doc(userId)
      .collection("sold")
      .get();

    itemsRef.forEach((item) => items.push({ data: item.data(), id: item.id }));
    console.log("ITEMSREF", items);
    return items;
  } catch (err) {
    console.log(err);
  }
};

export const setShippingAddress = async (userId, shippingAddress) => {
  try {
    await db
      .collection("users")
      .doc(userId)
      .collection("address")
      .add({
        shippingAddress: shippingAddress,
      });

    console.log("SHIPPING SAVED SUCCESSFULLY", shippingAddress);
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const getShippingAddress = async (userId) => {
  try {
    let shippingAddress;
    let address = await db
      .collection("users")
      .doc(userId)
      .collection("address")
      .get();
    address.forEach((userAdd) => {
      shippingAddress = userAdd.data().shippingAddress;
    });
    console.log("address is", address);
    return shippingAddress;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
