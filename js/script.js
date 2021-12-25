
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
   const firstname = document.userForm.firstname.value;
   const lastname = document.userForm.lastname.value;
   const email = document.userForm.email.value; 
   const password = document.userForm.password.value;

  
    if (firstname == "") {
        printError("firstErr", "First name cannot be empty");
    } else {
        printError("firstErr", "");
        firstErr = false;
    }
    
    if (lastname == "") {
        printError("lastErr", "Last name cannot be empty");
    } else {
        printError("lastErr", "");
        lastErr = false;
    }

// Validate email address
if(email == "") {
    printError("emailErr", "Email cannot be empty");
} else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {
        printError("emailErr", "That doesn't look like an email address");
    } else{
        printError("emailErr", "");
        emailErr = false;
    }
}


    if (password == "") {
        printError("passwordErr", "Password name cannot be empty");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }


}
