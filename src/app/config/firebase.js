import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8uR1PqlFwkuw3o1BbxZcTcstAmQaKhXQ',
  authDomain: 'reventscourse-1.firebaseapp.com',
  projectId: 'reventscourse-1',
  storageBucket: 'reventscourse-1.appspot.com',
  messagingSenderId: '196816197960',
  appId: '1:196816197960:web:69c7af8f327d401a903b7d',
};

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default getFirestore();
