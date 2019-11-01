import firebase from 'firebase/app';
require("firebase/auth");
require("firebase/firestore");
const config = {
  apiKey: "AIzaSyCCfOsBo680vdASdSidOVXrmfezeo6f9dE",
  authDomain: "save-her-8bacf.firebaseapp.com",
  databaseURL: "https://save-her-8bacf.firebaseio.com",
  projectId: "save-her-8bacf",
  storageBucket: "save-her-8bacf.appspot.com",
  messagingSenderId: "153329858155",
  appId: "1:153329858155:web:b9af1355da2797737a232e",
  measurementId: "G-Q0R4T60YSN"
}

const fire =  firebase.initializeApp(config);
export default fire;