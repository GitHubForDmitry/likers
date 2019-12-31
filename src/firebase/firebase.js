import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATZzo0gyJCy7N-28D9_WFMBoQK6xCf_1M",
    authDomain: "likers-dc941.firebaseapp.com",
    databaseURL: "https://likers-dc941.firebaseio.com",
    projectId: "likers-dc941",
    storageBucket: "likers-dc941.appspot.com",
    messagingSenderId: "1070365828398",
    appId: "1:1070365828398:web:3b9a8bdad8e1c2689906bf",
    measurementId: "G-FFMQV569JQ"
};

// Initialize Firebase
const  initialize = firebase.initializeApp(firebaseConfig);
export default initialize;