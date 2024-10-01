<?php

namespace App\Core\Controller;

use App\Core\Database\DatabaseInterface;
use App\Core\Http\RedirectInterface;
use App\Core\Http\RequestInterface;

abstract class Controller
{
    private RequestInterface $request;
    private RedirectInterface $redirect;
    private DatabaseInterface $database;

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

    public function setDatabase($database): void
    {
        $this->database = $database;
    }

    public function db(): DatabaseInterface
    {
        return $this->database;
    }
}
