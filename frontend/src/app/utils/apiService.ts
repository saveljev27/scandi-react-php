import { ProductFormProps } from '../types';

export const fetchProducts = async () => {
  const response = await fetch(
    'http://scandiweb-project.lndo.site/api/products'
  );
  return response.json();
};

export const deleteProducts = async ({
  checkedProducts,
}: {
  checkedProducts: string[];
}) => {
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
  if (response.ok) {
    return window.location.reload();
  }
};

export const addProduct = async ({
  formData,
}: {
  formData: ProductFormProps;
}) => {
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

  return response;
};
