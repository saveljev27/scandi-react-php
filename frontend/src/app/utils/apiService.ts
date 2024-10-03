import { ProductFormProps } from '../types';

export const fetchProducts = async () => {
  const response = await fetch('https://scandiweb-test.000.pe/api/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};

export const deleteProducts = async ({
  checkedProducts,
}: {
  checkedProducts: string[];
}) => {
  const response = await fetch('https://scandiweb-test.000.pe/api/products', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ skus: checkedProducts }),
  });
  if (response.ok) {
    return window.location.reload();
  }
};

export const addProduct = async ({
  formData,
}: {
  formData: ProductFormProps;
}) => {
  const response = await fetch('https://scandiweb-test.000.pe/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return response;
};
