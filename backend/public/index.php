<?php

define('APP_PATH', dirname(__DIR__));

require_once APP_PATH . '/vendor/autoload.php';

use App\Core\App;

// Запускает приложение из App

$app = new App();

$app->run();
