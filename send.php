<?php
if ($_POST) {

    $to = "WEBSOFT.BEST@gmail.com";
    $subject = "Новая заявка с сайта WebSoft.Best";

    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $messageText = strip_tags($_POST['message']);

    $message = "Имя: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Сообщение:\n$messageText";

    $headers = "From: Website <no-reply@yourdomain.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mail($to, $subject, $message, $headers);

    echo "Спасибо! Мы свяжемся с вами.";
}
?>
