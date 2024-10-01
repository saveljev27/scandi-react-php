<?php

function setCorsHeaders(string $methods = 'GET, POST, DELETE, OPTIONS'): void
{
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: $methods");
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}
