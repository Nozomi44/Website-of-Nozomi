// auth.js
import { auth } from './firebase-config.js';

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ========== Google Login ==========
document.getElementById("google-login").addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    localStorage.setItem("isGuest", "false");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Google Login failed: " + error.message);
  }
});

// ========== Facebook Login ==========
document.getElementById("facebook-login").addEventListener("click", async () => {
  const provider = new FacebookAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    localStorage.setItem("isGuest", "false");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Facebook Login failed: " + error.message);
  }
});

// ========== Phone Login ==========
document.getElementById("phone-login").addEventListener("click", () => {
  const phoneNumber = prompt("Masukkan No HP (+628xxx):");
  if (!phoneNumber) return;

  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'phone-login', {
    size: 'invisible',
    callback: () => {}
  });

  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      const code = prompt("Masukkan kode OTP:");
      return confirmationResult.confirm(code);
    })
    .then(() => {
      localStorage.setItem("isGuest", "false");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Phone login failed: " + error.message);
    });
});

// ========== Guest Login ==========
document.getElementById("guest-login").addEventListener("click", () => {
  localStorage.setItem("isGuest", "true");
  window.location.href = "dashboard.html";
});
