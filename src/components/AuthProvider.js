import { createContext, useContext, useState } from 'react';
import loginApi from '../utils/loginApi';

const AuthContext = createContext({ user: null });

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => async (callback) => {
    await loginApi(username, password);
    setUser(username);
    callback();
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
