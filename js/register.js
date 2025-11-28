const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    // toggle password visibility
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    
    // toggle aqua blue icon
    togglePassword.classList.toggle('active');
});
