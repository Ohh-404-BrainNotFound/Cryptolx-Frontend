import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "./init";
import "@firebase/storage";
import "@firebase/database";
import "firebase/firestore";

initializeApp();

export const handleUpload = async (image, fileName, folderName) => {
  await firebase
    .storage()
    .ref(`${folderName}/${fileName}`)
    .put(image);
};

export const getFileName = () => {
  let fileName =
    String(Date.now()) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10);
  return fileName;
};

export const getImageUrl = async (folderName, fileName) => {
  let url = await firebase
    .storage()
    .ref(folderName)
    .child(fileName)
    .getDownloadURL();
  return url;
};

export const getTotalPrice = (items) => {
  let amt = 0;
  items.map((item, index) => {
    amt += item.price;
  });
  return amt;
};
