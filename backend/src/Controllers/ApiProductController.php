<?php

namespace App\Controllers;

use App\Core\Controller\Controller;
use App\Services\ProductService;
use App\Core\Validator\ValidatorInterface;

class ApiProductController extends Controller
{
    private ProductService $productService;
    private ValidatorInterface $validator;

    public function __construct(ProductService $productService, ValidatorInterface $validator)
    {
        $this->productService = $productService;
        $this->validator = $validator;
    }


    public function getProducts(): void
    {

        $products = $this->productService->showProducts();


        $response = array_map(function ($product) {

            return [
                'sku' => $product->getSku(),
                'name' => $product->getName(),
                'price' => $product->getPrice(),
                'details' => $product->getDetails(),
            ];
        }, $products);


        header('Content-Type: application/json');
        echo json_encode($response);
    }


    public function addProduct(): void
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $rules = $this->validator->getRules();

        if (!$this->validator->validate($data, $rules)) {
            header('Content-Type: application/json', true, 422);
            echo json_encode([
                'success' => false,
                'errors' => $this->validator->errors(),
            ]);

            return;
        }
        try {
            $this->productService->addProduct($data);
            header('Content-Type: application/json');
            echo json_encode(['success' => true, 'message' => 'Product added successfully']);
        } catch (\Exception $e) {
            header('Content-Type: application/json', true, 500);
            echo json_encode(['success' => false, 'message' => 'Failed to add product']);
        }
    }


    public function deleteProducts(): void
    {
        $data = json_decode(file_get_contents('php://input'), true);
        file_put_contents('log.txt', "Received deleted data: " . print_r($data, true) . PHP_EOL, FILE_APPEND);

        $this->productService->deleteProducts($data['skus']);
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
    }
}
