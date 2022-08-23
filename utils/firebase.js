import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCOjxY_RUCYGVnh3uF7YromVu8_L2mbQCw",
//   authDomain: "poll-maker-d82ae.firebaseapp.com",
//   projectId: "poll-maker-d82ae",
//   storageBucket: "poll-maker-d82ae.appspot.com",
//   messagingSenderId: "428446679503",
//   appId: "1:428446679503:web:066d295c8924de89d612ba",
//   measurementId: "G-QTQFPPCQZ2",
// };

const firebaseConfig = {
  apiKey: "AIzaSyB2Z3ZoQ49-hFgcPozx2Sa64_B7pzAfvlc",
  authDomain: "avocado-4ab6e.firebaseapp.com",
  projectId: "avocado-4ab6e",
  storageBucket: "avocado-4ab6e.appspot.com",
  messagingSenderId: "200047402339",
  appId: "1:200047402339:web:21f4a56c22e012d3410756",
  measurementId: "G-XXNDB26S1D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
