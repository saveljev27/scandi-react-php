'use client';

import { ProductCard } from '@/components/';
import { useProducts } from '@/hooks/useProducts';
import Link from 'next/link';

export default function Home() {
  const { products, handleCheckBoxChange, handleDelete } = useProducts();

  return (
    <form id="products-form" className="container" onSubmit={handleDelete}>
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
}
