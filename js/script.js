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
            document.getElementById("error").style.display= "inline";
            firstMessage.innerText = "First name cannot be empty";
            border.style.borderColor = "#FF7979";
            document.getElementById("firstname").placeholder = "";
            return false;
        }
    }

    //validation for the Last Name input

    function validateLast() {


        //Last Name should not be empty.
        if (lastName == null || lastName == "") {
            document.getElementById("last-error").style.display= "inline";
           lastMessage.innerHTML = "Last name cannot be empty";
            lastnameBorder.style.borderColor = "#FF7979";
            document.getElementById("lastname").placeholder = "";
            return false;
        }

    }

    //Validation for the Email input.

    function validateEmail() {
        //Email should not be empty.
        if (email == null || email == "") {
            document.getElementById("email-error").style.display= "inline";
            emailMessage.innerHTML = "Email cannot be empty";
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
            emailMessage.innerHTML = "Looks like this is not an email";
            emailBorder.style.borderColor = "#FF7979";
            document.getElementById("email").
                placeholder = "";



            return false;
        }



    }
 //validation for the Password input

function validatePassword() {

    //Password should not be empty.
    if (password == null || password == "") {
        document.getElementById("password-error").style.display= "inline";
        passwordMessage.innerHTML = "Password name cannot be empty";
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
