import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routes/AppRouter';
import * as firebase from 'firebase';
import { history } from './routes/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log("Logged in");
    history.push("/dashboard");
  }
  else {
    history.push("/");
  }
})