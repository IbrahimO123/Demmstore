// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDWMVzgTKvV4bQ6w_VIdfxoa1QJEvL94gk",
  authDomain: "demmstore-e9b90.firebaseapp.com",
  projectId: "demmstore-e9b90",
  storageBucket: "demmstore-e9b90.appspot.com",
  messagingSenderId: "1057203014552",
  appId: "1:1057203014552:web:00b96989f7cdf9f2bff9ed",
  measurementId: "G-G3QGP6934Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Google auth provider
const provider = new GoogleAuthProvider();

//get auth
const auth = getAuth();

//Analysis
const analytics = getAnalytics(app);

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
};
