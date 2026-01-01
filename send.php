<?php
if($_POST){
    $to = "WEBSOFT.BEST@gmail.com";
    $subject = "Новая заявка с сайта";
    $message = "Имя: ".$_POST['name']."\nEmail: ".$_POST['email']."\nСообщение: ".$_POST['message'];
    $headers = "From: ".$_POST['email'];
    mail($to,$subject,$message,$headers);
    echo "Спасибо! Мы свяжемся с вами.";
}
?>
