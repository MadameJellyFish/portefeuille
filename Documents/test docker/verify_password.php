<?php
// verify_password.php

$hashedPassword = '$2y$10$E1NRBzYVJv0Ni/.F6ZwErOx0EcF.zWysWQhNHpE7JckBO72K5DR4m'; // el hash almacenado en la base de datos
$plainPassword = 'test'; // la contraseña que estás probando

if (password_verify($plainPassword, $hashedPassword)) {
    echo "Password is valid!";
} else {
    echo "Invalid password.";
}