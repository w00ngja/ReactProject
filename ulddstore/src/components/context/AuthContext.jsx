import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      // console.log(user);
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

// 전역 상태를 사용할 수 있는 커스텀 훅 Export
export function useAuthContext() {
  return useContext(AuthContext);
}
