import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAmmKlrQ_5V1_clySWiRFagaUb98odsNTc",
  authDomain: "image-gallery-b5f9e.firebaseapp.com",
  projectId: "image-gallery-b5f9e",
  storageBucket: "image-gallery-b5f9e.appspot.com",
  messagingSenderId: "492457633123",
  appId: "1:492457633123:web:b43c5b8f729cf042afdf56",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
