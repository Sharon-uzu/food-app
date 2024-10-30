import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCWppfS5Dh01-nkR7eEfwr4QyVyB1dGPRs",
    authDomain: "foodapp-23.firebaseapp.com",
    databaseURL: "https://foodapp-23-default-rtdb.firebaseio.com",
    projectId: "foodapp-23",
    storageBucket: "foodapp-23.appspot.com",
    messagingSenderId: "100431229184",
    appId: "1:100431229184:web:9366f12a755ada5a61c3e5"
  };
  

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage};