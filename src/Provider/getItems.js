import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from '../Services/init';

initializeApp();
const db = firebase.firestore();

export const getItems = async () => {
  try {
    const snapshots = await db.collection('users').get();
    const documents = await snapshots.docs.map((doc) => {
      doc.data();
    });

    return documents;
    // console.log(documents);
  } catch (e) {
    console.log(`Got an error ${e}`);
    return 'error';
  }
};
