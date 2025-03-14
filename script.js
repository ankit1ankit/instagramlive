
function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "HIDE";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "SHOW";
    }
}

function checkPasswordInput() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.getElementById("togglePassword");

    if (passwordField.value.length > 0) {
        toggleButton.style.display = "block"; // Show button when user types
    } else {
        toggleButton.style.display = "none"; // Hide button if empty
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login functionality is not implemented yet!");
});
