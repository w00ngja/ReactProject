import { useAuthContext } from '../components/context/AuthContext';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCart, removeFromCart, addOrUpdateToCart } from '../api/firebase';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  // 사용자마다의 캐싱, 사용자가 없는 경우 쿼리 요청이 이루어지지 않음
  const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), { enabled: !!uid });

  const addOrUpdateItem = useMutation((product) => addOrUpdateToCart(product, uid), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
