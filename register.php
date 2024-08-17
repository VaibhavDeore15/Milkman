<?php

// Check if the form is submitted
if (isset($_POST['submit'])) {
    $name=$_POST['username'];
    $email=$_POST['email'];
    $passwo=$_POST['password'];

    // Connect to your MySQL database
    $host = "localhost";
    $username = "root"; // Your MySQL username
    $password = ""; // Your MySQL password
    $dbname = "milkmandb"; // Your database name

    // Create connection
    $conn = mysqli_connect($host, $username, $password, $dbname);
    
   
   

    
     
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);}
    else{
        $sql = "INSERT INTO logindata (Username, Email, passw) VALUES('$name', '$email', '$passwo')";
     // Check connection
        mysqli_query($conn,$sql);
        include 'index.html';
    }

    // Close the database connection
    $conn->close();
}
?>
