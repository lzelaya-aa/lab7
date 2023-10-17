function getDataFromForm() {
  // Obtain the first name and last name from the form elements
  var firstName = document.getElementsByName("fname")[0].value;
  var lastName = document.getElementsByName("lname")[0].value;

  // Call runAjax and send the two strings as arguments
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Define the URL for the AJAX request
  var url = "./ajax.php";

  // Add the first name and last name as query parameters
  url += "?fname=" + fname + "&lname=" + lname;

  // Open a GET request to the specified URL
  xhr.open("GET", url, true);

  // Set up the event handler for when the request is complete
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Check if the response is a string
        if (typeof xhr.responseText === 'string') {
          // Change the text of the paragraph element with the id "responseString"
          document.getElementById("responseString").textContent = xhr.responseText;
        } else {
          // Handle the case where the response is not a string
          alert("Error " + xhr.status + " Occurred");
        }
      } else {
        // Handle errors, e.g., when the request fails
        alert("Error " + xhr.status + " Occurred");
      }
    }
  };

  // Send the AJAX request
  xhr.send();
}

