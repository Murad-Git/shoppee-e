// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getDatabase } from 'firebase/database';

const firebaseApp = initializeApp({
  apiKey: `AIzaSyD83KQfy-LxJ5pvJZwQAnHbodzKahAwsZ0`,
  authDomain: `e-shoppee-a2938.firebaseapp.com`,
  projectId: `e-shoppee-a2938`,
  storageBucket: `e-shoppee-a2938.appspot.com`,
  messagingSenderId: `940595107938`,
  appId: `1:940595107938:web:3439a406551f096d9e993b`,
});

// Init FB
const db = getFirestore(firebaseApp);
export default db;
