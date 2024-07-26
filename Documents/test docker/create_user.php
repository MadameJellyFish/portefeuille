<?php
// create_user.php
require 'vendor/autoload.php';
require 'config/bootstrap.php';

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Dotenv\Dotenv;

$container = require 'config/bootstrap.php';
$entityManager = $container->get(EntityManagerInterface::class);
$passwordHasher = $container->get(UserPasswordHasherInterface::class);

$user = new User();
$user->setEmail('newuser@test.com');
$user->setRoles(['ROLE_USER']);

// Hashing the password
$hashedPassword = $passwordHasher->hashPassword($user, 'newpassword');
$user->setPassword($hashedPassword);

$entityManager->persist($user);
$entityManager->flush();

echo "User created with email newuser@test.com and password newpassword\n";
