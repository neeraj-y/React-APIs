import Rebase from 're-base';
import firebase from 'firebase';

console.log('Env ==> ', process.env.NODE_ENV, ':' , process.env.REACT_APP_FIREBASE_DATABASE);

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };  