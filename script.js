const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const toggleBtn = document.getElementById('toggle-form-btn');

let showingLogin = true; 

function toggleForms() {
  if (showingLogin) {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    toggleBtn.textContent = 'Switch to Log In';  
  } else {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    toggleBtn.textContent = 'Switch to Sign Up'; 
  }
  showingLogin = !showingLogin; 
}
toggleBtn.addEventListener('click', toggleForms);

loginForm.classList.add('active');
toggleBtn.textContent = 'Switch to Sign Up';
