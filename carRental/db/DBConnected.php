<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbName = "car_reservation_db";

    $conn = new mysqli($servername, $username, $password, $dbName);

    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

?>