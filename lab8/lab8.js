// Function to obtain the first name and last name from the form elements and make an AJAX call
function getDataFromForm() {
  const firstName = document.querySelector('input[name="fname"]').value;
  const lastName = document.querySelector('input[name="lname"]').value;

  runAjax(firstName, lastName);
}

// Function to make an AJAX request
function runAjax(fname, lname) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './ajax.php?fname=' + fname + '&lname=' + lname, true);

  xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
          const response = xhr.responseText;

          if (response.startsWith("Error")) {
              // If the response starts with "Error," show an alert with the message.
              alert(response);
          } else {
              // If it's a string response, update the paragraph element.
              document.getElementById("responseString").textContent = response;
          }
      } else {
          // Handle any AJAX errors here
          alert("Error " + xhr.status + " occurred.");
      }
  };

  xhr.onerror = function () {
      // Handle network errors
      alert("Network error occurred.");
  };

  xhr.send();
}




