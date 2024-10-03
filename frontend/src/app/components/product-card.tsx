import React from 'react';
import { ProductProps } from '../types';

interface ProductCardProps {
  product: ProductProps;
  onChange: (sku: string) => void;
}

export const ProductCard = ({ product, onChange }: ProductCardProps) => {
  const handleDelete = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="product">
      <input
        type="checkbox"
        name={product.sku}
        className="delete-checkbox"
        id={'product' + product.sku}
        value={product.sku}
        onChange={handleDelete}
      />
      <span>
        <span className="bold">SKU: {product.sku}</span>
      </span>
      <span>
        <span className="bold">Name: {product.name}</span>
      </span>
      <span>
        <span className="bold">Price: €{product.price}</span>
      </span>
      <span className="bold">
        {Object.entries(product.details).map(
          ([key, value]) => `${key}: ${value}`
        )}
      </span>
    </div>
  );
};
