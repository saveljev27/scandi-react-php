<?php

namespace App\Models;

use App\Core\Database\DatabaseInterface;

class FurnitureProduct extends Product
{
    private int $height;
    private int $width;
    private int $length;

    public function __construct(DatabaseInterface $db, string $sku, string $name, string $price, int $height, int $width, int $length)
    {
        parent::__construct($sku, $name, $price, $db);
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }

    protected function getProductType(): string
    {
        return 'Furniture';
    }

    protected function getSpecificData(): array
    {
        return [
            'height' => $this->height,
            'width' => $this->width,
            'length' => $this->length,
        ];
    }

    public function getDetails(): array
    {
        return [
            'Dimensions' => $this->height . 'x' . $this->width . 'x' . $this->length,

        ];
    }
}
