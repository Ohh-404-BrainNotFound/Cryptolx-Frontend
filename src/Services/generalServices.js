import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "./init";
import "@firebase/storage";
import "@firebase/database";
import "firebase/firestore";
import { getImageUrl } from "../Services/utils";
import Axios from 'axios'

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

export const getEthPrice = async () => {
  try {
    const apiKey = "93f2837edcffacc83184766e2b90cb17eaf580204d0c669a6bb7971d62f57549"
    let resp = await Axios.get(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR&api_key=${apiKey}`,  {headers: {
      'authorization': `Apikey ${apiKey}`
    }})
    return resp.data.INR
  } catch(err) {
    console.log(err.message)
  }
}