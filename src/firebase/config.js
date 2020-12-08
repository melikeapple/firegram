import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDkSZElUsBrjkMVvSfa-V5GED0BDAWsoFg",
    authDomain: "happy-firegram.firebaseapp.com",
    projectId: "happy-firegram",
    storageBucket: "happy-firegram.appspot.com",
    messagingSenderId: "846755007550",
    appId: "1:846755007550:web:84447b1625def153c1156f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};