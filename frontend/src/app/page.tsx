'use client';

import Link from 'next/link';
import { useProducts } from './hooks/useProducts';
import { ProductCard } from './components';
import Main from './components/main';

export default function Home() {
  const { products, handleCheckBoxChange, handleDelete } = useProducts();

  return (
    <>
      <h1>Product List</h1>
      <Main />
    </>
  );
}
