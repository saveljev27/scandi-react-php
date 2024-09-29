<?php

namespace App\Core\View;

use App\Core\Exceptions\ViewNotFound;
use App\Core\Session\SessionInterface;

class View implements ViewInterface
{
    private string $title;

    public function __construct(
        private SessionInterface $session
    ) {
    }
    public function page(string $name, array $data = [], string $title = ''): void
    {
        $this->title = $title;

        $viewPath = APP_PATH . "/views/pages/$name.php";

        if (!file_exists($viewPath)) {
            throw new ViewNotFound("View $name not found!");
        }

        extract(array_merge($this->defaultData(), $data));

        include_once $viewPath;
    }

    public function component(string $name): void
    {
        $componentPath = APP_PATH . "/views/components/$name.php";

        if (!file_exists($componentPath)) {
            echo "Component $name not found";
            return;
        }


        include_once $componentPath;
    }

    public function defaultData(): array
    {
        return [
            'view' => $this,
            'session' => $this->session,
        ];
    }

    public function title(): string
    {
        return $this->title;
    }
}
