import * as firebase from "firebase";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyAM-yKn8W55b8rY8f7mLWNjZHdLN8QzEb8",
  authDomain: "tasktotaks.firebaseapp.com",
  databaseURL: "https://tasktotaks.firebaseio.com",
  projectId: "tasktotaks",
  storageBucket: "tasktotaks.appspot.com",
  messagingSenderId: "958403608922",
  appId: "1:958403608922:web:e154dc6b1a639634a4b363",
};
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const database = firebase.firestore();
