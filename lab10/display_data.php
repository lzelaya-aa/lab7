<?php
// Define the path to the non-public folder
$folder_path = 'C:/lab10data/';

// Define the filename to read
$filename = $folder_path . 'data.txt';

if (file_exists($filename)) {
    // Read the contents of the file into an array
    $file_contents = file($filename, FILE_IGNORE_NEW_LINES);
    
    if ($file_contents) {
        // Create an HTML table to display the data
        echo '<table>';
        foreach ($file_contents as $line) {
            list($first_name, $last_name) = explode(' ', $line);
            echo '<tr><td>' . htmlspecialchars($first_name) . '</td><td>' . htmlspecialchars($last_name) . '</td></tr>';
        }
        echo '</table>';
    } else {
        echo 'The file is empty.';
    }
} else {
    echo 'The file does not exist.';
}
?>
