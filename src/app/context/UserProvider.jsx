'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserData = () => useContext(UserContext);

const UserProvider = ({ children, initialUser, isAuthenticatd }) => {
  const [user, setUser] = useState(initialUser || null);

  const [isAuth, setIsAuth] = useState(isAuthenticatd || null);

  return (
    <UserContext.Provider value={{ user, isAuth, setIsAuth, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
