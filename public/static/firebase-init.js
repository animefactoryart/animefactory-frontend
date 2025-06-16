// /static/firebase-init.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwV5ALTmOs3bSaHR0nR5nXV5TJ783bj9A",
  authDomain: "getani-ba76e.firebaseapp.com",
  projectId: "getani-ba76e",
  storageBucket: "getani-ba76e.appspot.com",
  messagingSenderId: "940208374805",
  appId: "1:940208374805:web:3491bd6a9663f8d2533a1c"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
