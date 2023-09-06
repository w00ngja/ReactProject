// 제품들을 읽어오고, 갱신하는 로직이 해당 훅을 통해 전부 이루어짐
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts as fetchProducts, addNewProduct } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(['products'], fetchProducts, { staleTime: 1000 * 60 });

  // 변경할 인자를 전달, 특정 키를 가진 요청을 invalidate 처리
  // Mutataion을 통해 캐싱되어 있는 데이터에 변경점이 생기면 즉시 갱신
  const addProduct = useMutation(({ product, url }) => addNewProduct(product, url), {
    onSuccess: () => queryClient.invalidateQueries(['products']),
  });

  return { productsQuery, addProduct };
}
