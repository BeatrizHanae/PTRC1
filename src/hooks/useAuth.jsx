/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext, useCallback } from 'react';
import { login } from '../services/ClientServices';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const tokenInLocalStorage = localStorage.getItem(`usertoken`);

    if (tokenInLocalStorage) return tokenInLocalStorage;
    return undefined;
  });

  const signOut = useCallback(async () => {
    localStorage.removeItem('usertoken');
    setData(undefined);
  }, []);

  const signIn = useCallback(async form => {
    const dataToSave = await login(form);
    setData(dataToSave);
  }, []);

  return (
    <AuthContext.Provider value={{ data, signOut, signIn }}>
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
