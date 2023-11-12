<?php
// Name of the cookie
$cookieName = "cs4413";

// Check if the cookie is already set
if (isset($_COOKIE[$cookieName])) {
    // Cookie is already set
    $cookieValue = $_COOKIE[$cookieName];
    echo "Cookie '$cookieName' is already set with the value: $cookieValue with expiration time of: $expirationTime";
} else {
    // Cookie is not set, so we'll set it
    $cookieValue = "WebTechCookie"; // Set your desired value here
    $expirationTime = time() + 3600;  // Cookie will expire in 1 hour (adjust as needed)

    // Set the cookie
    setcookie($cookieName, $cookieValue, $expirationTime, '/');

    echo "Cookie '$cookieName' is now set with the value: $cookieValue with expiration time of: $expirationTime";
}
?>

