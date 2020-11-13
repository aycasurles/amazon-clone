import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt0c-n5jhCznoWbv9I4_5UkPuA-_7JkhY",
  authDomain: "clone-89e84.firebaseapp.com",
  databaseURL: "https://clone-89e84.firebaseio.com",
  projectId: "clone-89e84",
  storageBucket: "clone-89e84.appspot.com",
  messagingSenderId: "41420579424",
  appId: "1:41420579424:web:8c0c2ae13c3c196080d905",
  measurementId: "G-J6P5CEFDPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };