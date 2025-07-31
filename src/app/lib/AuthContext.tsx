
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificamos si hay una sesión activa al cargar la aplicación
    const storedUser = sessionStorage.getItem('username');
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string) => {
    sessionStorage.setItem('username', username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('username');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}