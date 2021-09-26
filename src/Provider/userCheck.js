import * as React from 'react';
import { useState, useEffect, createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import initializeApp from '../Services/init';

initializeApp();
console.log('fireabse', firebase);
const auth = firebase.auth();

export const UserContext = createContext({
  info: { user: null, isLoading: true },
});

const UserProvider = (props) => {
  const [info, setInfo] = useState({ user: null, isLoading: true });
  useEffect(() => {
    auth.onAuthStateChanged(async (person) => {
      if (person) {
        console.log(person);
        const { displayName, email, uid } = person;
        setInfo({
          user: { displayName, email, uid },
          isLoading: false,
        });
      } else {
        setInfo({
          user: null,
          isLoading: false,
        });
      }
    });
  }, []);
  return (
    <UserContext.Provider value={info}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
