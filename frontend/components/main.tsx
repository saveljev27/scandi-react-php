'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { ProductCard } from '@/components';
import { ProductProps } from '@/types';

export const Main = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [checkedProducts, setCheckedProducts] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'http://scandiweb-project.lndo.site/api/products'
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {}
    };

    fetchProducts();
  }, []);

  const deleteProducts = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      const response = await fetch(
        'http://scandiweb-project.lndo.site/api/products',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ skus: checkedProducts }),
        }
      );
    } catch (error) {}
  };

  const handleCheckBoxChange = (sku: string) => {
    setCheckedProducts((prevCheckedProducts) => {
      if (prevCheckedProducts.includes(sku)) {
        return prevCheckedProducts.filter((product) => product !== sku);
      } else {
        return [...prevCheckedProducts, sku];
      }
    });
  };

  return (
    <form id="products-form" className="container" onSubmit={deleteProducts}>
      <div className="header">
        <h1>Product List</h1>
        <div className="header__buttons">
          <Link href="/add-product">
            <button type="button" className="btn btn-secondary">
              ADD
            </button>
          </Link>
          <button
            id="delete-product-btn"
            type="submit"
            className="btn btn-danger"
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <div className="content product-list">
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            product={product}
            onChange={handleCheckBoxChange}
          />
        ))}
      </div>
    </form>
  );
};
