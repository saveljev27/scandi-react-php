<?php

namespace App\Models;

use App\Core\Database\DatabaseInterface;

class DVDProduct extends Product
{
    private int $size;

    public function __construct(DatabaseInterface $db, string $sku, string $name, string $price, int $size)
    {
        parent::__construct($sku, $name, $price, $db);
        $this->size = $size;
    }

    protected function getProductType(): string
    {
        return 'DVD';
    }

    protected function getSpecificData(): array
    {
        return ['size' => $this->size];
    }

    public function getDetails(): array
    {
        return ['Size' => $this->size . ' MB'];
    }
}
