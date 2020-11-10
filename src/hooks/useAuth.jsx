/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext, useCallback } from 'react';
import { login } from '../services/ClientServices';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const tokenInLocalStorage = localStorage.getItem(`usertoken`);

    if (tokenInLocalStorage) return tokenInLocalStorage;
    return undefined;
  });

  const signOut = useCallback(async () => {
    localStorage.removeItem('usertoken');
    setToken(undefined);
  }, []);

  const signIn = useCallback(async data => {
    const tokenToSave = await login(data);
    setToken(tokenToSave);
  }, []);

  return (
    <AuthContext.Provider value={{ token, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext');
  }

  return context;
};
