<?php

namespace App\Controller;

use App\Handler\UserHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class UserController extends AbstractController
{
    #[Route('/user', name: 'app_user', format: 'json')]
    public function index(UserHandler $userHandler): JsonResponse
    {
        $user = $userHandler->getUser();
        if ($user === null) {
            return new JsonResponse(['message' => 'User not authenticated'], JsonResponse::HTTP_UNAUTHORIZED);
        }

        if (!$this->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(['message'=> 'User does not have rights'], JsonResponse::HTTP_FORBIDDEN);
        }

        return new JsonResponse($userHandler->getAllUsers());
    }
}