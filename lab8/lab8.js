
function getDataFromForm() {
  alert("it worked!");
}

function getDataFromForm() {
  // Obtain the first name and last name from the form elements
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;

  // Call runAjax and send the two strings as arguments
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // Define the URL for the AJAX request
  const url = './ajax.php';

  // Define the request parameters and open the connection
  xhr.open('GET', `${url}?fname=${fname}&lname=${lname}`, true);

  // Set up a callback function to handle the response
  xhr.onload = function () {
      if (xhr.status === 200) {
          const response = xhr.responseText;

          // Check if the response is an error message
          if (response.startsWith('#')) {
              const errorCode = response.substring(1);
              alert(`Error ${errorCode} Occurred`);
          } else {
              // If the response is a string, change the text of the paragraph element
              const responseStringElement = document.getElementById('responseString');
              responseStringElement.textContent = response;
          }
      } else {
          alert('Error occurred while making the AJAX request.');
      }
  };

  // Send the AJAX request
  xhr.send();
}

