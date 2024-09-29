<?php

namespace App\Core\Validator;

use App\Services\ProductService;

class Validator implements ValidatorInterface
{
    private array $errors = [];
    private array $data;
    private ProductService $productService; // Зависимость от сервиса продукта

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function validate(array $data, array $rules): bool
    {
        $this->errors = [];
        $this->data = $data;

        foreach ($rules as $key => $rule) {
            $rules = $rule;

            foreach ($rules as $rule) {
                $rule = explode(':', $rule);

                $ruleName = $rule[0];
                $ruleValue = $rule[1] ?? null;

                $error = $this->validateRule($key, $ruleName, $ruleValue);

                if ($error) {
                    $this->errors[$key][] = $error;
                }
            }
        }

        return empty($this->errors);
    }

    public function errors(): array
    {
        return $this->errors;
    }

    public static function getRules(): array
    {
        return [
            'sku' => ['required', 'min:3', 'max:50', 'unique:sku'],
            'name' => ['required', 'min:3', 'max:50'],
            'price' => ['required'],
            'product_type' => ['typeswitcher'],
            'size' => ['size'],
            'weight' => ['weight'],
            'height' => ['height'],
            'width' => ['width'],
            'length' => ['length'],
        ];
    }

    private function validateRule(string $key, string $ruleName, string $ruleValue = null): string|false
    {
        if (!array_key_exists($key, $this->data)) {
            return false;
        }

        $value = $this->data[$key];
        $type = $this->data['product_type'] ?? null;

        switch ($ruleName) {
            case 'required':
                if (empty($value)) {
                    return "Field $key is required.";
                }
                break;
            case 'min':
                if (strlen($value) < $ruleValue) {
                    return "Field $key must be at least $ruleValue characters long.";
                }
                break;
            case 'max':
                if (strlen($value) > $ruleValue) {
                    return "Field $key must be at most $ruleValue characters long.";
                }
                break;
            case 'typeswitcher':
                if (!in_array($value, ['DVD', 'Book', 'Furniture'])) {
                    return "Field type must have a valid type (DVD, Book, Furniture).";
                }
                break;
            case 'size':
                $size = $this->data['size'] ?? null;
                if ($type === 'DVD' && empty($size)) {
                    return "Field Size (MB) is required.";
                }
                break;
            case 'weight':
                $weight = $this->data['weight'] ?? null;
                if ($type === 'Book' && empty($weight)) {
                    return "Field Weight (KG) is required.";
                }
                break;
            case 'height':
                $height = $this->data['height'] ?? null;
                if ($type === 'Furniture' && empty($height)) {
                    return "Field Dimension (H) is required.";
                }
                break;
            case 'width':
                $width = $this->data['width'] ?? null;
                if ($type === 'Furniture' && empty($width)) {
                    return "Field Dimension (W) is required.";
                }
                break;
            case 'length':
                $length = $this->data['length'] ?? null;
                if ($type === 'Furniture' && empty($length)) {
                    return "Field Dimension (L) is required.";
                }
                break;
            case 'unique':
                if ($this->productService->isSkuExists($value)) {
                    return "Field $key must be unique. The SKU already exists.";
                }
                break;
        }

        return false;
    }
}
