<?php

namespace App\Models;

use App\Core\Database\DatabaseInterface;

abstract class Product
{
    protected string $sku;
    protected string $name;
    protected string $price;
    protected DatabaseInterface $db;

    public function __construct(string $sku, string $name, string $price, DatabaseInterface $db)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->db = $db;
    }


    public function getSku(): string
    {
        return $this->sku;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getPrice(): string
    {
        return $this->price;
    }

    public function save(): void
    {
        $data = [
            'sku' => $this->sku,
            'name' => $this->name,
            'price' => $this->price,
            'product_type' => $this->getProductType()
        ];

        $data = array_merge($data, $this->getSpecificData());

        $this->db->insertProducts('productsList', $data);
    }

    abstract protected function getProductType(): string;

    abstract protected function getSpecificData(): array;
}
