function validateForm() {
    //Receive the inputs
  const firstName = document.getElementById("firstname").value;
  const border = document.getElementById("firstname");
  const lastName = document.getElementById("lastname").value;
  const lastnameBorder = document.getElementById("lastname");
  const email = document.getElementById("email").value;
  const emailBorder = document.getElementById("email");
  const password = document.getElementById("password").value;
  const passwordBorder = document.getElementById("password");
  const firstMessage = document.getElementById("firstmessage");
  const lastMessage = document.getElementById("lastmessage");
  const emailMessage = document.getElementById("emailmessage");
  const passwordMessage = document.getElementById("passwordmessage");

  function validateFirst() {
  //validation for the First Name input
  //Name should not be empty.
    if (firstName == null || firstName == "") {
        document.getElementById("error").style.display = "inline";
        firstMessage.innerHTML = "<em>First name cannot be empty</em>";
        firstMessage.style.marginTop = "5px";
        border.style.borderColor = "#FF7979";
        document.getElementById("firstname").placeholder = "";
        return false;
    }
  }

  function validateLast() {
  //validation for the Last Name input
  //Last Name should not be empty.
    if (lastName == null || lastName == "") {
        document.getElementById("last-error").style.display = "inline";
        lastMessage.innerHTML = "<em>Last name cannot be empty</em>";
        lastMessage.style.marginTop = "5px";
        lastnameBorder.style.borderColor = "#FF7979";
        document.getElementById("lastname").placeholder = "";
        return false;
    }
  }

  function validateEmail() {
  //Validation for the Email input.
  //Email should not be empty.
    if (email == null || email == "") {
        document.getElementById("email-error").style.display = "inline";
        emailMessage.innerHTML = "<em>Email cannot be empty</em>";
        emailMessage.style.marginTop = "5px";
        emailBorder.style.borderColor = "#FF7979";
        document.getElementById("email").placeholder = "";
        return false;
    }
    //Email should not contain any special characters. (Email REQ#2)
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailFormat)) {
      return true;
    } else {
        document.getElementById("email-error").style.display= "inline";
        emailMessage.innerHTML = "<em>Looks like this is not an email</em>";
        emailMessage.style.marginTop = "5px";
        emailBorder.style.borderColor = "#FF7979";
        document.getElementById("email").placeholder = "";
        document.getElementById("email").style.color = "#FF7979";
        return false;
    }
  }

  function validatePassword() {
  //validation for the Password input
  //Password should not be empty.
  if (password == null || password == "") {
      document.getElementById("password-error").style.display = "inline";
      passwordMessage.innerHTML = "<em>Password cannot be empty</em>";
      passwordMessage.style.marginTop = "5px";
      passwordBorder.style.borderColor = "#FF7979";
      document.getElementById("password").placeholder = "";
      return false;
    }
  }

 // Calling the functions
    validateFirst();
    validateLast();
    validateEmail();
    validatePassword();
}
