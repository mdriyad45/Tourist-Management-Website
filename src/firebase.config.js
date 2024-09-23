// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzZgcMD5n4z2eBbmFHTb8RQU_YC1uJfu0",
  authDomain: "tourism-management-websi-beb8a.firebaseapp.com",
  projectId: "tourism-management-websi-beb8a",
  storageBucket: "tourism-management-websi-beb8a.appspot.com",
  messagingSenderId: "665228044072",
  appId: "1:665228044072:web:063f5a5bc3babdcf33521d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);