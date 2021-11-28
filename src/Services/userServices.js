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
  address,
  sellar
) => {
  try {
    let fileName = getFileName();
    if (imageLocation) {

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
        // this is sellar's id
        userid: id,
        address: address,
        ownerId: id,
        info: sellar,
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
// this user id is of buyer
export const updateOrderTrack = async (
  productId,
  userId,
  status,
  soldProductId,
  sellarId
) => {
  try {
    
    let updateRef = await db
      .collection("users")
      .doc(userId)
      .collection("orders")
      .get();
      console.log("reached")
    updateRef.forEach(async (item) => {
   console.log(item)
      if (item.data().productId === productId) {
        //updating in buyer collection
        console.log("this is buyer", userId, item.id)
        await db
          .collection("users")
          .doc(userId)
          .collection("orders")
          .doc(item.id)
          .update({
            status: status,
          });
        //updating in sellar collection
       console.log("this is sellar id", sellarId, soldProductId)
        await db
          .collection("users")
          .doc(sellarId)
          .collection("sold")
          .doc(soldProductId)
          .update({
            status: status,
          });
        return;
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const addItemToCart = async (
  userid,
  itemid,
  itemName,
  itemPrice,
  address,
  description,
  imgSrc,
  sellarid,
  info
) => {
  try {
    await db.collection("users").doc(userid).collection("cart").add({
      itemId: itemid,
      name: itemName,
      price: itemPrice,
      userId: userid,
      address: address,
      description: description,
      imgSrc: imgSrc,
      sellarid: sellarid,
      info: info,
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
    
    userItemRef.forEach((product) => {
      
      itemid.push({
        id: product.data().itemId,
        price: product.data().price,
        name: product.data().name,
        userId: product.data().userId,
        productDocId: product.id,
        address: product.data().address,
        description: product.data().description,
        image: product.data().imgSrc,
        sellarId: product.data().sellarid,
        info: product.data().info,
      });
    });
   
    return itemid;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteItemFromCart = async (userid, itemid) => {
  try {
    let delRef = await db
      .collection("users")
      .doc(userid)
      .collection("cart")
      .doc(itemid)
      .delete()
  } catch (err) {
    console.log("error from del cart", err.message);
    return err.message;
  }
};

export const addLabelToItem = async (userId, itemId) => {
  try {
   
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
  // this is customer user id
  userId,
  address,
  description,
  image,
  productId,
  date,
  info
) => {
  console.log(
    "this is called",
    itemName,
    price,
    userId,
    address,
    description,
    image,
    productId
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
        productId: productId,
        date: date,
        info: info,
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
 
    return items;
  } catch (err) {
    console.log(err);
  }
};

export const addItemToSoldItems = async (
  itemName,
  price,
  // this is sellar user id
  userId,
  address,
  description,
  image,
  buyerId,
  productId,
  date,
  info,
  area
) => {
  try {
    await db.collection("users").doc(userId).collection("sold").add({
      name: itemName,
      price: price,
      userid: userId,
      address: address,
      description: description,
      image: image,
      buyerId: buyerId,
      productId: productId,
      date: date,
      info: info,
      deliver: area,
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
 
    return items;
  } catch (err) {
    console.log(err);
  }
};

export const setShippingAddress = async (userId, shippingAddress) => {
  try {

    await db.collection("users").doc(userId).collection("address").update({
      shippingAddress: shippingAddress,
    });

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
   
    return shippingAddress;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
