<?php

namespace App\Controllers;

use App\Core\Controller\Controller;
use App\Services\ProductService;

class HomeController extends Controller
{
    public ProductService $service;

    public function index(): void
    {

        $products = new ProductService($this->db());
    }
    public function destroy(): void
    {

        $this->db()->deleteProducts('productsList', [
            'sku' => $this->request()->input('skus')
        ]);

        $this->redirect('/');
    }
}
