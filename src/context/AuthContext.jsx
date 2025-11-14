import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const login = (email, password) => {
    // Mock authentication
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const signup = (email, password, name) => {
    // Mock signup
    const mockUser = {
      id: Date.now().toString(),
      email,
      name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: Date.now().toString(),
      userId: user?.id,
      date: new Date().toISOString(),
      status: 'processing',
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const userOrders = orders.filter(order => order.userId === user?.id);

  return (
    <AuthContext.Provider
      value={{
        user,
        orders: userOrders,
        login,
        signup,
        logout,
        updateProfile,
        addOrder,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
