import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from './init';
import '@firebase/storage';
import '@firebase/database'
import "firebase/firestore";
import { getImageUrl } from "../Services/utils"

initializeApp();

const db = firebase.firestore();

export const getAllItems = async () => {
    try {
        let items = [];
        let creatorsId = [];
        console.log(" this is called ");
        let creatorsRef = await db.collection("users").get();
        console.log("this si creator ref ", creatorsRef);
        creatorsRef.forEach(async creator => {
          creatorsId.push(creator.id);
        //   console.log("this is id ",creator.data());
        })

        // console.log(creatorsRef.id);

        console.log("this is array ", creatorsId);
        for (let i = 0; i < creatorsId.length; i++) {
          let id = creatorsId[i];
          // console.log("ID IS ",id)
          let dbRef = await db.collection("users").doc(id).collection("items").get();
          dbRef.forEach(async (item) => {
            // console.log(course.id);
            // console.log(course.data());
            // let imageUrl = await getImageUrl("itemimage", item.data().image); 
            items.push({ data: item.data(), id: item.id });
          })
        }
        return items;
    
      } catch (err) {
        console.log(err);
      }
}


