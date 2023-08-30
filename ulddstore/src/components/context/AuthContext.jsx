import { createContext, useContext } from 'react';

const AuthContext = createContext();

// Context Provider
export function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

// 전역 상태를 사용할 수 있는 커스텀 훅 Export
export function useAuthContext() {
  return useContext(AuthContext);
}
