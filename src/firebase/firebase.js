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
// database.ref('person').set({
//   name: 'Cemil Uzunhasan',
//   height: 187,
//   weight: 64,
//   age: 21,
//   stressLevel: 6,
//   job: {
//     title: 'Computer Engineer',
//     company: 'Bilgetech'
//   },
//   location: {
//     province: 'Istanbul',
//     country: 'Turkey'
//   }
// }).then(() => {
//   console.log("Save the value");
// }).catch((err) => console.log("Error var ", err));

const expenses = [{
  note: 'Car Rent',
  description: 'This is the last rent for car',
  amount: 3000,
  createdAt: moment().format("DD MM YYYY")
},
{
  note: 'House Rent',
  description: 'This is the last rent for house',
  amount: 4000,
  createdAt: moment().add(1, "day").format("DD MM YYYY")
},
{
  note: 'Cemil Rent',
  description: 'Rent for me',
  amount: 5000,
  createdAt: moment().add(2, "day").format("DD MM YYYY")
}];

database.ref("expenses").set(expenses);
database.ref().once('value').then(snapshot => console.log(snapshot.val()));

// const promise = new Promise((resolve, reject) => {
//   resolve('anan');
//   reject("Hata anan");
// });
//
// const req = promise
// .then((data) => console.log("Data isss", data))
// .catch((err) => console.log("Error is ", err))
