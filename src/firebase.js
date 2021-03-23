import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyAa2kXE8-eIgameFydI2Du48Fl3eQSbQ-I",
  authDomain: "cdem-react-b7425.firebaseapp.com",
  projectId: "cdem-react-b7425",
  storageBucket: "cdem-react-b7425.appspot.com",
  messagingSenderId: "286643345861",
  appId: "1:286643345861:web:76be1542f9d5ffe96a53ac"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
