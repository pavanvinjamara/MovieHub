import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAq52yIc92e6FBN2s3KR6RghsnOHsZmyEA",
  authDomain: "moviehub-dc91f.firebaseapp.com",
  projectId: "moviehub-dc91f",
  storageBucket: "moviehub-dc91f.appspot.com",
  messagingSenderId: "5427276594",
  appId: "1:5427276594:web:520a280180ee54c18a052b",
  measurementId: "G-LB5FYMPPFH"
  };

const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = firebase.firestore();
export default firebase;