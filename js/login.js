document.getElementById('submit-button').addEventListener('click', function () {

    // Get the email input 
    const inputEmail = document.getElementById('email-input').value;
    const userEmail = inputEmail;
    console.log(userEmail)

    // Get the Password input 
    const inputPassword = document.getElementById('password-input').value;
    const userPassword = inputPassword;
    console.log(userPassword)

    if (userEmail == 'shahadad@gmail.com' && userPassword == 'shahadad') {
        window.location.href = 'banking.html';
    }
})