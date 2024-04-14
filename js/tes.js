const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closeLogin = document.getElementById('closeLogin');

loginButton.addEventListener('click', function() {
  loginPopup.style.display = 'flex';
});

closeLogin.addEventListener('click', function() {
  loginPopup.style.display = 'none';
});
