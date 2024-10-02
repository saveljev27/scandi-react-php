<?php

namespace App\Models;

use App\Core\Database\DatabaseInterface;

class BookProduct extends Product
{
    private float $weight;

    public function __construct(DatabaseInterface $db, string $sku, string $name, string $price, float $weight)
    {
        parent::__construct($sku, $name, $price, $db);
        $this->weight = $weight;
    }

    public function getWeight(): float
    {
        return $this->weight;
    }

    protected function getProductType(): string
    {
        return 'Book';
    }

    protected function getSpecificData(): array
    {
        return ['weight' => $this->weight];
    }

    public function getDetails(): array
    {
        return ['Weight' => $this->weight . ' KG'];
    }
}
