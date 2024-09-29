<?php

namespace App\Core\Router;
// Handling HTTP requests and defining routes
class Route
{
    public function __construct(
        private string $uri,
        private string $method,
        private $action
    ) {}

    // Instance class Route GET
    public static function get(string $uri, $action): static
    {
        return new static($uri, 'GET', $action);
    }

    // Instance class Route POST
    public static function post(string $uri, $action): static
    {
        return new static($uri, 'POST', $action);
    }

    public static function delete(string $uri, $action): static
    {
        return new static($uri, 'DELETE', $action);
    }

    public static function options(string $uri, $action): static
    {
        return new static($uri, 'OPTIONS', $action);
    }

    public function getUri(): string
    {
        return $this->uri;
    }

    public function getAction()
    {
        return $this->action;
    }

    public function getMethod(): string
    {
        return $this->method;
    }
}
