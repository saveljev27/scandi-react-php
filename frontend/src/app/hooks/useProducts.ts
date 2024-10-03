import { useState, useEffect } from 'react';
import { deleteProducts, fetchProducts } from '../utils/apiService';
import { ProductProps } from '../types';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [checkedProducts, setCheckedProducts] = useState<string[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {}
    };

    getProducts();
  }, []);

  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await deleteProducts({ checkedProducts });
    } catch (error) {}
  };

  const handleCheckBoxChange = (sku: string) => {
    setCheckedProducts((prevCheckedProducts) =>
      prevCheckedProducts.includes(sku)
        ? prevCheckedProducts.filter((product) => product !== sku)
        : [...prevCheckedProducts, sku]
    );
  };

  return { products, handleCheckBoxChange, handleDelete };
};
