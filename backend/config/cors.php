<?php

function setCorsHeaders(string $methods = 'GET, POST, DELETE, OPTIONS'): void
{
    header("Access-Control-Allow-Origin: https://scandi-react-php.vercel.app");
    header("Access-Control-Allow-Methods: $methods");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");
}
