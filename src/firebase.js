
import firebase from 'firebase'

const firebaseConfig =  {
    apiKey: "AIzaSyDfmj931MRMDoSGQ8eD2KrhfrxJ8STCPdc",
    authDomain: "robinhood-clone-cc58e.firebaseapp.com",
    projectId: "robinhood-clone-cc58e",
    storageBucket: "robinhood-clone-cc58e.appspot.com",
    messagingSenderId: "589546773411",
    appId: "1:589546773411:web:b342442d61fe8e4d98d816"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };