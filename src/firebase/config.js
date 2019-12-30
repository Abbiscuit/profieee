import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATrbBDrfN-6dY6SP9-5AkBEqoFLXTlPiY",
  authDomain: "profieee.firebaseapp.com",
  databaseURL: "https://profieee.firebaseio.com",
  projectId: "profieee",
  storageBucket: "profieee.appspot.com",
  messagingSenderId: "742777626509",
  appId: "1:742777626509:web:391eb29c9cd50c574ca7c4",
  measurementId: "G-GNZEV1ZJ7X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Google SignIn
const provider = new firebase.auth.GoogleAuthProvider();

export function googleSignIn() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => {
      const errorMessage = err.message;
      console.error(errorMessage);
    });
}

export default firebase;
