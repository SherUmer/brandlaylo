// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsPNFam5dZ_l1ALOwTMr-JynoHhGiHYrs",
    authDomain: "brandlaylo-3ca4e.firebaseapp.com",
    databaseURL: "https://brandlaylo-3ca4e-default-rtdb.firebaseio.com",
    projectId: "brandlaylo-3ca4e",
    storageBucket: "brandlaylo-3ca4e.appspot.com",
    messagingSenderId: "245286914116",
    appId: "1:245286914116:web:1338679626df9441ae5411",
    measurementId: "G-34C2M4LZHY"
};

// init firebase
initializeApp(firebaseConfig)

// init & export firestore service
export const db = getFirestore()
// generate & export auth object
export const auth = getAuth()
export const analytics = getAnalytics()
