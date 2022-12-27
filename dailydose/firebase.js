// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu6tbZ0pXiOjLiECEFjYQ7snH0FYoEOJ4",
  authDomain: "dailydose-news.firebaseapp.com",
  projectId: "dailydose-news",
  storageBucket: "dailydose-news.appspot.com",
  messagingSenderId: "980738268162",
  appId: "1:980738268162:web:4cc5a93575a7f315e45b1b",
  measurementId: "G-90K00V8015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);