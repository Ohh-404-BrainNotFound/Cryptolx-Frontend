import * as React from 'react';
import { useState, useEffect, createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from '../Services/init';

initializeApp();

const db = firebase.firestore();

export const addItem = async (itemName, price, id) => {
  try {
  await db.collection('users').doc(id).collection("items").add({ name: itemName, price: price }).then((doc) => console.log(doc));
  } catch(err) {
    console.log("this is error ",err);
  }
};
