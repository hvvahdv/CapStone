document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple verification: Check if username and password are not empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
        } else {
            // Navigate to the dashboard page
            window.location.href = 'dashboard.html';
        }
    });
});
