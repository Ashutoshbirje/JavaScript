document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Regex patterns
  const nameRegex = /^[A-Za-z ]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  let valid = true;

  // Name validation
  if (!nameRegex.test(name)) {
    nameError.textContent = "Enter a valid name (letters only, min 2 chars)";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password must be 8+ chars, include uppercase, lowercase, and number";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    // Reset form or do further actions
    document.getElementById("registerForm").reset();
  }
  
});
