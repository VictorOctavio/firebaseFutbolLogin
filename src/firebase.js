import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC1Gbs1309qVQHTkcVp0Pxkc5tcv1lyzTc",
  authDomain: "football-4bf78.firebaseapp.com",
  databaseURL: "https://football-4bf78.firebaseio.com",
  projectId: "football-4bf78",
  storageBucket: "football-4bf78.appspot.com",
  messagingSenderId: "947501794435",
  appId: "1:947501794435:web:040912c7d9069afcdf47b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export {db, auth, storage}