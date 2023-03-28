// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7He5rWxzt6JbWX4XpvBfRMgePiEdrAOE',
  authDomain: 'realtor-react-4b44f.firebaseapp.com',
  projectId: 'realtor-react-4b44f',
  storageBucket: 'realtor-react-4b44f.appspot.com',
  messagingSenderId: '39691043066',
  appId: '1:39691043066:web:9ba00fae46c42c382c4943',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
