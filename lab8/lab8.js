function getDataFromForm() {
  // Obtain the first name and last name from the form elements
  const fname = document.querySelector('input[name="fname"]').value;
  const lname = document.querySelector('input[name="lname"]').value;

  // Call runAjax and send the two strings as arguments
  runAjax(fname, lname);
}

function runAjax(fname, lname) {
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Define the AJAX request
  xhr.open("GET", "test.php?fname=" + fname + "&lname=" + lname, true);

  // Set up a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // If the response is a string, change the text of the paragraph element
      document.getElementById("responseString").textContent = xhr.responseText;
    } else {
      // If there is an error, alert the user
      alert("Error " + xhr.status + " Occurred");
    }
  };

  // Send the AJAX request
  xhr.send();
}




