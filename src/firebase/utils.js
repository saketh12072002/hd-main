import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWKyVix4EHVe-jtpAj2iA8UxdZ4P855NQ",
    authDomain: "ecommerce-64135.firebaseapp.com",
    databaseURL: "https://commerce-64135.firebaseio.com",
    projectId: "ecommerce-64135",
    storageBucket: "ecommerce-64135.appspot.com",
    messagingSenderId: "202108701691",
    appId: "1:202108701691:web:0c97c9125c83db2ad3595e",
    measurementId: "G-39T71M428E"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();  

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt:'select_account'});


export const handleUserProfile = async ({userAuth, additionalData}) =>{
  if(!userAuth) return;
  const {uid} = userAuth;

  const userRef = firestore.doc(`user/${uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];

    try {
        await userRef.set({
          displayName,
          email,
          createdDate:timestamp,
          userRoles,
          ...additionalData
        });
    } catch(err) {
      console.log(err);    
    }
  }
  return userRef;
}

export const getCurrentUser = () => {
  return new Promise((resolve,reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject );
  })
}