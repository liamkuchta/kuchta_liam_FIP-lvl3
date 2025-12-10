<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "liamkuchta@gmail.com";
    $subject = "New Message from Portfolio Contact Form";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email";

    
     mail($to, $subject, $body, $headers);

    echo "<h1>Thank you for messaging me, $name!</h1>";
    echo "<p>Your message has been sent successfully.</p>";

    exit;
}
?>
