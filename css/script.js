const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Succes outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email validation

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Check length of the input

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Check Phone number

function checkPhone(phone, min, max) {
  if (phone.value.length < min) {
    showError(phone, `Phone must be of ${min} characters`);
  } else if (phone.value.length > max) {
    showError(phone, `Phone must not exceed ${max} characters`);
  } else {
    showSuccess(phone);
  }
}

// Check Password match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords does not match");
  }
}

// Add listeners

form.addEventListener("submit", function (e) {
  // console.log('submit')

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email not valid");
  } else {
    showSuccess(email);
  }
  if (phone.value === "") {
    showError(phone, "phone number is required");
  } else {
    showSuccess(phone);
  }
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "Your password does not match");
  } else {
    showSuccess(password2);
  }
  e.preventDefault();

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPhone(phone, 10, 10);

  checkPasswordsMatch(password, password2);
});
