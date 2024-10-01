<?php

namespace App\Core\Container;

use App\Core\Config\ConfigInterface;
use App\Core\Database\Database;
use App\Core\Database\DatabaseInterface;
use App\Core\Http\Redirect;
use App\Core\Http\RedirectInterface;
use App\Core\Http\Request;
use App\Core\Http\RequestInterface;
use App\Core\Router\Router;
use App\Core\Router\RouterInterface;
use App\Core\Validator\Validator;
use App\Core\Validator\ValidatorInterface;
use App\Core\View\View;
use App\Core\View\ViewInterface;
use App\Core\Session\Session;
use App\Core\Session\SessionInterface;
use App\Core\Config\Config;
use App\Services\ProductService;

// Instances of various services
class Container
{
    // Services
    public readonly RouterInterface $router;
    public readonly RequestInterface $request;
    public readonly ValidatorInterface $validator;
    public readonly RedirectInterface $redirect;
    public readonly ConfigInterface $config;
    public readonly DatabaseInterface $database;
    public readonly ProductService $productService;

    public function __construct()
    {
        $this->registerServices();
    }


    public function registerServices(): void
    {
        $this->config = new Config();
        $this->database = new Database($this->config);
        $this->productService = new ProductService($this->database);
        $this->validator = new Validator($this->productService);
        $this->request = Request::createFromGlobals();
        $this->request->setValidator($this->validator);
        $this->redirect = new Redirect();
        $this->router = new Router($this->request, $this->redirect, $this->database);
    }
}
