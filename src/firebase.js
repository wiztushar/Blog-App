import {initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN4ODZC5jDwRwfl3cLvgjR08IqrMLM54I",
  authDomain: "blog-4cebc.firebaseapp.com",
  projectId: "blog-4cebc",
  storageBucket: "blog-4cebc.appspot.com",
  messagingSenderId: "1065363719130",
  appId: "1:1065363719130:web:042868ed80a3eb8fa5b6e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth = getAuth(app);
export const provider=new GoogleAuthProvider();