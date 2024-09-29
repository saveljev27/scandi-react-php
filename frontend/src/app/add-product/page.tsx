'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ProductFormProps } from '@/types';
import { Alert, Input } from '@/components';

const ProductForm = () => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [formData, setFormData] = useState<ProductFormProps>({
    sku: '',
    name: '',
    price: '',
    product_type: '',
    size: '',
    weight: '',
    height: '',
    width: '',
    length: '',
  });
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'http://scandiweb-project.lndo.site/api/products',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setErrors(data.errors);
      } else {
        setFormData({
          sku: '',
          name: '',
          price: '',
          product_type: '',
          size: '',
          weight: '',
          height: '',
          width: '',
          length: '',
        });
        setErrors({});
        router.push('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form id="products-form" className="container" onSubmit={handleSubmit}>
      <div className="header">
        <h1>Product Add</h1>
        <div className="header__buttons">
          <button id="add-product" type="submit" className="btn btn-secondary">
            Save
          </button>
          <Link href="/">
            <button
              id="delete-product-btn"
              type="button"
              className="btn btn-danger"
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <div className="content form">
        <Input
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleInputChange}
          errors={errors}
        />
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          errors={errors}
        />

        <Input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          errors={errors}
        />

        <div className="mb-3">
          <select
            value={formData.product_type}
            id="productType"
            name="productType"
            className={
              'form-control' + (errors.product_type ? ' is-invalid' : '')
            }
            onChange={(e) =>
              setFormData({ ...formData, product_type: e.target.value })
            }
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
          <Alert errors={errors['product_type']} />
        </div>

        {formData.product_type === 'DVD' && (
          <Input
            name="size"
            placeholder="Size (MB)"
            value={formData.size || ''}
            onChange={handleInputChange}
            errors={errors}
          />
        )}

        {formData.product_type === 'Book' && (
          <Input
            name="weight"
            placeholder="Weight (KG)"
            value={formData.weight || ''}
            onChange={handleInputChange}
            errors={errors}
          />
        )}

        {formData.product_type === 'Furniture' && (
          <>
            <Input
              name="height"
              placeholder="Height (CM)"
              value={formData.height || ''}
              onChange={handleInputChange}
              errors={errors}
            />
            <Input
              name="width"
              placeholder="Width (CM)"
              value={formData.width || ''}
              onChange={handleInputChange}
              errors={errors}
            />
            <Input
              name="length"
              placeholder="Length (CM)"
              value={formData.length || ''}
              onChange={handleInputChange}
              errors={errors}
            />
          </>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
