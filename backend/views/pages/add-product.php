<?php

/**
 * @var \App\Core\View\ViewInterface $view
 * @var \App\Core\Session\Session $session
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
        <form id="product_form" class="container" action="" method="post">
            <div class="header">
                <h1>Product Add</h1>
                <div class="header__buttons">
                    <button id="add-product" type="submit" class="btn btn-secondary">Save</button>
                    <a href="/"><button id="delete-product-btn" type="button" class="btn btn-danger">Cancel</button></a>
                </div>
            </div>

            <div class="content form">
                <div class="mb-3">
                    <input id="sku" name="sku" type="text" class="form-control <?php echo $session->has('sku') ? 'is-invalid' : '' ?>" placeholder="SKU" />
                    <div id="skuError" class="error"></div>
                    <?php if ($session->has('sku')) { ?>
                        <div id="skuError" class="error" role="alert">
                            <?php echo $session->getFlash('sku')[0] ?>
                        </div>
                    <?php } ?>
                </div>
                <div class="mb-3">
                    <input id="name" name="name" type="text" class="form-control <?php echo $session->has('name') ? 'is-invalid' : '' ?>" placeholder="Product name" />
                    <div id="nameError" class="error"></div>
                    <?php if ($session->has('name')) { ?>
                        <div id="nameError" class="error" role="alert">
                            <?php echo $session->getFlash('name')[0] ?>
                        </div>
                    <?php } ?>
                </div>
                <div class="mb-3">
                    <input id="price" name="price" type="text" class="form-control <?php echo $session->has('price') ? 'is-invalid' : '' ?>" placeholder="Price" />
                    <div id="priceError" class="error"></div>
                    <?php if ($session->has('price')) { ?>
                        <div id="priceError" class="error" role="alert">
                            <?php echo $session->getFlash('price')[0] ?>
                        </div>
                    <?php } ?>
                </div>
                <div class="mb-3">
                    <select id="productType" name="product_type" class="form-control <?php echo $session->has('product_type') ? 'is-invalid' : '' ?>">
                        <option value="" selected>Select product type</option>
                        <option value="DVD" id="DVD">DVD</option>
                        <option value="Book" id="Book">Book</option>
                        <option value="Furniture" id="Furniture">Furniture</option>
                    </select>
                    <div id="typeError" class="error"></div>
                    <?php if ($session->has('product_type')) { ?>
                        <div id="typeError" class="error" role="alert">
                            <?php echo $session->getFlash('product_type')[0] ?>
                        </div>
                    <?php } ?>
                </div>
                <div class="col-md-12">
                    <h2 class="d-none option" id="optionTitle"></h2>
                    <div class="d-none dvd mb-3" id="dvd-inputs">
                        <input id="size" name="size" type="number" class="form-control <?php echo $session->has('size') ? 'is-invalid' : '' ?>" placeholder="Size (MB)" />
                        <p class="fw-light">Please provide DVD size in mega bytes</p>
                        <div id="sizeError" class="error"></div>
                    </div>
                    <div class="book d-none mb-3" id="book-inputs">
                        <input id="weight" name="weight" type="number" class="form-control <?php echo $session->has('weight') ? 'is-invalid' : '' ?>" placeholder="Weight KG" />
                        <p class="fw-light">Please, provide Book weight in kilograms</p>
                        <div id="weightError" class="error"></div>
                    </div>
                    <div class="furniture d-none mb-3" id="furniture-inputs">
                        <input class="form-control mb-3 <?php echo $session->has('height') ? 'is-invalid' : '' ?>" type="number" id="height" name="height" placeholder="Dimension (H)">
                        <input class="form-control mb-3 <?php echo $session->has('width') ? 'is-invalid' : '' ?>" type="number" id="width" name="width" placeholder="Dimension (W)">
                        <input class="form-control mb-3 <?php echo $session->has('length') ? 'is-invalid' : '' ?>" type="number" id="length" name="length" placeholder="Dimension (L)">
                        <p class="fw-light">Please, provide dimensions in (H x W x L) format</p>
                        <div id="heightError" class="error"></div>
                        <div id="widthError" class="error"></div>
                        <div id="lengthError" class="error"></div>
                    </div>
                    <?php if ($session->has('size')) { ?>
                        <div id="size" class="error" role="alert">
                            <?php echo $session->getFlash('size')[0] ?>
                        </div>
                    <?php } ?>
                    <?php if ($session->has('weight')) { ?>
                        <div id="weight" class="error" role="alert">
                            <?php echo $session->getFlash('weight')[0] ?>
                        </div>
                    <?php } ?>
                    <?php if ($session->has('height')) { ?>
                        <div id="height" class="error" role="alert">
                            <?php echo $session->getFlash('height')[0] ?>
                        </div>
                    <?php } ?>
                    <?php if ($session->has('width')) { ?>
                        <div id="width" class="error" role="alert">
                            <?php echo $session->getFlash('width')[0] ?>
                        </div>
                    <?php } ?>
                    <?php if ($session->has('length')) { ?>
                        <div id="length" class="error" role="alert">
                            <?php echo $session->getFlash('length')[0] ?>
                        </div>
                    <?php } ?>

                </div>

            </div>
        </form>
        <?php $view->component('footer') ?>
    </div>