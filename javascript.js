const form = document.querySelector("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("mail");
const phoneNumber = document.getElementById("phone_number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error";
    } else {
      showError();
    }
  });
  
  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showError();
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