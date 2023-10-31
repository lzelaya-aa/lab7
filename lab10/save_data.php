<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    
    // Define the path to the non-public folder
    $folder_path = '/home/site/lab10datafolder/';
    
    // Create a unique filename, for example, using the current timestamp
    $filename = $folder_path . 'data.txt';
    
    // Prepare the data to write to the file
    $data = $first_name . ' ' . $last_name . "\n";
    
    // Open the file for appending
    $file = fopen($filename, 'a');
    
    if ($file) {
        // Write the data to the file
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
