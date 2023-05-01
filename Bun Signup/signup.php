<?php
    if (isset($_post['submit'])) {
        //This page is accessed by submitting the form
        echo "error; you need to submit the form!";
    }

    // Collects Guardian Name & Email
    $guardian_name = $post['guardianName'];
    $guardian_email = $_post['email'];
    
    // Collects user's message to email
    $message = $_post['message'];

    // Validates Guardian's name & email
    if(empty($guardian_name)||empty($guardian_email)) {
        echo "The guardian's name & email need to be filled out!";
        exit;
    }

    $email_from = 'aunna.castaneda@oneidaihla.org';
    $email_subject = "New Bun-Bun Sign-up Submission";
    $email_body = "You received a new sign-up submission from $guardian_name. \n".
        "email address: $guardian_email\n".
        "Here is their message: \n $message".

    $to = "aunna.castaneda@oneidaihla.org";
    $email_header = "From: $email_from \r\n";

    // Sends the email
    mail($to,$email_subject,$email_body,$email_header);
?>