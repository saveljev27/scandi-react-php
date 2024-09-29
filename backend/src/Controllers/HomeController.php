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


        $this->view('home', [
            'products' => $products->showProducts(),
        ], 'Product List');
    }
    public function destroy(): void
    {

        $this->db()->deleteProducts('productsList', [
            'sku' => $this->request()->input('skus')
        ]);

        $this->redirect('/');
    }
}
