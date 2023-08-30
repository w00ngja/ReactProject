import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  // 로그인한 사용자가 있는지 확인
  // 해당 사용자의 어드민 여부 확인
  // requireAdmin이 true인 경우, 로그인과 어드민 모두 만족
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
