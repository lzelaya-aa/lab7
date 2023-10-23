<?php
if (isset($_GET['fname']) && isset($_GET['lname'])) {
    $firstName = $_GET['fname'];
    $lastName = $_GET['lname'];

    $response = "Hello " . $firstName . " " . $lastName . "!";
    
    echo $response;
} else {
    // Handle the case where the parameters are missing
    echo "Error: Missing first name or last name.";
}
// echo "Hello ".$_GET[‘fname’]." ".$_GET[‘lname’]."!";
// echo "Hello ".$_GET[fname]." ".$_GET[lname]."!";
?>



