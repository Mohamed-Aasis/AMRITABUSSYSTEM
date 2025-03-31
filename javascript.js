document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.querySelector('button');

    function handleLoginClick(event) {
        event.preventDefault(); 

        var rollNumberInput = document.querySelector('input[type="text"]');
        var passwordInput = document.querySelector('input[type="password"]');

        var rollNumber = rollNumberInput.value.trim();
        var password = passwordInput.value.trim();

        if (!isValidRollNumber(rollNumber)) {
            alert('Please enter a valid roll number in the format CH.SC.U4XXX00000.');
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            return;
        }

        // Simulating a successful login for demonstration purposes
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'home.html';
    }

    function isValidRollNumber(rollNumber) {
        var rollNumberPattern = /^CH\.SC\.U4[A-Z]{3}\d{5}$/;
        return rollNumberPattern.test(rollNumber);
    }

    loginButton.addEventListener('click', handleLoginClick);
});
