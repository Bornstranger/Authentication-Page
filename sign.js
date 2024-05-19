

function togglePasswordVisibility() {
    const passwordField = document.getElementsByClassName('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = '🙈'; // Change icon to 'eye with a slash' or 'monkey hiding eyes' emoji
    } else {
        passwordField.type = 'password';
        toggleIcon.textContent = '👁️'; // Change icon back to 'eye' emoji
    }
}

document.getElementById('create').addEventListener('input', function(event) {
    event.preventDefault();
  
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;
    
    if (password !== rePassword) {
        alert('Passwords do not match!');
        return;
    }
})
