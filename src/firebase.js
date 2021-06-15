import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsDUqtq7MPqgggzdTIbxhpBPgjpw9cju0",
  authDomain: "walkie-talkie-25bcc.firebaseapp.com",
  projectId: "walkie-talkie-25bcc",
  storageBucket: "walkie-talkie-25bcc.appspot.com",
  messagingSenderId: "1033963328726",
  appId: "1:1033963328726:web:8330a066878a368557e577",
  measurementId: "G-RKH1KGJN0S",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
