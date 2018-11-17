import { firebase, googleProvider } from '../firebase/firebase';
import { userInfo } from 'os';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider);
  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}

export const login = (user) => {
  return {
    type: 'LOGIN',
    payload: user.uid
  }
}