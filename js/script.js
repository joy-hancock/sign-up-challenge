//Signup Form
const form = document.querySelector('.signup');

//The box where the first name is input.
const firstName = document.querySelector('.first-name');

//The box for the last name.
const lastName = document.querySelector('.last-name')

//The box for email.
const userEmail = document.querySelector('.email-address');

//The box for passwords.
const userPassword = document.querySelector('.password');

//User message.
const firstNameMessage = document.querySelector('.first-name-message');

//Last Name message.
const lastNameMessage = document.querySelector('.last-name-message');

//Email message.
const lastNameMessage = document.querySelector('.email-message');

//Password message.
const lastNameMessage = document.querySelector('.password-message');


//Submit button.
const inputButton = document.querySelector(".submit");



// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "First name cannot be empty";
const LAST_REQUIRED = "Last name cannot be empty";
const EMAIL_REQUIRED = "Email cannot be empty";
const EMAIL_INVALID = "Please enter a correct email address format";
const PASSWORD_REQUIRED = "Password cannot be empty";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let firstValid = hasValue(form.elements["first-name"], NAME_REQUIRED);
    let lastValid= hasValue(form.elements["last-name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    let passwordValid = hasValue(form.elements["password"], PASSWORD_REQUIRED);
	// if valid, submit the form.
	if (firstValid && lastValid && emailValid && passwordValid) {
		alert("Demo only. No form was posted.");
	}
});
