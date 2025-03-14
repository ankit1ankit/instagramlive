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

// Function to store username and password
function storeLoginData(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);
        alert("Login data saved successfully!");
    } else {
        alert("Please enter both username and password.");
    }
}

// Attach event listener to form submission
document.querySelector("form").addEventListener("submit", storeLoginData);
