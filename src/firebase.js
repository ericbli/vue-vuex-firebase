import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCatFFryKPqKCmW1ifJ0Q11-x1E0-BjJlo",
     authDomain: "store-64176.firebaseapp.com",
     databaseURL: "https://store-64176.firebaseio.com",
     projectId: "store-64176",
     storageBucket: "store-64176.appspot.com",
     messagingSenderId: "270910398519"
};
firebase.initializeApp(config);

export default {
  database: firebase.database()
}
