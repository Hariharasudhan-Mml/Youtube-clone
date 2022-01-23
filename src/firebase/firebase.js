// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, serverTimestamp} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlsuDNs0d2x1PS-ttDSYswkkjA7s876r0",
  authDomain: "clone-96266.firebaseapp.com",
  projectId: "clone-96266",
  storageBucket: "clone-96266.appspot.com",
  messagingSenderId: "441919978471",
  appId: "1:441919978471:web:967b0a22750b682047db42"
};


const app =initializeApp(firebaseConfig);
const db=getFirestore();
const auth=getAuth();
const provider=new GoogleAuthProvider();
const timestamp=serverTimestamp(); 

export {app,db,auth,provider,timestamp};