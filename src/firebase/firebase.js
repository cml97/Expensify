import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB5Bmte_L_ABgifI7i0Todn41HXfGSrE_I",
  authDomain: "expensify-app-e5dad.firebaseapp.com",
  databaseURL: "https://expensify-app-e5dad.firebaseio.com",
  projectId: "expensify-app-e5dad",
  storageBucket: "expensify-app-e5dad.appspot.com",
  messagingSenderId: "872847996280"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default };