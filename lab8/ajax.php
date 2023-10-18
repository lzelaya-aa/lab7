<?php
if (isset($_GET['fname']) && isset($_GET['lname'])) {
    $firstName = $_GET['fname'];
    $lastName = $_GET['lname'];

    // You can perform any processing you need here, for example:
    $response = "Hello " . $firstName . " " . $lastName . "!";
    
    echo $response;
} else {
    // Handle the case where the parameters are missing
    echo "Error: Missing first name or last name.";
}
?>
