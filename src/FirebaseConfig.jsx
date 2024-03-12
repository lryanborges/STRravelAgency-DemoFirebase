import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp ({
    apiKey: "AIzaSyArKTbau_OS090sQ9T20FkQbCyzoPhSHSo",
    authDomain: "demofirebase-str.firebaseapp.com",
    projectId: "demofirebase-str",
    storageBucket: "demofirebase-str.appspot.com",
    messagingSenderId: "324146414088",
    appId: "1:324146414088:web:5079eed960996644a607bd",
    measurementId: "G-RRWE2NEFM1"
  });

  export {firebaseApp, getAnalytics};