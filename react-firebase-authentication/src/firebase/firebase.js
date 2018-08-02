import firebase from 'firebase/app';
import 'firebase/auth';

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCuk2PLtl74NTfQf02XSP3xXTVuvAPZAn0",
authDomain: "spacetopause.firebaseapp.com",
databaseURL: "https://spacetopause.firebaseio.com",
projectId: "spacetopause",
storageBucket: "",
messagingSenderId: "749489707712"
};
if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
const auth = firebase.auth();

export {
    auth,
};
