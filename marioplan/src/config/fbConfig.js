import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const config = {
  apiKey: "AIzaSyDV1xw4Ys5LQnAbNAPwl3ykJoe61lL_dGk",
  authDomain: "netninja-7c72b.firebaseapp.com",
  projectId: "netninja-7c72b",
  storageBucket: "netninja-7c72b.appspot.com",
  messagingSenderId: "67810289217",
  appId: "1:67810289217:web:390f0a710b2502fa8608c0"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 