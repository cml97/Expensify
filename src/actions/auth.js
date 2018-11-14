import { firebase, googleProvider } from '../firebase/firebase';

export const startLogin = (user) => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider).then((user) => {
      if(user) {
        console.log("Logged in");
      }
      else {
        console.log("There is a problem with login");
      }
    })
  }
}