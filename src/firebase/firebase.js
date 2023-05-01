// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaVk6XKhM0f6DZ87U08fdohVRbkRiapYk",
  authDomain: "the-dragon-news-client-bda29.firebaseapp.com",
  projectId: "the-dragon-news-client-bda29",
  storageBucket: "the-dragon-news-client-bda29.appspot.com",
  messagingSenderId: "629172356012",
  appId: "1:629172356012:web:37ec1a4e73308c2927b009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;