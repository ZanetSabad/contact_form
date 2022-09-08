<?php

//načtení polí z formuláře
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$web = $_POST['web'];
$text = $_POST['text'];


if(!empty($email) && !empty($text)){  // pokud email a zpráva nebudou prázdné
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //jestli uživatel odešle správně mail
        $receiver = "zaneta.sabadkova@gmail.com"; //mail kam se odesílá
        $subject = "From: $name <$email>"; //subjekt z mailu
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWeb:        $web\n\nText: $text\n\nRegards,\n$name";
        $sender = "From: $email"; 

        if(mail($receiver, $subject, $body, $sender)){ //vnitřní php funkce na posílání mailu
            echo "Vaše zpráva byla odeslána";
        }else{
            echo "Pardon, email se nepodařilo odeslat";
        }
    }else{
        echo "Mailová adresa je zapsána ve špatném tvaru";
    }        
}else{
    echo "Je potřeba vypnit zprávu a mail";
}

?>