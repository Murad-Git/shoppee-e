// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: `AIzaSyDFrR1q4fWUl9AdjaAgRPA-eiMp4iO-n8s`,
  authDomain: `e-shoppee-366720.firebaseapp.com`,
  databaseURL: `https://e-shoppee-366720-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId: `e-shoppee-366720`,
  storageBucket: `e-shoppee-366720.appspot.com`,
  messagingSenderId: `817216068743`,
  appId: `1:817216068743:web:54a9566c5d695f6858ec22`,
});

const db = getFirestore(firebaseApp);
export default db;
// if request.time < timestamp.date(2022, 12, 2);
