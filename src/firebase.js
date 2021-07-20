import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAxUR0EWrI0CcdCQ0oekJ9QAKzCjTl_mcs",
  authDomain: "clone-3f9a2.firebaseapp.com",
  projectId: "clone-3f9a2",
  storageBucket: "clone-3f9a2.appspot.com",
  messagingSenderId: "476957948932",
  appId: "1:476957948932:web:f8093f6cd0aeae70c5c951"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };