import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  admin: boolean;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(arg0: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStored = localStorage.getItem('@HappyAuth:user');

    if (userStored !== null) {
      const tokenStored = localStorage.getItem('@HappyAuth:token');
      api.defaults.headers['Authorization'] = `Bearer ${tokenStored}`;
      setUser(JSON.parse(userStored));
    }
    console.log(userStored);

    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(!!user);
    console.log(user === null);
    console.log(api.defaults.headers['Authorization']);
  }, [user]);

  async function signIn(credentials: Credentials) {
    const resData = await auth.signIn(credentials);

    if (!resData.error && resData.user && resData.token) {
      setUser(resData.user);

      api.defaults.headers['Authorization'] = `Bearer ${resData.token}`;

      localStorage.setItem('@HappyAuth:user', JSON.stringify(resData.user));
      localStorage.setItem('@HappyAuth:token', resData.token);
    } else {
      console.log(resData.error);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
