<?php

// Check if the form is submitted
if (isset($_POST['submit'])) {
    // Retrieve form data
    $name = $_POST['username'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    // Database connection 
    $host = "localhost";
    $username = "root"; // 
    $password = ""; //
    $dbname = "milkmandb"; 

    // Create connection
    $conn = mysqli_connect($host, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // SQL query to insert data into the database
    $sql = "INSERT INTO order_data (customer_name, phone_num, Addresss) VALUES ('$name', '$phone', '$address')";

    // Execute the SQL query
    if (mysqli_query($conn, $sql)) {
        // Data inserted successfully
        echo "Data inserted successfully!";
        include 'index.html'; // Redirect or include success page
    } else {
        // Error executing SQL query
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
}
?>
