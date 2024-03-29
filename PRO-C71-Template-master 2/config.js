import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCiMZpwzMqYmPIwZFPBlYjab-O2iOv300E",
    authDomain: "ride-e260f.firebaseapp.com",
    projectId: "ride-e260f",
    storageBucket: "ride-e260f.appspot.com",
    messagingSenderId: "725092975538",
    appId: "1:725092975538:web:3e182f51a17b425b511aab"
  };
  
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
