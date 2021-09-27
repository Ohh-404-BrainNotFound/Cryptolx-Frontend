import * as React from 'react';
import { useState, useEffect, createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from '../Services/init';

initializeApp();

const addItem = async (details) => {
  const db = firebase.firestore();

  db.collection('items').add(details);
};
export default addItem;
