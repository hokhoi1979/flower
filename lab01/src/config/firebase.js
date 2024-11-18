
import { initializeApp } from "firebase/app";
import  { getStorage } from "firebase/storage";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBYr1hGYFJcjq1QIb4EvbVv5olbCsUGVo8",
    authDomain: "flower-4efcb.firebaseapp.com",
    projectId: "flower-4efcb",
    storageBucket: "flower-4efcb.appspot.com",
    messagingSenderId: "840130325830",
    appId: "1:840130325830:web:e1567a5c8c03ee0aa88947",
    measurementId: "G-4DZ5DYE241"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const googleProvider=new GoogleAuthProvider();
const auth = getAuth(app);
export {storage, googleProvider,auth};


