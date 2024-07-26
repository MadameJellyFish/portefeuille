<?php

namespace App\Controller;

use App\Handler\UserHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class UserProfileController extends AbstractController
{
    #[Route('/api/profile', name: 'user_profile_get', methods: ['GET'], format: 'json')]
    public function getProfile(UserHandler $userHandler): JsonResponse
    {
        $user = $userHandler->getUser();
        if ($user === null) {
            return new JsonResponse(['message' => 'User is not authenticated'], JsonResponse::HTTP_UNAUTHORIZED);
        }

        return new JsonResponse($userHandler->getUserProfileInfos());
    }
}
