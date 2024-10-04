<?php


ini_set('display_errors', 1);
error_reporting(E_ALL);

define('APP_PATH', __DIR__);
require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/config/bootstrap.php';


use App\Core\Router\Router;
use App\Core\Http\Request;
use App\Core\Http\Redirect;
use App\Core\Database\Database;
use App\Core\Config\Config;

$request = Request::createFromGlobals();
$redirect = new Redirect();
$config = new Config();
$database = new Database($config);

$router = new Router($request, $redirect, $database);

$router->dispatch($request->uri(), $request->method());
