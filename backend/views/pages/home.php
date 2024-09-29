<?php

/**
 * @var \App\Core\View\ViewInterface $view
 * @var array<\App\Models\Product $products
 */

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php $view->component('header') ?>
    <title><?php echo $view->title() ?></title>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Product List</h1>
            <div class="header__buttons">
                <a href="/add-product"><button type="button" class="btn btn-secondary">ADD</button></a>
                <button id="delete-product-btn" type="button" class="btn btn-danger">MASS DELETE</button>
            </div>
        </div>
        <form method="post" id="products_form" action="/product/destroy">
            <div class="content product-list">
                <?php foreach ($products as $product) : ?>
                    <div class="product" id="product<?php echo $product->getSku() ?>" onclick="checkBox(<?php echo $product->getSku() ?>)">
                        <input type="checkbox" name="skus[]" class="delete-checkbox" id="btn-check<?php echo $product->getSku() ?>" value="<?php echo $product->getSku() ?>">
                        <span><span class="bold">SKU: </span><?php echo $product->getSku() ?></span>
                        <span><span class="bold">Name: </span><?php echo $product->getName() ?></span>
                        <span><span class="bold">Price: </span><?php echo $product->getPrice() ?>$</span>
                        <span class="bold"><?php echo $product->getDetails(); ?></span>
                    </div>
                <?php endforeach; ?>
            </div>

        </form>
        <?php $view->component('footer') ?>
    </div>