<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    #[Route('/api/users', name: 'app_api')]
    public function index(): Response
    {
        return $this->json([
              'users' => [
                  0 => [
                      'name' => 'Karel',
                      'age' => 10,
                      'email' => 'karel@gmail.com'
                  ],
                  1 => [
                      'name' => 'Martin',
                      'age' => 10,
                      'email' => 'karel@gmail.com'
                  ],
                  2 => [
                    'name' => 'Johnny',
                    'age' => 10,
                    'email' => 'karel@gmail.com'
                  ]
              ]
          ]);
    }
}
