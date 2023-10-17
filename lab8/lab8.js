

function getDataFromForm() {
  // Obtain the first name and last name from the form elements
    var firstName = document.querySelector('input[name="fname"]').value;
    var lastName = document.querySelector('input[name="lname"]').value;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    runAjax(firstName, lastName);
}

//


