// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6QyDGpuqPxiSI_dxBfniYsl3WrFXci6E",
  authDomain: "kanji-quiz-b42e1.firebaseapp.com",
  projectId: "kanji-quiz-b42e1",
  storageBucket: "kanji-quiz-b42e1.firebasestorage.app",
  messagingSenderId: "657302157695",
  appId: "1:657302157695:web:973e0d98359d629e19824a",
  measurementId: "G-C1E2HDTGN9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Tambahkan ini

export { auth }; // Export auth agar bisa dipakai di auth.js
