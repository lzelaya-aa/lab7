// lab8.js

function getDataFromForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
  const xhr = new XMLHttpRequest();
  const url = "./ajax.php";
  const params = "firstName=" + fname + "&lastName=" + lname;

  xhr.open("GET", url + "?" + params, true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          const response = xhr.responseText;
          if (response.charAt(0) === '#') {
              // Error occurred
              const errorNumber = response.substring(1);
              alert("Error " + errorNumber + " Occurred");
          } else {
              // Set response text to the paragraph element
              document.getElementById("responseString").textContent = response;
          }
      }
  };

  xhr.send();
}
