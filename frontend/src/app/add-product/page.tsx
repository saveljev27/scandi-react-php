'use client';

import Link from 'next/link';
import { useAddProduct } from '../hooks/useAddProduct';
import { Alert, Input } from '../components';

const ProductForm = () => {
  const { errors, formData, setFormData, handleSubmit, handleInputChange } =
    useAddProduct();

  return (
    <form id="product_form" className="container" onSubmit={handleSubmit}>
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
          <>
            <p className="fw-light mb-0">Please, provide DVD size in MB</p>
            <Input
              name="size"
              type="number"
              placeholder="Size (MB)"
              value={formData.size || ''}
              onChange={handleInputChange}
              errors={errors}
            />
          </>
        )}
        {formData.product_type === 'Book' && (
          <>
            <p className="fw-light mb-0">Please, provide Book weight in KG</p>
            <Input
              name="weight"
              type="number"
              placeholder="Weight (KG)"
              value={formData.weight || ''}
              onChange={handleInputChange}
              errors={errors}
            />
          </>
        )}
        {formData.product_type === 'Furniture' && (
          <>
            <p className="fw-light mb-0">
              Please, provide dimensions in (H x W x L) format
            </p>
            <Input
              name="height"
              type="number"
              placeholder="Height (CM)"
              value={formData.height || ''}
              onChange={handleInputChange}
              errors={errors}
            />
            <Input
              name="width"
              type="number"
              placeholder="Width (CM)"
              value={formData.width || ''}
              onChange={handleInputChange}
              errors={errors}
            />
            <Input
              name="length"
              type="number"
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
