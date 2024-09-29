<?php

namespace App\Models;

use App\Core\Database\DatabaseInterface;

class ProductFactory
{
    public static function createProduct(array $data, DatabaseInterface $db): Product
    {
        switch ($data['product_type']) {
            case 'DVD':
                return new DVDProduct($db, $data['sku'], $data['name'], $data['price'], $data['size']);
            case 'Book':
                return new BookProduct($db, $data['sku'], $data['name'], $data['price'], $data['weight']);
            case 'Furniture':
                return new FurnitureProduct($db, $data['sku'], $data['name'], $data['price'], $data['height'], $data['width'], $data['length']);
            default:
                throw new \Exception("Unknown product type");
        }
    }
}
