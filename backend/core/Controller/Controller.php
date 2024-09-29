<?php

namespace App\Core\Controller;

use App\Core\Database\DatabaseInterface;
use App\Core\Http\RedirectInterface;
use App\Core\Http\RequestInterface;
use App\Core\Session\SessionInterface;
use App\Core\View\ViewInterface;
// Methods for working with various services
abstract class Controller
{
    private ViewInterface $view;
    private RequestInterface $request;
    private RedirectInterface $redirect;
    private SessionInterface $session;
    private DatabaseInterface $database;

    public function setView($view): void
    {
        $this->view = $view;
    }

    public function view(string $name, array $data = [], string $title = ''): void
    {
        $this->view->page($name, $data, $title);
    }

    public function setRequest(RequestInterface $request): void
    {
        $this->request = $request;
    }

    public function request(): RequestInterface
    {
        return $this->request;
    }

    public function setRedirect(RedirectInterface $redirect): void
    {
        $this->redirect = $redirect;
    }

    public function  redirect($url): RedirectInterface
    {
        return $this->redirect->to($url);
    }
    public function setSession(SessionInterface $session): void
    {
        $this->session = $session;
    }
    public function session(): SessionInterface
    {
        return $this->session;
    }
    public function setDatabase($database): void
    {
        $this->database = $database;
    }
    public function db(): DatabaseInterface
    {
        return $this->database;
    }
}
