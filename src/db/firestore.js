import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAqHPqRSzZ2FxfdWts1eutFRLP55Hutl0o",
  
    authDomain: "ranimovus-3ed24.firebaseapp.com",
  
    projectId: "ranimovus-3ed24",
  
    storageBucket: "ranimovus-3ed24.appspot.com",
  
    messagingSenderId: "954316220652",
  
    appId: "1:954316220652:web:22357c7f0d0f24753cddc9",
  
    measurementId: "G-M4Y5P9DJMV"
  
  };
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig)

// firebase.analytics();

export default firebase