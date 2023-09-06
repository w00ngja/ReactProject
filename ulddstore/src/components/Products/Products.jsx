import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useProducts from '../../hooks/useProducts';

export default function Products() {
  // 리팩토링한 Query 커스텀훅을 통해 제품 정보를 가져옴
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>로딩 중..</p>}
      {error && <p>에러 발생!</p>}

      <ul className="grid grid-cols-1 md:grid-cols-3 md:px-40 lg-grid-cols-4 gap-5 px-10 py-4">
        {products && products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </ul>
    </>
  );
}
