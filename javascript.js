const form = document.querySelector("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("mail");
const phoneNumber = document.getElementById("phone_number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

const emailError = document.querySelector("#mail + span.error");
const passwordError = document.querySelector("#password + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error";
    } else {
      showError();
    }
  });

  password.addEventListener("input", event => {
    if (password.validity.valid) {
      passwordError.textContent = "";
      passwordError.className = "error";
    } else {
      showPasswordError();
    }
  });

  confirmPassword.addEventListener("input", event => {
    if (confirmPassword.value === password.value) {
      passwordError.textContent = "";
      passwordError.className = "error";
    } else {
      showConfirmPasswordError();
    }
  });
  
  form.addEventListener("submit", (event) => {
    if (!email.validity.valid || !password.validity.valid || password.value !== confirmPassword.value) {
      showError();
      showPasswordError();
      showConfirmPasswordError();
      event.preventDefault();
    }
  });
  
  function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
  
    emailError.className = "error active";
  }

  function showPasswordError() {
    if (password.validity.valueMissing) {
      passwordError.textContent = "You need to enter a password.";
    } else if (password.validity.tooShort) {
      passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    } else if (password.value == password.value.toUpperCase()) {
      passwordError.textContent = "Password should contain at least one small letter.";
    } else if (password.value == password.value.toLowerCase()) {
      passwordError.textContent = "Password should contain at least one capital letter.";
    } else if (password.value.match(/\d/) === null) {
      passwordError.textContent = "Password should contain at least one number.";
    } 
  }

  function showConfirmPasswordError() {
    if (password.value !== confirmPassword.value) {
      passwordError.textContent = "Entered passwords are different."
    }

    passwordError.className = "error active";
  }