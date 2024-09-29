<?php

use App\Controllers\ApiProductController;
use App\Controllers\AddProductController;
use App\Controllers\HomeController;
use App\Core\Router\Route;
use App\Services\ProductService;
use App\Core\Database\Database;
use App\Core\Config\Config;
use App\Core\Validator\Validator;

$config = new Config(); // Создаем объект Config

// Функция для создания контроллера API-продуктов
function createApiProductController(Config $config): ApiProductController
{
    $db = new Database($config); // Создаем объект базы данных
    $productService = new ProductService($db);
    $validator = new Validator($productService); // Передаем объект валидатора и его зависимости
    return new ApiProductController($productService, $validator); // Возвращаем контроллер
}

// Функция для установки заголовков CORS
function setCorsHeaders(string $methods = 'GET, POST, DELETE, OPTIONS'): void
{
    header('Access-Control-Allow-Origin: *'); // Разрешаем запросы с любого источника
    header("Access-Control-Allow-Methods: $methods");
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}

// Возвращаем список маршрутов
return [
    Route::get('/', [HomeController::class, 'index']),
    Route::post('/product/destroy', [HomeController::class, 'destroy']),
    Route::get('/add-product', [AddProductController::class, 'create']),
    Route::post('/add-product', [AddProductController::class, 'store']),

    // Обработка preflight запросов для всех API
    Route::options('/api/products', function () {
        setCorsHeaders();
        exit(0); // Прерываем выполнение, так как OPTIONS не должен обрабатывать дальше
    }),

    // Маршрут для GET-запроса (получение списка продуктов)
    Route::get('/api/products', function () use ($config) {
        setCorsHeaders();
        $controller = createApiProductController($config);
        return $controller->getProducts();
    }),

    // Маршрут для POST-запроса (добавление нового продукта)
    Route::post('/api/products', function () use ($config) {
        setCorsHeaders();
        $controller = createApiProductController($config);
        return $controller->addProduct();
    }),

    // Маршрут для DELETE-запроса (удаление продуктов)
    Route::delete('/api/products', function () use ($config) {
        setCorsHeaders();
        $controller = createApiProductController($config);
        return $controller->deleteProducts();
    }),
];
