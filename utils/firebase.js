import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOjxY_RUCYGVnh3uF7YromVu8_L2mbQCw",
  authDomain: "poll-maker-d82ae.firebaseapp.com",
  projectId: "poll-maker-d82ae",
  storageBucket: "poll-maker-d82ae.appspot.com",
  messagingSenderId: "428446679503",
  appId: "1:428446679503:web:066d295c8924de89d612ba",
  measurementId: "G-QTQFPPCQZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
