import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAh4cEF3-B7Ss6_iIFjM3_BxScNdXQG0Ss",
        authDomain: "feedback-form-2e215.firebaseapp.com",
        projectId: "feedback-form-2e215",
        storageBucket: "feedback-form-2e215.appspot.com",
        messagingSenderId: "923364707301",
        appId: "1:923364707301:web:36a8d5c3e821ca243abd0c"
});

var db = firebaseApp.firestore();

export { db };