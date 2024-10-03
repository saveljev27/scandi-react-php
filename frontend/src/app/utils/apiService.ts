import getConfig from 'next/config';
import { ProductFormProps } from '../types';

const { api } = getConfig();
const baseUrl = api?.baseUrl;

export const fetchProducts = async () => {
  const response = await fetch(`${baseUrl}/api/products`);
  return response.json();
};

export const deleteProducts = async ({
  checkedProducts,
}: {
  checkedProducts: string[];
}) => {
  const response = await fetch(`${baseUrl}/api/products`, {
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
  const response = await fetch(`${baseUrl}/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return response;
};
