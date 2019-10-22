import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCGkoweGuEO9C4rZhHQ6dhf68kgiS65JEc",
    authDomain: "exhibition-f1f2d.firebaseapp.com",
    databaseURL: "https://exhibition-f1f2d.firebaseio.com",
    projectId: "exhibition-f1f2d",
    storageBucket: "exhibition-f1f2d.appspot.com",
    messagingSenderId: "426670944141",
    appId: "1:426670944141:web:991ec247137a483d7897c4",
    measurementId: "G-7EDN1LS2KQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;