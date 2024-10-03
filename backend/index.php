<?php

// Включаем отображение ошибок для отладки
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Определяем путь к основному каталогу приложения
define('APP_PATH', __DIR__);

// Подключаем автозагрузчик Composer
require __DIR__ . '/vendor/autoload.php';

// Подключаем файл с конфигурацией (если есть)
require __DIR__ . '/config/bootstrap.php';

// Импортируем нужные классы
use App\Core\Router\Router;
use App\Core\Http\Request;
use App\Core\Http\Redirect;
use App\Core\Database\Database;
use App\Core\Config\Config;

// Создаем необходимые объекты для Router
$request = Request::createFromGlobals();  // Создание запроса на основе глобальных переменных
$redirect = new Redirect();  // Обработка редиректов
$config = new Config();  // Загрузка конфигурации
$database = new Database($config);  // Подключение к базе данных

// Создаем объект Router с передачей необходимых зависимостей
$router = new Router($request, $redirect, $database);

// Запускаем маршрутизацию (URI и метод можно получить через Request)
$router->dispatch($request->uri(), $request->method());
