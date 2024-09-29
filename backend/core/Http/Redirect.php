<?php

namespace App\Core\Http;


class Redirect implements RedirectInterface
{
    public function to($url)
    {
        header("Location: $url");
        exit;
    }
}
