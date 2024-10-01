<?php

use App\Services\ProductService;
use App\Core\Database\Database;
use App\Core\Config\Config;
use App\Core\Validator\Validator;
use App\Controllers\ApiProductController;

function createApiProductController(): ApiProductController
{
    $config = new Config();
    $db = new Database($config);
    $productService = new ProductService($db);
    $validator = new Validator($productService);
    return new ApiProductController($productService, $validator);
}
