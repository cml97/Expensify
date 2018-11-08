import * as firebase from 'firebase';
import moment from 'moment';

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

export { firebase, database as default };