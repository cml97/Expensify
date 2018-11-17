import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routes/AppRouter';
import * as firebase from 'firebase';
import { history } from './routes/AppRouter';
import { startLogin, login } from './actions/auth';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    history.push("/dashboard");
    store.dispatch(startLogin());
    store.dispatch(login(user));
  }
  else {
    history.push("/");
  }
})