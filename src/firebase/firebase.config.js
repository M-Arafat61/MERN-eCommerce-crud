import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBePrgmafENydvyLtI0SSLN4gnx4YsbDmE",
  authDomain: "elite-emporium-ass10.firebaseapp.com",
  projectId: "elite-emporium-ass10",
  storageBucket: "elite-emporium-ass10.appspot.com",
  messagingSenderId: "18021207835",
  appId: "1:18021207835:web:0b320d74bd38ff426ecdbe",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
