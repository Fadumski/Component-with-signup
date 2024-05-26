// using the id to get my button element
const claimButton = document.getElementById("button");
// get all the fields in here
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const revealPassword = document.querySelector(".reveal");

const form_error_text = document.querySelectorAll(".form_error_text");
const error_circles = document.querySelectorAll(".error_circle");

// using class to get my button element

// add event listeners to the claim button
claimButton.addEventListener("click", (e) => {
  // prevent auto refresh
  e.preventDefault();
  // get all the value entered by the user
  const fName = firstName.value;
  const lName = lastName.value;
  const eMail = email.value;
  const pwd = password.value;

  // check if all the fields are empty
  if (fName === "") {
    firstName.classList.add("error");
    form_error_text[0].classList.remove("hide");
    error_circles[0].classList.remove("hide");
  } else {
    firstName.classList.remove("error");
    form_error_text[0].classList.add("hide");
    error_circles[0].classList.add("hide");
  }

  if (lName === "") {
    lastName.classList.add("error");
    form_error_text[1].classList.remove("hide");
    error_circles[1].classList.remove("hide");
  } else {
    lastName.classList.remove("error");
    form_error_text[1].classList.add("hide");
    error_circles[1].classList.add("hide");
  }

  if (!validateEmail(eMail) || eMail === "") {
    email.classList.add("error");
    form_error_text[2].classList.remove("hide");
    error_circles[2].classList.remove("hide");
  } else {
    email.classList.remove("error");
    form_error_text[2].classList.add("hide");
    error_circles[2].classList.add("hide");
  }

  if (pwd === "") {
    password.classList.add("error");
    form_error_text[3].classList.remove("hide");
    error_circles[3].classList.remove("hide");
    revealPassword.classList.add("hide");
  } else {
    password.classList.remove("error");
    form_error_text[3].classList.add("hide");
    error_circles[3].classList.add("hide");
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

revealPassword.addEventListener("click", () => {
  if (password.type === "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
});
