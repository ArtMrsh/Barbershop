<?php

$recepient = "mirosh1308@gmail.com";
$sitename = "Барбершоп 'Бородинский'";

$date = trim($_POST["date"]);
$time = trim($_POST["time"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Дата: $date \nВремя: $time \nИмя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
