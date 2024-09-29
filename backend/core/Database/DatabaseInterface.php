<?php

namespace App\Core\Database;

interface DatabaseInterface
{
    public function insertProducts(string $table, array $data): int|false;
    public function getProducts(string $table, array $conditions = []): array;
    public function deleteProducts(string $table, array $conditions = []): void;
}
