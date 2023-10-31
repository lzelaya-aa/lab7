<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    
    // Defines path to non-public folder
    $folder_path = '/home/site/lab10datafolder/';
    
    // Creates file
    $filename = $folder_path . 'data.txt';
    
    // Prepares the data to write to the file
    $data = $first_name . ' ' . $last_name . "\n";
    
    // Opens the file to add names
    $file = fopen($filename, 'a');
    
    if ($file) {
        // Writes to file
        fwrite($file, $data);
        fclose($file);
        echo "Data saved successfully.";
    } else {
        echo "Error: Unable to open the file for writing.";
    }
} else {
    echo "Invalid request.";
}
?>
