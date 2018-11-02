import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    
};
firebase.initializeApp(config);

const database = firebase.database();


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
