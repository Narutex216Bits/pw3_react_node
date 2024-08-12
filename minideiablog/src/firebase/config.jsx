
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDeSZQzpw0SMwWzqU6d-3AWyEeo9DZHRRs",
  authDomain: "miniblog-mmk.firebaseapp.com",
  projectId: "miniblog-mmk",
  storageBucket: "miniblog-mmk.appspot.com",
  messagingSenderId: "736037118249",
  appId: "1:736037118249:web:c04ff8f7cc736ce93d9738",
  measurementId: "G-6GHX9GWFRC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);