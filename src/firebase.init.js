// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCgoYehjbeOjoTohLqqLj_yeYPtS_q6Pk",
  authDomain: "simple-react-auth-19801.firebaseapp.com",
  projectId: "simple-react-auth-19801",
  storageBucket: "simple-react-auth-19801.firebasestorage.app",
  messagingSenderId: "987044450399",
  appId: "1:987044450399:web:38541b07dad4760a2c0bea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);