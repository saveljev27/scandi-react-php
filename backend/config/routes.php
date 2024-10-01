<?php

require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/bootstrap.php';

use App\Core\Router\Route;
use App\Core\Config\Config;

$config = new Config();

return [
    Route::options('/api/products', function () {
        setCorsHeaders();
        exit(0);
    }),

    Route::get('/api/products', function () use ($config) {
        setCorsHeaders();
        $controller = createApiProductController($config);
        return $controller->getProducts();
    }),

    Route::post('/api/products', function () use ($config) {
        setCorsHeaders();
        $controller = createApiProductController($config);
        return $controller->addProduct();
    }),

    Route::delete('/api/products', function () use ($config) {
        setCorsHeaders();
        $controller = createApiProductController($config);
        return $controller->deleteProducts();
    }),
];
