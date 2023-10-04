document.addEventListener('DOMContentLoaded', function () {
    const loginNowButton = document.getElementById('login-now-button');

    loginNowButton.addEventListener('click', function () {
        // You can add your signup logic here if needed

        // Simple verification: Check if email, password, and confirm password are not empty
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
        const confirmPassword = document.querySelector('input[placeholder="Confirm password"]').value;

        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all the fields.');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            // Navigate to the dashboard page
            window.location.href = 'dashboard.html';
        }
    });
});
