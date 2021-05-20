import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCXR2c6nSqBpyr6OFijfQ9dJPHE4VWRDZ4",
  authDomain: "login-and-push-notification.firebaseapp.com",
  projectId: "login-and-push-notification",
  storageBucket: "login-and-push-notification.appspot.com",
  messagingSenderId: "84083076850",
  appId: "1:84083076850:web:3e9febc1341d8f7b036a6b",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;
