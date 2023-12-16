<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings   
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'habuzovs@gmail.com';
    $mail->Password = 'asjk cfhd feki yjlo';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('habuzovs@ukr.net');

    // Установите тему и тело письма
    $mail->isHTML(true);
    $mail->Subject = 'Сообщение с формы обратной связи';
    $mail->Body = "От: $name <br> Email: $email <br> Название компании: $company_name <br> Телефон: $phone <br> Сообщение: $message";

    // Отправьте письмо
    $mail->send();
    echo 'Сообщение успешно отправлено!';
} catch (Exception $e) {
    echo 'Ошибка при отправке сообщения. Mailer Error: ' . $mail->ErrorInfo;
}
?>

