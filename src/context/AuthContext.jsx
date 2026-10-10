import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('ew_admin_auth') === 'true';
  });

  const login = (email, password) => {
    // For prototype purposes, accept any credentials or a specific hardcoded one.
    // Let's accept admin/admin for simplicity, or any non-empty.
    if (email === 'admin@eastwest.com' && password === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('ew_admin_auth', 'true');
      return true;
    } else if (email && password) {
      // Accept anything for demo
      setIsAuthenticated(true);
      localStorage.setItem('ew_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('ew_admin_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
