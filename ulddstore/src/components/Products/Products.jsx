import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../../api/firebase';
import ProductCard from '../ProductCard/ProductCard';

export default function Products() {
  const { isLoading, error, data: products } = useQuery(['products'], getProducts);
  return (
    <>
      {isLoading && <p>로딩 중..</p>}
      {error && <p>에러 발생!</p>}

      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-5 px-40 py-4">
        {products && products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </ul>
    </>
  );
}
