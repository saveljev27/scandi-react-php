<?php

namespace App\Core\Validator;

interface ValidatorInterface
{
    public function validate(array $data, array $rules): bool;

    public function errors(): array;

    public static function getRules(): array;
}
