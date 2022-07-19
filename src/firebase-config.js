import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA04FoZWsqiw5T4fYqX2LcqyMr_MCKW1WU",
  authDomain: "recipe-selman-app.firebaseapp.com",
  projectId: "recipe-selman-app",
  storageBucket: "recipe-selman-app.appspot.com",
  messagingSenderId: "428327995454",
  appId: "1:428327995454:web:b8f428c78874824eec296f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)