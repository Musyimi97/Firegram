import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDf_uHVHOKigaDEnyMNsKlBjlCF7OmdBGc",
    authDomain: "firegram-5b9aa.firebaseapp.com",
    databaseURL: "https://firegram-5b9aa.firebaseio.com",
    projectId: "firegram-5b9aa",
    storageBucket: "firegram-5b9aa.appspot.com",
    messagingSenderId: "925336444242",
    appId: "1:925336444242:web:45cc4a6f0082c4512f6e8b",
    measurementId: "G-CEWMZZF0PT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore}; 