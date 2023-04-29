<?php

if($isset($_POST['submit']))
{
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $budget = $_POST['budget'];
    $message = $_POST['comment'];

    $mailTo = "support@multiverseapp.com";
    $headers =  "From: ".$mailFrom;

    mail($mailTo, $name, $message, $budget, $headers);

    header("Location: contact.html");
}

?>