import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "YOURAPIKEY",
    authDomain: "ecommerce-49d37.firebaseapp.com",
    projectId: "ecommerce-49d37",
    storageBucket: "ecommerce-49d37.appspot.com",
    messagingSenderId: "719172882975",
    appId: "1:719172882975:web:8f917867b2a95e3c8b3b2a",
    measurementId: "G-THYJTY7NZR"
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp

// https://console.firebase.google.com/u/0/project/ecommerce-49d37/overview