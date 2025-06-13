// /static/firebase-init.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0lJ8jUO77xWV_aLtzbENNcoXWnPiBxbg",
  authDomain: "ai-image-gen-157dc.firebaseapp.com",
  projectId: "ai-image-gen-157dc"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
