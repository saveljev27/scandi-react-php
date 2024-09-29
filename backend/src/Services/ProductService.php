<?php

namespace App\Services;

use App\Core\Database\DatabaseInterface;
use App\Models\ProductFactory;

class ProductService
{
    private DatabaseInterface $db;

    public function __construct(DatabaseInterface $db)
    {
        $this->db = $db;
    }

    public function showProducts(): array
    {
        $productsData = $this->db->getProducts('productsList');
        $products = [];

        foreach ($productsData as $data) {
            $product = ProductFactory::createProduct($data, $this->db);
            $products[] = $product;
        }


        return $products;
    }

    public function addProduct(array $data): void
    {
        $product = ProductFactory::createProduct($data, $this->db);
        $product->save();
    }

    public function deleteProducts(array $skus): void
    {
        $this->db->deleteProducts('productsList', ['sku' => $skus]);
    }

    public function isSkuExists(string $sku): bool
    {
        $products = $this->db->getProducts('productsList', ['sku' => $sku]);
        return !empty($products);
    }
}
