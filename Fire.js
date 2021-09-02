import * as firebase from 'react-native-firebase';
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcHWVlrjx2WWsa3_iZUmSjjrt09s5r4lM",
  authDomain: "another-chat-app-edf28.firebaseapp.com",
  projectId: "another-chat-app-edf28",
  storageBucket: "another-chat-app-edf28.appspot.com",
  messagingSenderId: "667162461066",
  appId: "1:667162461066:web:004f4fd07805e2664a7e73",
  measurementId: "G-5G4SMBV9D6"
};

let app;

if( firebase.apps.length === 0 ) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }
