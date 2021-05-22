import firebase from "firebase";
import "firebase/messaging";

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

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("user token: ", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
