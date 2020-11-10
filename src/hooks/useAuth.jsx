/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, _setToken] = useState(() => {
    const tokenInLocalStorage = localStorage.getItem(`usertoken`);

    if (tokenInLocalStorage) return tokenInLocalStorage;
    return undefined;
  });

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext');
  }

  return context;
};
