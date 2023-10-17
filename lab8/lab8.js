

function getDataFromForm() {
  alert("it worked!");
  // Obtain the first name and last name from the form elements
    var firstName = document.querySelector('input[name="fname"]').value;
    var lastName = document.querySelector('input[name="lname"]').value;
    runAjax(firstName, lastName);
}

// Function to make an AJAX request
function runAjax(fname, lname) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./ajax.php?fname=" + fname + "&lname=" + lname, true);

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              var response = xhr.responseText;
              if (response.indexOf("Error") === 0) {
                  // Handle the error case
                  var errorNumber = response.match(/\d+/);
                  alert("Error " + errorNumber + " Occurred");
              } else {
                  // Update the responseString paragraph with the response
                  document.getElementById("responseString").textContent = response;
              }
          } else {
              // Handle other HTTP status codes
              alert("Error " + xhr.status + " Occurred");
          }
      }
  };

  xhr.send();
}


